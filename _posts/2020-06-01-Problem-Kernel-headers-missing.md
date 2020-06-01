---
layout: post
titulo: "Problem: Kernel headers missing"
author: henryjr
data: 31/05/2020
image: default.jpg
tag: Kernel
resumo: "Problem: Kernel headers missing"
---
Solution
Check that your system is up to date and sources.list is fine.

```
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install linux-headers-$(uname -r)
```

That should fix it.