---
layout: default
title: Resume
permalink: /resume/
---

<style>
  :root {
    --resume-bg: var(--bg);
    --resume-card: var(--card);
    --resume-accent: var(--accent);
    --resume-text: var(--text);
    --resume-muted: var(--muted);
    --resume-glass: var(--glass);
    --resume-border: var(--border-color);
  }

  .resume-layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 40px;
    max-width: 1100px;
    margin: 0 auto;
    padding: 132px 20px 0;
    align-items: start;
  }

  /* Sidebar */
  .resume-sidebar {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-self: start;
  }

  .profile-header {
    text-align: center;
    background: var(--resume-glass);
    border: 1px solid var(--resume-border);
    border-radius: 16px;
    padding: 32px 20px;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .profile-header h1 {
    margin: 0 0 4px;
    font-size: 1.8rem;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: var(--resume-text);
  }

  .profile-header .tagline {
    font-size: 0.9rem;
    color: var(--resume-accent);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .contact-list {
    list-style: none;
    padding: 0;
    margin: 20px 0 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.85rem;
    color: var(--resume-muted);
    text-decoration: none;
    transition: color 0.2s;
  }

  .contact-item:hover {
    color: var(--resume-accent);
  }

  .contact-item svg {
    width: 16px;
    height: 16px;
    color: var(--resume-accent);
  }

  /* Main Content */
  .resume-main {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-self: start;
  }

  .resume-card {
    background: var(--resume-card);
    border: 1px solid var(--resume-border);
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    position: relative;
    overflow: hidden;
  }

  .resume-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--resume-accent);
    opacity: 0.8;
  }

  .resume-card h2 {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0 0 24px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .resume-card h2 svg {
    color: var(--resume-accent);
  }

  /* Skills */
  .skills-grid {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .skill-group h3 {
    font-size: 0.9rem;
    color: var(--resume-muted);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0 0 12px;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .skill-tag {
    background: var(--resume-glass);
    border: 1px solid var(--resume-border);
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.2s;
  }

  .skill-tag:hover {
    border-color: var(--resume-accent);
    background: rgba(var(--accent-rgb), 0.1);
    transform: translateY(-1px);
  }

  /* Experience */
  .experience-timeline {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .experience-item {
    position: relative;
    padding-left: 20px;
    border-left: 1px solid var(--resume-border);
  }

  .experience-item::after {
    content: '';
    position: absolute;
    left: -4.5px;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--resume-accent);
  }

  .experience-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 4px;
    flex-wrap: wrap;
    gap: 10px;
  }

  .experience-header h3 {
    margin: 0;
    font-size: 1.2rem;
    color: var(--resume-text);
  }

  .experience-header .company {
    font-weight: 600;
    color: var(--resume-accent);
    font-size: 0.95rem;
  }

  .experience-header .date {
    font-size: 0.8rem;
    color: var(--resume-muted);
    background: var(--resume-glass);
    padding: 4px 10px;
    border-radius: 20px;
    border: 1px solid var(--resume-border);
  }

  .experience-item ul {
    margin: 12px 0 0;
    padding-left: 18px;
    color: var(--resume-muted);
    font-size: 0.9rem;
  }

  .experience-item li {
    margin-bottom: 8px;
  }

  /* Actions */
  .resume-actions {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 20px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    transition: all 0.2s;
    cursor: pointer;
    border: 1px solid transparent;
  }

  .btn-primary {
    background: var(--resume-accent);
    color: #0d1117;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(var(--accent-rgb), 0.3);
  }

  .btn-secondary {
    background: var(--resume-glass);
    border-color: var(--resume-border);
    color: var(--resume-text);
  }

  .btn-secondary:hover {
    background: var(--hover-bg);
    border-color: var(--resume-accent);
  }

  @media (max-width: 900px) {
    .resume-layout {
      grid-template-columns: 1fr;
    }
    .resume-sidebar {
      position: static;
    }
  }

  /* Print Styles */
  /* Override global main padding for resume page */
  main {
    padding-top: 0 !important;
  }

  @media print {
    body {
      background: white !important;
      color: black !important;
    }
    .site-header, .site-footer, .resume-actions, #theme-toggle {
      display: none !important;
    }
    main {
      padding-top: 0 !important;
    }
    .resume-layout {
      grid-template-columns: 1fr;
      margin: 0;
      padding: 0;
      display: block;
    }
    .profile-header {
      border: none;
      background: none;
      padding: 0;
      margin-bottom: 30px;
      text-align: left;
    }
    .profile-header h1 {
      color: black !important;
      font-size: 24pt;
    }
    .contact-list {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
    }
    .resume-card {
      border: none !important;
      box-shadow: none !important;
      padding: 0 !important;
      margin-bottom: 30px;
      page-break-inside: avoid;
    }
    .resume-card::before {
      display: none;
    }
    .resume-card h2 {
      color: black !important;
      border-bottom: 2px solid #ccc;
      padding-bottom: 5px;
    }
    .resume-card h2 svg {
      display: none;
    }
    .skill-tag {
      border: 1px solid #ccc !important;
      color: black !important;
    }
    .experience-header .company {
      color: black !important;
    }
    .experience-header .date {
      border: none !important;
      background: none !important;
      padding: 0;
    }
    .experience-item {
      border-left: none;
      padding-left: 0;
    }
    .experience-item::after {
      display: none;
    }
    a {
      text-decoration: none !important;
      color: black !important;
    }
  }
</style>

<div class="resume-layout">
  <aside class="resume-sidebar">
    <div class="profile-header">
      <h1>Michael Wigton</h1>
      <div class="tagline">Senior Software Engineer</div>
      
      <ul class="contact-list">
        <li>
          <a href="mailto:mawigton@gmail.com" class="contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            mawigton@gmail.com
          </a>
        </li>
        <li>
          <a href="https://github.com/mwigton" class="contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"/></svg>
            github.com/mwigton
          </a>
        </li>
      </ul>

      <div class="resume-actions">
        <a href="/assets/files/michael_wigton_resume.pdf" class="btn btn-primary" target="_blank">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          PDF Resume
        </a>
      </div>
    </div>

    <div class="resume-card" style="padding: 24px;">
      <h2 style="font-size: 1.1rem; margin-bottom: 16px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg> Technical Skills</h2>
      <div class="skills-grid">
        <div class="skill-group">
          <h3>Languages</h3>
          <div class="skill-tags">
            <span class="skill-tag">C# (Main)</span>
            <span class="skill-tag">C++</span>
            <span class="skill-tag">Java</span>
            <span class="skill-tag">C</span>
            <span class="skill-tag">Python</span>
          </div>
        </div>
        <div class="skill-group">
          <h3>Platforms</h3>
          <div class="skill-tags">
            <span class="skill-tag">Windows</span>
            <span class="skill-tag">Android</span>
            <span class="skill-tag">iOS</span>
            <span class="skill-tag">VR</span>
            <span class="skill-tag">WebGL</span>
          </div>
        </div>
        <div class="skill-group">
          <h3>Tools</h3>
          <div class="skill-tags">
            <span class="skill-tag">Unity</span>
            <span class="skill-tag">Unreal</span>
            <span class="skill-tag">VRTK</span>
            <span class="skill-tag">Photon</span>
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Azure DevOps</span>
            <span class="skill-tag">Jenkins</span>
          </div>
        </div>
      </div>
    </div>
  </aside>

  <main class="resume-main">
    <section class="resume-card">
      <h2><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> Professional Experience</h2>
      
      <div class="experience-timeline">
        <div class="experience-item">
          <div class="experience-header">
            <h3>Lead Developer</h3>
            <span class="date">Jan 2020 – Present</span>
          </div>
          <div class="company">trainPOINT | San Diego, CA</div>
          <ul>
            <li>Develop, maintain, and manage trainPOINT products including Hazard Identification, Fall Protection, Lockout-Tagout, Confined Spaces, and Spotter training.</li>
            <li>Lead architectural decisions and mentor junior developers in Unity best practices.</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <h3>Computer Programmer II</h3>
            <span class="date">Aug 2016 – Dec 2019</span>
          </div>
          <div class="company">Epsilon Systems Solutions Inc. | Warrenton, VA / Remote</div>
          <ul>
            <li>Developed and maintained the “EpsilonVR” framework and player application.</li>
            <li>Aided in the development of training modules for the U.S. Navy.</li>
            <li>Developed tools to aid in the NGrain development pipeline with C#, WPF, and WinForms.</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <h3>Graphic Artist III</h3>
            <span class="date">Oct 2014 – Aug 2016</span>
          </div>
          <div class="company">Epsilon Systems Solutions Inc. | Warrenton, VA</div>
          <ul>
            <li>Developed interactive 3D showcase application for Generac’s new line of generators.</li>
            <li>Developed “Virtual Training Aid” for 3D classroom navigation of equipment systems.</li>
            <li>Developed generator maintenance simulation prototype for the U.S. Army.</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <h3>Graphics Artist I</h3>
            <span class="date">Jan 2012 – Oct 2013</span>
          </div>
          <div class="company">Media Box Studios | Warrenton, VA</div>
          <ul>
            <li>Aided in computer-based training development by creating 3D models and renderings using Cinema4D.</li>
            <li>Parsed client manuals into procedures and implemented renders into Adobe Flash projects.</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <h3>3D Artist</h3>
            <span class="date">Jan 2012 – Feb 2013</span>
          </div>
          <div class="company">Lukewarm Media | Remote</div>
          <ul>
            <li>Created props and buildings for the game “Primal Carnage” using 3ds Max, Quixel Suite, and Photoshop in the Unreal engine.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="resume-card">
      <h2><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> Key Skills & Expertise</h2>
      <div class="skills-grid" style="grid-template-columns: 1fr 1fr; display: grid;">
        <div class="skill-group">
          <h3>Engineering</h3>
          <ul>
            <li>Dependency Injection</li>
            <li>Unit Testing</li>
            <li>Continuous Integration</li>
            <li>Custom Editor Tools</li>
          </ul>
        </div>
        <div class="skill-group">
          <h3>Visual Arts</h3>
          <ul>
            <li>Level Building</li>
            <li>Lightmapping</li>
            <li>UI/UX Design</li>
            <li>Realtime 3D Assets</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</div>
