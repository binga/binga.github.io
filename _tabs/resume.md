---
layout: page
title: Resume
icon: fas fa-file-alt
order: 4
---

<div class="resume-actions">
  <a href="{{ '/assets/docs/Phani_Srikanth_Resume_Page_1.pdf' | relative_url }}" target="_blank" rel="noopener">
    Open page 1 as PDF
  </a>
</div>

<a class="resume-page-link" href="{{ '/assets/docs/Phani_Srikanth_Resume_Page_1.pdf' | relative_url }}" target="_blank" rel="noopener" aria-label="Open page 1 of Phani Srikanth's resume as a PDF">
  <img class="resume-page" src="{{ '/assets/img/resume/page-1.webp' | relative_url }}" alt="Page 1 of Phani Srikanth's resume" loading="eager">
</a>

<style>
.resume-actions {
  display: flex;
  justify-content: flex-end;
  margin: -0.25rem 0 1rem;
  font-size: 0.9rem;
}

.resume-page-link {
  display: block;
  line-height: 0;
}

.resume-page {
  width: 100%;
  height: auto;
  border: 1px solid var(--main-border-color);
  background: #fff;
  box-shadow: var(--card-shadow);
}
</style>
