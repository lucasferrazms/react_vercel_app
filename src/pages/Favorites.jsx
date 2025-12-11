import useFavorites from '../hooks/useFavorites'

export default function Favorites() {
  const { getFavorites } = useFavorites()
  const list = getFavorites()

  return (
    <div>
      <h1>Favoritos</h1>
      {list.length === 0 ? (
        <p>Nenhum livro favoritado.</p>
      ) : (
        <ul>
          {list.map((b, i) => (
            <li key={i} style={{ marginBottom: 10 }}>
              <strong>{b.originalTitle}</strong> (Livro {b.number})
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
