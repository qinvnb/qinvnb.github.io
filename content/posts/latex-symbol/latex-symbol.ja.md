---
title: "LaTeX よく使う記号一覧"
date: 2025-06-13T10:00:00+08:00
description: "検索・参照に使える、LaTeX のよく使う記号一覧です。"
categories: ["ツール"]
tags: ["LaTeX"]
slug: "latex-symbol"
cover: "/images/posts/latex-symbol.webp"
draft: false
katex: true
mermaid: true
---

## LaTeX よく使う記号一覧

> 対象：LaTeX 初心者

---

### はじめに

学術論文、技術レポート、数学ノートを作成する際、LaTeX は強力な数式組版機能によって研究分野の「標準言語」となっています。しかし、数多くの記号を前にすると、初心者は「使いたい記号は分かるのに、コマンドが分からない」と悩みがちです。

この記事では、**LaTeX で最もよく使われる実用的な数学・論理記号**を体系的にまとめ、学習や検索に役立つ一覧として紹介します。

---

### 1. ギリシャ文字

ギリシャ文字は数式で頻繁に使われます。LaTeX では、バックスラッシュの後に英語名を入力します。

| 記号 | コマンド | 記号 | コマンド |
|---|---|---|---|
| $\alpha$ | `\alpha` | $\Alpha$ | `\Alpha`（使用頻度は低い） |
| $\beta$ | `\beta` | $\Beta$ | `\Beta` |
| $\gamma$ | `\gamma` | $\Gamma$ | `\Gamma` |
| $\delta$ | `\delta` | $\Delta$ | `\Delta` |
| $\epsilon$ | `\epsilon` | $\varepsilon$ | `\varepsilon`（異体字） |
| $\zeta$ | `\zeta` | $\Eta$ | `\Eta` |
| $\eta$ | `\eta` | $\Theta$ | `\Theta` |
| $\theta$ | `\theta` | $\vartheta$ | `\vartheta`（異体字） |
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
| $\phi$ | `\phi` | $\varphi$ | `\varphi`（異体字） |
| $\Phi$ | `\Phi` | | |
| $\chi$ | `\chi` | $\Chi$ | `\Chi` |
| $\psi$ | `\psi` | $\Psi$ | `\Psi` |
| $\omega$ | `\omega` | $\Omega$ | `\Omega` |

### 2. 数学演算子

| 記号 | コマンド | 説明 |
|---|---|---|
| $+$ | `+` | 加算 |
| $-$ | `-` | 減算 |
| $\times$ | `\times` | 乗算（ベクトルの外積） |
| $\cdot$ | `\cdot` | ドット積（スカラー積に推奨） |
| $\div$ | `\div` | 除算 |
| $\pm$ | `\pm` | プラスマイナス |
| $\mp$ | `\mp` | マイナスプラス |
| $\sqrt{x}$ | `\sqrt{x}` | 平方根 |
| $\sqrt[n]{x}$ | `\sqrt[n]{x}` | n 乗根 |
| $x^2$ | `x^2` | 上付き文字（べき乗） |
| $x_1$ | `x_1` | 下付き文字 |
| $\sum_{i=1}^{n} a_i$ | `\sum_{i=1}^{n} a_i` | 総和 |
| $\prod_{i=1}^{n} a_i$ | `\prod_{i=1}^{n} a_i` | 総乗 |
| $\int_a^b f(x)\,dx$ | `\int_a^b f(x)\,dx` | 定積分 |
| $\iint_D f(x,y)\,dA$ | `\iint_D f(x,y)\,dA` | 二重積分 |
| $\oint_C \vec{F} \cdot d\vec{r}$ | `\oint_C \vec{F} \cdot d\vec{r}` | 周回積分 |

### 3. 集合と関係記号

| 記号 | コマンド | 説明 |
|---|---|---|
| $\in$ | `\in` | 属する |
| $\notin$ | `\notin` | 属さない |
| $\subset$ | `\subset` | 真部分集合 |
| $\subseteq$ | `\subseteq` | 部分集合（等しい場合を含む） |
| $\supset$ | `\supset` | 真上位集合 |
| $\supseteq$ | `\supseteq` | 上位集合（等しい場合を含む） |
| $\cup$ | `\cup` | 和集合 |
| $\cap$ | `\cap` | 共通部分 |
| $\setminus$ | `\setminus` | 差集合 |
| $\emptyset$ | `\emptyset` | 空集合 |
| $\varnothing$ | `\varnothing` | 別の空集合記号 |
| $\forall$ | `\forall` | すべての |
| $\exists$ | `\exists` | 存在する |
| $\nexists$ | `\nexists` | 存在しない |
| $\therefore$ | `\therefore` | ゆえに |
| $\because$ | `\because` | なぜなら |

---

### 4. 矢印記号

| 記号 | コマンド | 説明 |
|---|---|---|
| $\rightarrow$ | `\rightarrow` | 右矢印 |
| $\leftarrow$ | `\leftarrow` | 左矢印 |
| $\Rightarrow$ | `\Rightarrow` | 二重線の右向き含意 |
| $\Leftarrow$ | `\Leftarrow` | 二重線の左向き含意 |
| $\leftrightarrow$ | `\leftrightarrow` | 双方向矢印 |
| $\Leftrightarrow$ | `\Leftrightarrow` | 同値 |
| $\longrightarrow$ | `\longrightarrow` | 長い右矢印 |
| $\longleftarrow$ | `\longleftarrow` | 長い左矢印 |
| $\Longrightarrow$ | `\Longrightarrow` | 長い二重線の含意 |
| $\uparrow$ | `\uparrow` | 上矢印 |
| $\downarrow$ | `\downarrow` | 下矢印 |
| $\updownarrow$ | `\updownarrow` | 上下矢印 |
| $\mapsto$ | `\mapsto` | 写像（例：$x \mapsto x^2$） |

---

### 5. 特殊関数と演算子

| 記号 | コマンド | 説明 |
|---|---|---|
| $\sin x$ | `\sin x` | 正弦 |
| $\cos x$ | `\cos x` | 余弦 |
| $\tan x$ | `\tan x` | 正接 |
| $\log x$ | `\log x` | 対数 |
| $\ln x$ | `\ln x` | 自然対数 |
| $\exp(x)$ | `\exp(x)` | 指数関数 |
| $\max(a,b)$ | `\max(a,b)` | 最大値 |
| $\min(a,b)$ | `\min(a,b)` | 最小値 |
| $\det A$ | `\det A` | 行列式 |
| $\nabla f$ | `\nabla f` | 勾配 |
| $\partial x$ | `\partial x` | 偏微分記号 |
| $\frac{\partial f}{\partial x}$ | `\frac{\partial f}{\partial x}` | 偏導関数 |

---

### 6. 区切り文字と括弧

LaTeX の括弧が小さすぎる場合は、`\left` と `\right` を使うと自動的に大きさを調整できます。

| 記号 | コマンド | 説明 |
|---|---|---|
| $($ | `(` | 左丸括弧 |
| $)$ | `)` | 右丸括弧 |
| $[$ | `[` | 左角括弧 |
| $]$ | `]` | 右角括弧 |
| $\\{ \\}$ | `\{ \}` | 波括弧（バックスラッシュに注意） |
| $| \cdot |$ | `\| \cdot \|` | 縦線 |
| $\langle \rangle$ | `\langle \rangle` | 山括弧 |
| $\lfloor x \rfloor$ | `\lfloor x \rfloor` | 床関数 |
| $\lceil x \rceil$ | `\lceil x \rceil` | 天井関数 |

### 7. 行列とベクトル

| 記号 | コマンド | 説明 |
|---|---|---|
| $\vec{v}$ | `\vec{v}` | ベクトル（短い矢印） |
| $\mathbf{v}$ | `\mathbf{v}` | 太字ベクトル |
| $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ | `\begin{bmatrix} ... \end{bmatrix}` | 角括弧付き行列 |
| $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ | `\begin{pmatrix} ... \end{pmatrix}` | 丸括弧付き行列 |
| $\begin{vmatrix} a & b \\ c & d \end{vmatrix}$ | `\begin{vmatrix} ... \end{vmatrix}` | 行列式 |
| $\begin{matrix} a & b \\ c & d \end{matrix}$ | `\begin{matrix} ... \end{matrix}` | 括弧なし行列 |

---

### 8. フォントとスタイル

| 記号 | コマンド | 説明 |
|---|---|---|
| $\mathcal{A}$ | `\mathcal{A}` | カリグラフィ体（集合や演算子など） |
| $\mathbb{R}$ | `\mathbb{R}` | 黒板太字（実数や整数など） |
| $\mathbf{v}$ | `\mathbf{v}` | 太字（ベクトルや行列） |
| $\mathrm{dx}$ | `\mathrm{dx}` | 立体（微分など） |
| $\tilde{x}$ | `\tilde{x}` | チルダ付き文字 |
| $\hat{x}$ | `\hat{x}` | ハット付き文字（単位ベクトル） |
| $\dot{x}$ | `\dot{x}` | 一階時間微分（物理でよく使用） |
| $\ddot{x}$ | `\ddot{x}` | 二階時間微分 |

---

**参考文献**

- LaTeX Project: https://www.latex-project.org/
- Overleaf LaTeX Math Symbols: https://www.overleaf.com/learn/latex/Mathematical_expressions
- Mittelbach, F. & Goossens, M. *The LaTeX Companion* (2nd ed.)

---
