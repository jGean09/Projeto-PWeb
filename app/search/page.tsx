"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SearchBox from "@/components/SearchBox";
import AnimeCard from "@/components/AnimeCard";
import { searchAnimeAction } from '@/actions/anime';

interface Anime {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  score?: number;
  type?: string;
}

export default function Page() {
  const router = useRouter();
  const [items, setItems] = useState<Anime[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);

  const pageBackgroundStyle = {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundImage: "url('/scenario.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    zIndex: -1
  };

  const contentStyle = {
    position: "relative" as "relative",
    zIndex: 1,
    padding: "20px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center"
  };

  async function loadItems(searchTerm: string, page: number) {
    if (loading) return;
    
    setLoading(true);
    try {
      const result = await searchAnimeAction(searchTerm, page);
      
      setItems(result.data || []);
      setTotalPages(result.pagination?.last_visible_page || 1);
      setCurrentPage(result.pagination?.current_page || 1);
      
      if (searchTerm && searchTerm.trim() !== "") {
        localStorage.setItem("lastAnimeSearch", searchTerm);
        setShowBackButton(true);
      }
    } catch (error) {
      console.error("Erro na busca:", error);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlQuery = urlParams.get('q');
    
    if (urlQuery && urlQuery.trim() !== "") {
      setTerm(urlQuery);
      setShowBackButton(true);
      loadItems(urlQuery, 1);
    } else {
      const savedTerm = localStorage.getItem("lastAnimeSearch");
      if (savedTerm && savedTerm.trim() !== "") {
        setTerm(savedTerm);
        setShowBackButton(true);
        loadItems(savedTerm, 1);
      } else {
        loadItems("", 1);
      }
    }
  }, []);

  function handleSearch(newTerm: string) {
    setTerm(newTerm);
    setCurrentPage(1);
    setTotalPages(1);
    
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/search');
    }
    
    loadItems(newTerm, 1);
  }

  function goToPage(page: number) {
    if (page < 1 || page > totalPages || loading) return;
    setCurrentPage(page);
    loadItems(term, page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleClearSearch() {
    setTerm("");
    setCurrentPage(1);
    setItems([]);
    setTotalPages(1);
    setShowBackButton(false);
    localStorage.removeItem("lastAnimeSearch");
    loadItems("", 1);
  }

  function getPageNumbers() {
    const pages = [];
    const maxPagesToShow = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  return (
    <>
      <div style={pageBackgroundStyle} />
      
      <div style={contentStyle}>
        {/* REMOVIDO O BOTÃO "VOLTAR PARA HOME" - Agora temos a logo no layout */}

        <h1 style={{ color: "white", marginBottom: 20 }}>Buscar Animes</h1>

        <SearchBox onSearch={handleSearch} />

        {term && term.trim() !== "" && (
          <div style={{
            width: "100%",
            maxWidth: "1000px",
            background: "rgba(0, 0, 0, 0.8)",
            borderRadius: "10px",
            padding: "15px 20px",
            marginBottom: "20px",
            marginTop: "20px",
            border: "2px solid #1e88e5",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px"
          }}>
            <div style={{ color: "white" }}>
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "10px",
                marginBottom: "5px"
              }}>
                <span style={{ fontSize: "20px" }}></span>
                <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Resultados para: <span style={{ color: "#90caf9" }}>{term}</span>
                </span>
              </div>
              <div style={{ 
                fontSize: "14px", 
                color: "#aaa",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <span>Página {currentPage} de {totalPages}</span>
                <span></span>
                <span>{items.length} animes nesta página</span>
              </div>
            </div>
            
            <button
              onClick={handleClearSearch}
              style={{
                padding: "8px 16px",
                background: "#ff4444",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "all 0.3s"
              }}
            >
              Limpar Busca
            </button>
          </div>
        )}

        {loading && (
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <div style={{
              width: "50px",
              height: "50px",
              border: "5px solid rgba(255,255,255,0.1)",
              borderTop: "5px solid #1e88e5",
              borderRadius: "50%",
              margin: "0 auto 15px",
              animation: "spin 1s linear infinite"
            }} />
            <p style={{ color: "white" }}>Carregando animes...</p>
          </div>
        )}

        {!loading && items.length > 0 && (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: 20,
                width: "100%",
                maxWidth: 1000,
                marginTop: "20px",
              }}
            >
              {items.map((anime) => (
                <div
                  key={anime.mal_id}
                  onClick={() => {
                    localStorage.setItem("lastAnimeSearch", term);
                    router.push(`/${anime.mal_id}`);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <AnimeCard anime={anime} />
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div style={{
                marginTop: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                flexWrap: "wrap"
              }}>
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1 || loading}
                  style={{
                    padding: "10px 20px",
                    background: currentPage === 1 ? "#555" : "#1e88e5",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                    fontWeight: "bold",
                    fontSize: "16px",
                    opacity: currentPage === 1 ? 0.5 : 1
                  }}
                >
                  Anterior
                </button>

                {currentPage > 3 && (
                  <>
                    <button
                      onClick={() => goToPage(1)}
                      style={{
                        padding: "10px 16px",
                        background: "rgba(255, 255, 255, 0.1)",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "bold"
                      }}
                    >
                      1
                    </button>
                    {currentPage > 4 && <span style={{ color: "white" }}>...</span>}
                  </>
                )}

                {getPageNumbers().map(pageNum => (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    style={{
                      padding: "10px 16px",
                      background: currentPage === pageNum ? "#4ECDC4" : "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      border: currentPage === pageNum ? "2px solid #4ECDC4" : "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      minWidth: "45px"
                    }}
                  >
                    {pageNum}
                  </button>
                ))}

                {currentPage < totalPages - 2 && (
                  <>
                    {currentPage < totalPages - 3 && <span style={{ color: "white" }}>...</span>}
                    <button
                      onClick={() => goToPage(totalPages)}
                      style={{
                        padding: "10px 16px",
                        background: "rgba(255, 255, 255, 0.1)",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "bold"
                      }}
                    >
                      {totalPages}
                    </button>
                  </>
                )}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages || loading}
                  style={{
                    padding: "10px 20px",
                    background: currentPage === totalPages ? "#555" : "#1e88e5",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                    fontWeight: "bold",
                    fontSize: "16px",
                    opacity: currentPage === totalPages ? 0.5 : 1
                  }}
                >
                  Próxima
                </button>
              </div>
            )}
          </>
        )}

        {!loading && items.length === 0 && term && (
          <div style={{
            marginTop: 40,
            padding: 30,
            background: "rgba(0, 0, 0, 0.7)",
            borderRadius: "12px",
            textAlign: "center",
            maxWidth: "600px",
            width: "100%"
          }}>
            <h3 style={{ color: "white", marginBottom: "10px" }}>
              Nenhum anime encontrado
            </h3>
            <p style={{ color: "#aaa", marginBottom: "20px" }}>
              Não encontramos resultados para "{term}".
            </p>
            <button
              onClick={handleClearSearch}
              style={{
                padding: "10px 20px",
                background: "#4ECDC4",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold"
            }}
            >
              Ver Animes da Temporada
            </button>
          </div>
        )}

        {!loading && items.length === 0 && !term && (
          <div style={{
            marginTop: 40,
            padding: 30,
            background: "rgba(0, 0, 0, 0.7)",
            borderRadius: "12px",
            textAlign: "center",
            maxWidth: "600px",
            width: "100%"
          }}>
            <h3 style={{ color: "white", marginBottom: "10px" }}>
              Busque seu anime favorito
            </h3>
            <p style={{ color: "#aaa" }}>
              Digite o nome de um anime na barra de busca acima para começar.
            </p>
          </div>
        )}

        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </>
  );
}