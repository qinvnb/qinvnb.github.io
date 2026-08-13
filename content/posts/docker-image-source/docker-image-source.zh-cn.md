---
title: "Docker 国内镜像源"
date: 2026-08-13T15:30:00+08:00
description: "整理可用的 Docker 国内镜像源及其使用方法。"
categories: ["工具"]
tags: ["Docker", "镜像源"]
slug: "docker-image-source"
draft: false
---

## 镜像源地址

下面整理了一些可用的 Docker 国内镜像源，大致按访问速度从快到慢排列。镜像站的可用性可能随时变化，若拉取失败，请切换其他地址重试。

| 镜像源 | 状态 |
|---|---|
| `docker.m.daocloud.io` | 正常 |
| `docker.1ms.run` | 正常 |
| `ccr.ccs.tencentyun.com` | 正常 |
| `hub.xdark.top` | 正常 |
| `hub.fast360.xyz` | 正常 |
| `docker-0.unsee.tech` | 正常 |
| `docker.xuanyuan.me` | 正常 |
| `docker.tbedu.top` | 正常 |
| `docker.hlmirror.com` | 正常 |
| `doublezonline.cloud` | 正常 |
| `docker.melikeme.cn` | 正常 |
| `image.cloudlayer.icu` | 正常 |
| `dislabaiot.xyz` | 正常 |
| `freeno.xyz` | 正常 |
| `docker.kejilion.pro` | 正常 |

## 使用方法

选择一个镜像源，将其地址添加到原镜像名称前即可。

例如，原命令为：

```bash
docker pull aaa/bbb/ccc
```

使用 `docker.m.daocloud.io` 后：

```bash
docker pull docker.m.daocloud.io/aaa/bbb/ccc
```

以 Docker Hub 官方镜像 `nginx` 为例：

```bash
docker pull docker.m.daocloud.io/library/nginx:latest
```

> 镜像源由第三方提供。请勿在来源不可信的镜像中保存账号密码、访问令牌等敏感信息。

