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
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
</section>