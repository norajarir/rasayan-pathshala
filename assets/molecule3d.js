/* ============ 3D Molecule viewer (pure canvas, no libraries) ============ */
(function(){
  const COL = {
    H:"#ffffff", C:"#3b4a63", O:"#ff4d4d", N:"#4d7cff", S:"#ffd43b",
    Cl:"#5fe08a", Br:"#c96a3c", P:"#ff9f43", F:"#7ee787", I:"#a855f7"
  };
  const RAD = {H:0.30,C:0.44,O:0.40,N:0.42,S:0.52,Cl:0.50,Br:0.56,P:0.52,F:0.36,I:0.60};

  window.MOLECULES = [
    {name:"Water", bn:"পানি", f:"H₂O", desc:{bn:"পৃথিবীর সবচেয়ে গুরুত্বপূর্ণ দ্রাবক। বাঁকা আকৃতি, বন্ধন কোণ ১০৪.৫°।",en:"The most important solvent on Earth. Bent shape, bond angle 104.5°."},
     atoms:[["O",0,0,0],["H",0.76,0.59,0],["H",-0.76,0.59,0]],
     bonds:[[0,1],[0,2]]},
    {name:"Methane", bn:"মিথেন", f:"CH₄", desc:{bn:"প্রাকৃতিক গ্যাসের প্রধান উপাদান। চতুস্তলকীয়, কোণ ১০৯.৫°।",en:"Main component of natural gas. Tetrahedral, 109.5° angles."},
     atoms:[["C",0,0,0],["H",0.63,0.63,0.63],["H",-0.63,-0.63,0.63],["H",-0.63,0.63,-0.63],["H",0.63,-0.63,-0.63]],
     bonds:[[0,1],[0,2],[0,3],[0,4]]},
    {name:"Carbon dioxide", bn:"কার্বন ডাইঅক্সাইড", f:"CO₂", desc:{bn:"রৈখিক অণু, দুটি দ্বিবন্ধন। গ্রিনহাউস গ্যাস।",en:"Linear molecule with two double bonds. A greenhouse gas."},
     atoms:[["C",0,0,0],["O",1.16,0,0],["O",-1.16,0,0]],
     bonds:[[0,1,2],[0,2,2]]},
    {name:"Ammonia", bn:"অ্যামোনিয়া", f:"NH₃", desc:{bn:"পিরামিডাকার আকৃতি, নিঃসঙ্গ ইলেকট্রন জোড় থাকায় ১০৭° কোণ।",en:"Pyramidal; a lone pair squeezes the angle to 107°."},
     atoms:[["N",0,0.25,0],["H",0.94,-0.33,0],["H",-0.47,-0.33,0.81],["H",-0.47,-0.33,-0.81]],
     bonds:[[0,1],[0,2],[0,3]]},
    {name:"Ethanol", bn:"ইথানল", f:"C₂H₅OH", desc:{bn:"অ্যালকোহল শ্রেণির সরল সদস্য; –OH কার্যকরী মূলক।",en:"The simplest common alcohol; carries an –OH group."},
     atoms:[["C",-0.8,0.2,0],["C",0.5,-0.4,0],["O",1.5,0.5,0],["H",1.4,1.4,0],
            ["H",-1.4,-0.4,0.6],["H",-1.4,-0.4,-0.6],["H",-0.9,0.9,0.7],["H",-0.9,0.9,-0.7],["H",0.6,-1.3,0.5]],
     bonds:[[0,1],[1,2],[2,3],[0,4],[0,5],[0,6],[0,7],[1,8]]},
    {name:"Benzene", bn:"বেনজিন", f:"C₆H₆", desc:{bn:"সুগন্ধি যৌগের আদর্শ উদাহরণ — সমতলীয় ষড়ভুজ রিং।",en:"The classic aromatic compound — a planar hexagonal ring."},
     atoms:(function(){
        const a=[],b=[];
        for(let i=0;i<6;i++){const t=i*Math.PI/3; a.push(["C",1.4*Math.cos(t),1.4*Math.sin(t),0]);}
        for(let i=0;i<6;i++){const t=i*Math.PI/3; a.push(["H",2.5*Math.cos(t),2.5*Math.sin(t),0]);}
        for(let i=0;i<6;i++){b.push([i,(i+1)%6]);}
        for(let i=0;i<6;i++){b.push([i,i+6]);}
        return {a:a,b:b};
     })()},
    {name:"Glucose", bn:"গ্লুকোজ", f:"C₆H₁₂O₆", desc:{bn:"সরল শর্করা — কোষের জ্বালানি। রিং আকৃতির অণু।",en:"A simple sugar — cellular fuel, drawn as a ring."},
     atoms:(function(){
        const a=[],b=[];
        for(let i=0;i<6;i++){const t=i*Math.PI/3; a.push(["C",1.5*Math.cos(t),1.5*Math.sin(t),0]);}
        for(let i=0;i<6;i++){const t=i*Math.PI/3;
          a.push(["O",2.45*Math.cos(t),2.45*Math.sin(t),0]);
          a.push(["H",2.95*Math.cos(t),2.95*Math.sin(t),0]);
        }
        for(let i=0;i<6;i++){b.push([i,(i+1)%6]);}
        for(let i=0;i<6;i++){b.push([i,i+6]); b.push([i+6,i+7]);}
        return {a:a,b:b};
     })()},
    {name:"Sodium chloride", bn:"সোডিয়াম ক্লোরাইড", f:"NaCl", desc:{bn:"আয়নিক জালিকা — Na⁺ ও Cl⁻ একান্তরভাবে সাজানো।",en:"Ionic lattice with alternating Na⁺ and Cl⁻ ions."},
     atoms:(function(){
        const a=[],b=[];
        for(let x=-1;x<=1;x++)for(let y=-1;y<=1;y++)for(let z=-1;z<=1;z++){
          const isNa=((x+y+z)%2===0);
          a.push([isNa?"Na":"Cl",x*1.0,y*1.0,z*1.0]);
        }
        return {a:a,b:b};
     })()}
  ];

  /* normalise the special entries that use {a,b} */
  window.MOLECULES.forEach(m=>{
    if(m.atoms && m.atoms.a){ m.bonds = m.atoms.b; m.atoms = m.atoms.a; }
    if(!m.bonds) m.bonds = [];
  });

  /* --- extra colours for Na --- */
  COL.Na = "#ffd43b"; RAD.Na = 0.55;

  let cur = 0, rotX = -0.35, rotY = 0.6, zoom = 1;
  let drag = false, lx = 0, ly = 0, autoSpin = true;
  let canvas, ctx, host;

  function project(p, w, h){
    let [x,y,z] = p;
    // rotate Y
    let cy = Math.cos(rotY), sy = Math.sin(rotY);
    let x1 = x*cy - z*sy, z1 = x*sy + z*cy;
    // rotate X
    let cx = Math.cos(rotX), sx = Math.sin(rotX);
    let y1 = y*cx - z1*sx, z2 = y*sx + z1*cx;
    const d = 7.5, f = 8.2 * zoom * Math.min(w,h) / 6;
    const sc = f / (d - z2*0.9 + 3);
    return { X: w/2 + x1*sc, Y: h/2 - y1*sc, Z: z2, s: sc };
  }

  function draw(){
    const w = host.clientWidth, h = host.clientHeight;
    if(canvas.width !== w*devicePixelRatio){ canvas.width = w*devicePixelRatio; canvas.height = h*devicePixelRatio; }
    ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
    ctx.clearRect(0,0,w,h);

    const m = window.MOLECULES[cur];
    const pts = m.atoms.map(a => ({sym:a[0], p:project([a[1],a[2],a[3]], w, h)}));

    // bonds (behind = lower Z first)
    m.bonds.forEach(b=>{
      const A = pts[b[0]], B = pts[b[1]];
      const order = b[2] || 1;
      ctx.strokeStyle = "rgba(190,205,235,.55)";
      ctx.lineCap = "round";
      const dx = B.X-A.X, dy = B.Y-A.Y, len = Math.hypot(dx,dy) || 1;
      const nx = -dy/len, ny = dx/len;
      const offs = order===2 ? [-2.6, 2.6] : order===3 ? [-4,0,4] : [0];
      offs.forEach(o=>{
        ctx.lineWidth = Math.max(1.6, 5.2 * (A.s+B.s)/2 / 22);
        ctx.beginPath();
        ctx.moveTo(A.X + nx*o, A.Y + ny*o);
        ctx.lineTo(B.X + nx*o, B.Y + ny*o);
        ctx.stroke();
      });
    });

    // atoms sorted by depth
    pts.map((p,i)=>({...p,i})).sort((a,b)=>a.p.Z-b.p.Z).forEach(o=>{
      const r = Math.max(5, (RAD[o.sym]||0.4) * o.p.s * 3.2);
      const col = COL[o.sym] || "#9aa7c2";
      const g = ctx.createRadialGradient(o.p.X-r*0.35, o.p.Y-r*0.35, r*0.15, o.p.X, o.p.Y, r);
      g.addColorStop(0,"#ffffff");
      g.addColorStop(0.25, col);
      g.addColorStop(1, shade(col,-0.45));
      ctx.beginPath(); ctx.arc(o.p.X, o.p.Y, r, 0, Math.PI*2);
      ctx.fillStyle = g; ctx.fill();
      ctx.strokeStyle = "rgba(0,0,0,.35)"; ctx.lineWidth = 1; ctx.stroke();
      // label
      if(r > 9){
        ctx.fillStyle = (o.sym==="H"||o.sym==="Na") ? "#101828" : "#fff";
        ctx.font = `700 ${Math.min(r*0.95, 15)}px system-ui,sans-serif`;
        ctx.textAlign="center"; ctx.textBaseline="middle";
        ctx.fillText(o.sym, o.p.X, o.p.Y+0.5);
      }
    });
  }
  function shade(hex, amt){
    const n = parseInt(hex.slice(1),16);
    let r=(n>>16)&255, g=(n>>8)&255, b=n&255;
    r=Math.round(Math.min(255,Math.max(0,r*(1+amt))));
    g=Math.round(Math.min(255,Math.max(0,g*(1+amt))));
    b=Math.round(Math.min(255,Math.max(0,b*(1+amt))));
    return `rgb(${r},${g},${b})`;
  }

  let raf;
  function loop(){
    if(autoSpin && !drag) rotY += 0.0075;
    draw();
    raf = requestAnimationFrame(loop);
  }

  window.initMoleculeViewer = function(){
    host = document.getElementById("viewerHost");
    if(!host) return;
    canvas = document.createElement("canvas");
    host.appendChild(canvas);
    ctx = canvas.getContext("2d");

    const list = document.getElementById("molList");
    list.innerHTML = "";
    window.MOLECULES.forEach((m,i)=>{
      const b = document.createElement("button");
      b.className = "mol-btn" + (i===0?" on":"");
      b.innerHTML = `<span style="font-size:1.1rem">⚛️</span><span><b>${m.bn}</b><small>${m.f} · ${m.name}</small></span>`;
      b.onclick = ()=>{ cur = i; document.querySelectorAll(".mol-btn").forEach(x=>x.classList.remove("on")); b.classList.add("on"); updateMeta(); };
      list.appendChild(b);
    });

    canvas.addEventListener("pointerdown", e=>{ drag=true; lx=e.clientX; ly=e.clientY; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener("pointermove", e=>{
      if(!drag) return;
      rotY += (e.clientX - lx) * 0.012;
      rotX += (e.clientY - ly) * 0.012;
      rotX = Math.max(-1.5, Math.min(1.5, rotX));
      lx = e.clientX; ly = e.clientY;
    });
    canvas.addEventListener("pointerup", ()=>{ drag=false; });
    canvas.addEventListener("pointerleave", ()=>{ drag=false; });
    canvas.addEventListener("wheel", e=>{ e.preventDefault(); zoom = Math.max(0.55, Math.min(2.2, zoom - e.deltaY*0.0012)); }, {passive:false});
    host.addEventListener("dblclick", ()=>{ rotX=-0.35; rotY=0.6; zoom=1; });

    updateMeta();
    cancelAnimationFrame(raf); loop();
  };

  function updateMeta(){
    const m = window.MOLECULES[cur];
    const lang = window.LANG || "bn";
    document.getElementById("molName").textContent = m.bn + " · " + m.name;
    document.getElementById("molFormula").textContent = m.f;
    document.getElementById("molDesc").textContent = m.desc[lang] || m.desc.bn;
  }
  window.refreshMoleculeLang = updateMeta;
})();
