// main.js — lightweight modal video handling
(function () {
  'use strict';
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('modal-iframe');
  const closeButtons = Array.from(document.querySelectorAll('[data-close]'));

  function openVideo(videoId) {
    if (!videoId) return;
    const src = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=0`;
    iframe.src = src;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeVideo() {
    modal.setAttribute('aria-hidden', 'true');
    iframe.src = '';
    document.body.style.overflow = '';
  }

  // Close listeners
  closeButtons.forEach(btn => btn.addEventListener('click', closeVideo));
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) closeVideo();
  });

  // Delegate click for play buttons
  document.addEventListener('click', (e) => {
    const play = e.target.closest('[data-video-id]');
    if (play) {
      e.preventDefault();
      const id = play.getAttribute('data-video-id');
      openVideo(id);
    }
  });

  // Gallery Modal
  const galleryModal = document.getElementById('gallery-modal');
  const galleryImage = document.getElementById('gallery-image');
  const galleryCurrent = document.getElementById('gallery-current');
  const galleryTotal = document.getElementById('gallery-total');
  const galleryCaption = document.getElementById('gallery-caption');
  const galleryPrev = document.querySelector('.gallery-prev');
  const galleryNext = document.querySelector('.gallery-next');
  const galleryCloseButtons = Array.from(document.querySelectorAll('[data-close-gallery]'));

  let currentGalleryImages = [];
  let currentImageIndex = 0;

  function openGallery(images) {
    if (!images || images.length === 0) return;
    currentGalleryImages = images;
    currentImageIndex = 0;
    updateGalleryImage();
    galleryModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeGallery() {
    galleryModal.setAttribute('aria-hidden', 'true');
    galleryImage.src = '';
    currentGalleryImages = [];
    currentImageIndex = 0;
    document.body.style.overflow = '';
  }

  function updateGalleryImage() {
    const currentItem = currentGalleryImages[currentImageIndex];
    if (typeof currentItem === 'string') {
      galleryImage.src = currentItem;
      galleryImage.alt = 'Gallery image';
      galleryCaption.textContent = '';
      galleryCaption.style.display = 'none';
    } else {
      galleryImage.src = currentItem.image;
      galleryImage.alt = currentItem.caption || 'Gallery image';
      galleryCaption.textContent = currentItem.caption || '';
      galleryCaption.style.display = currentItem.caption ? 'block' : 'none';
    }

    galleryCurrent.textContent = currentImageIndex + 1;
    galleryTotal.textContent = currentGalleryImages.length;

    if (galleryPrev) galleryPrev.style.opacity = currentImageIndex === 0 ? '0.3' : '1';
    if (galleryNext) galleryNext.style.opacity = currentImageIndex === currentGalleryImages.length - 1 ? '0.3' : '1';
  }

  function navigateGallery(direction) {
    if (direction === 'prev' && currentImageIndex > 0) {
      currentImageIndex--;
      updateGalleryImage();
    } else if (direction === 'next' && currentImageIndex < currentGalleryImages.length - 1) {
      currentImageIndex++;
      updateGalleryImage();
    }
  }

  // Gallery close listeners
  galleryCloseButtons.forEach(btn => btn.addEventListener('click', closeGallery));
  galleryModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) closeGallery();
  });

  // Gallery navigation
  if (galleryPrev) galleryPrev.addEventListener('click', () => navigateGallery('prev'));
  if (galleryNext) galleryNext.addEventListener('click', () => navigateGallery('next'));

  // Delegate click for gallery buttons
  document.addEventListener('click', (e) => {
    const galleryBtn = e.target.closest('[data-gallery-images]');
    if (galleryBtn) {
      e.preventDefault();
      const imagesJson = galleryBtn.getAttribute('data-gallery-images');
      try {
        const images = JSON.parse(imagesJson);
        openGallery(images);
      } catch (err) {
        console.error('Failed to parse gallery images:', err);
      }
    }
  });

  // Keyboard navigation for gallery
  document.addEventListener('keydown', (e) => {
    if (galleryModal.getAttribute('aria-hidden') === 'false') {
      if (e.key === 'ArrowLeft') navigateGallery('prev');
      if (e.key === 'ArrowRight') navigateGallery('next');
      if (e.key === 'Escape') closeGallery();
    }
  });

  // Theme Toggle
  const toggleBtn = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const iconSvg = toggleBtn.querySelector('svg');

  // Icons
  const moonPath = "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z";
  const sunPath = "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z";

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // Update icon: If light, show Moon (to switch to dark), If dark, show Sun (to switch to light)? 
    // Usually: Show Sun if Dark (active), Moon if Light (active). 
    // Let's show the "active" mode icon.
    // Dark mode (default) -> Sun? No, usually Moon represents Dark Mode.
    // Let's set it so the icon reflects the CURRENT state.
    if (theme === 'light') {
      iconSvg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${sunPath}" />`;
    } else {
      iconSvg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${moonPath}" />`;
    }
  }

  // Init
  const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  setTheme(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    setTheme(next);
  });

})();
