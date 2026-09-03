---
layout: page
title: Recommendations
icon: fas fa-bookmark
order: 5
---

A curated list of articles and essays I find worth reading.

<style>
.rec-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}
.rec-filters .tag-btn {
  padding: 5px 14px;
  border-radius: 20px;
  border: 1.5px solid var(--btn-border-color, #dee2e6);
  background: transparent;
  color: var(--text-color, #555);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}
.rec-filters .tag-btn:hover {
  border-color: var(--link-color, #007bff);
  color: var(--link-color, #007bff);
}
.rec-filters .tag-btn.active {
  background: var(--link-color, #007bff);
  border-color: var(--link-color, #007bff);
  color: #fff;
}
.rec-count {
  margin-bottom: 0.75rem;
  color: var(--text-muted-color, #888);
  font-size: 0.85rem;
}
.rec-timeline {
  position: relative;
  letter-spacing: 0.03rem;
}
.rec-timeline::before {
  content: "";
  position: absolute;
  top: 1.5rem;
  bottom: 1.5rem;
  left: 77px;
  width: 4px;
  background-color: var(--timeline-color);
}
.rec-year-group {
  position: relative;
}
.rec-year {
  position: relative;
  display: block;
  height: 3.5rem;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2rem;
}
.rec-year::after {
  content: "";
  position: absolute;
  top: 0.55rem;
  left: 73px;
  width: 12px;
  height: 12px;
  border: 3px solid var(--timeline-node-bg);
  border-radius: 50%;
  background-color: var(--timeline-year-dot-color);
  box-shadow: 0 0 2px 0 #c2c6cc;
  z-index: 1;
}
.rec-year-list {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
.rec-timeline .rec-entry {
  position: relative;
  display: flex;
  min-height: 3rem;
  padding: 0.65rem 0 0.65rem 6.5rem;
  align-items: center;
  gap: 1rem;
  line-height: 1.5rem;
}
.rec-entry:nth-child(odd) {
  background-color: var(--main-bg, #fff);
  background-image: linear-gradient(to left, transparent, rgba(127, 127, 127, 0.035), rgba(127, 127, 127, 0.035), transparent);
}
.rec-entry::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 75px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--timeline-node-bg);
  box-shadow: 0 0 3px 0 #c2c6cc;
  transform: translateY(-50%);
  z-index: 1;
}
.rec-timeline a.rec-title {
  min-width: 0;
  flex: 1;
  border-bottom: none;
  color: var(--text-color);
  font-size: 1.05rem;
  font-weight: 500;
  text-decoration: none;
}
.rec-timeline a.rec-title:hover {
  color: var(--link-color);
  border-bottom: none;
}
.rec-tags {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 6px;
}
.rec-tag {
  font-size: 0.73rem;
  padding: 2px 8px;
  border-radius: 12px;
  background: var(--btn-border-color, #e9ecef);
  color: var(--text-color);
  white-space: nowrap;
}
@media (max-width: 576px) {
  .rec-timeline {
    margin-top: -0.25rem;
  }
  .rec-timeline .rec-entry {
    display: block;
    padding-left: 6.5rem;
  }
  .rec-tags {
    justify-content: flex-start;
    margin-top: 0.25rem;
  }
}
</style>

<div class="rec-filters" id="recFilters">
  <button class="tag-btn active" data-tag="all" aria-pressed="true">All</button>
</div>
<div class="rec-count" id="recCount"></div>
<div class="rec-timeline" id="recList" aria-live="polite"></div>

<script src="/assets/js/recommendations.js?v=20260904-2"></script>
