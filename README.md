# The World Today — Monday, 23 November 2026 (v2)

[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![Rank](https://make.fun/badge/news-image-20261123/Wahyupurnomoaji21/news-image-20261123-v2/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![Reward](https://make.fun/badge/news-image-20261123/Wahyupurnomoaji21/news-image-20261123-v2/reward.svg)](https://make.fun/bounty/news-image-20261123)

Entry for the [make.fun](https://make.fun/bounty/news-image-20261123) competition
**news-image-20261123** — *Sum up 23 November's world news in one image* ($100, top 50).

Version 2 of the broadsheet **"The World Today"**, dated **Monday, 23 November 2026**.
It rebuilds v1 (Blind Round 1: rank 5915/7226, 38.58%) with a clearer front page:
one large hero photograph of the COP31 hall in Antalya, two supporting photos
with legible captions, and a developments section set in larger type so every
story still reads at small size.

## The image

A photorealistic front page of the broadsheet **"The World Today"**, dated
**Monday, 23 November 2026**, summing up the day's world news:

- **COP31 collapses in Antalya** — the climate summit ends without a deal after the EU and about 130 parties reject a text that omits fossil fuels.
- **Russian strikes kill 15 near Kyiv** — rescuers dig through a collapsed residential block in Dymer.
- **AI fears sink markets** — Japan's Nikkei falls 5.06% and the S&P 500 drops 3.7%.
- **Ukraine drone cripples Russian warship off Libya** — the corvette Merkury is severely damaged.
- **Democrats take biggest US House majority since 1992** — 258 seats.
- **Marquez wins eighth MotoGP title**, equalling Agostini.
- **Delta outage delays 1,600 flights** as Thanksgiving travel begins.

## How it works

`main.ts` copies the image in `assets/entry.png` byte-for-byte to
`$MAKEFUN_OUTPUT_DIR/entry.png`. The program draws nothing — the image is a
single realistic broadsheet photograph generated for this entry.
Image: 1024 x 683 px, 253,373 bytes (JPEG bytes, within the 1 MiB / 1024 px gate).

Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
