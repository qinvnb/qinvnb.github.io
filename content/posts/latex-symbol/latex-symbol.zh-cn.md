---
title: "LaTeX 常用符号大全"
date: 2025-06-13T10:00:00+08:00
description: "LaTeX 常用符号大全，可用于查询。"
categories: ["工具"]
tags: ["LaTeX"]
slug: "latex-symbol"  #自定义 URL
cover: '/images/posts/latex-symbol.png'

draft: false  # 是否为草稿
katex: true
mermaid: true
---
## LaTeX 常用符号大全

> 本文适合：LaTeX 初学者  

---

### 前言

在撰写学术论文、技术报告或数学笔记时，LaTeX 凭借其强大的数学排版能力，成为科研界的“标准语言”。然而，面对琳琅满目的符号，初学者常陷入“我想写那个符号，但不知道命令是什么”的困境。

本文将系统整理 **LaTeX 中最常用、最实用的数学与逻辑符号**，帮助初学者快速掌握或查询。

---

### 一、希腊字母（Greek Letters）

希腊字母是数学公式中的“常客”，LaTeX 中通过反斜杠加英文名直接输入。

| 符号 | 命令 | 符号 | 命令 |
|------|------|------|------|
| $\alpha$ | `\alpha` | $\Alpha$ | `\Alpha`（不常用） |
| $\beta$ | `\beta` | $\Beta$ | `\Beta` |
| $\gamma$ | `\gamma` | $\Gamma$ | `\Gamma` |
| $\delta$ | `\delta` | $\Delta$ | `\Delta` |
| $\epsilon$ | `\epsilon` | $\varepsilon$ | `\varepsilon`（变体） |
| $\zeta$ | `\zeta` | $\Eta$ | `\Eta` |
| $\eta$ | `\eta` | $\Theta$ | `\Theta` |
| $\theta$ | `\theta` | $\vartheta$ | `\vartheta`（变体） |
| $\iota$ | `\iota` | $\Iota$ | `\Iota` |
| $\kappa$ | `\kappa` | $\Kappa$ | `\Kappa` |
| $\lambda$ | `\lambda` | $\Lambda$ | `\Lambda` |
| $\mu$ | `\mu` | $\Mu$ | `\Mu` |
| $\nu$ | `\nu` | $\Nu$ | `\Nu` |
| $\xi$ | `\xi` | $\Xi$ | `\Xi` |
| $\pi$ | `\pi` | $\Pi$ | `\Pi` |
| $\rho$ | `\rho` | $\Rho$ | `\Rho` |
| $\sigma$ | `\sigma` | $\Sigma$ | `\Sigma` |
| $\tau$ | `\tau` | $\Tau$ | `\Tau` |
| $\upsilon$ | `\upsilon` | $\Upsilon$ | `\Upsilon` |
| $\phi$ | `\phi` | $\varphi$ | `\varphi`（变体） |
| $\Phi$ | `\Phi` |      |      |
| $\chi$ | `\chi` | $\Chi$ | `\Chi` |
| $\psi$ | `\psi` | $\Psi$ | `\Psi` |
| $\omega$ | `\omega` | $\Omega$ | `\Omega` |

### 二、数学运算符（Operators）

| 符号 | 命令 | 说明 |
|------|------|------|
| $+$ | `+` | 加 |
| $-$ | `-` | 减 |
| $\times$ | `\times` | 乘（向量叉乘） |
| $\cdot$ | `\cdot` | 点乘（推荐用于标量乘） |
| $\div$ | `\div` | 除 |
| $\pm$ | `\pm` | 正负 |
| $\mp$ | `\mp` | 负正 |
| $\sqrt{x}$ | `\sqrt{x}` | 平方根 |
| $\sqrt[n]{x}$ | `\sqrt[n]{x}` | n次根 |
| $x^2$ | `x^2` | 上标（幂） |
| $x_1$ | `x_1` | 下标 |
| $\sum_{i=1}^{n} a_i$ | `\sum_{i=1}^{n} a_i` | 求和 |
| $\prod_{i=1}^{n} a_i$ | `\prod_{i=1}^{n} a_i` | 连乘 |
| $\int_a^b f(x)\,dx$ | `\int_a^b f(x)\,dx` | 定积分 |
| $\iint_D f(x,y)\,dA$ | `\iint_D f(x,y)\,dA` | 二重积分 |
| $\oint_C \vec{F} \cdot d\vec{r}$ | `\oint_C \vec{F} \cdot d\vec{r}` | 环路积分 |

### 三、集合与关系符号（Set & Relations）

| 符号 | 命令 | 说明 |
|------|------|------|
| $\in$ | `\in` | 属于 |
| $\notin$ | `\notin` | 不属于 |
| $\subset$ | `\subset` | 真子集 |
| $\subseteq$ | `\subseteq` | 子集（含相等） |
| $\supset$ | `\supset` | 真超集 |
| $\supseteq$ | `\supseteq` | 超集（含相等） |
| $\cup$ | `\cup` | 并集 |
| $\cap$ | `\cap` | 交集 |
| $\setminus$ | `\setminus` | 差集 |
| $\emptyset$ | `\emptyset` | 空集 |
| $\varnothing$ | `\varnothing` | 另一种空集符号 |
| $\forall$ | `\forall` | 全称量词（对任意） |
| $\exists$ | `\exists` | 存在量词 |
| $\nexists$ | `\nexists` | 不存在 |
| $\therefore$ | `\therefore` | 所以 |
| $\because$ | `\because` | 因为 |

---

### 四、箭头符号（Arrows）

| 符号 | 命令 | 说明 |
|------|------|------|
| $\rightarrow$ | `\rightarrow` | 右箭头 |
| $\leftarrow$ | `\leftarrow` | 左箭头 |
| $\Rightarrow$ | `\Rightarrow` | 双线右推 |
| $\Leftarrow$ | `\Leftarrow` | 双线左推 |
| $\leftrightarrow$ | `\leftrightarrow` | 双向 |
| $\Leftrightarrow$ | `\Leftrightarrow` | 双向等价 |
| $\longrightarrow$ | `\longrightarrow` | 长右箭头 |
| $\longleftarrow$ | `\longleftarrow` | 长左箭头 |
| $\Longrightarrow$ | `\Longrightarrow` | 长双线推 |
| $\uparrow$ | `\uparrow` | 向上 |
| $\downarrow$ | `\downarrow` | 向下 |
| $\updownarrow$ | `\updownarrow` | 上下 |
| $\mapsto$ | `\mapsto` | 映射（如 $x \mapsto x^2$） |

---

### 五、特殊函数与算子

| 符号 | 命令 | 说明 |
|------|------|------|
| $\sin x$ | `\sin x` | 正弦 |
| $\cos x$ | `\cos x` | 余弦 |
| $\tan x$ | `\tan x` | 正切 |
| $\log x$ | `\log x` | 对数 |
| $\ln x$ | `\ln x` | 自然对数 |
| $\exp(x)$ | `\exp(x)` | 指数函数 |
| $\max(a,b)$ | `\max(a,b)` | 最大值 |
| $\min(a,b)$ | `\min(a,b)` | 最小值 |
| $\det A$ | `\det A` | 行列式 |
| $\nabla f$ | `\nabla f` | 梯度 |
| $\partial x$ | `\partial x` | 偏导 |
| $\frac{\partial f}{\partial x}$ | `\frac{\partial f}{\partial x}` | 偏导数 |

---

### 六、分隔符与括号（Delimiters）

LaTeX 中的括号有时会“太小”，使用 `\left` 和 `\right` 自动尺寸放大：

| 符号 | 命令 |
|------|------|
| $($ | `(` |
| $)$ | `)` |
| $[$ | `[` |
| $]$ | `]` |
| $\\{ \\}$ | `\{ \}`（注意反斜杠） |
| $| \cdot |$ | `\| \cdot \|$ |
| $\langle \rangle$ | `\langle \rangle` |
| $\lfloor x \rfloor$ | `\lfloor x \rfloor` | 向下取整 |
| $\lceil x \rceil$ | `\lceil x \rceil` | 向上取整 |

### 七、矩阵与向量（Matrices & Vectors）

| 符号 | 命令 | 说明 |
|------|------|------|
| $\vec{v}$ | `\vec{v}` | 向量（短箭头） |
| $\mathbf{v}$ | `\mathbf{v}` | 粗体向量 |
| $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ | `\begin{bmatrix} ... \end{bmatrix}` | 方括号矩阵 |
| $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ | `\begin{pmatrix} ... \end{pmatrix}` | 圆括号矩阵 |
| $\begin{vmatrix} a & b \\ c & d \end{vmatrix}$ | `\begin{vmatrix} ... \end{vmatrix}` | 行列式 |
| $\begin{matrix} a & b \\ c & d \end{matrix}$ | `\begin{matrix} ... \end{matrix}` | 无括号矩阵 |

---

### 八、字体与样式（Fonts & Styles）

| 符号 | 命令 | 说明 |
|------|------|------|
| $\mathcal{A}$ | `\mathcal{A}` | 花体（常用于集合、算子） |
| $\mathbb{R}$ | `\mathbb{R}` | 黑板粗体（实数、整数等） |
| $\mathbf{v}$ | `\mathbf{v}` | 粗体（向量、矩阵） |
| $\mathrm{dx}$ | `\mathrm{dx}` | 正体（如微分） |
| $\tilde{x}$ | `\tilde{x}` | 波浪上标 |
| $\hat{x}$ | `\hat{x}` | 帽子（单位向量） |
| $\dot{x}$ | `\dot{x}` | 单点导数（物理常用） |
| $\ddot{x}$ | `\ddot{x}` | 双点导数 |

---

**参考文献**  
- LaTeX Project: https://www.latex-project.org/  
- Overleaf LaTeX Math Symbols: https://www.overleaf.com/learn/latex/Mathematical_expressions  
- Mittelbach, F. & Goossens, M. *The LaTeX Companion* (2nd ed.)

---