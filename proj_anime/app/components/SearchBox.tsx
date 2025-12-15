"use client";
import { useState, useEffect } from "react";

export default function SearchBox({ onSearch, initialValue = "" }) {
  const [term, setTerm] = useState(initialValue);

  // Atualiza o termo quando initialValue muda (como quando limpa a busca)
  useEffect(() => {
    setTerm(initialValue);
  }, [initialValue]);

  function handleSubmit(e) {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder="🔍 Buscar anime..."
        style={{
          padding: "12px 20px",
          width: "100%",
          marginRight: "10px",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          background: "rgba(0, 0, 0, 0.7)",
          color: "white",
          borderRadius: "10px",
          fontSize: "16px"
        }}
      />
    </form>
  );
}