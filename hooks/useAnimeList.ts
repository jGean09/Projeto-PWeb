import { useEffect, useState, useCallback } from "react";

export function useAnimeList() {
  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mode, setMode] = useState<'season' | 'top' | 'upcoming'>('season');

  const fetchData = useCallback(async (currentPage: number, currentMode: 'season' | 'top' | 'upcoming', currentSearchTerm?: string, retryCount = 0) => {
    if (loading) return null;
    
    setLoading(true);
    
    let url: string;
    
    if (currentSearchTerm) {
      url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(currentSearchTerm)}&page=${currentPage}`;
    } else {
      switch(currentMode) {
        case 'top':
          url = `https://api.jikan.moe/v4/top/anime?page=${currentPage}`;
          break;
        case 'upcoming':
          url = `https://api.jikan.moe/v4/seasons/upcoming?page=${currentPage}`;
          break;
        case 'season':
        default:
          url = `https://api.jikan.moe/v4/seasons/now?page=${currentPage}`;
      }
    }
    
    try {
      const response = await fetch(url);
      
      // *** TRATAMENTO DO ERRO 429 (RATE LIMIT) ***
      if (response.status === 429) {
        const retryAfter = response.headers.get('retry-after');
        let delayMs = 1000; // Espera padrão de 1 segundo
        
        if (retryAfter) {
          const retryAfterSec = parseInt(retryAfter, 10);
          if (!isNaN(retryAfterSec)) {
            delayMs = retryAfterSec * 1000;
          }
        } else {
          // Backoff exponencial: 1s, 2s, 4s, 8s...
          delayMs = Math.pow(2, retryCount) * 1000;
        }
        
        console.log(`Rate limit atingido. Tentando novamente em ${delayMs/1000} segundos...`);
        
        // Aguarda o tempo necessário
        await new Promise(resolve => setTimeout(resolve, delayMs));
        
        // Tenta novamente (máximo 3 tentativas)
        if (retryCount < 3) {
          return fetchData(currentPage, currentMode, currentSearchTerm, retryCount + 1);
        } else {
          throw new Error('Número máximo de tentativas excedido. Por favor, tente mais tarde.');
        }
      }
      // *** FIM DO TRATAMENTO DO ERRO 429 ***
      
      if (!response.ok) throw new Error(`API Error: ${response.status}`);
      
      const json = await response.json();
      let data = json.data || [];
      
      // Filtra conteúdo por classificação
      data = data.filter(anime => {
        const rating = anime.rating?.toLowerCase() || '';
        return !rating.includes('rx');
      });
      
      const pagination = json.pagination || {};
      const totalPages = pagination.last_visible_page || 1;
      
      return { 
        data, 
        currentPage: pagination.current_page || currentPage,
        totalPages 
      };
    } catch (error) {
      console.error("Erro na API:", error);
      return null;
    } finally {
      setLoading(false);
    }
  }, [loading]);

  const clearSearch = useCallback(() => {
    setSearchMode(false);
    setSearchTerm("");
    setPage(1);
    
    // Recarrega com o modo padrão (season)
    fetchData(1, 'season').then(result => {
      if (result) {
        setItems(result.data);
        setPage(result.currentPage);
        setTotalPages(result.totalPages);
      }
    });
  }, [fetchData]);

  // Carrega página específica
  const loadPage = useCallback(async (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages || loading) return;
    
    const currentMode = searchMode ? mode : mode;
    const result = await fetchData(pageNumber, currentMode, searchTerm);
    
    if (!result) return;
    
    setItems(result.data);
    setPage(result.currentPage);
    setTotalPages(result.totalPages);
    
    // Scroll para topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, totalPages, loading, mode, searchMode, searchTerm, fetchData]);

  // Busca
  const search = useCallback(async (term: string, pageNumber: number = 1) => {
    if (!term.trim()) {
      setSearchMode(false);
      setSearchTerm("");
      loadPage(1);
      return;
    }
    
    setSearchMode(true);
    setSearchTerm(term);
    
    const result = await fetchData(pageNumber, mode, term);
    if (result) {
      setItems(result.data);
      setPage(result.currentPage);
      setTotalPages(result.totalPages);
    }
  }, [mode, fetchData, loadPage]);

  // Muda modo
  const setListMode = useCallback((newMode: 'season' | 'top' | 'upcoming') => {
    setMode(newMode);
    setSearchMode(false);
    setSearchTerm("");
    setPage(1);
    
    fetchData(1, newMode).then(result => {
      if (result) {
        setItems(result.data);
        setPage(result.currentPage);
        setTotalPages(result.totalPages);
      }
    });
  }, [fetchData]);

  // Carrega inicialmente
  useEffect(() => {
    // Adiciona um pequeno delay inicial para evitar rate limit
    const timer = setTimeout(() => {
      fetchData(1, 'season').then(result => {
        if (result) {
          setItems(result.data);
          setPage(result.currentPage);
          setTotalPages(result.totalPages);
        }
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return { 
    items, 
    loadPage, 
    search, 
    loading, 
    page,
    totalPages,
    mode,
    setListMode,
    searchTerm,
    searchMode,
    clearSearch 
  };
}