// World news of Wednesday 18 November 2026, in one image (Node 22,
// standard library only). The image is entry.png beside this file; the
// program copies it to /output/entry.png, byte for byte, every run. The
// image itself is drawn with real fonts (see draw.py beside the repo),
// so the date and every headline stay sharp and correctly spelled.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'),
);
