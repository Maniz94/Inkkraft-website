import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'dist');
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
for (const entry of ['index.html', 'services.html', 'about.html', 'blog.html', 'article.html', 'contact.html', 'src', 'assets']) {
  await cp(path.join(root, entry), path.join(out, entry), { recursive: true });
}
console.log('Built static site in dist/');
