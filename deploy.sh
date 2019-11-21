git pull
npm run build
find dist \( -name '*.css' -o -name '*.css' -o -name '*.html' \) -exec gzip --verbose --keep {} \;
scp -r dist/* d4g:/var/www/d4g/html/
