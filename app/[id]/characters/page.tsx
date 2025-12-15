"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import SharedFilters from "@/components/SharedFilters"; // ✅ IMPORT ADICIONADO

const CharactersPage = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const [characters, setCharacters] = useState<any[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const pageBackgroundStyle = {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    backgroundAttachment: "fixed",
    zIndex: -1
  };

  const contentStyle = {
    position: "relative" as const,
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
    
    // Filtro por busca
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
    
    // Filtro por papel
    if (roleFilter !== "all") {
      results = results.filter(character => 
        character.role.toLowerCase() === roleFilter.toLowerCase()
      );
    }
    
    // Ordenação
    results.sort((a, b) => {
        return a.character.name.localeCompare(b.character.name);
      });
      
      setFilteredCharacters(results);
      setCurrentPage(1);
    }, [searchTerm, roleFilter, characters]);

  // Paginação
  const totalPages = Math.ceil(filteredCharacters.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCharacters = filteredCharacters.slice(startIndex, endIndex);

  const uniqueRoles = Array.from(
    new Set(characters.map(c => c.role.toLowerCase()))
  ).sort();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div style={pageBackgroundStyle} />
      
      <div style={contentStyle}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Cabeçalho */}
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            marginBottom: 30,
            flexWrap: "wrap",
            gap: 15
          }}>
            <h1 style={{ 
              color: "white", 
              margin: 0, 
              fontSize: "2.2rem",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              background: "rgba(0, 0, 0, 0.6)",
              padding: "15px 25px",
              borderRadius: "12px",
              border: "2px solid rgba(255, 255, 255, 0.1)"
            }}>
               Personagens
            </h1>
            <button 
              onClick={() => router.push(`/${id}`)}
              style={{ 
                padding: "12px 25px", 
                background: "linear-gradient(135deg, #1e88e5, #0d47a1)", 
                color: "white", 
                border: "none", 
                borderRadius: "10px", 
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
                transition: "all 0.3s",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 4px 15px rgba(30, 136, 229, 0.4)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(30, 136, 229, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(30, 136, 229, 0.4)";
              }}
            >
              <span>←</span>
              <span>Voltar ao Anime</span>
            </button>
          </div>
          
          {/* ✅ FILTROS E PAGINAÇÃO - COMPONENTE COMPARTILHADO */}
          <SharedFilters
            items={characters}
            filteredItems={filteredCharacters}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterValue={roleFilter}
            setFilterValue={setRoleFilter}
            sortValue={sortBy}
            setSortValue={setSortBy}
            currentPage={currentPage}
            totalPages={totalPages}
            uniqueFilters={uniqueRoles}
            filterLabel="papéis"
            onClearFilters={() => {
              setSearchTerm("");
              setRoleFilter("all");
              setSortBy("name");
            }}
            onPageChange={handlePageChange}
            loading={loading}
          />

          {/* Loading */}
          {loading ? (
            <div style={{ 
              textAlign: "center", 
              padding: "80px 20px",
              background: "rgba(0, 0, 0, 0.7)",
              borderRadius: "15px",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255, 255, 255, 0.1)"
            }}>
              <div style={{ 
                width: "70px", 
                height: "70px", 
                border: "6px solid rgba(255, 255, 255, 0.1)",
                borderTop: "6px solid #1e88e5",
                borderRadius: "50%",
                margin: "0 auto 25px",
                animation: "spin 1s linear infinite"
              }} />
              <p style={{ 
                color: "white", 
                fontSize: "20px",
                textShadow: "0 2px 4px rgba(0,0,0,0.5)"
              }}>
                Carregando personagens...
              </p>
              <style jsx>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          ) : paginatedCharacters.length === 0 ? (
            <div style={{ 
              textAlign: "center", 
              padding: "80px 20px",
              background: "rgba(0, 0, 0, 0.7)",
              borderRadius: "15px",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255, 255, 255, 0.1)"
            }}>
              <div style={{ fontSize: "60px", marginBottom: "20px" }}>😕</div>
              <p style={{ 
                color: "white", 
                fontSize: "22px", 
                marginBottom: "15px",
                fontWeight: "bold"
              }}>
                Nenhum personagem encontrado
              </p>
              <p style={{ 
                color: "#aaa", 
                fontSize: "16px", 
                marginBottom: "30px",
                maxWidth: "600px",
                margin: "0 auto"
              }}>
                {searchTerm || roleFilter !== "all" 
                  ? `Tente ajustar os filtros de busca.`
                  : "Este anime não possui informações de personagens."}
              </p>
            </div>
          ) : (
            <>
              {/* Grid de Personagens */}
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
                gap: 25,
                marginBottom: "40px"
              }}>
                {paginatedCharacters.map((character: any) => (
                  <div 
                    key={character.character.mal_id} 
                    style={{ 
                      background: "rgba(255, 255, 255, 0.08)", 
                      borderRadius: "15px", 
                      padding: "20px",
                      backdropFilter: "blur(10px)",
                      border: "2px solid rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.borderColor = "#1e88e5";
                      e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.4)";
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
                        height: "350px", 
                        objectFit: "cover", 
                        borderRadius: "12px",
                        marginBottom: "18px",
                        border: "3px solid rgba(255, 255, 255, 0.15)"
                      }}
                    />
                    <div style={{ color: "white", flex: 1 }}>
                      <h3 style={{ 
                        margin: "0 0 12px 0", 
                        fontSize: "20px",
                        fontWeight: "bold",
                        lineHeight: "1.4",
                        minHeight: "56px",
                        display: "flex",
                        alignItems: "center"
                      }}>
                        {character.character.name}
                      </h3>
                      <div style={{ 
                        display: "inline-block",
                        background: character.role.toLowerCase() === "main" 
                          ? "linear-gradient(135deg, #1e88e5, #0d47a1)" 
                          : character.role.toLowerCase() === "supporting" 
                          ? "linear-gradient(135deg, #43a047, #2e7d32)" 
                          : "linear-gradient(135deg, #f4511e, #d84315)",
                        color: "white",
                        padding: "8px 16px",
                        borderRadius: "25px",
                        fontSize: "13px",
                        fontWeight: "bold",
                        marginBottom: "15px",
                        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)"
                      }}>
                        {character.role}
                      </div>
                      <div style={{ marginTop: "15px" }}>
                        <p style={{ 
                          margin: "8px 0", 
                          fontSize: "16px", 
                          color: "#90caf9",
                          fontWeight: "500"
                        }}>
                          <strong style={{ color: "#ffffff" }}>Voz por:</strong> {character.voice_actors?.[0]?.person?.name || "Não informado"}
                        </p>
                        {character.voice_actors?.[0]?.person?.language && (
                          <p style={{ 
                            margin: "4px 0 0 0", 
                            fontSize: "14px", 
                            color: "#aaa",
                            fontStyle: "italic"
                          }}>
                            ({character.voice_actors[0].person.language})
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CharactersPage;