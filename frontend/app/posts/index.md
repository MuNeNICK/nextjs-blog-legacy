---
title: "CentOS8 Stream上でDockerおよびDocker-Composeの構築方法"
date: "2021/12/28"
---

# はじめに
今回はCentOS8 Stream上でDockerおよびDocker-Composeの構築方法を紹介します。
<br>

# 前提知識
## Dockerとは
> Dockerは、コンテナ仮想化を用いてアプリケーションを開発・配置・実行するためのオープンプラットフォームである。
> Dockerはコンテナ仮想化を用いたOSレベルの仮想化によりアプリケーションを開発・実行環境から隔離し、アプリケーションの素早い提供を可能にする。かつその環境自体をアプリケーションと同じようにコード（イメージ）として管理可能にする。
> Dockerを開発・テスト・デプロイに用いることで「コードを書く」と「コードが製品として実行される」間の時間的ギャップを大きく短縮できる。<br>
> https://www.docker.com/

<br>

## Docker-Composeとは
> Compose とは、複数のコンテナを定義し実行する Docker アプリケーションのためのツールです。
> Compose においては YAML ファイルを使ってアプリケーションサービスの設定を行います。コマンドを１つ実行するだけで、設定内容に基づいたアプリケーションサービスの生成、起動を行います。<br>
> https://docs.docker.jp/compose/overview.html

<br>

# 下準備
## CentOS8 Streamの構築
<br>

# Dockerの構築
Dockerの構築方法を紹介します。
<br>

## リポジトリの追加
以下のコマンドを実行し、Dockerのリポジトリを追加する。
```shell=
dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```
<br>

![](/uploads/upload_0166bf3f37c348c5940ab3bcdaa27e15.png)
<br>

## Dockerのインストール
以下のコマンドを実行し、Dockerをインストールする。
```shell=
dnf -y install --nobest docker-ce docker-ce-cli
```
<br>

![](/uploads/upload_20aa45b8175fb4ff5a6a2c2cf1da1ae2.png)

<br>

## Dockerの自動起動の有効化
以下のコマンドを実行し、Dockerの自動起動を有効化する。
```shell=
systemctl enable docker
```
<br>

![](/uploads/upload_7bb7bb8c62feb734edc4563a42a3a0fc.png)
<br>

## Dockerの起動
以下のコマンドを実行し、Dockerを起動する。
```shell=
systemctl start docker
```
<br>

![](/uploads/upload_67ab512c700494c495d7669abdef4ec0.png)
<br>


## Dockerの起動の確認
以下のコマンドを実行し、Dockerの起動を確認する。
```shell=
systemctl status docker
```
<br>

![](/uploads/upload_20a68617b575e409ecbf8efd334d88f6.png)
<br>


# Docker-Composeの構築
Docker-Composeの構築方法を紹介します。
<br>

## wgetのインストール
以下のコマンドを実行し、wgetをインストールする。
```shell=
dnf -y install wget
```
<br>

![](/uploads/upload_6c5dd988d80046e3c14421893c7adb4b.png)
<br>

## Docker-Composeのダウンロード
以下のコマンドを実行し、Docker-Composeをダウンロードする。

※2.2.3の部分は現在(2022/03/03)の時点の最新バージョンで有るため、都度以下のサイトで最新バージョンを確認し、書き換えること。
https://github.com/docker/compose/releases/

```shell=
wget -O /usr/local/bin/docker-compose https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-linux-x86_64
```
<br>

![](/uploads/upload_5896692d3286b75996eb32990ea6cc3d.png)

<br>

## Docker-Composeに実行権限を付与する
以下のコマンドを実行し、Docker-Composeに実行権限を付与する。
```shell=
chmod +x /usr/local/bin/docker-compose
```
<br>

![](/uploads/upload_639ef0c161541eecc12c3cdf8f4c6031.png)
<br>


## Docker-Composeの構築の確認
以下のコマンドを実行し、Docker-Composeの構築を確認する。
```shell=
docker-compose --version
```
<br>

![](/uploads/upload_581bc7981e637cc502ab48ce275629a7.png)
<br>

# おわりに
以上でDocker及びDocker-Compose環境の構築は終わりです。お疲れさまでした。
今後、DockerやDocker-Composeを使用した記事も作成していきたいと思います。
