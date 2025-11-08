// src/utils/asset.ts
const FILES = import.meta.glob('/src/assets/images/**/*', {
  eager: true,
  as: 'url',
});

function norm(p: string) {
  return p.replace(/^\/+/, '').replace(/\\/g, '/');
}

export function media(path: string): string {
  const key = '/src/assets/images/' + norm(path);
  return (FILES[key] as string) || '';
}

export function mediaOrUndef(path?: string) {
  if (!path) return undefined;
  const url = media(path);
  return url || undefined;
}
