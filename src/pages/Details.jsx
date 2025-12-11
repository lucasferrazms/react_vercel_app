import { useLocation, useNavigate } from 'react-router-dom'
import useFavorites from '../hooks/useFavorites'

export default function Details() {
  const location = useLocation()
  const book = location.state
  const navigate = useNavigate()
  const { addFavorite } = useFavorites()

  if (!book) return <h2>Livro não encontrado. Volte à Home e clique em uma capa.</h2>

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Livro {book.number} – {book.originalTitle}</h1>
      <img src={book.cover} alt={book.originalTitle} className="book-cover" />
      <p><strong>Data de publicação:</strong> {book.releaseDate}</p>
      <p><strong>Páginas:</strong> {book.pages}</p>
      <p><strong>Descrição:</strong> {book.description}</p>

      <div>
        <button onClick={() => navigate('/')}>Voltar</button>
        <button onClick={() => { addFavorite(book); alert('Livro adicionado aos favoritos!') }} style={{ marginLeft: 12 }}>
          Adicionar aos Favoritos
        </button>
      </div>
    </div>
  )
}
