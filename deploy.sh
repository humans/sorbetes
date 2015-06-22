#!/usr/env/bash

cp -R dist res

echo "Checking out github pages."
git checkout gh-pages

echo "Updating assets"
rm -rf images index.html css js
cp -R res/* .

git add images index.html js css
git commit -m 'Deploying github pages.'

git checkout master
rm -rf res

git push origin gh-pages
