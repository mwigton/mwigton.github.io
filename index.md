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
        <h3>{{ project.title }}</h3>
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
            <div class="meta-item">
               <span class="label">Role</span>
               <span class="value">{{ project.role }}</span>
            </div>
            {% endif %}
            {% if project.client %}
            <div class="meta-item">
               <span class="label">Client</span>
               <span class="value">{{ project.client }}</span>
            </div>
            {% endif %}
            {% if project.date %}
            <div class="meta-item">
               <span class="label">Date</span>
               <span class="value">{{ project.date | date: "%B %Y" }}</span>
            </div>
            {% endif %}
          </div>
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
</section>