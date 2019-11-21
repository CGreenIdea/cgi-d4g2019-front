git pull
npm i
npm run build
find dist \( -name '*.css' -o -name '*.css' -o -name '*.html' \) -exec gzip --verbose --keep {} \;
rsync -vrzt --del --stats dist/ d4g:/var/www/d4g/html/
