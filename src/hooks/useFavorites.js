export default function useFavorites() {
  function getFavorites() {
    try {
      return JSON.parse(localStorage.getItem('favoriteBooks')) || [];
    } catch {
      return [];
    }
  }

  function addFavorite(book) {
    const list = getFavorites();
    // avoid duplicates by number + title
    const exists = list.some(b => b.number === book.number && b.originalTitle === book.originalTitle);
    if (!exists) {
      list.push(book);
      localStorage.setItem('favoriteBooks', JSON.stringify(list));
    }
  }

  return { getFavorites, addFavorite };
}
