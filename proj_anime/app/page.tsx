"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useHomeData } from "../hooks/useHomeData";

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  
  const { trendingAnimes, seasonAnimes, loading } = useHomeData();
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      localStorage.setItem("lastAnimeSearch", searchQuery.trim());
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // ESTILO DO BACKGROUND DA HOME que preenche TUDO
  const homeBackgroundStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    backgroundAttachment: "fixed",
    zIndex: -1 // Para ficar atrás do conteúdo
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
    paddingTop: "80px" // Para não ficar embaixo do botão
  };

  if (loading) {
    return (
      <>
        {/* Background fixo */}
        <div style={homeBackgroundStyle} />
        
        {/* Conteúdo */}
        <div style={contentStyle}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
            textAlign: "center"
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: "60px",
                height: "60px",
                border: "5px solid rgba(255,255,255,0.1)",
                borderTop: "5px solid #1e88e5",
                borderRadius: "50%",
                margin: "0 auto 20px",
                animation: "spin 1s linear infinite"
              }} />
              <p style={{ color: "white", fontSize: "18px" }}>Carregando...</p>
              <style jsx>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Background fixo que preenche TUDO */}
      <div style={homeBackgroundStyle} />
      
      {/* Conteúdo da home */}
      <div style={contentStyle}>
        <section style={{
          padding: "40px 20px",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          <h1 style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px",
            lineHeight: "1.2",
            background: "linear-gradient(45deg, #FF6B6B, #4ECDC4, #1E88E5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Encontre Seu Próximo Anime Favorito
          </h1>
          <p style={{
            fontSize: "18px",
            color: "#B0BEC5",
            marginBottom: "40px",
            lineHeight: "1.6"
          }}>
            Descubra, explore e acompanhe milhares de animes com informações detalhadas.
          </p>
          
          <form onSubmit={handleSearch} style={{ maxWidth: "600px", margin: "0 auto 40px", width: "100%" }}>
            <div style={{
              display: "flex",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "50px",
              padding: "5px",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              transition: "all 0.3s"
            }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Busque por anime..."
                style={{
                  flex: 1,
                  padding: "15px 25px",
                  background: "transparent",
                  border: "none",
                  color: "white",
                  fontSize: "16px",
                  outline: "none"
                }}
              />
              <button 
                type="submit"
                style={{
                  padding: "15px 30px",
                  background: "linear-gradient(45deg, #1E88E5, #4ECDC4)",
                  color: "white",
                  border: "none",
                  borderRadius: "50px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                Buscar
              </button>
            </div>
          </form>
        </section>

        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px 80px"
        }}>
          <section style={{ marginBottom: "60px" }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px"
            }}>
              <h2 style={{
                fontSize: "28px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "white"
              }}>
                Em Alta
              </h2>
              <Link href="/search" style={{
                color: "#4ECDC4",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "5px"
              }}>
                Ver mais → 
              </Link>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "20px"
            }}>
              {trendingAnimes.map(anime => (
                <div
                  key={anime.mal_id}
                  onClick={() => router.push(`/${anime.mal_id}`)}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <img
                    src={anime.images?.jpg?.image_url}
                    alt={anime.title}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover"
                    }}
                  />
                  <div style={{ padding: "15px" }}>
                    <h3 style={{
                      margin: "0 0 10px 0",
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      color: "white"
                    }}>
                      {anime.title}
                    </h3>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <span style={{
                        fontSize: "12px",
                        color: "#4ECDC4",
                        background: "rgba(78, 205, 196, 0.1)",
                        padding: "3px 8px",
                        borderRadius: "4px"
                      }}>
                        ⭐ {anime.score || "N/A"}
                      </span>
                      <span style={{
                        fontSize: "11px",
                        color: "#B0BEC5"
                      }}>
                        {anime.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* NOVA SEÇÃO: ANIMES DA TEMPORADA */}
          <section style={{ marginBottom: "60px", marginTop: "60px" }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px"
            }}>
              <h2 style={{
                fontSize: "28px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "white"
              }}>
                <span style={{ color: "#4ECDC4" }}></span> Animes da Temporada
              </h2>
              <Link href="/search?mode=season" style={{
                color: "#4ECDC4",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "5px"
              }}>
                Ver mais →
              </Link>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "20px"
            }}>
              {seasonAnimes.map(anime => (
                <div
                  key={`season-${anime.mal_id}`}
                  onClick={() => router.push(`/${anime.mal_id}`)}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <img
                    src={anime.images?.jpg?.image_url}
                    alt={anime.title}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover"
                    }}
                  />
                  <div style={{ padding: "15px" }}>
                    <h3 style={{
                      margin: "0 0 10px 0",
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      color: "white"
                    }}>
                      {anime.title}
                    </h3>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <span style={{
                        fontSize: "12px",
                        color: "#4ECDC4",
                        background: "rgba(78, 205, 196, 0.1)",
                        padding: "3px 8px",
                        borderRadius: "4px"
                      }}>
                        ⭐ {anime.score || "N/A"}
                      </span>
                      <span style={{
                        fontSize: "11px",
                        color: "#B0BEC5"
                      }}>
                        {anime.type}
                      </span>
                    </div>
                    {anime.episodes && (
                      <div style={{
                        fontSize: "11px",
                        color: "#FF6B6B",
                        marginTop: "8px",
                        textAlign: "center"
                      }}>
                        {anime.episodes} eps
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}