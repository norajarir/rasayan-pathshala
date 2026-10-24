/* ===== রসায়ন পাঠশালা — app logic ===== */
(function(){
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  let LANG = "bn";
  window.LANG = LANG;

  /* ---------------- toast ---------------- */
  function toast(msg){
    const t = $("#toast"); t.textContent = msg; t.classList.add("on");
    clearTimeout(t._t); t._t = setTimeout(()=>t.classList.remove("on"), 2400);
  }

  /* ---------------- language ---------------- */
  function setLang(l){
    LANG = l; window.LANG = l;
    document.documentElement.lang = l === "bn" ? "bn" : "en";
    $$(".lang button").forEach(b=>b.classList.toggle("on", b.dataset.lang === l));
    $$("[data-bn][data-en]").forEach(el=>{
      const v = el.dataset[l];
      if(v !== undefined) el.innerHTML = v;
    });
    renderChapters(); renderQuiz(); renderBoard(); renderPT();
    if(window.refreshMoleculeLang) window.refreshMoleculeLang();
    try{ localStorage.setItem("chem_lang", l); }catch(e){}
  }
  $$(".lang button").forEach(b=> b.onclick = ()=> setLang(b.dataset.lang));

  /* ---------------- reveal ---------------- */
  const io = new IntersectionObserver(es=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, {threshold:.12});
  function observeReveals(){ $$(".rv").forEach(el=>{ if(!el.classList.contains("in")) io.observe(el); }); }

  /* ---------------- card hover glow ---------------- */
  document.addEventListener("pointermove", e=>{
    const c = e.target.closest(".card");
    if(!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", (e.clientX-r.left)+"px");
    c.style.setProperty("--my", (e.clientY-r.top)+"px");
  });

  /* ================= CHAPTERS ================= */
  let chYear = 1;
  let lastElZ = null;
  function renderChapters(){
    const host = $("#chList");
    if(!host) return;
    const list = window.CHAPTERS.filter(c=>c.year === chYear);
    host.innerHTML = list.map(c=>{
      const t = c[LANG] || c.bn;
      return `
      <div class="ch-item" data-id="${c.id}">
        <div class="ch-head">
          <div class="ch-num">${c.no}</div>
          <div class="ch-ttl"><b>${t.title}</b><span>${t.sub}</span></div>
          <div class="ch-arrow">▼</div>
        </div>
        <div class="ch-body">
          <h4>${LANG==="bn"?"মূল ধারণা":"The core idea"}</h4>
          <p>${c.concept[LANG]}</p>
          <div class="analogy"><b>${LANG==="bn"?"সহজ উদাহরণ: ":"Simple analogy: "}</b>${c.analogy[LANG]}</div>
          <h4>${LANG==="bn"?"মনে রাখার মূল কথা":"Key points"}</h4>
          <ul>${c.points.map(p=>`<li>${p[LANG]}</li>`).join("")}</ul>
          ${c.extra ? `<h4>${LANG==="bn"?"আরও জানা ভালো":"Good to know"}</h4>
          <ul class="ch-extra">${c.extra.map(p=>`<li>${p[LANG]}</li>`).join("")}</ul>` : ""}
          <div class="chips">${(c.chips[LANG]||[]).map(x=>`<span class="chip">${x}</span>`).join("")}</div>
        </div>
      </div>`;
    }).join("");

    host.querySelectorAll(".ch-head").forEach(h=>{
      h.onclick = ()=> h.parentElement.classList.toggle("open");
    });
    // open the first one by default for a friendlier first impression
    const first = host.querySelector(".ch-item"); if(first) first.classList.add("open");
  }
  const chOpenAll = $("#chOpenAll");
  if(chOpenAll) chOpenAll.onclick = ()=>{
    const items = $$("#chList .ch-item");
    const anyClosed = items.some(i=>!i.classList.contains("open"));
    items.forEach(i=> i.classList.toggle("open", anyClosed));
  };
  const chCount = $("#chCount");
  if(chCount) chCount.textContent = LANG==="bn" ? window.CHAPTERS.length + " অধ্যায়" : window.CHAPTERS.length + " chapters";

  $$(".ch-tabs .tab").forEach(t=>{
    t.onclick = ()=>{
      $$(".ch-tabs .tab").forEach(x=>x.classList.remove("on"));
      t.classList.add("on"); chYear = +t.dataset.year; renderChapters();
    };
  });

  /* ================= PERIODIC TABLE ================= */
  function renderPT(){
    const host = $("#pt"); if(!host) return;
    host.innerHTML = window.ELEMENTS.map(e=>{
      const cat = window.CATEGORIES[e.cat];
      return `<div class="el" data-z="${e.z}" data-cat="${e.cat}" data-g="${e.g}" data-p="${e.p}"
        style="grid-column:${e.x};grid-row:${e.y};background:${cat.color}"
        title="${e.bn} · ${e.en}">
        <i>${e.z}</i><b>${e.sym}</b><i>${e.m}</i></div>`;
    }).join("");

    host.querySelectorAll(".el").forEach(el=>{
      el.onclick = ()=>{
        const z = +el.dataset.z;
        lastElZ = z;
        const e = window.ELEMENTS.find(x=>x.z===z);
        const cat = window.CATEGORIES[e.cat];
        const val = (window.VALENCY[e.sym]||[]).join(", ") || "—";
        const cfg = electronConfig(e.z);
        $("#elInfo").innerHTML = `
          <div><div class="k">${LANG==="bn"?"নাম":"Name"}</div><div class="v">${LANG==="bn"?e.bn:e.en}<br><span style="font-size:.82rem;color:var(--mut);font-weight:500">${LANG==="bn"?e.en:e.bn}</span></div></div>
          <div><div class="k">${LANG==="bn"?"প্রতীক":"Symbol"}</div><div class="v" style="font-size:1.5rem">${e.sym}</div></div>
          <div><div class="k">${LANG==="bn"?"পারমাণবিক সংখ্যা":"Atomic no."}</div><div class="v">${e.z}</div></div>
          <div><div class="k">${LANG==="bn"?"পারমাণবিক ভর":"Atomic mass"}</div><div class="v">${e.m}</div></div>
          <div><div class="k">${LANG==="bn"?"শ্রেণি":"Category"}</div><div class="v" style="color:${cat.color}">${cat[LANG]}</div></div>
          <div><div class="k">${LANG==="bn"?"গ্রুপ / পিরিয়ড":"Group / Period"}</div><div class="v">${e.g||"—"} / ${e.p}</div></div>
          <div><div class="k">${LANG==="bn"?"যোজনী":"Common valency"}</div><div class="v">${val}</div></div>
          <div><div class="k">${LANG==="bn"?"ইলেকট্রন বিন্যাস":"Configuration"}</div><div class="v" style="font-size:.85rem">${cfg}</div></div>`;
        host.querySelectorAll(".el").forEach(x=>x.classList.remove("hi"));
        el.classList.add("hi");
        // highlight its group
        host.querySelectorAll(".el").forEach(x=>{
          if(x !== el) x.classList.toggle("dim", x.dataset.g !== el.dataset.g || el.dataset.g === "0");
        });
      };
    });

    if(lastElZ){ const n = host.querySelector(`.el[data-z="${lastElZ}"]`); if(n) n.click(); }

    // legend
    const lg = $("#ptLegend");
    if(lg) lg.innerHTML = Object.entries(window.CATEGORIES).map(([k,v])=>
      `<span><i style="background:${v.color}"></i>${v[LANG]}</span>`).join("");
  }
  function electronConfig(z){
    const orb = [[1,"1s",2],[2,"2s",2],[3,"2p",6],[4,"3s",2],[5,"3p",6],[6,"4s",2],[7,"3d",10],[8,"4p",6],[9,"5s",2],[10,"4d",10],[11,"5p",6],[12,"6s",2],[13,"4f",14],[14,"5d",10],[15,"6p",6],[16,"7s",2],[17,"5f",14],[18,"6d",10],[19,"7p",6]];
    let left = z, out = [];
    for(const [,name,cap] of orb){ if(left<=0) break; const n = Math.min(cap,left); out.push(name+n); left -= n; }
    return out.join(" ");
  }

  /* ================= QUIZ ================= */
  const QS = {order:[], i:0, score:0, answered:false, year:1};
  function shuffle(a){ for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }

  function startQuiz(year){
    QS.year = year;
    QS.order = shuffle(window.QUIZ[year].map((q,i)=>i));
    QS.i = 0; QS.score = 0; QS.answered = false; QS.done = false;
    $("#quizResult").style.display = "none";
    $("#quizBody").style.display = "block";
    renderQuiz();
  }

  function renderQuiz(){
    const body = $("#quizBody"); if(!body) return;
    if(QS.done){ showResult(window.QUIZ[QS.year].length); return; }
    const bank = window.QUIZ[QS.year];
    if(!QS.order.length){ QS.order = bank.map((q,i)=>i); }
    const qi = QS.order[QS.i];
    const q = bank[qi];
    if(!q) return;

    $("#qProg").style.width = ((QS.i)/bank.length*100) + "%";
    $("#qCount").textContent = (LANG==="bn" ? `প্রশ্ন ${QS.i+1} / ${bank.length}` : `Question ${QS.i+1} of ${bank.length}`);
    $("#qScore").textContent = (LANG==="bn" ? "স্কোর: " : "Score: ") + QS.score;
    $("#qText").innerHTML = `${q.q[LANG]}`;
    const keys = ["A","B","C","D"];
    $("#qOpts").innerHTML = q.o[LANG].map((o,i)=>
      `<button class="opt" data-i="${i}"><span class="key">${keys[i]}</span><span>${o}</span></button>`).join("");
    $("#qExpl").className = "q-expl";
    $("#qExpl").innerHTML = "";
    $("#qNext").textContent = (LANG==="bn" ? "পরের প্রশ্ন →" : "Next question →");
    QS.answered = false;

    $("#qOpts").querySelectorAll(".opt").forEach(b=>{
      b.onclick = ()=> answer(+b.dataset.i, q);
    });
  }

  function answer(i, q){
    if(QS.answered) return;
    QS.answered = true;
    const opts = $$("#qOpts .opt");
    opts.forEach(o=>{
      o.classList.add("lock");
      const k = +o.dataset.i;
      if(k === q.a) o.classList.add("correct");
      else if(k === i) o.classList.add("wrong");
    });
    if(i === q.a) QS.score++;
    $("#qScore").textContent = (LANG==="bn" ? "স্কোর: " : "Score: ") + QS.score;
    const ex = $("#qExpl");
    ex.innerHTML = `<b>${LANG==="bn"?"ব্যাখ্যা: ":"Explanation: "}</b>${q.e[LANG]}`;
    ex.classList.add("show");
    $("#qNext").textContent = (QS.i === QS.order.length-1)
      ? (LANG==="bn" ? "ফলাফল দেখুন 🎉" : "See result 🎉")
      : (LANG==="bn" ? "পরের প্রশ্ন →" : "Next question →");
  }

  function nextQ(){
    const bank = window.QUIZ[QS.year];
    if(!QS.answered){ toast(LANG==="bn" ? "আগে একটি উত্তর বেছে নিন" : "Choose an answer first"); return; }
    if(QS.i === QS.order.length-1){ showResult(bank.length); return; }
    QS.i++; renderQuiz();
  }

  function showResult(total){
    QS.done = true;
    const pct = Math.round(QS.score/total*100);
    $("#quizBody").style.display = "none";
    const res = $("#quizResult");
    res.style.display = "block";
    let title, msg;
    if(pct >= 80){ title = LANG==="bn" ? "অসাধারণ! 🏆" : "Outstanding! 🏆";
      msg = LANG==="bn" ? "আপনার ধারণা খুবই পরিষ্কার। এখন বোর্ড প্রশ্নগুলো অনুশীলন করুন।" : "Your concepts are very clear. Now practise the board questions."; }
    else if(pct >= 50){ title = LANG==="bn" ? "ভালো করেছ! 💪" : "Good effort! 💪";
      msg = LANG==="bn" ? "কিছু জায়গায় আরও যত্ন দরকার। যেসব প্রশ্ন ভুল হয়েছে, সেই অধ্যায়গুলো আবার পড়ুন।" : "A few gaps remain. Re-read the chapters behind the questions you missed."; }
    else { title = LANG==="bn" ? "আরও অনুশীলন দরকার 📚" : "More practice needed 📚";
      msg = LANG==="bn" ? "চিন্তা নেই! প্রথমে অধ্যায়ভিত্তিক নোট পড়ুন, তারপর আবার কুইজ দিন।" : "No worries! Read the chapter notes first, then try again."; }

    res.innerHTML = `
      <div class="q-res">
        <div class="ring" style="--p:${pct}"><span>${pct}%</span></div>
        <h3>${title}</h3>
        <p>${LANG==="bn"?"সঠিক উত্তর":"Correct answers"}: <b style="color:var(--ok)">${QS.score}</b> / ${total}</p>
        <div class="msg">${msg}</div>
        <div style="margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-p" onclick="window.__restartQuiz()">${LANG==="bn"?"আবার কুইজ দিন":"Try again"}</button>
          <button class="btn btn-g" onclick="document.getElementById('chapters').scrollIntoView({behavior:'smooth'})">${LANG==="bn"?"অধ্যায়ে ফিরে যান":"Back to chapters"}</button>
        </div>
      </div>`;
  }
  window.__restartQuiz = ()=> startQuiz(QS.year);

  if($("#qNext")) $("#qNext").onclick = nextQ;
  $$(".quiz-tabs .tab").forEach(t=>{
    t.onclick = ()=>{
      $$(".quiz-tabs .tab").forEach(x=>x.classList.remove("on"));
      t.classList.add("on"); startQuiz(+t.dataset.year);
    };
  });

  /* ================= BALANCER ================= */
  /* Very light parser: supports elements, parentheses, and coefficient input like
     "H2 + O2 -> H2O". Solves the linear system by Gaussian elimination on the null space. */
  function parseSide(side){
    return side.split("+").map(t=>t.trim()).filter(Boolean).map(term=>{
      const m = {};
      let coef = 1;
      const cm = term.match(/^(\d+)(?=[A-Z(])/);
      if(cm){ coef = +cm[1]; term = term.slice(cm[1].length); }
      // parse tokens
      let i = 0;
      function parseGroup(){
        const res = {};
        while(i < term.length){
          const ch = term[i];
          if(ch === "("){ i++; const sub = parseGroup(); for(const k in sub) res[k] = (res[k]||0) + sub[k]; continue; }
          if(ch === ")"){ i++; let num = ""; while(/\d/.test(term[i]||"")){ num += term[i++]; } const n = num? +num : 1;
            for(const k in res) res[k] *= n; return res; }
          if(/[A-Z]/.test(ch)){
            let sym = ch; i++;
            while(/[a-z]/.test(term[i]||"")){ sym += term[i++]; }
            let num = ""; while(/\d/.test(term[i]||"")){ num += term[i++]; }
            res[sym] = (res[sym]||0) + (num? +num : 1);
            continue;
          }
          i++;
        }
        return res;
      }
      const g = parseGroup();
      for(const k in g) g[k] *= coef;
      return g;
    });
  }

  function gcd(a,b){ a=Math.abs(a); b=Math.abs(b); while(b){ [a,b]=[b,a%b]; } return a; }
  function lcm(a,b){ return a/gcd(a,b)*b; }
  const T = (bn,en)=> LANG==="bn" ? bn : en;

  function balance(eqStr){
    const clean = eqStr.replace(/→|=>|=+/g, "->").replace(/\s+/g, "");
    if(!clean.includes("->")) throw new Error(T("বিক্রিয়ার দুই দিকে -> চিহ্ন দিন", "Use -> between the two sides"));
    const [L, R] = clean.split("->");
    if(!L || !R) throw new Error(T("বিক্রিয়ক বা উৎপাদ খালি", "Reactant or product side is empty"));
    const left = parseSide(L), right = parseSide(R);
    const els = [...new Set([...left, ...right].flatMap(o=>Object.keys(o)))];
    const n = left.length + right.length;

    // build matrix: rows = elements, cols = species (left positive, right negative)
    const A = els.map(el=>{
      const row = new Array(n).fill(0);
      left.forEach((o,i)=> row[i] = o[el]||0);
      right.forEach((o,j)=> row[left.length+j] = -(o[el]||0));
      return row;
    });

    // Gaussian elimination to find null space basis
    const M = A.map(r=>r.slice());
    const pivots = [];
    let row = 0;
    for(let col=0; col<n && row<M.length; col++){
      let sel = -1;
      for(let r=row; r<M.length; r++) if(Math.abs(M[r][col])>1e-9){ sel = r; break; }
      if(sel<0) continue;
      [M[row],M[sel]] = [M[sel],M[row]];
      const pv = M[row][col];
      for(let c=col;c<n;c++) M[row][c] /= pv;
      for(let r=0;r<M.length;r++){
        if(r!==row && Math.abs(M[r][col])>1e-9){
          const f = M[r][col];
          for(let c=col;c<n;c++) M[r][c] -= f*M[row][c];
        }
      }
      pivots.push(col); row++;
    }
    const freeCols = [];
    for(let c=0;c<n;c++) if(!pivots.includes(c)) freeCols.push(c);
    if(freeCols.length !== 1) throw new Error(T("এই সমীকরণটি অনন্যভাবে ব্যালান্স করা যাচ্ছে না — মৌল ও সংকেত চেক করুন", "This equation cannot be balanced uniquely — check the elements and formulae"));

    const free = freeCols[0];
    const sol = new Array(n).fill(0);
    sol[free] = 1;
    pivots.forEach((pc, r)=>{
      sol[pc] = -M[r][free];
    });

    // clear negatives & scale to smallest integers
    let vals = sol.map(v=> v);
    if(vals.some(v=>v<0)){
      if(vals.every(v=>v<=0)) vals = vals.map(v=>-v);
      else throw new Error(T("সমাধান সম্ভব নয়", "No valid solution"));
    }
    // rationalise via fractions (simple approach: multiply to integers using denominator search)
    let denom = 1;
    vals.forEach(v=>{ for(let d=2; d<=60; d++){ if(Math.abs(v*d - Math.round(v*d)) < 1e-6){ denom = lcm(denom, d); break; } } });
    vals = vals.map(v=> Math.round(v*denom));
    let g = vals.reduce((a,b)=> gcd(a,b));
    vals = vals.map(v=> v/g);

    // if any value is 0 => invalid
    if(vals.some(v=>v<=0)) throw new Error(T("সমাধান সম্ভব নয়", "No valid solution"));

    const leftTerms = left.map((o,i)=> (vals[i]>1? `<span class="co">${vals[i]}</span>` : "") + fmtTerm(L.split("+")[i]));
    const rightTerms = right.map((o,j)=> (vals[left.length+j]>1? `<span class="co">${vals[left.length+j]}</span>` : "") + fmtTerm(R.split("+")[j]));
    return { html: leftTerms.join(" + ") + " → " + rightTerms.join(" + "), els };
  }

  function fmtTerm(t){
    return t.trim().replace(/([A-Za-z\)])(\d+)/g, "$1<sub>$2</sub>").replace(/->/g,"→");
  }

  function doBalance(){
    const inp = $("#balInput").value;
    const out = $("#balOut");
    if(!inp.trim()){ out.innerHTML = `<span class="bal-msg err">${LANG==="bn"?"সমীকরণ লিখুন":"Enter an equation"}</span>`; return; }
    try{
      const r = balance(inp);
      out.innerHTML = `<div><div class="bal-eq">${r.html}</div>
        <div class="bal-msg ok">✅ ${LANG==="bn"?"সমীকরণটি ব্যালান্স হয়েছে":"Equation balanced"}</div></div>`;
    }catch(err){
      out.innerHTML = `<span class="bal-msg err">⚠️ ${err.message}</span>`;
    }
  }
  if($("#balGo")) $("#balGo").onclick = doBalance;
  if($("#balInput")) $("#balInput").addEventListener("keydown", e=>{ if(e.key==="Enter" && !e.shiftKey){ e.preventDefault(); doBalance(); } });
  $$(".examples button").forEach(b=>{
    b.onclick = ()=>{ $("#balInput").value = b.textContent.replace(/→/g,"->"); doBalance(); };
  });

  /* ================= BOARD QUESTIONS ================= */
  let bYear = 0;
  function renderBoard(){
    const host = $("#bqList"); if(!host) return;
    const list = window.BOARD.filter(b=> bYear === 0 || b.year === bYear);
    const tags = { k:{bn:"জ্ঞানমূলক", en:"Knowledge", c:"bq-tag k"}, c:{bn:"অনুধাবন", en:"Comprehension", c:"bq-tag c"}, p:{bn:"প্রয়োগ", en:"Application", c:"bq-tag"} };
    host.innerHTML = list.map((b,i)=>{
      const t = tags[b.type];
      const d = b[LANG] || b.bn;
      return `<div class="bq-item" data-i="${i}">
        <div class="bq-head">
          <span class="${t.c}">${LANG==="bn"?t.bn:t.en}</span>
          <div class="bq-q">${d.q}</div>
        </div>
        <div class="bq-a">${d.a.map(s=>`<div class="step">• ${s}</div>`).join("")}</div>
      </div>`;
    }).join("");
    const bqCount = $("#bqCount");
    if(bqCount) bqCount.textContent = LANG==="bn" ? list.length + "টি প্রশ্ন" : list.length + " questions";
    host.querySelectorAll(".bq-head").forEach(h=>{
      h.onclick = ()=> h.parentElement.classList.toggle("open");
    });
  }
  const bqSearch = $("#bqSearch");
  if(bqSearch) bqSearch.addEventListener("input", ()=>{
    const v = bqSearch.value.trim().toLowerCase();
    let shown = 0;
    $$("#bqList .bq-item").forEach(it=>{
      const ok = !v || it.textContent.toLowerCase().includes(v);
      it.style.display = ok ? "" : "none";
      if(ok) shown++;
    });
    const pill = $("#bqCount");
    if(pill) pill.textContent = LANG==="bn" ? shown + "টি প্রশ্ন" : shown + " questions";
  });
  const bqOpenAll = $("#bqOpenAll");
  if(bqOpenAll) bqOpenAll.onclick = ()=>{
    const items = $$("#bqList .bq-item");
    const anyClosed = items.some(i=>!i.classList.contains("open"));
    items.forEach(i=> i.classList.toggle("open", anyClosed));
    bqOpenAll.textContent = anyClosed
      ? (LANG==="bn" ? "সব উত্তর লুকান" : "Hide all answers")
      : (LANG==="bn" ? "সব উত্তর দেখান" : "Show all answers");
  };

  $$(".bq-tabs .tab").forEach(t=>{
    t.onclick = ()=>{
      $$(".bq-tabs .tab").forEach(x=>x.classList.remove("on"));
      t.classList.add("on"); bYear = +t.dataset.year; renderBoard();
    };
  });

  /* ================= INIT ================= */
  function init(){
    renderChapters(); renderPT(); renderBoard(); startQuiz(1);
    if(window.initMoleculeViewer) window.initMoleculeViewer();
    observeReveals();
    let saved = "bn";
    try{ saved = localStorage.getItem("chem_lang") || "bn"; }catch(e){}
    setLang(saved);
    // active nav on scroll
    const secs = $$("section[id]");
    window.addEventListener("scroll", ()=>{
      const y = window.scrollY + 140;
      let cur = secs[0] ? secs[0].id : "";
      secs.forEach(s=>{ if(s.offsetTop <= y) cur = s.id; });
      $$("nav.main a").forEach(a=> a.classList.toggle("on", a.getAttribute("href") === "#"+cur));
    }, {passive:true});
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
