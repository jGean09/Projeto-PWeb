"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import SearchBox from "@/components/SearchBox";
import AnimeCard from "@/components/AnimeCard";
import { useAnimeList } from "../../hooks/useAnimeList";

export default function Page() {
  const router = useRouter();
  const [term, setTerm] = useState("");
  
  const { 
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
  } = useAnimeList();
  
  const modeNames = {
    'season': { title: "Animes da Temporada"},
    'top': { title: "Top Animes"},
    'upcoming': { title: "Próximos Lançamentos"}
  };

  const pageBackgroundStyle = {
    position: "fixed" as const,
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
    position: "relative" as const,
    zIndex: 1,
    padding: "20px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center"
  };

  // Busca inicial
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlQuery = urlParams.get('q');
    
    if (urlQuery && urlQuery.trim() !== "") {
      setTerm(urlQuery);
      search(urlQuery, 1);
    }
  }, [search]);

  const handleSearch = useCallback((newTerm: string) => {
    setTerm(newTerm);
    search(newTerm, 1);
  }, [search]);

  const handleClearSearch = useCallback(() => {
    setTerm(""); // Limpa o campo visual
    clearSearch(); // USA A NOVA FUNÇÃO DO HOOK
    router.push('/search'); // Limpa a URL
  }, [clearSearch, router]);

  const goToPage = useCallback((pageNumber: number) => {
    if (searchMode) {
      search(searchTerm, pageNumber);
    } else {
      loadPage(pageNumber);
    }
  }, [searchMode, searchTerm, search, loadPage]);

  // Calcula números das páginas para exibir
  const getPageNumbers = useCallback(() => {
    const pages = [];
    const maxPagesToShow = 5;
    
    let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  }, [page, totalPages]);

  const getPageTitle = () => {
    if (searchMode) return `Busca: "${searchTerm}"`;
    return modeNames[mode].title;
  };

  return (
    <>
      <div style={pageBackgroundStyle} />
      
      <div style={contentStyle}>
        <h1 style={{ 
          color: "#ffffff", 
          marginBottom: "30px", 
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "bold",
          textShadow: "0 4px 8px rgba(0, 0, 0, 0.9), 0 0 20px rgba(30, 136, 229, 0.5)",
          background: "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(15, 12, 41, 0.9))",
          padding: "20px 40px",
          borderRadius: "15px",
          border: "3px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7)"
        }}>
          {getPageTitle()}
        </h1>

        {/* Botões de modo - LINHA COMPACTA */}
{!searchMode && (
  <div style={{
    display: "flex",
    gap: "15px",
    marginBottom: "30px",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap"
  }}>
    {['season', 'top', 'upcoming'].map((modeKey) => {
      const modeInfo = modeNames[modeKey as keyof typeof modeNames];
      const colors = {
        'season': ['#1e88e5', '#0d47a1'],
        'top': ['#FF6B6B', '#FF8E53'],
        'upcoming': ['#4ECDC4', '#1CE669']
      };
      
      return (
        <button
          key={modeKey}
          onClick={() => setListMode(modeKey as any)}
          style={{
            padding: "12px 20px",
            background: mode === modeKey 
              ? `linear-gradient(135deg, ${colors[modeKey as keyof typeof colors][0]}, ${colors[modeKey as keyof typeof colors][1]})`
              : "rgba(0, 0, 0, 0.85)",
            color: "#ffffff",
            border: mode === modeKey 
              ? "2px solid #ffffff"
              : "1px solid rgba(255, 255, 255, 0.6)",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
            transition: "all 0.2s",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.6)"
          }}
        >
          <span>{modeInfo.icon}</span>
          <span>{modeInfo.title}</span>
        </button>
      );
    })}
  </div>
)}

        {/* Barra de busca */}
        <div style={{ width: "100%", maxWidth: "600px", marginBottom: "30px" }}>
          <SearchBox onSearch={handleSearch} initialValue={term} />
        </div>

        {/* Info da busca - COM ALTO CONTRASTE */}
        {searchMode && searchTerm && (
          <div style={{
            width: "100%",
            maxWidth: "1000px",
            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(30, 30, 50, 0.95))",
            borderRadius: "15px",
            padding: "20px 30px",
            marginBottom: "30px",
            border: "3px solid rgba(255, 255, 255, 0.5)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)"
          }}>
            <div style={{ color: "#ffffff" }}>
              <div style={{ 
                fontSize: "18px", 
                fontWeight: "bold", 
                marginBottom: "8px",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.9)"
              }}>
                 Resultados para: <span style={{ color: "#90caf9", fontSize: "20px" }}>{searchTerm}</span>
              </div>
              <div style={{ 
                fontSize: "15px", 
                color: "#cccccc",
                textShadow: "0 1px 3px rgba(0, 0, 0, 0.9)"
              }}>
                 Página {page} de {totalPages} •  {items.length} animes
              </div>
            </div>
            
            <button
              onClick={handleClearSearch}
              style={{
                padding: "12px 24px",
                background: "linear-gradient(135deg, #ff4444, #cc0000)",
                color: "#ffffff",
                border: "3px solid rgba(255, 255, 255, 0.8)",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "15px",
                transition: "all 0.3s",
                boxShadow: "0 6px 20px rgba(255, 68, 68, 0.5)",
                textShadow: "0 1px 3px rgba(0, 0, 0, 0.9)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(255, 68, 68, 0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 68, 68, 0.5)";
              }}
            >
               Limpar Busca
            </button>
          </div>
        )}

        {/* Loading */}
        {loading && items.length === 0 && (
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

        {/* Grid de animes */}
        {items.length > 0 && (
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
            {items.map((anime, index) => (
              <div
                key={`${anime.mal_id}-${index}`}  
                onClick={() => {
                  localStorage.setItem("lastAnimeSearch", searchTerm || "");
                  router.push(`/${anime.mal_id}`);
                }}
                style={{ cursor: "pointer" }}
              >
                <AnimeCard anime={anime} />
              </div>
            ))}
            </div>

            {/* PAGINAÇÃO NUMÉRICA */}
            {totalPages > 1 && (
              <div style={{
                marginTop: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                flexWrap: "wrap"
              }}>
                {/* Botão Anterior */}
                <button
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1 || loading}
                  style={{
                    padding: "12px 25px",
                    background: page === 1 
                      ? "rgba(0, 0, 0, 0.7)" 
                      : "linear-gradient(135deg, #1e88e5, #0d47a1)",
                    color: "white",
                    border: page === 1 
                      ? "2px solid rgba(255, 255, 255, 0.3)" 
                      : "3px solid rgba(255, 255, 255, 0.8)",
                    borderRadius: "10px",
                    cursor: page === 1 ? "not-allowed" : "pointer",
                    fontWeight: "bold",
                    fontSize: "16px",
                    opacity: page === 1 ? 0.6 : 1,
                    transition: "all 0.3s",
                    boxShadow: page === 1 
                      ? "none" 
                      : "0 6px 20px rgba(30, 136, 229, 0.5)",
                    textShadow: "0 1px 3px rgba(0, 0, 0, 0.8)"
                  }}
                  onMouseEnter={(e) => {
                    if (page !== 1 && !loading) {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 10px 25px rgba(30, 136, 229, 0.7)";
                    }
                  }}
                >
                  ← Anterior
                </button>

                {/* Primeira página */}
                {page > 3 && (
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
                    {page > 4 && <span style={{ color: "white" }}>...</span>}
                  </>
                )}

                {/* Páginas do meio - CORES VIVAS */}
                {getPageNumbers().map(pageNum => (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    style={{
                      padding: "12px 18px",
                      background: page === pageNum 
                        ? "linear-gradient(135deg, #FF6B6B, #FF8E53)" // Laranja/vermelho vibrante
                        : "linear-gradient(135deg, #0f0c29, #302b63)", // Roxo escuro
                      color: "#ffffff", // Sempre branco
                      border: page === pageNum 
                        ? "3px solid #FFD700" // Borda dourada
                        : "2px solid rgba(255, 255, 255, 0.5)",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      minWidth: "50px",
                      fontSize: "16px",
                      transition: "all 0.3s",
                      boxShadow: page === pageNum 
                        ? "0 6px 25px rgba(255, 107, 107, 0.5), 0 0 15px rgba(255, 215, 0, 0.4)" 
                        : "0 4px 15px rgba(0, 0, 0, 0.6)",
                      textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)"
                    }}
                    onMouseEnter={(e) => {
                      if (page !== pageNum) {
                        e.currentTarget.style.background = "linear-gradient(135deg, #24243e, #302b63)";
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.8)";
                      }
                    }}
                  >
                    {pageNum}
                  </button>
                ))}

                {/* Última página */}
                {page < totalPages - 2 && (
                  <>
                    {page < totalPages - 3 && <span style={{ color: "white" }}>...</span>}
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

                {/* Botão Próxima */}
                <button
                  onClick={() => goToPage(page + 1)}
                  disabled={page === totalPages || loading}
                  style={{
                    padding: "12px 25px",
                    background: page === totalPages 
                      ? "rgba(0, 0, 0, 0.7)" 
                      : "linear-gradient(135deg, #FF6B6B, #FF8E53)",
                    color: "white",
                    border: page === totalPages 
                      ? "2px solid rgba(255, 255, 255, 0.3)" 
                      : "3px solid rgba(255, 255, 255, 0.8)",
                    borderRadius: "10px",
                    cursor: page === totalPages ? "not-allowed" : "pointer",
                    fontWeight: "bold",
                    fontSize: "16px",
                    opacity: page === totalPages ? 0.6 : 1,
                    transition: "all 0.3s",
                    boxShadow: page === totalPages 
                      ? "none" 
                      : "0 6px 20px rgba(255, 107, 107, 0.5)",
                    textShadow: "0 1px 3px rgba(0, 0, 0, 0.8)"
                  }}
                  onMouseEnter={(e) => {
                    if (page !== totalPages && !loading) {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 10px 25px rgba(255, 107, 107, 0.7)";
                    }
                  }}
                >
                  Próxima →
                </button>

                {/* Info da página */}
                <div style={{ 
                  color: "#ffffff", 
                  fontSize: "16px", 
                  marginLeft: "20px",
                  fontWeight: "bold",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                  background: "rgba(0, 0, 0, 0.7)",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "2px solid rgba(255, 255, 255, 0.3)"
                }}>
                  Página <span style={{ color: "#4ECDC4", fontSize: "18px" }}>{page}</span> de {totalPages}
                </div>
              </div>
            )}
          </>
        )}

        {/* Sem resultados */}
        {!loading && items.length === 0 && searchMode && (
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
              Não encontramos resultados para "{searchTerm}".
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

        {/* Instrução inicial */}
        {!loading && items.length === 0 && !searchMode && (
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
              {modeNames[mode].title}
            </h3>
            <p style={{ color: "#aaa" }}>
              Use os botões acima para alternar entre os modos ou busque um anime específico.
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