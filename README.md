<a id="readme-top"></a>

<p align="center">
  <img src="https://img.shields.io/badge/Engineering-ECE%20Portfolio-black?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Systems-Frontend%20Architecture-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Focus-Performance%20Optimization-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Design-User%20Interface-orange?style=for-the-badge" />
</p>

<br />

<div align="center">
  <h1>Max Maehara — Engineering Portfolio System</h1>
  <p><strong>Performance-Oriented Static System for High-Resolution Media Delivery</strong></p>

  <p>
    This project explores the design and implementation of a lightweight, high-performance frontend system for delivering large-scale image assets. 
    The work emphasizes efficient rendering, client-side optimization, and user-focused interface design under real-world performance constraints.
  </p>
</div>

---

## 📌 Overview

This project is a fully custom static system built using HTML, CSS, and JavaScript to study performance-aware delivery of high-resolution visual data.

Rather than relying on frameworks, the system is intentionally minimal to expose and control:

* asset loading behavior
* rendering performance
* interaction latency

The result is a deterministic, low-overhead architecture optimized for speed, clarity, and scalability.

---

## 🧠 System Architecture

```bash
User → Browser → Static Rendering Layer (HTML/CSS)
                              ↓
                      Client Logic (JavaScript)
                              ↓
                    Optimized Image Pipeline
                              ↓
                      Lightbox Rendering Layer
```

### Design Principles

* **Minimal abstraction:** no frameworks to reduce overhead
* **Deterministic performance:** predictable load behavior
* **Separation of concerns:** rendering, logic, and assets decoupled

---

## ⚙️ Technical Stack

* HTML5 (structure)
* CSS3 (layout + responsive design)
* Vanilla JavaScript (client-side logic)
* Locomotive Scroll (controlled scroll behavior)
* Formspree (stateless form handling)

---

## 🚀 Core Features

* Responsive rendering across device classes
* Smooth scroll implementation with controlled inertia
* Dynamic image gallery with lightbox expansion
* Lazy loading and asset preloading strategies
* WebP-based compression pipeline
* SVG-based animated interface elements
* Client-side interaction handling without frameworks

---

## 📁 Project Structure

```bash
.
├── index.html
├── privacy-policy.html
├── licensing.html
├── index.js
├── style.css
├── legal.css
├── optimize.js
├── README.md
└── assets/
    ├── thumbs/
    ├── full/
    └── *.svg
```

---

## 🖼️ Image Optimization Pipeline

A custom preprocessing script generates two asset tiers:

* **Thumbnail set (~800px)** for initial render
* **Full-resolution set (~1800px)** for deferred viewing

All assets are converted to WebP to minimize bandwidth while preserving perceptual quality.

### Engineering Tradeoff

This pipeline balances:

* load time (reduced payload)
* visual fidelity (high-resolution fallback)
* user experience (progressive enhancement)

---

## ⚡ Performance Considerations

* Eliminated framework overhead to reduce bundle size
* Implemented lazy loading to defer non-critical assets
* Used preloading for above-the-fold content
* Structured DOM for efficient rendering and repaint

---

## 🧪 Design Focus

This project prioritizes:

* **Performance-first engineering**
* **System simplicity and transparency**
* **Scalable asset management**
* **User-centric interaction design**

The goal is not feature complexity, but controlled, efficient execution.

---

## 🛠️ Local Setup

```bash
git clone https://github.com/yourusername/max-maehara-portfolio.git
cd max-maehara-portfolio
```

Open `index.html` in a browser.

No dependencies or build tools required.

---

## 🌐 Deployment

Compatible with static hosting platforms:

* Netlify
* Vercel
* GitHub Pages

---

## 📜 Usage & Rights

© 2026 Max Maehara. All rights reserved.

This repository is provided for viewing and evaluation purposes only.
No part of this work may be copied, modified, or reused without explicit permission.

---

## 📬 Contact

Max Maehara
📧 [maeharaportfolio@gmail.com](mailto:maeharaportfolio@gmail.com)

Project Link:
https://github.com/yourusername/max-maehara-portfolio

---

<p align="center">↑ Back to top</p>
