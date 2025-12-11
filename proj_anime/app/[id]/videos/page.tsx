"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const VideosPage = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const [animeInfo, setAnimeInfo] = useState<any>(null);
  const [youtubeTrailers, setYoutubeTrailers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const pageBackgroundStyle = {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    backgroundAttachment: "fixed",
    zIndex: -1
  };

  useEffect(() => {
    async function loadAnimeInfo() {
      if (!id) return;
      setLoading(true);
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const json = await res.json();
        setAnimeInfo(json.data);
        
        await searchTrailers(json.data);
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    }
    loadAnimeInfo();
  }, [id]);

  const searchTrailers = async (animeData: any) => {
    try {
      const trailerQueries = [
        `${animeData.title} Official Trailer`,
        `${animeData.title} PV`,
        `${animeData.title} Opening`,
        `${animeData.title} Anime Trailer`,
        `${animeData.title} CM`
      ];

      const animeThumbnail = animeData.images?.jpg?.large_image_url || 
                            animeData.images?.jpg?.image_url ||
                            `https://placehold.co/300x169/1e88e5/white?text=${encodeURIComponent(animeData.title.substring(0, 20))}`;

      const trailers = trailerQueries.map((query, index) => ({
        id: `trailer-${index}`,
        title: query.replace(animeData.title + " ", ""),
        url: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
        thumbnail: animeThumbnail,
        type: "trailer"
      }));

      setYoutubeTrailers(trailers);
    } catch (error) {
      console.error("Erro ao buscar trailers:", error);
    }
  };

  return (
    <>
      <div style={pageBackgroundStyle} />
      
      <div style={{
        position: "relative",
        zIndex: 1,
        padding: "20px",
        paddingTop: "80px",
        minHeight: "100vh"
      }}>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: 30,
          flexWrap: "wrap",
          gap: 15
        }}>
          <div>
            <h1 style={{ color: "white", margin: "0 0 5px 0", fontSize: "2rem" }}>
              {animeInfo?.title || "Carregando..."}
            </h1>
            <p style={{ color: "#aaa", margin: 0, fontSize: "18px" }}>
              Trailers e Vídeos
            </p>
          </div>
          
          <button 
            onClick={() => router.push(`/${id}`)}
            style={{ 
              padding: "12px 24px", 
              background: "rgba(30, 136, 229, 0.9)", 
              color: "white", 
              border: "none", 
              borderRadius: "10px", 
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(30, 136, 229, 1)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(30, 136, 229, 0.9)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            ↩ Voltar
          </button>
        </div>

        <div style={{ 
          background: "rgba(0, 0, 0, 0.7)", 
          padding: "20px", 
          borderRadius: "15px",
          marginBottom: "30px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}>
          <p style={{ margin: 0, color: "white", fontSize: "16px" }}>
            <strong>Anime:</strong> {animeInfo?.title || "Carregando..."}
            {animeInfo?.year && ` (${animeInfo.year})`}
          </p>
        </div>

        {!loading && youtubeTrailers.length > 0 && (
          <div style={{ 
            background: "rgba(30, 136, 229, 0.15)", 
            border: "1px solid #1e88e5",
            padding: "15px", 
            borderRadius: "10px",
            marginBottom: "25px",
            color: "#90caf9",
            fontSize: "14px"
          }}>
            <p style={{ margin: 0 }}>
              🔍 <strong>Trailers do YouTube:</strong> Clique em qualquer card para buscar no YouTube
            </p>
          </div>
        )}

        {loading ? (
          <div style={{ 
            textAlign: "center", 
            padding: "80px 20px",
            background: "rgba(0, 0, 0, 0.7)",
            borderRadius: "15px",
            backdropFilter: "blur(10px)"
          }}>
            <div style={{ 
              width: "60px", 
              height: "60px", 
              border: "5px solid rgba(255, 255, 255, 0.1)",
              borderTop: "5px solid #1e88e5",
              borderRadius: "50%",
              margin: "0 auto 20px",
              animation: "spin 1s linear infinite"
            }} />
            <p style={{ color: "white", fontSize: "18px" }}>
              Buscando trailers...
            </p>
            <style jsx>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : youtubeTrailers.length === 0 ? (
          <div style={{ 
            textAlign: "center", 
            padding: "60px 20px",
            background: "rgba(0, 0, 0, 0.7)",
            borderRadius: "15px",
            backdropFilter: "blur(10px)"
          }}>
            <p style={{ color: "white", fontSize: "20px", marginBottom: "20px" }}>
              Nenhum trailer encontrado.
            </p>
            <button 
              onClick={() => animeInfo && searchTrailers(animeInfo)}
              style={{
                padding: "12px 24px",
                background: "rgba(30, 136, 229, 0.9)",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(30, 136, 229, 1)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(30, 136, 229, 0.9)"}
            >
              🔄 Tentar Novamente
            </button>
          </div>
        ) : (
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
            gap: 25
          }}>
            {youtubeTrailers.map((trailer, index) => {
              return (
                <a
                  key={trailer.id}
                  href={trailer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    display: 'block',
                    background: "rgba(0, 0, 0, 0.7)", 
                    borderRadius: "15px", 
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.4)";
                    e.currentTarget.style.borderColor = "#1e88e5";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  }}
                >
                  <div style={{ position: "relative", paddingBottom: "56.25%" }}>
                    <img
                      src={trailer.thumbnail}
                      alt={trailer.title}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                    
                    <div style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                      padding: "15px"
                    }}>
                      <h3 style={{ 
                        color: "white", 
                        margin: 0,
                        fontSize: "16px",
                        lineHeight: "1.4"
                      }}>
                        {trailer.title}
                      </h3>
                    </div>
                    
                    <div style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "rgba(255, 0, 0, 0.85)",
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      color: "white",
                      border: "3px solid white"
                    }}>
                      ▶
                    </div>
                  </div>
                  
                  <div style={{ 
                    padding: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <span style={{
                      background: "#1e88e5",
                      color: "white",
                      padding: "5px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px"
                    }}>
                      <span style={{ fontSize: "14px" }}>🎬</span> Trailer
                    </span>
                    
                    <span style={{
                      color: "#aaa",
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px"
                    }}>
                      <span>🔗</span> YouTube
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default VideosPage;