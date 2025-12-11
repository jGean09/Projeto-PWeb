"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HomePage() {
  const router = useRouter();
  const [trendingAnimes, setTrendingAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function loadHomeData() {
      setLoading(true);
      try {
        const trendingRes = await fetch("https://api.jikan.moe/v4/top/anime?limit=6");
        const trendingData = await trendingRes.json();
        setTrendingAnimes(trendingData.data || []);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    }

    loadHomeData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      localStorage.setItem("lastAnimeSearch", searchQuery.trim());
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  if (loading) {
    return (
      <div style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
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
        </div>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{
      background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      minHeight: "100vh",
      color: "white",
      fontFamily: "'Segoe UI', system-ui, sans-serif"
    }}>
      
      {/* NAVBAR SIMPLES */}
      <nav style={{
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "32px",
            height: "32px",
            background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
            borderRadius: "8px"
          }} />
          <span style={{
            fontSize: "24px",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            AnimeHub
          </span>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link href="/search" style={{
            color: "white",
            textDecoration: "none",
            padding: "8px 16px",
            borderRadius: "6px",
            transition: "all 0.3s"
          }}
          onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,0.1)"}
          >
            🔍 Busca Avançada
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{
        padding: "80px 40px",
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
        
        {/* BARRA DE BUSCA */}
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
              🔍 Buscar
            </button>
          </div>
        </form>

        {/* STATS */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap"
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#4ECDC4" }}>10K+</div>
            <div style={{ color: "#B0BEC5" }}>Animes</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#FF6B6B" }}>50K+</div>
            <div style={{ color: "#B0BEC5" }}>Personagens</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#1E88E5" }}>24/7</div>
            <div style={{ color: "#B0BEC5" }}>Atualizado</div>
          </div>
        </div>
      </section>

      {/* SEÇÕES DE CONTEÚDO - APENAS TRENDING QUE FUNCIONA */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 40px 80px"
      }}>
        
        {/* TRENDING NOW */}
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
              gap: "10px"
            }}>
              <span style={{ color: "#FF6B6B" }}>🔥</span> Em Alta Agora
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
                    textOverflow: "ellipsis"
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

        {/* CTA FINAL SIMPLES */}
        <section style={{
          textAlign: "center",
          padding: "60px 40px",
          background: "linear-gradient(45deg, rgba(30, 136, 229, 0.1), rgba(255, 107, 107, 0.1))",
          borderRadius: "20px",
          marginTop: "40px"
        }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
            Pronto para explorar?
          </h2>
          <p style={{
            fontSize: "18px",
            color: "#B0BEC5",
            marginBottom: "30px",
            maxWidth: "600px",
            margin: "0 auto 30px"
          }}>
            Use a barra de busca para encontrar qualquer anime.
          </p>
          <button
            onClick={() => document.querySelector('input')?.focus()}
            style={{
              padding: "16px 40px",
              background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 10px 30px rgba(255, 107, 107, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            🚀 Buscar Agora
          </button>
        </section>
      </div>

      {/* FOOTER SIMPLIFICADO */}
      <footer style={{
        padding: "40px",
        background: "rgba(0, 0, 0, 0.3)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        textAlign: "center"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginBottom: "30px"
        }}>
          <div style={{
            fontSize: "24px",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            AnimeHub
          </div>
          <p style={{ color: "#B0BEC5", fontSize: "14px", maxWidth: "600px" }}>
            Plataforma para descobrir animes usando a API Jikan (MyAnimeList).
          </p>
        </div>
        
        <div style={{
          paddingTop: "20px",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          color: "#78909C",
          fontSize: "14px"
        }}>
          © {new Date().getFullYear()} AnimeHub. Dados da Jikan API.
        </div>
      </footer>
    </div>
  );
}