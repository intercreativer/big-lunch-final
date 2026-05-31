Ramona font files go here.

The site uses Ramona (by Cristian Tournier; Cyrillic by Denis Ignatov),
which is free for personal and commercial use but is NOT on Google Fonts,
so it must be self-hosted.

Expected files (referenced from css/styles.css):

    Ramona-Light.woff2   (weight 300)
    Ramona-Light.ttf     (fallback)
    Ramona-Bold.woff2    (weight 700)
    Ramona-Bold.ttf      (fallback)

If your files have different names, either rename them to the above or
tell me the names and I'll update the @font-face blocks in css/styles.css.

Tip: .woff2 is best for the web. If you only have .ttf/.otf, drop those in
and I'll convert / adjust the @font-face src list.

Until the files are present, the site falls back to Baloo 2 (a rounded
Cyrillic-capable Google Font) so the layout still looks right.
