yarn build
git add dist -f
git commit -m "deploy"
git push origin `git subtree split --prefix dist origin`:gh-pages --force