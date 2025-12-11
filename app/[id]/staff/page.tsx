"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const StaffPage = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const [staff, setStaff] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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

  const contentStyle = {
    position: "relative" as "relative",
    zIndex: 1,
    padding: "20px",
    paddingTop: "80px",
    minHeight: "100vh"
  };

  useEffect(() => {
    async function loadStaff() {
      if (!id) return;
      setLoading(true);
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/staff`);
        const json = await res.json();
        setStaff(json.data || []);
      } catch (error) {
        console.error("Erro ao carregar staff:", error);
      } finally {
        setLoading(false);
      }
    }
    loadStaff();
  }, [id]);

  const filteredStaff = staff.filter(person => 
    person.person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.positions?.some((pos: string) => 
      pos.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <div style={pageBackgroundStyle} />
      
      <div style={contentStyle}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            marginBottom: 30,
            flexWrap: "wrap",
            gap: 15
          }}>
            <h1 style={{ color: "white", margin: 0, fontSize: "2rem" }}>Staff do Anime</h1>
            
            <div style={{ display: "flex", gap: 15, alignItems: "center", flexWrap: "wrap" }}>
              <input
                type="text"
                placeholder="Buscar por nome ou posição..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: "12px 20px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  background: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                  minWidth: "250px",
                  outline: "none",
                  fontSize: "16px",
                  transition: "all 0.3s"
                }}
              />
              
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
                ↩ Voltar ao Anime
              </button>
            </div>
          </div>

          <div style={{ 
            color: "white", 
            marginBottom: 25,
            background: "rgba(0, 0, 0, 0.7)",
            padding: "15px 20px",
            borderRadius: "10px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}>
            <p style={{ margin: 0, fontSize: "16px" }}>
              {filteredStaff.length} membro{filteredStaff.length !== 1 ? 's' : ''} do staff encontrado{filteredStaff.length !== 1 ? 's' : ''}
              {searchTerm && ` para "${searchTerm}"`}
            </p>
          </div>

          {loading ? (
            <div style={{ 
              textAlign: "center", 
              padding: "60px 20px",
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
              <p style={{ color: "white", fontSize: "18px" }}>Carregando staff...</p>
              <style jsx>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          ) : filteredStaff.length === 0 ? (
            <div style={{ 
              textAlign: "center", 
              padding: "60px 20px",
              background: "rgba(0, 0, 0, 0.7)",
              borderRadius: "15px",
              backdropFilter: "blur(10px)"
            }}>
              <p style={{ color: "white", fontSize: "20px" }}>
                {searchTerm ? `Nenhum staff encontrado para "${searchTerm}"` : "Nenhum membro do staff encontrado."}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  style={{
                    marginTop: "20px",
                    padding: "12px 24px",
                    background: "rgba(30, 136, 229, 0.9)",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "all 0.3s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "rgba(30, 136, 229, 1)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "rgba(30, 136, 229, 0.9)"}
                >
                  Limpar busca
                </button>
              )}
            </div>
          ) : (
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", 
              gap: 25
            }}>
              {filteredStaff.map((person: any) => (
                <div key={person.person.mal_id} style={{ 
                  background: "rgba(0, 0, 0, 0.7)", 
                  borderRadius: "15px", 
                  padding: "25px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
                  e.currentTarget.style.borderColor = "#1e88e5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
                >
                  <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <img 
                      src={person.person.images.jpg.image_url} 
                      alt={person.person.name}
                      style={{ 
                        width: "100px", 
                        height: "120px", 
                        objectFit: "cover", 
                        borderRadius: "10px",
                        border: "2px solid #1e88e5"
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        color: "white", 
                        margin: "0 0 15px 0",
                        fontSize: "20px",
                        fontWeight: "bold"
                      }}>
                        {person.person.name}
                      </h3>
                      
                      <div style={{ 
                        display: "flex", 
                        flexWrap: "wrap", 
                        gap: 8,
                        marginBottom: 15
                      }}>
                        {person.positions?.map((position: string, idx: number) => (
                          <span
                            key={idx}
                            style={{
                              background: position.toLowerCase().includes("director") ? "rgba(30, 136, 229, 0.9)" :
                                        position.toLowerCase().includes("writer") ? "rgba(67, 160, 71, 0.9)" :
                                        position.toLowerCase().includes("producer") ? "rgba(244, 81, 30, 0.9)" :
                                        position.toLowerCase().includes("design") ? "rgba(142, 36, 170, 0.9)" :
                                        "rgba(85, 85, 85, 0.9)",
                              color: "white",
                              padding: "6px 12px",
                              borderRadius: "20px",
                              fontSize: "13px",
                              fontWeight: "bold"
                            }}
                          >
                            {position}
                          </span>
                        ))}
                      </div>
                      
                      <div style={{ color: "#aaa", fontSize: "15px" }}>
                        <p style={{ margin: "8px 0" }}>
                          <strong style={{ color: "#90caf9" }}>Favoritos:</strong> {person.person.favorites?.toLocaleString() || "N/A"}
                        </p>
                        {person.person.website_url && (
                          <a 
                            href={person.person.website_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                              color: "#1e88e5", 
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                              fontWeight: "bold"
                            }}
                          >
                            🌐 Site Oficial
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StaffPage;