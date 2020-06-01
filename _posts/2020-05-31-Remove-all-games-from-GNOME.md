---
layout: post
titulo: "Remove all games from GNOME"
author: henryjr
data: 31/05/2020
image: default.jpg
tag: games
resumo: "Just run these two commands as root and you get rid of them."
---
(I’m just using sudo, if you don’t have sudo, just type su on terminal)

```
sudo apt-get purge gnome-2048 aisleriot atomix gnome-chess five-or-more hitori iagno gnome-klotski lightsoff gnome-mahjongg gnome-mines gnome-nibbles quadrapassel four-in-a-row gnome-robots gnome-sudoku swell-foop tali gnome-taquin gnome-tetravex

sudo apt-get autoremove
```

That should fix it.