// world/tools/copy-404.js
import { copyFileSync } from 'node:fs';

try {
  copyFileSync('docs/index.html', 'docs/404.html');
  console.log('Created docs/404.html');
} catch (e) {
  console.error('Failed to create docs/404.html:', e);
  process.exit(1);
}
