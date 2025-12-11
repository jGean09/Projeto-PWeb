import { useEffect, useState } from "react";

export default function useAnimeData() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("https://api.jikan.moe/v4/anime?q=naruto");
        const json = await res.json();
        setData(json.data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { data, loading, error };
}