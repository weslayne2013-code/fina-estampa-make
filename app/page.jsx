'use client'

export default function Home() {
  const whatsapp =
    'https://wa.me/5564992187764?text=Olá! Tenho interesse nos produtos da Fina Estampa Make & Acessórios.'

  const produtos = [
    { nome: 'Batom Matte Luxo', preco: 'R$ 39,90' },
    { nome: 'Paleta de Sombras Elegance', preco: 'R$ 129,90' },
    { nome: 'Brinco Dourado Clássico', preco: 'R$ 49,90' },
    { nome: 'Colar Fino Delicate', preco: 'R$ 59,90' },
  ]

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', background: '#0f0f0f', color: '#fff' }}>
      <header style={{ padding: 20, textAlign: 'center', borderBottom: '1px solid #333' }}>
        <h1>Fina Estampa</h1>
        <p>Make & Acessórios</p>
      </header>

      <section style={{ padding: 40, textAlign: 'center' }}>
        <h2>Beleza e sofisticação em cada detalhe</h2>
        <p>Maquiagens e acessórios para mulheres elegantes.</p>
        <button
          onClick={() => window.open(whatsapp)}
          style={{
            marginTop: 20,
            padding: '12px 24px',
            background: '#c9a24d',
            border: 'none',
            cursor: 'pointer',
            fontSize: 16,
          }}
        >
          Comprar pelo WhatsApp
        </button>
      </section>

      <section style={{ padding: 40 }}>
        <h2 style={{ textAlign: 'center' }}>Produtos em destaque</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 20,
            marginTop: 30,
          }}
        >
          {produtos.map((p, i) => (
            <div
              key={i}
              style={{
                border: '1px solid #333',
                padding: 20,
                textAlign: 'center',
              }}
            >
              <div style={{ height: 120, background: '#222', marginBottom: 15 }} />
              <h3>{p.nome}</h3>
              <p>{p.preco}</p>
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/5564992187764?text=Olá! Tenho interesse no produto ${p.nome} - ${p.preco}`
                  )
                }
                style={{
                  marginTop: 10,
                  padding: '10px 16px',
                  background: '#c9a24d',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Comprar pelo WhatsApp
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: 20, textAlign: 'center', borderTop: '1px solid #333' }}>
        © 2026 Fina Estampa Make & Acessórios — Sofisticação em cada detalhe
      </footer>
    </main>
  )
}
