"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const CharactersPage = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const [characters, setCharacters] = useState<any[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

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
    async function loadCharacters() {
      if (!id) return;
      setLoading(true);
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
        const json = await res.json();
        const data = json.data || [];
        setCharacters(data);
        setFilteredCharacters(data);
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    }
    loadCharacters();
  }, [id]);

  useEffect(() => {
    let results = characters;
    
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      results = results.filter(character => 
        character.character.name.toLowerCase().includes(term) ||
        character.role.toLowerCase().includes(term) ||
        character.voice_actors?.some((va: any) => 
          va.person.name.toLowerCase().includes(term)
        )
      );
    }
    
    if (roleFilter !== "all") {
      results = results.filter(character => 
        character.role.toLowerCase() === roleFilter.toLowerCase()
      );
    }
    
    setFilteredCharacters(results);
  }, [searchTerm, roleFilter, characters]);

  const uniqueRoles = Array.from(
    new Set(characters.map(c => c.role.toLowerCase()))
  ).sort();

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
            <h1 style={{ color: "white", margin: 0, fontSize: "2rem" }}>Personagens</h1>
            <button 
              onClick={() => router.push(`/${id}`)}
              style={{ 
                padding: "10px 20px", 
                background: "rgba(30, 136, 229, 0.9)", 
                color: "white", 
                border: "none", 
                borderRadius: "8px", 
                cursor: "pointer",
                fontWeight: "bold",
                transition: "all 0.3s"
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

          <div style={{ 
            background: "rgba(0, 0, 0, 0.7)", 
            padding: "25px", 
            borderRadius: "15px",
            marginBottom: "30px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}>
            <div style={{ 
              display: "flex", 
              flexDirection: "column",
              gap: "20px"
            }}>
              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <input
                  type="text"
                  placeholder="Buscar por nome, papel ou dublador..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    padding: "12px 20px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    background: "rgba(0, 0, 0, 0.8)",
                    color: "white",
                    flex: "1",
                    minWidth: "250px",
                    outline: "none",
                    fontSize: "16px",
                    transition: "all 0.3s"
                  }}
                />
                
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  style={{
                    padding: "12px 20px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    background: "rgba(0, 0, 0, 0.8)",
                    color: "white",
                    minWidth: "150px",
                    outline: "none",
                    cursor: "pointer",
                    fontSize: "16px"
                  }}
                >
                  <option value="all">Todos os papéis</option>
                  {uniqueRoles.map((role, index) => (
                    <option key={index} value={role}>
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between",
                alignItems: "center",
                color: "white",
                fontSize: "16px",
                flexWrap: "wrap",
                gap: "10px"
              }}>
                <div>
                  <span style={{ color: "#aaa" }}>
                    {filteredCharacters.length} personagem{filteredCharacters.length !== 1 ? 's' : ''} encontrado{filteredCharacters.length !== 1 ? 's' : ''}
                  </span>
                  {searchTerm && (
                    <span style={{ marginLeft: "10px", color: "#90caf9" }}>
                      para "{searchTerm}"
                    </span>
                  )}
                  {roleFilter !== "all" && (
                    <span style={{ marginLeft: "10px", color: "#81c784" }}>
                      • Papel: {roleFilter}
                    </span>
                  )}
                </div>
                
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    style={{
                      padding: "8px 16px",
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "14px",
                      transition: "all 0.3s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"}
                  >
                    Limpar busca
                  </button>
                )}
              </div>
            </div>
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
              <p style={{ color: "white", fontSize: "18px" }}>Carregando personagens...</p>
              <style jsx>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          ) : filteredCharacters.length === 0 ? (
            <div style={{ 
              textAlign: "center", 
              padding: "60px 20px",
              background: "rgba(0, 0, 0, 0.7)",
              borderRadius: "15px",
              backdropFilter: "blur(10px)"
            }}>
              <p style={{ color: "white", fontSize: "20px", marginBottom: "20px" }}>
                {searchTerm || roleFilter !== "all" 
                  ? `Nenhum personagem encontrado para "${searchTerm}"${roleFilter !== "all" ? ` com papel "${roleFilter}"` : ''}`
                  : "Nenhum personagem encontrado."}
              </p>
              {(searchTerm || roleFilter !== "all") && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setRoleFilter("all");
                  }}
                  style={{
                    padding: "12px 24px",
                    background: "rgba(30, 136, 229, 0.9)",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "all 0.3s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "rgba(30, 136, 229, 1)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "rgba(30, 136, 229, 0.9)"}
                >
                  Limpar filtros
                </button>
              )}
            </div>
          ) : (
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
              gap: 25
            }}>
              {filteredCharacters.map((character: any) => (
                <div key={character.character.mal_id} style={{ 
                  background: "rgba(255, 255, 255, 0.08)", 
                  borderRadius: "15px", 
                  padding: "20px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderColor = "#1e88e5";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                >
                  <img 
                    src={character.character.images.jpg.image_url} 
                    alt={character.character.name}
                    style={{ 
                      width: "100%", 
                      height: "320px", 
                      objectFit: "cover", 
                      borderRadius: "10px",
                      marginBottom: "15px",
                      border: "2px solid rgba(255, 255, 255, 0.1)"
                    }}
                  />
                  <div style={{ color: "white" }}>
                    <h3 style={{ 
                      margin: "0 0 10px 0", 
                      fontSize: "18px",
                      fontWeight: "bold",
                      lineHeight: "1.4"
                    }}>
                      {character.character.name}
                    </h3>
                    <div style={{ 
                      display: "inline-block",
                      background: character.role.toLowerCase() === "main" ? "rgba(30, 136, 229, 0.9)" : 
                                 character.role.toLowerCase() === "supporting" ? "rgba(67, 160, 71, 0.9)" : 
                                 "rgba(244, 81, 30, 0.9)",
                      color: "white",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      marginBottom: "12px"
                    }}>
                      {character.role}
                    </div>
                    <p style={{ 
                      margin: "8px 0", 
                      fontSize: "15px", 
                      color: "#aaa",
                      lineHeight: "1.5"
                    }}>
                      <strong style={{ color: "#90caf9" }}>Voz por:</strong> {character.voice_actors?.[0]?.person?.name || "Não informado"}
                    </p>
                    {character.voice_actors?.[0]?.person?.language && (
                      <p style={{ 
                        margin: "0", 
                        fontSize: "13px", 
                        color: "#777",
                        fontStyle: "italic"
                      }}>
                        ({character.voice_actors[0].person.language})
                      </p>
                    )}
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

export default CharactersPage;