# Client video thumbnails

Downloaded 26 November 2026 from the actual six videos linked in the existing testimonial data. Original JPEGs remain in `source/`; WebP copies in `public/testimonials/` are encoded with Sharp at quality 88, retaining the original 480 × 360 dimensions and composition. No portraits or testimonials were generated.

Source pattern: `https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg`.

| Reviewer | Video ID |
| --- | --- |
| Jake | 4gFSVqLk_j0 |
| Ana Kurkina | u5LDjn6NdHM |
| Emily | NzExt1Bzdfw |
| Jason | Lr0AhNhmya4 |
| Andrew | S4a8buevs3I |
| Randy | 1JaRQCaH6nA |

The site serves these thumbnails locally and loads the external video only when requested. Failed image loads leave the accessible play control and caption available without a broken image icon.
