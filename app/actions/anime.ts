"use server";

// Cache simples para rate limiting
const requestQueue: Array<() => Promise<void>> = [];
let isProcessing = false;

async function processQueue() {
  if (isProcessing || requestQueue.length === 0) return;
  
  isProcessing = true;
  await requestQueue.shift()!();
  isProcessing = false;
  
  // Delay entre requests (1.5 segundos para segurança)
  await new Promise(resolve => setTimeout(resolve, 1500));
  processQueue();
}

// Server Action para busca de animes
export async function searchAnimeAction(query: string, page: number = 1) {
  return new Promise<any>((resolve, reject) => {
    requestQueue.push(async () => {
      try {
        console.log(`[SERVER] Buscando: "${query}" - Página ${page}`);
        
        const url = query.trim()
          ? `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&page=${page}&limit=24`
          : `https://api.jikan.moe/v4/seasons/now?page=${page}&limit=24`;
        
        const response = await fetch(url, {
          headers: { 'Accept': 'application/json' }
        });
        
        if (!response.ok) {
          if (response.status === 429) {
            console.warn('[SERVER] Rate limit atingido, aguardando...');
            await new Promise(resolve => setTimeout(resolve, 3000));
            // Tenta mais uma vez
            const retryResponse = await fetch(url);
            if (!retryResponse.ok) {
              throw new Error(`API error: ${retryResponse.status}`);
            }
            const retryData = await retryResponse.json();
            resolve(retryData);
            return;
          }
          throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(`[SERVER] ${data.data?.length || 0} resultados para "${query}"`);
        resolve(data);
      } catch (error) {
        console.error('[SERVER] Erro na busca:', error);
        reject(error);
      }
    });
    
    processQueue();
  });
}

// Server Action para trending animes
export async function getTrendingAnimesAction(limit: number = 6) {
  return new Promise<any>((resolve, reject) => {
    requestQueue.push(async () => {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/top/anime?limit=${limit}`
        );
        
        if (!response.ok) throw new Error(`API error: ${response.status}`);
        
        const data = await response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
    
    processQueue();
  });
}

// Server Action para detalhes do anime
export async function getCurrentSeasonAction(limit: number = 12) {
  return new Promise<any>((resolve, reject) => {
    requestQueue.push(async () => {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/seasons/now?limit=${limit}`
        );
        
        if (!response.ok) throw new Error(`API error: ${response.status}`);
        
        const data = await response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
    
    processQueue();
  });
}