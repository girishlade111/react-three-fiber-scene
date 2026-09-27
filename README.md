# React Three Fiber Scene — Kinect Point Cloud

A WebGL experiment that turns a video into a **Kinect-style 3D point cloud**, rendered with React Three Fiber. A custom vertex/fragment shader samples each video frame and displaces hundreds of thousands of points by depth, producing the classic depth-camera look. All shader uniforms are tweakable live through a Leva control panel.

Inspired by the [three.js webgl_video_kinect](https://github.com/mrdoob/three.js/blob/master/examples/webgl_video_kinect.html) example.

## Features

- **Depth-based point cloud** — custom GLSL vertex shader converts video luminance into Z displacement over a point grid
- **Live video texture** — streams an MP4 via `THREE.VideoTexture` (autoplay with click-to-play fallback for browser policies)
- **Leva control panel** — adjust near/far clipping, point size, Z offset, circle mask radius, background color and video tint in real time
- **Mouse interaction** — camera reacts to mouse movement for a subtle parallax effect
- **Circular mask** — points outside a configurable radius are clipped

## Tech Stack

- [Next.js](https://nextjs.org/) 15 (App Router, static export)
- [React](https://react.dev/) 19 + TypeScript
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) / [drei](https://github.com/pmndrs/drei) / [three.js](https://threejs.org/)
- [Leva](https://github.com/pmndrs/leva) — GUI controls
- Tailwind CSS 3.4 + shadcn/ui components

## Quick Start

```bash
# install dependencies
npm install --legacy-peer-deps   # or: pnpm install

# run the dev server
npm run dev          # open http://localhost:3000

# production static build (outputs to ./out)
npm run build
```

### Preview a production build locally

```bash
npx serve out
```

## Project Structure

```
app/
  page.tsx                 # 'use client' page -> Canvas + KinectScene + Leva panel
  layout.tsx               # Root layout, fonts, analytics
  globals.css              # Tailwind + global styles
components/
  kinect-scene.tsx         # Point-cloud shader scene (vertex/fragment GLSL, video texture)
  theme-provider.tsx       # next-themes provider
  ui/*                     # shadcn/ui components
public/                    # Static assets
```

## Deployment

Fully static (no API routes, no server actions) — deploys as a static export:

- **GitHub Pages:** `next build` emits `out/`, published from the `gh-pages` branch.
  The build uses `basePath: '/react-three-fiber-scene'` for the Pages subpath.
  For root-domain deploys (Vercel / Netlify / Cloudflare Pages), remove the
  `basePath` line from `next.config.mjs` and rebuild.

No environment variables are required.

## Notes

- This project was originally scaffolded with [v0.app](https://v0.app); the original v0-synced README was rewritten for this public release.
- The demo video streams from a Vercel Blob URL; replace `video.src` in `components/kinect-scene.tsx` with your own clip if it ever goes offline.
- Next.js pinned to 15.2.8 (patched for CVE-2025-55182 React2Shell).

---

Built by Girish Lade — https://ladestack.in
