---
layout: post
title: "Git deploy na VPS"
description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
date:   2020-05-16 22:30:00 -0300
categories: vps
by: 'Reginaldo'
icon: 'credit-card'
questions:
  - question: 'Git deploy na VPS'
    answer: '
		<p>Considerando que já tenha configurado o ambiente e esteja funcionando na VPS, incluindo o GIT. Chegou a hora de automatizar o deploy da aplicação. Esse é o objetivo deste post.</p>

		<p>Na VPS cria dois diretórios, uma para o repositório e outro para aplicação</p>

		<p>repositório: <b>/var/repo/projeto.git</b></p>
		<p>aplicação: <b>/var/www/html/projeto</b></p>

		<code>
		# mkdir /var/repo
		# mkdir /var/repo/projeto.git
		# cd /var/repo/projeto.git
		# git init --bare
		# cd hooks
		# vim post-receive
		</code>

		<code>
		#!/bin/bash
		git --work-tree=/var/www/html/projeto --git-dir=/var/repo/projeto.git checkout -f
		</code>

		<p>ESC +:wq (Salvar e sair do editor Vim)</p>

		<code>
		# chmod +x post-receive
		# chown -R usuario:usuario /var/repo/projeto.git

		# mkdir /var/www/html/projeto
		# chown  R www-data:www-data /var/www/html/projeto
		</code>

		<p>Agora na máquina de desenvolvimento</p>
		<p>Acesse o diretório do projeto, execute</p>
		<p>Adicionar o repositório deploy da VPS no remote</p>

		<code>
		git remote add deploy ssh://usuario@IP_VPS/var/repo/projeto.git
		git add .
		git commit -m "primeiro commit"
		git push origin master
		git push deploy master
		</code>
		
		<p>Para visualizar os commits</p>
		
		<code>
		git log --all --graph --decorate --oneline
		</code>

		<p>Caso ocorra algum erro de permissão, execute o hooks/post-receive manualmente</p>

		<code>
		#cd /var/repo/projeto.git/hooks
		#./post-receive
		</code>

		Feito!'
    image: "posts/vps.jpg"
---
