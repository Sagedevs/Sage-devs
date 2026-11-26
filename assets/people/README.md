# Founder portrait

The supplied `Contemplative Forest Portrait.png` is preserved byte-for-byte in `source/founder-portrait-original.png`. Its SHA-256 is recorded in `metadata.json`. The original outside the repository was not changed.

The built-in image editing tool produced `edits/founder-portrait-monochrome-master.png`. The result was visually checked against the provided portrait, then prepared for the website with neutral grayscale normalization and crops. No upscaling, sharpening, skin smoothing, face replacement or geometric transformations were applied during website encoding.

Website assets:
- `public/people/abdul-ahad-founder.webp`: 1024 × 1280 main portrait.
- `public/people/abdul-ahad-founder.avif`: 1024 × 1280 optimized alternate export.
- `public/people/abdul-ahad-founder-compact.webp`: 240 × 240 crop for the 72px Careers placement.

The About image uses Next Image responsive sizing, intrinsic dimensions, lazy loading and a small blur placeholder. Next's configured image formats negotiate AVIF/WebP at responsive sizes. Careers uses the smaller dedicated source. The homepage does not import or reference these assets.

## Edit method and prompt

Mode: built-in image edit, with the user's upload as the sole referenced edit target.

> EDIT TARGET: the provided portrait. Use this exact photograph, not a recreation. This is a strict identity-preserving photographic color-grade only. Convert the image to sophisticated neutral black-and-white / grayscale for the About founder section of the Sage Devs website. Preserve every facial feature, facial proportions, sunglasses, hair silhouette and individual texture, pose, hands, watch, clothing, background tree geometry and original camera composition. Do not redraw, regenerate, relight structurally, smooth, reshape, beautify or alter any object or the person's identity. Keep the full original 3:4 frame. Restrained tonal conversion: natural skin luminance translated into grayscale, gently refined midtone contrast, soft highlight rolloff, subtle deep charcoal shadows with retained jacket texture. No added sharpening, grain, vignettes, frames, glow, text, artificial studio background, decorative effects, or colored tint. Maintain photographic texture and source sharpness. Output high resolution, never invent facial detail. The approved design is obsidian #101114, graphite #1B1D21, soft ivory #F5F5F2 and platinum #D9D9D5, but the photo itself must be pure neutral grayscale.
