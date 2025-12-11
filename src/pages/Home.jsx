import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  async function loadRandomBook() {
    setLoading(true)
    try {
      const res = await fetch('https://potterapi-fedeperin.vercel.app/en/books/random')
      const data = await res.json()
      setBook(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadRandomBook()
  }, [])

  if (loading) return <h2>Carregando...</h2>
  if (!book) return <h2>Erro ao carregar livro.</h2>

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={book.cover}
        alt={book.originalTitle}
        className="book-cover"
        onClick={() => navigate('/details', { state: book })}
      />
      <h2>Livro {book.number} – {book.originalTitle}</h2>
    </div>
  )
}
