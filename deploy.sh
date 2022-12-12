#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 拷贝目录和文件
# cp -r ../../../.github ./

git init
git add .
git commit -m '更新'
git push -f git@github.com:hjhsy/note.git master:note
git push -f git@gitee.com:hu-jinghao/note.git master:note

cd -