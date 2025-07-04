---
layout: default
title: MNIST Fashion VAE
---

<div class="content-section">
  <h1>MNIST Fashion VAE</h1>
  
  <p>This project implements a Variational Autoencoder (VAE) for the Fashion-MNIST dataset, demonstrating the power of generative modeling in creating new fashion items and learning meaningful latent representations.</p>

  <h2>Project Overview</h2>
  <p>The Fashion-MNIST dataset contains 70,000 grayscale images of fashion items across 10 categories. Using a VAE architecture, this project learns to encode these images into a lower-dimensional latent space and decode them back to generate new, similar fashion items.</p>

  <h2>Key Features</h2>
  <ul>
    <li>Variational Autoencoder architecture with encoder and decoder networks</li>
    <li>Latent space visualization and interpolation</li>
    <li>Generation of new fashion items</li>
    <li>Reconstruction quality analysis</li>
    <li>Loss function combining reconstruction and KL divergence terms</li>
  </ul>

  <h2>Technical Implementation</h2>
  <p>The VAE is implemented using PyTorch with the following architecture:</p>
  <ul>
    <li><strong>Encoder:</strong> Convolutional layers that compress 28x28 images to a latent vector</li>
    <li><strong>Latent Space:</strong> 20-dimensional Gaussian distribution</li>
    <li><strong>Decoder:</strong> Transposed convolutional layers that reconstruct images from latent vectors</li>
  </ul>

  <h2>Results</h2>
  <p>The trained VAE successfully learns to:</p>
  <ul>
    <li>Reconstruct input images with high fidelity</li>
    <li>Generate diverse and realistic fashion items</li>
    <li>Create smooth interpolations between different fashion items</li>
    <li>Organize similar items in nearby regions of the latent space</li>
  </ul>

  <h2>Technologies Used</h2>
  <ul>
    <li>Python</li>
    <li>PyTorch</li>
    <li>NumPy</li>
    <li>Matplotlib</li>
    <li>Jupyter Notebook</li>
  </ul>

  <h2>Code and Documentation</h2>
  <p>The complete implementation is available in the Jupyter notebook, including detailed explanations of the VAE architecture, training process, and results visualization.</p>
</div>

