---
layout: post
titulo: "Conhecendo o Brave"
author: Reginaldo
data: 01/06/2020
image: brave-browser.png
tag: browser
resumo: "Secure, Fast & Private Web Browser with Adblocker"
---

O que é Brave?

Brave é um browser, software livre e de código aberto [4], desenvolvido pela Brave Software Inc., e baseado no browser Chromium, focado em privacidade e segurança online, que bloqueia por default anúncios e rastreamento virtual.

Desde 2018, o Brave suporta: Windows, Linux, macOS, Android e iOS.

O Brave permite que os usuários suportem os sites que visitam usando BAT (Basic Attention Token) [1]. Os usuários podem ganhar BAT assistindo anúncios ou acrescentando fundos á sua carteira recebem 70% da receita gerada. Os 30% restantes são divididos entre a Brave e o publicador do anúncio [2].

A plataforma de troca de anúncios Basic Attention Token da Brave Software recebeu investimento da Danhua Capital, Digital Currency Group, Foundation Capital, Founders Fund, Huiyin Blockchain Venture Pantera Capital e Propel Venture Partners [3].

# Instalação do Brave Browser nas principais distros Linux
## Debian e derivados

```
sudo apt install apt-transport-https curl
curl -s https://brave-browser-apt-release.s3.brave.com/brave-core.asc | sudo apt-key --keyring /etc/apt/trusted.gpg.d/brave-browser-release.gpg add -
echo "deb [arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main" | sudo tee /etc/apt/sources.list.d/brave-browser-release.list
sudo apt update
sudo apt install brave-browser
```
## RHEL/CentOS, Fedora

```
sudo dnf install dnf-plugins-core
sudo dnf config-manager --add-repo https://brave-browser-rpm-release.s3.brave.com/x86_64/
sudo rpm --import https://brave-browser-rpm-release.s3.brave.com/brave-core.asc
sudo dnf install brave-browser
```

## openSUSE

```
sudo zypper install curl
sudo rpm --import https://brave-browser-rpm-release.s3.brave.com/brave-core.asc
sudo zypper addrepo https://brave-browser-rpm-release.s3.brave.com/x86_64/ brave-browser
sudo zypper install brave-browser
```

# Referências

[1] [Keck, Catie. Brave Wants to Destroy the Ad Business by Paying You to Watch Ads in its Web Browser](https://gizmodo.com/brave-wants-to-destroy-the-ad-business-by-paying-you-to-1834283860)

[2] [Brave Ads History Collection Privacy Policy](https://brave.com/hc-privacy/)

[3] [Basic Attention Token](https://basicattentiontoken.org/)

[4] [Repositório brave-browser no Github](https://github.com/brave/brave-browser)

[5] [https://brave.com](https://brave.com)