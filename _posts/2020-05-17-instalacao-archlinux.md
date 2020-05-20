---
layout: post
titulo: "Howto de instalação do Arch Linux"
author: reginaldo
data: 17/05/2020
image: archlinux-install.jpg
tag: ArchLinux
resumo: "Guia de instalação do Arch Linux"
---
Download da imagem ISO: [magnet ISO ArchLinux](magnet:?xt=urn:btih:f95c371d5609d15f6615139be84edbb5b94a79bc&dn=archlinux-2020.05.01-x86_64.iso&tr=udp://tracker.archlinux.org:6969&tr=http://tracker.archlinux.org:6969/announce)

### Verificar a assinatura da imagem ISO

`$ gpg --keyserver-options auto-key-retrieve --verify archlinux-versão-x86_64.iso.sig`

OU a partir de uma instalação existente

`$ pacman-key -v archlinux-versão-x86_64.iso.sig`

Após gravar a imagem ISO do Arch Linux, inicialize o ambiente

Quando o menu do Arch aparecer, selecione Boot Arch Linux e pressione Enter para entrar no ambiente de instalação

### Definir o layout do teclado

Exibir o mapa de teclado

`# ls /usr/share/kbd/keymaps/**/*.map.gz`

Se o teclado for ABNT2

`# loadkeys br-abnt2`

Case o teclado for de português de Portugal

`# loadkeys pt-latin1`

### Definir o idioma do ambiente

O ambiente live vem em inglês (locale en\_US.UTF-8) por padrão, mas você pode alterá-lo para executar as etapas de instalação usando o idioma desejado.

Para português brasileiro, descomente pt\_BR.UTF-8 UTF-8 e qualquer outro locale desejado em /etc/locale.gen e gere-os com:

`# locale-gen`

Então, exporte a variável LANG acrescentando o idioma e codificação desejados. Por exemplo, para português brasileiro seria:

`# export LANG=pt_BR.UTF-8`

Para português de Portugal, use pt\_PT.UTF-8 UTF-8 em vez do "pt\_BR".

### Atualizar o relógio do sistema

`# timedatectl set-ntp true`

### Particionamento do disco rígido

Exibe o dispositivo do disco rígido com o comando

`# fdisk -l`

Resultados terminando em rom, loop ou airoot podem ser ignorados.

Se for instalação apenas Linux no computador, então precisará criar uma partição EFI, se for UEFI

`# cfdisk /dev/sda`

/boot/efi de 100MB  
/ de 20GB  
/home restante do espaço

### Formatação das partições criadas

```
# mkfs.ext4 /dev/sda1 (/boot/efi)
# mkfs.ext4 /dev/sda2 (/)
# mkfs.ext4 /dev/sda3 (/home)
```

### Montar o sistema de arquivo

```
# mount /dev/sda1 /boot/efi
# mount /dev/sda2 /
# mount /dev/sda3 /home
```

### Instalação de pacotes essenciais

`# pacstrap /mnt base linux linux-firmware`

### Configurar o sistema

`# genfstab -U / >> /etc/fstab`

### Chroot

`# arch-chroot /`

### Fuso horário

```
# ln -sf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime
# hwclock --systohc
```

### Localização

Edite /etc/locale.gen e descomente pt\_BR.UTF-8 UTF-8 com qualquer outro locale necessário. Gere os locales executando:

`# locale-gen`

Crie o arquivo locale.conf e defina a variável LANG adequadamente: `/etc/locale.conf LANG=pt_BR.UTF-8`

Se você definir o layout do teclado, torne as alterações persistentes em vconsole.conf:

```
/etc/vconsole.conf  
KEYMAP=br-abnt2
```

### Crie o arquivo hostname:

```
# vim /etc/hostname
Saitam
```

Adicione entradas correspondentes ao hosts

```
# vim /etc/hosts
127.0.0.1 localhost.localdomain localhost  
::1 localhost.localdomain localhost  
127.0.1.1 meuhostname.localdomain Saitam
```

### Initramfs

Criar um novo initramfs geralmente não é necessário, porque mkinitcpio foi executado na instalação do pacote de kernel com pacstrap.

`# mkinitcpio -P`

### Password do root

`# passwd`

### Gerenciador de boot

Nesse howto foi usado o GRUB

```
# grub-install --target=x86_64-efi --efi-directory=esp --bootloader-id=GRUB
```

### Reincie

Saia de ambiente chroot digitando exit ou pressionando Ctrl+D.

### Referência:

  
[Wiki instalação do ArchLinux](https://wiki.archlinux.org/index.php/Installation_guide)  
Feito!