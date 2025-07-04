---
layout: default
title: My Projects
---

<div class="content-section">
  <h2>My Projects</h2>
  <p>Here's a collection of my machine learning and data science projects. Each project includes detailed documentation, code, and results.</p>
</div>

<div class="project-filters">
  <button data-category="all" class="active">All</button>
  <button data-category="machine-learning">Machine Learning</button>
  <button data-category="computer-vision">Computer Vision</button>
  <button data-category="deep-learning">Deep Learning</button>
</div>

<div class="project-grid">
  <div class="project-item" data-category="machine-learning deep-learning">
    <img src="https://via.placeholder.com/400x250/667eea/ffffff?text=MNIST+Fashion+VAE" alt="MNIST Fashion VAE">
    <div class="project-overlay">
      <h3>MNIST Fashion VAE</h3>
      <p>A variational autoencoder trained on the Fashion-MNIST dataset for generating new fashion items and learning latent representations.</p>
      <a href="{{ '/Projects/mnistfashion-vae/mnistfashion-vae.html' | relative_url }}">View Project</a>
    </div>
  </div>

  <div class="project-item" data-category="machine-learning computer-vision">
    <img src="https://via.placeholder.com/400x250/764ba2/ffffff?text=Animal+Classifier" alt="Ten Animals Classifier">
    <div class="project-overlay">
      <h3>Ten Animals Classifier</h3>
      <p>A deep learning model for classifying images of ten different animal species using convolutional neural networks.</p>
      <a href="{{ '/Projects/Ten animals classifier/ten.html' | relative_url }}">View Project</a>
    </div>
  </div>
</div>

