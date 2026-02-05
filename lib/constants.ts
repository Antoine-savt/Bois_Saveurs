// Base path pour GitHub Pages
export const BASE_PATH = '';

// Helper pour obtenir le chemin complet d'une image
export function getImagePath(path: string): string {
  // Si le chemin commence déjà par BASE_PATH, on le retourne tel quel
  if (path.startsWith(BASE_PATH)) {
    return path;
  }
  // Sinon, on ajoute BASE_PATH au début
  return `${BASE_PATH}${path}`;
}

