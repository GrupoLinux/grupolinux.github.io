---
layout: post
titulo: "Repair Grub no Debian e derivados"
author: henryjr
data: 17/05/2020
image: grub-rescue.png
tag: grub
resumo: "Comandos simples para restaurar seu Grub."
---
O uso é basicamente muito simples, use o terminal para os seguintes comandos.

Etapa 1. Inicialize seu USB na inicialização do sistema. Selecione a opção "live".

Etapa 2. Inicialize no Sistema Linux, abra o Terminal. Digite os seguintes comandos:

```
mount /dev/sda6 /mnt  
for i in /dev /sys /run /proc; do mount --bind "$i" "/mnt$i"; done  
chroot /mnt  
grub-install /dev/sda  
update-grub  
exit
```

Etapa 3. Agora reinicie o sistema, você verá o menu de inicialização mostrando seu grub.

Na maioria das vezes, o Debian/Grub é reparado pelas etapas acima, mas, excepcionalmente, você não pode, por isso é necessário executar mais comandos.

Etapa 4. Inicialize o Live novamente, abra o terminal digite os seguintes comandos:

```
apt-get install os-prober  
os-prober  
update-grub
```

Isso ajudará muito a reparar o Grub.

Boa sorte!