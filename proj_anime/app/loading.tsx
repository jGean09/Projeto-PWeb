export default function Loading() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '5px solid rgba(255,255,255,0.1)',
        borderTop: '5px solid #1e88e5',
        borderRadius: '50%',
        margin: '0 auto 20px',
        animation: 'spin 1s linear infinite'
      }} />
      <p style={{ color: 'white' }}>Carregando...</p>
    </div>
  );
}