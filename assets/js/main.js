// main.js — lightweight modal video handling
(function(){
  'use strict';
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('modal-iframe');
  const closeButtons = Array.from(document.querySelectorAll('[data-close]'));

  function openVideo(videoId){
    if(!videoId) return;
    const src = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=0`;
    iframe.src = src;
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }

  function closeVideo(){
    modal.setAttribute('aria-hidden','true');
    iframe.src = '';
    document.body.style.overflow = '';
  }

  // Close listeners
  closeButtons.forEach(btn=>btn.addEventListener('click', closeVideo));
  modal.addEventListener('click', (e)=>{
    if(e.target.classList.contains('modal-backdrop')) closeVideo();
  });

  // Delegate click for play buttons
  document.addEventListener('click', (e)=>{
    const play = e.target.closest('[data-video-id]');
    if(play){
      e.preventDefault();
      const id = play.getAttribute('data-video-id');
      openVideo(id);
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
