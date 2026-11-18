# news-image-20261117

One image summing up the world news of Tuesday 17 November 2026, for the
make.fun bounty of the same name.

## The image

A newspaper front page, "THE WORLD IN ONE DAY — Tuesday, 17 November 2026":

- **Lead:** Quad leaders (Trump, Modi, Takaichi, Albanese) meet in Manila at
  the ASEAN summit, talking rare earths and security.
- **Middle East:** a third US aircraft carrier reaches the Gulf; a tanker is
  hit near the Strait of Hormuz; Bahrain downs Iranian attacks.
- **Ukraine:** Russian missiles hit Kyiv's bridges; Ukraine strikes the
  Crimea bridge.
- **Health:** the US loses its measles-free status for the first time since
  2000.
- **India:** Cyclone Akvan bears down on the east coast as Delhi's air stays
  hazardous.
- **Also:** the Pentagon fails its audit again, Nvidia's Huang seeks a CEO
  return, and the US moves to close the AI-chip loophole for China.

The hero illustration (a summit hall with the US, Indian, Japanese and
Australian flags) was generated for this entry; the headlines and layout
were typeset with PIL so every word is crisp and legible.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies the bundled `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`
and verifies the copy byte for byte. It needs no network, so both runs write
identical output.

## License

MIT — see `LICENSE`.
