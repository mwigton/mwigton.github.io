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

})();
