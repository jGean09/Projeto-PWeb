"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

const AnimeDetail = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [anime, setAnime] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const pageBackgroundStyle = {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundImage: "url('/detail.jpg')",
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

  useEffect(() => {
    async function loadAnime() {
      setLoading(true);
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const json = await res.json();
        setAnime(json.data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadAnime();
    }
  }, [id]);

  if (loading) {
    return (
      <>
        <div style={pageBackgroundStyle} />
        <div style={contentStyle}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
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

  if (error || !anime) {
    return (
      <>
        <div style={pageBackgroundStyle} />
        <div style={contentStyle}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            textAlign: "center",
            flexDirection: "column",
            gap: "20px"
          }}>
            <p style={{ color: "white", fontSize: "20px" }}>Erro ao carregar anime.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div style={pageBackgroundStyle} />

      <div style={contentStyle}>
        <h1 style={{ 
          color: "white", 
          marginBottom: 20, 
          marginTop: "60px",
          textAlign: "center",
          fontSize: "2.2rem",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
        }}>
          {anime.title}
        </h1>

        <div
          style={{
            display: "flex",
            gap: 20,
            maxWidth: "1000px",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            background: "rgba(0, 0, 0, 0.7)",
            borderRadius: "8px",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            margin: "0 20px"
          }}
        >
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <img
              src={anime.images?.jpg?.image_url}
              alt={anime.title}
              width={200}
              height={300}
              style={{
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
                border: "2px solid rgba(255, 255, 255, 0.1)"
              }}
            />

            <div style={{ color: "white", textAlign: "left", maxWidth: "800px", flex: 1 }}>
              <p><strong>Ano:</strong> {anime.year || "Desconhecido"}</p>
              <p><strong>Score:</strong> {anime.score || "N/A"}</p>
              <p><strong>Status:</strong> {anime.status || "N/A"}</p>
              <p><strong>Gênero:</strong> {anime.genres?.map((genre: any) => genre.name).join(", ") || "Desconhecido"}</p>
              <p><strong>Tipo:</strong> {anime.type || "Desconhecido"}</p>
              <p><strong>Quant. de episódios:</strong> {anime.episodes || "N/A"}</p>
            </div>
          </div>

          <div style={{
              maxHeight: "200px",
              overflowY: "auto",
              marginTop: "20px",
              whiteSpace: "pre-wrap",
              color: "white",
              width: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            <p><strong>Sinopse:</strong> {anime.synopsis || "Sinopse não disponível"}</p>
          </div>

          {/* BOTÕES ORIGINAIS - TODOS MANTIDOS */}
          <div style={{ 
            display: "flex", 
            gap: 15, 
            marginTop: 30,
            justifyContent: "center",
            width: "100%",
            flexWrap: "wrap"
          }}>
            <Link href={`/${id}/characters`}>
              <button style={{
                  padding: "12px 25px",
                  backgroundColor: "#1e88e5",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "16px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(30, 136, 229, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                 Ver Personagens
              </button>
            </Link>
            
            <Link href={`/${id}/staff`}>
              <button style={{
                  padding: "12px 25px",
                  backgroundColor: "#43a047",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "16px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(67, 160, 71, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                 Ver Staff
              </button>
            </Link>
            
            <Link href={`/${id}/videos`}>
              <button style={{
                  padding: "12px 25px",
                  backgroundColor: "#f4511e",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "16px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(244, 81, 30, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                 Ver Vídeos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeDetail;