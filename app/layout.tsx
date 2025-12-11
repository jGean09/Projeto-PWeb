"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <title>AnimeHub - Encontre seu anime favorito</title>
        <meta name="description" content="Plataforma para explorar animes usando a API Jikan" />
      </head>
      <body style={{
        margin: 0,
        padding: 0,
        minHeight: "100vh"
      }}>
        {/* Botão da Logo no canto superior esquerdo */}
        <button
          onClick={handleLogoClick}
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            zIndex: 1000,
            padding: "12px 24px",
            background: "rgba(15, 12, 41, 0.95)",
            color: "white",
            border: "2px solid #1e88e5",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(30, 136, 229, 0.2)",
            backdropFilter: "blur(10px)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(30, 136, 229, 0.95)";
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(30, 136, 229, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(15, 12, 41, 0.95)";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(30, 136, 229, 0.2)";
          }}
        >
          <span style={{
            fontSize: "22px",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #FF6B6B, #4ECDC4, #1E88E5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            AnimeHub
          </span>
        </button>

        {/* Conteúdo principal */}
        <main style={{ 
          paddingTop: "80px" // Para não ficar embaixo do botão
        }}>
          {children}
        </main>
      </body>
    </html>
  );
}