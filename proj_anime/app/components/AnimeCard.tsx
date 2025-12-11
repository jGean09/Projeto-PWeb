interface AnimeCardProps {
  anime: any;
}

export default function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        target.style.transform = "translateY(-5px)";
        target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.6)";
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        target.style.transform = "translateY(0)";
        target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
      }}
    >
      <img
        src={anime.images?.jpg?.image_url}
        alt={anime.title}
        style={{ width: "100%", height: 240, objectFit: "cover" }}
      />

      <div style={{ padding: 10 }}>
        <h3
          style={{
            color: "white",
            fontSize: 16,
            margin: "0 0 6px 0",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {anime.title}
        </h3>

        {anime.year && (
          <p style={{ color: "#ccc", fontSize: 14, margin: 0 }}>Ano: {anime.year}</p>
        )}

        {anime.score && (
          <p style={{ color: "#f5c518", fontSize: 14, margin: "4px 0 0 0" }}>
            ⭐ {anime.score}
          </p>
        )}
      </div>
    </div>
  );
}
