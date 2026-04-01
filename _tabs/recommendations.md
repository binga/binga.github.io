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

<script>
const recommendations = [
  { title: "Research as Understanding", url: "https://kanjun.me/writing/research-as-understanding", tags: ["research", "thinking"] },
  { title: "Engineer/Manager Career Pendulum", url: "https://charity.wtf/2017/05/11/the-engineer-manager-pendulum", tags: ["career", "leadership"] },
  { title: "1000 True Fans", url: "https://kk.org/thetechnium/1000-true-fans/", tags: ["creator economy", "strategy"] },
  { title: "The Polymath Playbook", url: "https://salman.io/blog/polymath-playbook/", tags: ["career", "learning"] },
  { title: "How to get Feedback", url: "https://unchartedterritories.tomaspueyo.com/p/how-to-get-feedback", tags: ["productivity", "communication"] },
  { title: "Signaling on the internet", url: "https://eriktorenberg.substack.com/p/signaling-on-the-internet", tags: ["internet", "strategy"] },
  { title: "Your life in weeks", url: "https://waitbutwhy.com/2014/05/life-weeks.html", tags: ["philosophy", "thinking"] },
  { title: "Pick up What They put down", url: "https://www.swyx.io/puwtpd", tags: ["career", "networking"] },
  { title: "Some Career Advice", url: "https://lethain.com/career-advice", tags: ["career"] },
  { title: "Counting Deaths in India is difficult", url: "https://www.hindustantimes.com/opinion/counting-deaths-in-india-is-difficult-101626273326958.html", tags: ["india", "data"] },
  { title: "Being an Infinite Player", url: "https://sashachapin.substack.com/p/a-brief-practical-guide-to-being", tags: ["philosophy", "mindset"] },
  { title: "Agency", url: "https://map.simonsarris.com/p/the-most-precious-resource-is-agency", tags: ["philosophy", "mindset"] },
  { title: "Reading Better", url: "https://fs.blog/reading", tags: ["learning", "productivity"] },
  { title: "How to waste career", url: "https://apoorvagovind.substack.com/p/how-to-waste-your-career-one-comfortable", tags: ["career"] },
  { title: "Why the new employer is no employer at all", url: "https://junglegym.substack.com/p/new-employer-of-choice", tags: ["career", "strategy"] },
  { title: "How to explain complicated things in a simple way", url: "https://www.exaltus.ca/blog/explain-complicated-things", tags: ["communication", "thinking"] },
  { title: "Early Work", url: "https://paulgraham.com/early.html", tags: ["philosophy", "research"] },
  { title: "Build Personal Moats", url: "https://eriktorenberg.substack.com/p/build-personal-moats", tags: ["career", "strategy"] },
  { title: "The Downside of Work Life Balance", url: "https://jamesclear.com/four-burners-theory", tags: ["productivity", "philosophy"] },
  { title: "Becoming a Magician", url: "https://autotranslucence.com/2018/03/30/becoming-a-magician", tags: ["mindset", "philosophy"] },
  { title: "Calendar. Not to-do lists.", url: "https://blog.usejournal.com/calendar-in-stead-of-to-do-lists-9ada86a512dd", tags: ["productivity"] },
  { title: "How to be great? Just be good, repeatedly", url: "https://blog.stephsmith.io/how-to-be-great", tags: ["mindset", "career"] },
  { title: "Take Asymmetric Bets", url: "https://eriktorenberg.substack.com/p/take-asymmetric-bets", tags: ["strategy", "career"] },
  { title: "The Most Respectful Interpretation", url: "https://fs.blog/most-respectful-interpretation", tags: ["communication", "philosophy"] },
  { title: "When a grieving Mother Talks, Listen", url: "https://www.nytimes.com/2017/12/21/style/perinatal-death-stillbirth-childbirth.html", tags: ["life", "empathy"] },
  { title: "How to Write Better? Why, What and How Framework", url: "https://eugeneyan.com/writing/writing-docs-why-what-how", tags: ["writing", "communication"] },
  { title: "Signaling as a service", url: "https://julian.digital/2020/03/28/signaling-as-a-service", tags: ["internet", "strategy"] },
  { title: "The Billion Dollar Creator", url: "https://nathanbarry.com/billion", tags: ["creator economy", "strategy"] },
  { title: "Why Nerds are Unpopular", url: "https://paulgraham.com/nerds.html", tags: ["philosophy", "life"] },
  { title: "Climbing the Wealth Ladder", url: "https://ofdollarsanddata.com/climbing-the-wealth-ladder", tags: ["finance"] },
  { title: "Proof of X", url: "https://julian.digital/2020/08/06/proof-of-x/", tags: ["internet", "thinking"] },
  { title: "Network Legibility and Status", url: "https://boundless.substack.com/p/network-legibility-and-status-125", tags: ["internet", "networking"] },
  { title: "How to do great work", url: "https://paulgraham.com/greatwork.html", tags: ["philosophy", "career"] },
  { title: "Principles of Effective Research", url: "https://michaelnielsen.org/blog/principles-of-effective-research/", tags: ["research"] },
  { title: "Principles of Research Code", url: "https://www.theexclusive.org/2012/08/principles-of-research-code.html", tags: ["research", "writing"] },
  { title: "Why I keep a research blog", url: "https://gregorygundersen.com/blog/2020/01/12/why-research-blog/", tags: ["research", "writing"] },
  { title: "A career cold start algorithm", url: "https://boz.com/articles/career-cold-start", tags: ["career"] },
  { title: "Every company has the same hiring criteria", url: "https://ethanding.substack.com/p/every-company-has-the-same-hiring", tags: ["career"] }
];

// Collect all tags
const allTags = [...new Set(recommendations.flatMap(r => r.tags))].sort();
const filtersEl = document.getElementById('recFilters');
allTags.forEach(tag => {
  const btn = document.createElement('button');
  btn.className = 'tag-btn';
  btn.dataset.tag = tag;
  btn.textContent = tag;
  filtersEl.appendChild(btn);
});

let activeTag = 'all';

function render() {
  const list = document.getElementById('recList');
  const count = document.getElementById('recCount');
  const visible = activeTag === 'all' ? recommendations : recommendations.filter(r => r.tags.includes(activeTag));
  count.textContent = `Showing ${visible.length} of ${recommendations.length} articles`;
  list.innerHTML = visible.map(r => `
    <div class="rec-card">
      <span class="rec-title"><a href="${r.url}" target="_blank" rel="noopener">${r.title}</a></span>
      <span class="rec-tags">${r.tags.map(t => `<span class="rec-tag">${t}</span>`).join('')}</span>
    </div>
  `).join('');
}

filtersEl.addEventListener('click', e => {
  if (!e.target.classList.contains('tag-btn')) return;
  filtersEl.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  activeTag = e.target.dataset.tag;
  render();
});

render();
</script>
