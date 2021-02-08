ttfs=$(ls icons/*.ttf)
for ttf in $ttfs; do
    sfnt2woff-zopfli $ttf
done