"use client";

import { useState } from "react";
import Characters from "./Characters";
import Staff from "./Staff";
import Videos from "./Videos";

const AnimeTabs = ({ id }: { id: string }) => {
  const [tab, setTab] = useState<'characters' | 'staff' | 'videos'>('characters');

  return (
    <div style={{ width: "100%" }}>
      {/* BOTÕES COM ESTILOS */}
      <div style={{ 
        display: "flex", 
        gap: 10, 
        marginBottom: 20,
        justifyContent: "center"
      }}>
        <button 
          onClick={() => setTab('characters')}
          style={{
            padding: "10px 20px",
            backgroundColor: tab === 'characters' ? "#1e88e5" : "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background-color 0.3s"
          }}
        >
          Personagens
        </button>
        <button 
          onClick={() => setTab('staff')}
          style={{
            padding: "10px 20px",
            backgroundColor: tab === 'staff' ? "#1e88e5" : "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background-color 0.3s"
          }}
        >
          Staff
        </button>
        <button 
          onClick={() => setTab('videos')}
          style={{
            padding: "10px 20px",
            backgroundColor: tab === 'videos' ? "#1e88e5" : "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background-color 0.3s"
          }}
        >
          Vídeos
        </button>
      </div>

      {/* CONTEÚDO DAS TABS */}
      <div style={{ 
        background: "rgba(0, 0, 0, 0.5)", 
        padding: 20, 
        borderRadius: 10,
        minHeight: "300px",
        color: "white"
      }}>
        {tab === 'characters' && <Characters id={id} />}
        {tab === 'staff' && <Staff id={id} />}
        {tab === 'videos' && <Videos id={id} />}
      </div>
    </div>
  );
};

export default AnimeTabs;