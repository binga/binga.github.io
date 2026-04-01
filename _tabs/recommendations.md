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
.rec-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 10px;
  background: var(--card-bg, #f8f9fa);
  border: 1px solid var(--card-border-color, #e9ecef);
  transition: all 0.2s;
}
.rec-card:hover {
  border-color: var(--link-color, #007bff);
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.rec-card .rec-title {
  font-weight: 500;
  flex: 1;
}
.rec-card .rec-title a {
  text-decoration: none;
  color: var(--text-color, #333);
}
.rec-card .rec-title a:hover {
  color: var(--link-color, #007bff);
}
.rec-card .rec-tags {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
  margin-left: 12px;
}
.rec-card .rec-tag {
  font-size: 0.73rem;
  padding: 2px 8px;
  border-radius: 12px;
  background: var(--btn-border-color, #e9ecef);
  color: var(--text-muted-color, #888);
  white-space: nowrap;
}
.rec-card.hidden {
  display: none;
}
.rec-count {
  font-size: 0.85rem;
  color: var(--text-muted-color, #888);
  margin-bottom: 12px;
}
</style>

<div class="rec-filters" id="recFilters">
  <button class="tag-btn active" data-tag="all">All</button>
</div>
<div class="rec-count" id="recCount"></div>
<div id="recList"></div>

<script src="/assets/js/recommendations.js"></script>
