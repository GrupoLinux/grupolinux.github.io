---
layout: post
titulo: "Crie o seu próprio Dropbox com o Nextcloud"
author: saitam10
data: 06/06/2020
image: nextcloud_logo.png
tag: Nextcloud
resumo: "Nextcloud: easy to Install, Manage and Use"
---

O que é Nextcloud?

Nextcloud tem funcionalidade muito semelhante ao Dropbox, com a diferença de ser código aberto, e assim permitir que qualquer pessoa instalar e operá-lo sem custo em um servidor privado. Nextcloud é um fork do projeto ownCloud.

O objetivo deste post é de apresentar a forma de usar o Nextcloud no Docker. No entanto, se ainda não tiver o Docker instalado,  
[https://mundodacomputacaointegral.blogspot.com/2019/10/instalando-docker-e-docker-compose-no-Linux.html](verifica aqui a instalação do Docker e Docker-compose no Linux)

## Instalação do Nextcloud no Docker

```
docker run -d -p 8080:80 -v $HOME/nextcloud:/var/www/html nextcloud
Unable to find image 'nextcloud:latest' locally
latest: Pulling from library/nextcloud
afb6ec6fdc1c: Pull complete 
3d895574014b: Pull complete 
c309fdad6410: Pull complete 
c201f6a5d6f9: Pull complete 
e87f853892aa: Pull complete 
998b2113b400: Pull complete 
b3c0b4710d3b: Pull complete 
c79fb2b38801: Pull complete 
30aa6f0dd423: Pull complete 
8af9a337c36d: Pull complete 
64ec85e06910: Pull complete 
606f88b4f608: Pull complete 
845e768a44c5: Pull complete 
232824f4bf64: Pull complete 
e62b2704afd5: Pull complete 
3fb461b8f323: Pull complete 
5a8c7e728bd1: Pull complete 
840cc11060b3: Pull complete 
26156e8cea36: Pull complete 
2413ad1c2967: Pull complete 
56e02c3217ca: Pull complete 
Digest: sha256:b1bf8942e85c76aa86362a9ec7eef7ac12ac3c0f3106dd6a0ee89871186dff73
Status: Downloaded newer image for nextcloud:latest
92d2a3be6ec67012df6441d8350a9010ab772662a2970834e3c914e09b8c4e86
```

Verificar a imagem nextcloud 

```
$ docker ps
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
92d2a3be6ec6 nextcloud "/entrypoint.sh apac…" 14 minutes ago Up 14 minutes 0.0.0.0:8080->80/tcp suspicious_mendel
```

No browser acessar http://localhost:8080

Na primeira vez é feito o cadastro com usuário e senha, nas próximas vezes só acessar com as credenciais que forem cadastradas.

Confira o volume no diretório definido mapeando entre a máquina x container nextcloud.

Feito!

# Referência

[https://mundodacomputacaointegral.blogspot.com/2020/06/crie-seu-proprio-dropbox-com-o-nextcloud.html](https://mundodacomputacaointegral.blogspot.com/2020/06/crie-seu-proprio-dropbox-com-o-nextcloud.html) 
