yarn build
git add dist -f
git add .
git commit -m "deploy"
git subtree push --prefix dist origin gh-pages -f