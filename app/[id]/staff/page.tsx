"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import SharedFilters from "@/components/SharedFilters"; // ✅ IMPORT ADICIONADO

const StaffPage = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const [staff, setStaff] = useState<any[]>([]);
  const [filteredStaff, setFilteredStaff] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [positionFilter, setPositionFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

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
    async function loadStaff() {
      if (!id) return;
      setLoading(true);
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/staff`);
        const json = await res.json();
        const data = json.data || [];
        setStaff(data);
        setFilteredStaff(data);
      } catch (error) {
        console.error("Erro ao carregar staff:", error);
      } finally {
        setLoading(false);
      }
    }
    loadStaff();
  }, [id]);

  useEffect(() => {
    let results = staff;
    
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      results = results.filter(person => 
        person.person.name.toLowerCase().includes(term) ||
        person.positions?.some((pos: string) => 
          pos.toLowerCase().includes(term)
        )
      );
    }
    
    if (positionFilter !== "all") {
      results = results.filter(person => 
        person.positions?.some((pos: string) => 
          pos.toLowerCase() === positionFilter.toLowerCase()
        )
      );
    }
    
    results.sort((a, b) => {
        return a.person.name.localeCompare(b.person.name);
      });
      
      setFilteredStaff(results);
      setCurrentPage(1);
    }, [searchTerm, positionFilter, staff]);

  const totalPages = Math.ceil(filteredStaff.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedStaff = filteredStaff.slice(startIndex, endIndex);

  const uniquePositions = Array.from(
    new Set(staff.flatMap(person => person.positions || []))
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
               Staff do Anime
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
            items={staff}
            filteredItems={filteredStaff}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterValue={positionFilter}
            setFilterValue={setPositionFilter}
            sortValue={sortBy}
            setSortValue={setSortBy}
            currentPage={currentPage}
            totalPages={totalPages}
            uniqueFilters={uniquePositions}
            filterLabel="posições"
            onClearFilters={() => {
              setSearchTerm("");
              setPositionFilter("all");
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
                Carregando staff...
              </p>
            </div>
          ) : paginatedStaff.length === 0 ? (
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
                Nenhum membro do staff encontrado
              </p>
              <p style={{ 
                color: "#aaa", 
                fontSize: "16px", 
                marginBottom: "30px",
                maxWidth: "600px",
                margin: "0 auto"
              }}>
                {searchTerm || positionFilter !== "all" 
                  ? `Tente ajustar os filtros de busca.`
                  : "Este anime não possui informações de staff."}
              </p>
            </div>
          ) : (
            <>
              {/* Grid de Staff */}
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", 
                gap: 25,
                marginBottom: "40px"
              }}>
                {paginatedStaff.map((person: any) => (
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
                            <strong style={{ color: "#90caf9" }}> Favoritos:</strong> {person.person.favorites?.toLocaleString() || "N/A"}
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
                               Site Oficial
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default StaffPage;