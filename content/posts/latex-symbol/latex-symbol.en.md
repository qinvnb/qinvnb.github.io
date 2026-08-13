---
title: "Common LaTeX Symbols"
date: 2025-06-13T10:00:00+08:00
description: "A practical reference for commonly used LaTeX symbols."
categories: ["Tools"]
tags: ["LaTeX"]
slug: "latex-symbol"
cover: "/images/posts/latex-symbol.webp"
draft: false
katex: true
mermaid: true
---

## Common LaTeX Symbols

> Intended for LaTeX beginners.

---

### Introduction

When writing academic papers, technical reports, or mathematical notes, LaTeX has become a standard tool in research thanks to its powerful typesetting. Faced with its vast collection of symbols, however, beginners often know the symbol they want but not its command.

This article collects the **most common and useful mathematical and logical symbols in LaTeX** for quick learning and reference.

---

### 1. Greek Letters

Greek letters occur frequently in mathematics. In LaTeX, enter them with a backslash followed by the letter's English name.

| Symbol | Command | Symbol | Command |
|---|---|---|---|
| $\alpha$ | `\alpha` | $\Alpha$ | `\Alpha` (uncommon) |
| $\beta$ | `\beta` | $\Beta$ | `\Beta` |
| $\gamma$ | `\gamma` | $\Gamma$ | `\Gamma` |
| $\delta$ | `\delta` | $\Delta$ | `\Delta` |
| $\epsilon$ | `\epsilon` | $\varepsilon$ | `\varepsilon` (variant) |
| $\zeta$ | `\zeta` | $\Eta$ | `\Eta` |
| $\eta$ | `\eta` | $\Theta$ | `\Theta` |
| $\theta$ | `\theta` | $\vartheta$ | `\vartheta` (variant) |
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
| $\phi$ | `\phi` | $\varphi$ | `\varphi` (variant) |
| $\Phi$ | `\Phi` | | |
| $\chi$ | `\chi` | $\Chi$ | `\Chi` |
| $\psi$ | `\psi` | $\Psi$ | `\Psi` |
| $\omega$ | `\omega` | $\Omega$ | `\Omega` |

### 2. Mathematical Operators

| Symbol | Command | Description |
|---|---|---|
| $+$ | `+` | Addition |
| $-$ | `-` | Subtraction |
| $\times$ | `\times` | Multiplication (vector cross product) |
| $\cdot$ | `\cdot` | Dot product (recommended for scalar multiplication) |
| $\div$ | `\div` | Division |
| $\pm$ | `\pm` | Plus or minus |
| $\mp$ | `\mp` | Minus or plus |
| $\sqrt{x}$ | `\sqrt{x}` | Square root |
| $\sqrt[n]{x}$ | `\sqrt[n]{x}` | nth root |
| $x^2$ | `x^2` | Superscript (power) |
| $x_1$ | `x_1` | Subscript |
| $\sum_{i=1}^{n} a_i$ | `\sum_{i=1}^{n} a_i` | Sum |
| $\prod_{i=1}^{n} a_i$ | `\prod_{i=1}^{n} a_i` | Product |
| $\int_a^b f(x)\,dx$ | `\int_a^b f(x)\,dx` | Definite integral |
| $\iint_D f(x,y)\,dA$ | `\iint_D f(x,y)\,dA` | Double integral |
| $\oint_C \vec{F} \cdot d\vec{r}$ | `\oint_C \vec{F} \cdot d\vec{r}` | Contour integral |

### 3. Sets and Relations

| Symbol | Command | Description |
|---|---|---|
| $\in$ | `\in` | Is an element of |
| $\notin$ | `\notin` | Is not an element of |
| $\subset$ | `\subset` | Proper subset |
| $\subseteq$ | `\subseteq` | Subset or equal to |
| $\supset$ | `\supset` | Proper superset |
| $\supseteq$ | `\supseteq` | Superset or equal to |
| $\cup$ | `\cup` | Union |
| $\cap$ | `\cap` | Intersection |
| $\setminus$ | `\setminus` | Set difference |
| $\emptyset$ | `\emptyset` | Empty set |
| $\varnothing$ | `\varnothing` | Alternative empty-set symbol |
| $\forall$ | `\forall` | For all |
| $\exists$ | `\exists` | There exists |
| $\nexists$ | `\nexists` | There does not exist |
| $\therefore$ | `\therefore` | Therefore |
| $\because$ | `\because` | Because |

---

### 4. Arrows

| Symbol | Command | Description |
|---|---|---|
| $\rightarrow$ | `\rightarrow` | Right arrow |
| $\leftarrow$ | `\leftarrow` | Left arrow |
| $\Rightarrow$ | `\Rightarrow` | Double-line right implication |
| $\Leftarrow$ | `\Leftarrow` | Double-line left implication |
| $\leftrightarrow$ | `\leftrightarrow` | Bidirectional arrow |
| $\Leftrightarrow$ | `\Leftrightarrow` | Logical equivalence |
| $\longrightarrow$ | `\longrightarrow` | Long right arrow |
| $\longleftarrow$ | `\longleftarrow` | Long left arrow |
| $\Longrightarrow$ | `\Longrightarrow` | Long double-line implication |
| $\uparrow$ | `\uparrow` | Up arrow |
| $\downarrow$ | `\downarrow` | Down arrow |
| $\updownarrow$ | `\updownarrow` | Up-down arrow |
| $\mapsto$ | `\mapsto` | Maps to (for example, $x \mapsto x^2$) |

---

### 5. Special Functions and Operators

| Symbol | Command | Description |
|---|---|---|
| $\sin x$ | `\sin x` | Sine |
| $\cos x$ | `\cos x` | Cosine |
| $\tan x$ | `\tan x` | Tangent |
| $\log x$ | `\log x` | Logarithm |
| $\ln x$ | `\ln x` | Natural logarithm |
| $\exp(x)$ | `\exp(x)` | Exponential function |
| $\max(a,b)$ | `\max(a,b)` | Maximum |
| $\min(a,b)$ | `\min(a,b)` | Minimum |
| $\det A$ | `\det A` | Determinant |
| $\nabla f$ | `\nabla f` | Gradient |
| $\partial x$ | `\partial x` | Partial derivative symbol |
| $\frac{\partial f}{\partial x}$ | `\frac{\partial f}{\partial x}` | Partial derivative |

---

### 6. Delimiters and Brackets

Brackets in LaTeX can sometimes be too small. Use `\left` and `\right` to scale them automatically:

| Symbol | Command | Description |
|---|---|---|
| $($ | `(` | Left parenthesis |
| $)$ | `)` | Right parenthesis |
| $[$ | `[` | Left square bracket |
| $]$ | `]` | Right square bracket |
| $\\{ \\}$ | `\{ \}` | Braces (note the backslashes) |
| $| \cdot |$ | `\| \cdot \|` | Vertical bars |
| $\langle \rangle$ | `\langle \rangle` | Angle brackets |
| $\lfloor x \rfloor$ | `\lfloor x \rfloor` | Floor |
| $\lceil x \rceil$ | `\lceil x \rceil` | Ceiling |

### 7. Matrices and Vectors

| Symbol | Command | Description |
|---|---|---|
| $\vec{v}$ | `\vec{v}` | Vector (short arrow) |
| $\mathbf{v}$ | `\mathbf{v}` | Bold vector |
| $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ | `\begin{bmatrix} ... \end{bmatrix}` | Matrix with square brackets |
| $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ | `\begin{pmatrix} ... \end{pmatrix}` | Matrix with parentheses |
| $\begin{vmatrix} a & b \\ c & d \end{vmatrix}$ | `\begin{vmatrix} ... \end{vmatrix}` | Determinant |
| $\begin{matrix} a & b \\ c & d \end{matrix}$ | `\begin{matrix} ... \end{matrix}` | Matrix without delimiters |

---

### 8. Fonts and Styles

| Symbol | Command | Description |
|---|---|---|
| $\mathcal{A}$ | `\mathcal{A}` | Calligraphic (often used for sets and operators) |
| $\mathbb{R}$ | `\mathbb{R}` | Blackboard bold (real numbers, integers, etc.) |
| $\mathbf{v}$ | `\mathbf{v}` | Bold (vectors and matrices) |
| $\mathrm{dx}$ | `\mathrm{dx}` | Upright type (for differentials, for example) |
| $\tilde{x}$ | `\tilde{x}` | Tilde accent |
| $\hat{x}$ | `\hat{x}` | Hat accent (unit vectors) |
| $\dot{x}$ | `\dot{x}` | Single-dot derivative (common in physics) |
| $\ddot{x}$ | `\ddot{x}` | Double-dot derivative |

---

**References**

- LaTeX Project: https://www.latex-project.org/
- Overleaf LaTeX Math Symbols: https://www.overleaf.com/learn/latex/Mathematical_expressions
- Mittelbach, F. & Goossens, M. *The LaTeX Companion* (2nd ed.)

---
