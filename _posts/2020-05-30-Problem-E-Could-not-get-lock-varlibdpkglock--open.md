---
layout: post
titulo: "Problem: E: Could not get lock /var/lib/dpkg/lock – open"
author: henryjr
data: 30/05/2020
image: default.jpg
tag: dpkg
resumo: "Problem: E: Could not get lock /var/lib/dpkg/lock – open"
---
E: Unable to lock the administration directory (/var/lib/dpkg/), is another process using it?
Solution

Check that you don’t have any other software open, that can install packages, like Synaptic.

If not, run these:

```
sudo rm /var/lib/apt/lists/lock
sudo rm /var/cache/apt/archives/lock
sudo rm /var/lib/dpkg/lock
```

That should fix it.