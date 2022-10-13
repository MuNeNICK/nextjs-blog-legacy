#!/bin/bash

cd /usr/src/app

if [ ! -e package.json ]; then
    cd /usr/src/app
    yarn create next-app . --typescript
fi

yarn add -D prettier eslint-config-prettier
yarn add gray-matter
yarn add -D tailwindcss postcss autoprefixer
yarn tailwindcss init -p
yarn add @headlessui/react
yarn add @heroicons/react
yarn add unified remark-parse remark-rehype rehype-stringify
yarn add -D @tailwindcss/typography
yarn add next-seo
yarn add remark-toc
yarn add rehype-slug
yarn add remark-prism
yarn add rehype-parse rehype-react
yarn add remark-unwrap-images
yarn add remark-gfm
yarn add nextjs-progressbar


yarn dev
