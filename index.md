---
layout: default
title: Michael Wigton
---

<section class="hero">
  <div class="container">
    <h1>Building immersive tools<br>for real-world impact</h1>
    <p class="lead">I design and engineer production-ready applications, VR/AR training systems, and interactive 3D experiences — with clients including the US Army, US Navy, and enterprise teams across defense and education.</p>
    <div class="hero-cta">
      <a href="/resume/" class="btn-primary">View Resume</a>
      <a href="https://github.com/mwigton" target="_blank" rel="noopener noreferrer" class="btn-social">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/mwigton/" target="_blank" rel="noopener noreferrer" class="btn-social">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        LinkedIn
      </a>
      <a href="mailto:mawigton@gmail.com" class="btn-social">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Email
      </a>
    </div>
  </div>
</section>

<section id="projects" class="projects container">
  <div class="projects-grid">
    {% assign sorted_projects = site.projects | sort: 'date' | reverse %}
    {% for project in sorted_projects %}
    <article class="project-card">
      <div class="project-media">
        <img src="{{ project.thumbnail | default: '/assets/images/project1.svg' }}" alt="{{ project.title }} thumbnail">
        <div class="project-actions">
          {% if project.video_id %}
          <div class="project-play" data-video-id="{{ project.video_id }}" title="Watch {{ project.title }}">
            <div class="dot">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <div>Watch demo</div>
          </div>
          {% endif %}
          {% if project.gallery_images %}
          <div class="project-play project-gallery" data-gallery-images='{{ project.gallery_images | jsonify }}' title="View {{ project.title }} gallery">
            <div class="dot">
              <svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
            </div>
            <div>View gallery</div>
          </div>
          {% endif %}
        </div>
      </div>
      <div class="project-body">
        <div class="project-header">
          <div class="header-row">
            <h3>{{ project.title }}</h3>
            {% if project.date %}
            <span class="project-date">{{ project.date | date: "%B %Y" }}</span>
            {% endif %}
          </div>
          <div class="header-row">
            <div class="project-subtitle">
              {% if project.client %}
              {{ project.client }}
              {% endif %}
              {% if project.client and project.role %}
              <span class="separator">•</span>
              {% endif %}
              {% if project.role %}
              {{ project.role }}
              {% endif %}
            </div>
          </div>
        </div>
        <p>{{ project.description | strip | truncate: 260 }}</p>
        <div class="project-meta">
          {% if project.tech %}
          <div class="tech-tags">
            {% assign techs = project.tech | split: ',' %}
            {% for tech in techs %}
            <span class="tech-tag">{{ tech | strip }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
</section>