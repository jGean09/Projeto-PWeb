"use client";
import { useState } from "react";

export default function SearchBox({ onSearch }) {
  const [term, setTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(term);
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder="Buscar anime..."
        style={{
          padding: "8px",
          width: "250px",
          marginRight: "10px",
          border: "1px solid #ccc"
        }}
      />

      <button type="submit">
        Buscar
      </button>
    </form>
  );
}
