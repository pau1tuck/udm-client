#!/bin/bash

datetime=$(date "+%Y-%m-%d_%H:%M%Z")

echo $datetime

cd ..
git add .
git commit -m \"$datetime\"
git push -u origin main
