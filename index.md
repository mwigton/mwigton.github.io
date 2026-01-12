---
layout: default
title: Michael Wigton
---

<section class="hero">
  <div class="container">
    <h1>Projects</h1>
    <p class="lead">I design and build production-ready applications, tools, and interactive experiences. Below are selected projects that demonstrate product-thinking, engineering quality, and attention to detail.</p>
  </div>
</section>

<section id="projects" class="projects container">
  <div class="projects-grid">
    {% assign sorted_projects = site.projects | sort: 'date' | reverse %}
    {% for project in sorted_projects %}
    <article class="project-card">
      <div class="project-media">
        <img src="{{ project.thumbnail | default: '/assets/images/project1.svg' }}" alt="{{ project.title }} thumbnail">
        <div class="project-play" data-video-id="{{ project.video_id }}" title="Watch {{ project.title }}">
          <div class="dot">▶</div>
          <div>Watch demo</div>
        </div>
      </div>
      <div class="project-body">
        <div class="project-header">
          <h3>{{ project.title }}</h3>
          {% if project.date %}
          <span class="project-date">{{ project.date | date: "%B %Y" }}</span>
          {% endif %}
        </div>
        <p>{{ project.description | strip | truncate: 180 }}</p>
        <div class="project-meta">
          {% if project.tech %}
          <div class="tech-tags">
            {% assign techs = project.tech | split: ',' %}
            {% for tech in techs %}
            <span class="tech-tag">{{ tech | strip }}</span>
            {% endfor %}
          </div>
          {% endif %}
          
          <div class="meta-details">
            {% if project.role %}
            <div class="meta-item" title="Role">
               <svg class="meta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
               <span class="label">Role:</span>
               <span class="value">{{ project.role }}</span>
            </div>
            {% endif %}
            {% if project.client %}
            <div class="meta-item" title="Client">
               <svg class="meta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
               <span class="label">Client:</span>
               <span class="value">{{ project.client }}</span>
            </div>
            {% endif %}
          </div>
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
</section>