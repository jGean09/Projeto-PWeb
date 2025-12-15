"use client";

import { useState, useEffect } from "react";

interface SharedFiltersProps {
  items: any[];
  filteredItems: any[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterValue: string;
  setFilterValue: (value: string) => void;
  currentPage: number;
  totalPages: number;
  uniqueFilters: string[];
  filterLabel: string;
  onClearFilters: () => void;
  onPageChange: (page: number) => void;
  loading?: boolean;
}

export default function SharedFilters({
  items,
  filteredItems,
  searchTerm,
  setSearchTerm,
  filterValue,
  setFilterValue,
  currentPage,
  totalPages,
  uniqueFilters,
  filterLabel,
  onClearFilters,
  onPageChange,
  loading = false
}: SharedFiltersProps) {
  
  const getPageNumbers = () => {
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
  };

  // Capitalizar primeira letra de cada palavra
  const capitalizeWords = (text: string) => {
    return text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <>
      {/* Filtros */}
      <div style={{ 
        background: "rgba(0, 0, 0, 0.8)", 
        padding: "25px", 
        borderRadius: "15px",
        marginBottom: "30px",
        backdropFilter: "blur(10px)",
        border: "2px solid rgba(255, 255, 255, 0.15)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)"
      }}>
        <div style={{ 
          display: "flex", 
          flexDirection: "column",
          gap: "20px"
        }}>
          {/* Barra de busca e filtros - APENAS BUSCA E FILTRO */}
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <input
              type="text"
              placeholder="🔍 Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: "14px 20px",
                borderRadius: "10px",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(0, 0, 0, 0.9)",
                color: "white",
                flex: "1",
                minWidth: "250px",
                outline: "none",
                fontSize: "16px",
                transition: "all 0.3s"
              }}
              onFocus={(e) => e.target.style.borderColor = "#1e88e5"}
              onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.2)"}
            />
            
            {/* Select de Filtro APENAS */}
            <select
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              style={{
                padding: "14px 45px 14px 20px",
                borderRadius: "10px",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                background: "rgba(0, 0, 0, 0.9)",
                color: "white",
                minWidth: "180px",
                outline: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "500",
                transition: "all 0.3s",
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 15px center",
                backgroundSize: "20px"
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "#1e88e5"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)"}
            >
              <option value="all">Todas as {filterLabel}</option>
              {uniqueFilters.map((filter, index) => (
                <option key={index} value={filter}>
                  {capitalizeWords(filter)}
                </option>
              ))}
            </select>
          </div>
          
          {/* Info e ações */}
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            fontSize: "16px",
            flexWrap: "wrap",
            gap: "15px"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", flexWrap: "wrap" }}>
              <span style={{ 
                color: "#ffffff",
                background: "rgba(30, 136, 229, 0.2)",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: "bold"
              }}>
                {filteredItems.length} {filterLabel === "papéis" ? "personagem" : "membro"}{filteredItems.length !== 1 ? 's' : ''}
              </span>
              
              {searchTerm && (
                <span style={{ 
                  color: "#90caf9",
                  background: "rgba(144, 202, 249, 0.1)",
                  padding: "8px 16px",
                  borderRadius: "8px"
                }}>
                  "{searchTerm}"
                </span>
              )}
              
              {filterValue !== "all" && (
                <span style={{ 
                  color: "#81c784",
                  background: "rgba(129, 199, 132, 0.1)",
                  padding: "8px 16px",
                  borderRadius: "8px"
                }}>
                  {capitalizeWords(filterValue)}
                </span>
              )}
              
              <span style={{ 
                color: "#ffb74d",
                background: "rgba(255, 183, 77, 0.1)",
                padding: "8px 16px",
                borderRadius: "8px"
              }}>
                Página {currentPage} de {totalPages}
              </span>
            </div>
            
            {(searchTerm || filterValue !== "all") && (
              <button
                onClick={onClearFilters}
                style={{
                  padding: "10px 20px",
                  background: "linear-gradient(135deg, #ff4444, #cc0000)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "bold",
                  transition: "all 0.3s",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 68, 68, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Limpar filtros
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "40px",
          padding: "25px",
          background: "rgba(0, 0, 0, 0.7)",
          borderRadius: "15px",
          border: "2px solid rgba(255, 255, 255, 0.1)"
        }}>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              padding: "12px 25px",
              background: currentPage === 1 
                ? "rgba(255, 255, 255, 0.1)" 
                : "linear-gradient(135deg, #1e88e5, #0d47a1)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              fontWeight: "bold",
              fontSize: "16px",
              opacity: currentPage === 1 ? 0.5 : 1,
              transition: "all 0.3s"
            }}
          >
            ← Anterior
          </button>

          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              style={{
                padding: "12px 18px",
                minWidth: "45px",
                background: currentPage === pageNum 
                  ? "linear-gradient(135deg, #4ECDC4, #1CE669)" 
                  : "rgba(255, 255, 255, 0.1)",
                color: "white",
                border: currentPage === pageNum 
                  ? "2px solid #ffffff" 
                  : "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                if (currentPage !== pageNum) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                }
              }}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              padding: "12px 25px",
              background: currentPage === totalPages 
                ? "rgba(255, 255, 255, 0.1)" 
                : "linear-gradient(135deg, #FF6B6B, #FF8E53)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              fontWeight: "bold",
              fontSize: "16px",
              opacity: currentPage === totalPages ? 0.5 : 1,
              transition: "all 0.3s"
            }}
          >
            Próxima →
          </button>

          <div style={{ 
            color: "#ffffff", 
            fontSize: "16px", 
            marginLeft: "20px",
            background: "rgba(0, 0, 0, 0.5)",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid rgba(255, 255, 255, 0.2)"
          }}>
            Página <span style={{ color: "#4ECDC4", fontWeight: "bold" }}>{currentPage}</span> de {totalPages}
          </div>
        </div>
      )}
    </>
  );
}