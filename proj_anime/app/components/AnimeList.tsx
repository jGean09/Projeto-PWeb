"use client";

import { useEffect, useRef } from "react";
import AnimeCard from "./AnimeCard";

export default function AnimeList({ items, loadMore, finished }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !finished) {
        loadMore("");
      }
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [finished, loadMore]);

  if (!items.length) return <p style={{ color: "white" }}>Nenhum anime encontrado.</p>;

  return (
    <div>
      {items.map(anime => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}

      <div ref={ref} style={{ height: 40 }} />
    </div>
  );
}
