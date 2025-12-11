export default function StaticInfo() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div style={{ padding: '20px', background: 'rgba(0,0,0,0.1)' }}>
      <p>AnimeHub © {currentYear}</p>
      <p>Dados da Jikan API</p>
    </div>
  );
}