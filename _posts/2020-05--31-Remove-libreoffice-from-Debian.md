---
layout: post
titulo: "Remove libreoffice from Debian"
author: henryjr
data: 31/05/2020
image: default.jpg
tag: libreoffice
resumo: "Como desinstalar libreoffice-core do Debian"
---
Desinstalar libreoffice
Para desinstalar somente libreoffice do Debian 9 execute no terminal:

```
sudo apt-get remove --purge libreoffice*
sudo apt-get clean
sudo apt-get autoremove
```

That should fix it.