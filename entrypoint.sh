#!/bin/bash

cd /usr/src/app

if [ ! -e package.json ]; then
    cd /usr/src/app
    yarn create next-app . --typescript
fi

yarn add -D prettier eslint-config-prettier

yarn add remark remark-html gray-matter

yarn dev
