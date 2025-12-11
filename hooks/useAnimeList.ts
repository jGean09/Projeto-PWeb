import { useEffect, useRef, useState, useCallback } from "react";

export function useAnimeList() {
  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(async () => {
    if (loading || finished) return;
    setLoading(true);

    // Endpoint de top animes
    const url = `https://api.jikan.moe/v4/top/anime?page=${page}`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Erro na API", response.status);
      setLoading(false);
      return;
    }

    const json = await response.json();
    const data = json.data ?? [];

    if (data.length === 0) setFinished(true);
    else {
      setItems(prev => [...prev, ...data]);
      setPage(prev => prev + 1);
    }

    setLoading(false);
  }, [finished, loading, page]);

  const sortItems = (type: string) => {
    const sorted = [...items];
    if (type === "nome") sorted.sort((a, b) => (a.title ?? "").localeCompare(b.title ?? ""));
    if (type === "ano") sorted.sort((a, b) => (a.year ?? 0) - (b.year ?? 0));
    setItems(sorted);
  };

  const search = async (term: string) => {
    if (!term) return; // pesquisa vazia não faz nada
    setItems([]);
    setPage(1);
    setFinished(false);

    const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(term)}&page=1`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Erro na API", response.status);
      return;
    }

    const json = await response.json();
    const data = json.data ?? [];
    setItems(data);
    setPage(2);
  };

  useEffect(() => {
    loadMore(); // carrega top animes na inicialização
  }, []);

  return { items, loadMore, sortItems, search, finished, loading };
}
