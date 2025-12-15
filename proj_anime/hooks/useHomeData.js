"use client";
import { useEffect, useState } from "react";
import { getTrendingAnimesAction, searchAnimeAction } from "../app/actions/anime";

export function useHomeData() {
  const [trendingAnimes, setTrendingAnimes] = useState([]);
  const [seasonAnimes, setSeasonAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadHomeData() {
      setLoading(true);
      setError(null);
      
      try {
        // Busca os 12 melhores animes da temporada atual
        const seasonResult = await searchAnimeAction("", 1);
        
        // Filtra e ordena os 12 melhores da temporada
        let seasonList = seasonResult.data || [];
        seasonList = seasonList
          .map(anime => ({
            ...anime,
            popularityScore: 
              (anime.score || 6.0) * 10 +
              (anime.scored_by ? Math.log(anime.scored_by) : 0) +
              (anime.members ? Math.log(anime.members) / 10 : 0)
          }))
          .sort((a, b) => b.popularityScore - a.popularityScore)
          .slice(0, 12);
        
        // Busca os 12 animes mais populares
        const trendingResult = await getTrendingAnimesAction(12);
        
        setTrendingAnimes(trendingResult.data || []);
        setSeasonAnimes(seasonList);
      } catch (err) {
        console.error("Erro ao carregar dados da home:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadHomeData();
  }, []);

  return { trendingAnimes, seasonAnimes, loading, error };
}