"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <title>AnimeZero - Animes e Mangás</title>
        <meta name="description" content="Catálogo de animes e mangás usando a API Jikan" />
      </head>
      <body style={{
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        overflowX: "hidden",
        background: "#0a0a0a"
      }}>
        {/* HEADER FIXO NO TOPO */}
        <header style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          background: "rgba(10, 10, 10, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #333",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 20px rgba(0,0,0,0.5)",
          boxSizing: "border-box"
        }}>
          
          {/* LOGO */}
          <button
            onClick={() => router.push("/")}
            style={{
              background: "transparent",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 16px",
              borderRadius: "8px",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <span style={{
              background: "linear-gradient(45deg, #FF6B6B, #4ECDC4, #1E88E5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              AnimeZero
            </span>
          </button>

          {/* 2 BOTÕES: Buscar Animes */}
          <nav style={{
            display: "flex",
            gap: "15px",
            alignItems: "center"
          }}>

            {/* BUSCAR */}
            <button
              onClick={() => router.push("/search")}
              style={{
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "25px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 15px rgba(79, 172, 254, 0.4)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(79, 172, 254, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(79, 172, 254, 0.4)";
              }}
            >
              🔍 Buscar Animes
            </button>
          </nav>
        </header>

        {/* Conteúdo principal */}
        <main style={{ 
          paddingTop: "80px",
          minHeight: "calc(100vh - 80px)"
        }}>
          {children}
        </main>

        {/* Footer opcional */}
        <footer style={{
          background: "rgba(0, 0, 0, 0.8)",
          color: "#888",
          textAlign: "center",
          padding: "20px",
          borderTop: "1px solid #333",
          fontSize: "14px"
        }}>
          <p>Dados fornecidos pela <a href="https://jikan.moe" target="_blank" style={{color: "#4facfe"}}>Jikan API</a> • AnimeZero © 2024</p>
        </footer>
      </body>
    </html>
  );
}