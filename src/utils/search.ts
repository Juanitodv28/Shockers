import type { Sneaker } from '../types/sneaker';

const SEARCH_SYNONYMS: Record<string, string[]> = {
  alto: ['high'],
  alta: ['high'],
  bajo: ['low'],
  baja: ['low'],
  blanco: ['white'],
  blanca: ['white'],
  negro: ['black'],
  negra: ['black'],
  rojo: ['red'],
  roja: ['red'],
  azul: ['blue'],
  verde: ['green'],
  gris: ['grey', 'gray'],
  grises: ['grey', 'gray'],
  jordan: ['jordan', 'air jordan'],
  zapatilla: ['sneaker', 'shoe'],
  zapatillas: ['sneakers', 'shoes'],
  tenis: ['sneaker', 'shoes'],
  zapatos: ['shoes'],
};

export function normalizeSearchText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getSearchTokens(query: string): string[] {
  const tokens = normalizeSearchText(query).split(' ').filter(Boolean);
  return Array.from(
    new Set(tokens.flatMap((token) => [token, ...(SEARCH_SYNONYMS[token] ?? [])])),
  );
}

export function scoreSneaker(sneaker: Sneaker, query: string): number {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return 0;

  const name = normalizeSearchText(sneaker.name);
  const brand = normalizeSearchText(sneaker.brand);
  const silhouette = normalizeSearchText(sneaker.silhouette);
  const searchableText = `${name} ${brand} ${silhouette}`;
  const tokens = getSearchTokens(query);
  let score = 0;

  if (name === normalizedQuery) score += 120;
  if (name.includes(normalizedQuery)) score += 90;
  if (brand === normalizedQuery) score += 85;
  if (silhouette === normalizedQuery) score += 75;

  for (const token of tokens) {
    if (name.includes(token)) score += 28;
    if (brand.includes(token)) score += 42;
    if (silhouette.includes(token)) score += 36;
  }

  const originalTokens = normalizeSearchText(query).split(' ').filter(Boolean);
  const matchedTokens = originalTokens.filter((token) => searchableText.includes(token));
  if (originalTokens.length > 1 && matchedTokens.length === originalTokens.length) score += 45;

  return score;
}

export function searchSneakers(products: Sneaker[], query: string, limit = 6): Sneaker[] {
  if (normalizeSearchText(query).length < 2) return [];

  return products
    .map((sneaker) => ({ sneaker, score: scoreSneaker(sneaker, query) }))
    .filter(({ score }) => score > 0)
    .sort((left, right) => right.score - left.score || left.sneaker.name.localeCompare(right.sneaker.name))
    .slice(0, limit)
    .map(({ sneaker }) => sneaker);
}
