export async function fetchAnimes(page = 1) {
  const res = await fetch(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${(page - 1) * 10}`);
  if (!res.ok) {
    throw new Error("Erro ao buscar animes");
  }

  const json = await res.json();

  return json.data.map(item => ({
    id: item.id,
    titulo: item.attributes.canonicalTitle,
    imagem: item.attributes.posterImage?.medium,
  }));
}
