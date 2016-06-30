#!/usr/bin/env bash
# https://gist.github.com/cobyism/4730490

git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages