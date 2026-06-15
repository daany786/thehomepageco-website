## Goal
Replace the placeholder images on five cards in the "Selected Work" section of `src/routes/index.tsx` with the uploaded screenshots.

## Mapping
| Card | Uploaded image |
|---|---|
| Northfield & Co. | 211.jpeg |
| Bluepeak Analytics | 11212.jpeg |
| Maison Verde | 2121.jpeg |
| Heritage Hotels | 1212.jpeg |
| Studio Marlow | 221212.jpeg |

## Steps
1. Upload each of the 5 images to the Lovable Assets CDN using `lovable-assets create` from `/mnt/user-uploads/`, writing pointer JSON files under `src/assets/work-*.jpg.asset.json`.
2. In `src/routes/index.tsx`:
   - Add 5 new asset imports (`workNorthfield`, `workBluepeak`, `workMaison`, `workHeritage`, `workMarlow`) pointing to the new `.asset.json` files, using `.url`.
   - Update the 5 corresponding entries in the work array (lines ~495–500) so each card's `img` references its mapped asset URL instead of the shared `caseEcom`/`caseSaas`/`caseBrand` placeholders.
3. Leave all other cards, copy, and layout untouched.

No content, text, or styling changes outside the image references.