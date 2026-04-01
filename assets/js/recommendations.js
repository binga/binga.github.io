var recommendations = [
  { title: "Research as Understanding", url: "https://kanjun.me/writing/research-as-understanding", tags: ["research", "thinking"], year: "2021" },
  { title: "Engineer/Manager Career Pendulum", url: "https://charity.wtf/2017/05/11/the-engineer-manager-pendulum", tags: ["career", "leadership"], year: "2017" },
  { title: "1000 True Fans", url: "https://kk.org/thetechnium/1000-true-fans/", tags: ["creator economy", "strategy"], year: "2008" },
  { title: "The Polymath Playbook", url: "https://salman.io/blog/polymath-playbook/", tags: ["career", "learning"], year: "2020" },
  { title: "How to get Feedback", url: "https://unchartedterritories.tomaspueyo.com/p/how-to-get-feedback", tags: ["productivity", "communication"], year: "2021" },
  { title: "Signaling on the internet", url: "https://eriktorenberg.substack.com/p/signaling-on-the-internet", tags: ["internet", "strategy"], year: "2021" },
  { title: "Your life in weeks", url: "https://waitbutwhy.com/2014/05/life-weeks.html", tags: ["philosophy", "thinking"], year: "2014" },
  { title: "Pick up What They put down", url: "https://www.swyx.io/puwtpd", tags: ["career", "networking"], year: "2020" },
  { title: "Some Career Advice", url: "https://lethain.com/career-advice", tags: ["career"], year: "2019" },
  { title: "Counting Deaths in India is difficult", url: "https://www.hindustantimes.com/opinion/counting-deaths-in-india-is-difficult-101626273326958.html", tags: ["india", "data"], year: "2021" },
  { title: "Being an Infinite Player", url: "https://sashachapin.substack.com/p/a-brief-practical-guide-to-being", tags: ["philosophy", "mindset"], year: "2021" },
  { title: "Agency", url: "https://map.simonsarris.com/p/the-most-precious-resource-is-agency", tags: ["philosophy", "mindset"], year: "2021" },
  { title: "Reading Better", url: "https://fs.blog/reading", tags: ["learning", "productivity"], year: "2021" },
  { title: "How to waste career", url: "https://apoorvagovind.substack.com/p/how-to-waste-your-career-one-comfortable", tags: ["career"], year: "2020" },
  { title: "Why the new employer is no employer at all", url: "https://junglegym.substack.com/p/new-employer-of-choice", tags: ["career", "strategy"], year: "2021" },
  { title: "How to explain complicated things in a simple way", url: "https://www.exaltus.ca/blog/explain-complicated-things", tags: ["communication", "thinking"], year: "2020" },
  { title: "Early Work", url: "https://paulgraham.com/early.html", tags: ["philosophy", "research"], year: "2020" },
  { title: "Build Personal Moats", url: "https://eriktorenberg.substack.com/p/build-personal-moats", tags: ["career", "strategy"], year: "2020" },
  { title: "The Downside of Work Life Balance", url: "https://jamesclear.com/four-burners-theory", tags: ["productivity", "philosophy"], year: "2018" },
  { title: "Becoming a Magician", url: "https://autotranslucence.com/2018/03/30/becoming-a-magician", tags: ["mindset", "philosophy"], year: "2018" },
  { title: "Calendar. Not to-do lists.", url: "https://blog.usejournal.com/calendar-in-stead-of-to-do-lists-9ada86a512dd", tags: ["productivity"], year: "2018" },
  { title: "How to be great? Just be good, repeatedly", url: "https://blog.stephsmith.io/how-to-be-great", tags: ["mindset", "career"], year: "2019" },
  { title: "Take Asymmetric Bets", url: "https://eriktorenberg.substack.com/p/take-asymmetric-bets", tags: ["strategy", "career"], year: "2020" },
  { title: "The Most Respectful Interpretation", url: "https://fs.blog/most-respectful-interpretation", tags: ["communication", "philosophy"], year: "2020" },
  { title: "When a grieving Mother Talks, Listen", url: "https://www.nytimes.com/2017/12/21/style/perinatal-death-stillbirth-childbirth.html", tags: ["life", "empathy"], year: "2017" },
  { title: "How to Write Better? Why, What and How Framework", url: "https://eugeneyan.com/writing/writing-docs-why-what-how", tags: ["writing", "communication"], year: "2020" },
  { title: "Signaling as a service", url: "https://julian.digital/2020/03/28/signaling-as-a-service", tags: ["internet", "strategy"], year: "2020" },
  { title: "The Billion Dollar Creator", url: "https://nathanbarry.com/billion", tags: ["creator economy", "strategy"], year: "2020" },
  { title: "Why Nerds are Unpopular", url: "https://paulgraham.com/nerds.html", tags: ["philosophy", "life"], year: "2003" },
  { title: "Climbing the Wealth Ladder", url: "https://ofdollarsanddata.com/climbing-the-wealth-ladder", tags: ["finance"], year: "2019" },
  { title: "Proof of X", url: "https://julian.digital/2020/08/06/proof-of-x/", tags: ["internet", "thinking"], year: "2020" },
  { title: "Network Legibility and Status", url: "https://boundless.substack.com/p/network-legibility-and-status-125", tags: ["internet", "networking"], year: "2021" },
  { title: "How to do great work", url: "https://paulgraham.com/greatwork.html", tags: ["philosophy", "career"], year: "2023" },
  { title: "Principles of Effective Research", url: "https://michaelnielsen.org/blog/principles-of-effective-research/", tags: ["research"], year: "2004" },
  { title: "Principles of Research Code", url: "https://www.theexclusive.org/2012/08/principles-of-research-code.html", tags: ["research", "writing"], year: "2012" },
  { title: "Why I keep a research blog", url: "https://gregorygundersen.com/blog/2020/01/12/why-research-blog/", tags: ["research", "writing"], year: "2020" },
  { title: "A career cold start algorithm", url: "https://boz.com/articles/career-cold-start", tags: ["career"], year: "2022" },
  { title: "Every company has the same hiring criteria", url: "https://ethanding.substack.com/p/every-company-has-the-same-hiring", tags: ["career"], year: "2025" }
];

function initRecommendations() {
  var allTags = [];
  var seen = {};
  recommendations.forEach(function (r) {
    r.tags.forEach(function (t) {
      if (!seen[t]) { seen[t] = true; allTags.push(t); }
    });
  });
  allTags.sort();

  var filtersEl = document.getElementById("recFilters");
  allTags.forEach(function (tag) {
    var btn = document.createElement("button");
    btn.className = "tag-btn";
    btn.setAttribute("data-tag", tag);
    btn.textContent = tag;
    filtersEl.appendChild(btn);
  });

  var activeTag = "all";

  function render() {
    var list = document.getElementById("recList");
    var count = document.getElementById("recCount");
    var visible = activeTag === "all" ? recommendations : recommendations.filter(function (r) { return r.tags.indexOf(activeTag) !== -1; });
    count.textContent = "Showing " + visible.length + " of " + recommendations.length + " articles";
    var html = "";
    visible.forEach(function (r) {
      var tagHtml = "";
      r.tags.forEach(function (t) { tagHtml += '<span class="rec-tag">' + t + "</span>"; });
      html += '<div class="rec-card">'
        + '<span class="rec-title"><a href="' + r.url + '" target="_blank" rel="noopener">' + r.title + '</a></span>'
        + '<span class="rec-meta">'
        + '<span class="rec-tags">' + tagHtml + '</span>'
        + '<span class="rec-date">' + r.year + '</span>'
        + '</span>'
        + '</div>';
    });
    list.innerHTML = html;
  }

  filtersEl.addEventListener("click", function (e) {
    if (!e.target.classList.contains("tag-btn")) return;
    var btns = filtersEl.querySelectorAll(".tag-btn");
    for (var i = 0; i < btns.length; i++) { btns[i].classList.remove("active"); }
    e.target.classList.add("active");
    activeTag = e.target.getAttribute("data-tag");
    render();
  });

  render();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initRecommendations);
} else {
  initRecommendations();
}
