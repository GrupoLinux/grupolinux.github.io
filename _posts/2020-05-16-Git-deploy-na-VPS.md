---
layout: post
titulo: "Git deploy na VPS"
author: Saitam10
data: 19/05/2020
image: vps.jpg
tag: vps
resumo: "Configurado o ambiente."
---
Considerando que já tenha configurado o ambiente e esteja funcionando na VPS, incluindo o GIT. Chegou a hora de automatizar o deploy da aplicação. Esse é o objetivo deste post.

Na VPS cria dois diretórios, uma para o repositório e outro para aplicação

repositório: **/var/repo/projeto.git**

aplicação: **/var/www/html/projeto**

```
# mkdir /var/repo  
# mkdir /var/repo/projeto.git  
# cd /var/repo/projeto.git  
# git init --bare  
# cd hooks  
# vim post-receive
```

```
#!/bin/bash  
git --work-tree=/var/www/html/projeto --git-dir=/var/repo/projeto.git checkout -f
```

ESC +:wq (Salvar e sair do editor Vim)

```
# chmod +x post-receive  
# chown -R usuario:usuario /var/repo/projeto.git
```
  
```
# mkdir /var/www/html/projeto  
# chown R www-data:www-data /var/www/html/projeto
```

Agora na máquina de desenvolvimento

Acesse o diretório do projeto, execute

Adicionar o repositório deploy da VPS no remote

```
git remote add deploy ssh://usuario@IP_VPS/var/repo/projeto.git  
git add .  
git commit -m "primeiro commit"  
git push origin master  
git push deploy master
```

Para visualizar os commits

`git log --all --graph --decorate --oneline`

Caso ocorra algum erro de permissão, execute o hooks/post-receive manualmente

```
#cd /var/repo/projeto.git/hooks  
#./post-receive
``` 

Feito!