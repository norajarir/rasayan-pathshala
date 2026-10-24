/* অধ্যায়ভিত্তিক নোট — Chapter notes (Bangla + English)
   প্রতিটি অধ্যায়ে: concept (সহজ ধারণা), analogy (দৈনন্দিন উদাহরণ), points (মূল কথা),
   plus bangla/english টগল। */

window.CHAPTERS = [
/* ==================== ১ম বর্ষ / 1st Year ==================== */
{
  id:"y1c1", year:1, no:1,
  bn:{ title:"ল্যাবরেটরির নিরাপদ ব্যবহার", sub:"Safety in the laboratory" },
  en:{ title:"Safety in the laboratory", sub:"ল্যাবরেটরি নিরাপদ ব্যবহার" },
  concept:{
    bn:"রসায়ন ল্যাব মানে কাচের টেস্টটিউব, অ্যাসিড, আগুন আর কখনো বিষাক্ত গ্যাস। এখানে 'সাবধানতা' মানে আগে থেকেই ভেবে রাখা — কী হতে পারে, আর হলে কী করব।",
    en:"A chemistry lab has glass tubes, acids, flames and sometimes toxic gases. 'Safety' means thinking ahead: what could go wrong, and what to do if it does."
  },
  analogy:{
    bn:"এটা ঠিক রাস্তা পার হওয়ার মতো। সবুজ হলে পার হব, লাল হলে থামব — নিয়ম মানলে দুর্ঘটনা হয় না।",
    en:"It is like crossing a road: walk on green, stop on red. Following the rule is what prevents an accident."
  },
  points:[
    {bn:"অ্যাসিড পানিতে ঢালবে — পানি অ্যাসিডে নয় (কখনোই নয়)।", en:"Always add acid to water, never water to acid."},
    {bn:"কোনো রাসায়নিক গন্ধ নিতে হলে হাত দিয়ে বাতাস ঢেলে নাও, মুখ নিকটে নিয়ে নয়।", en:"To smell a chemical, waft the vapour towards you — never sniff directly."},
    {bn:"গরম টেস্টটিউবের মুখ নিজের বা অন্যের দিকে ধরে না।", en:"Never point the mouth of a heated test tube at yourself or others."},
    {bn:"অ্যাসিড পোড়া স্থানে প্রচুর পানি দিয়ে ধোয়ার পর বেকিং সোডা (NaHCO₃) লাগাও।", en:"Wash a burn with plenty of water, then apply baking soda (NaHCO₃)."},
    {bn:"কাচের যন্ত্রপাতি ফাটা থাকলে ব্যবহার করা যাবে না।", en:"Never use cracked or chipped glassware."},
    {bn:"ফিউম হুড বা বাতাস চলাচলের ব্যবস্থা ছাড়া বিষাক্ত গ্যাস তৈরি করো না।", en:"Do not generate toxic gases without a fume hood or good ventilation."}
  ],
  extra:[
    {bn:"প্রথম দিনেই ল্যাবের সব নির্দেশনা শুনে নাও, আর ল্যাব ম্যানুয়াল পড়ে নাও।", en:"Read the lab manual and listen to every instruction on day one."},
    {bn:"অ্যাসিড ঢালার সময় চোখের সুরক্ষার জন্য গগলস পরো — কাচ ছিটকে গেলে চোখ বাঁচবে।", en:"Wear goggles when pouring acids — splashes are what ruin eyes."},
    {bn:"বিকার বা টেস্টটিউবের মুখ সবসময় বাইরের দিকে ধরে রাখো।", en:"Always point the mouth of a beaker or test tube away from people."},
    {bn:"ত্বকে অ্যাসিড লাগলে সাথে সাথে প্রচুর পানি দিয়ে ধোও, তারপর শিক্ষককে জানাও।", en:"Acid on skin: rinse with plenty of water at once, then tell the teacher."},
    {bn:"বিক্রিয়ার পর বর্জ্য নির্দিষ্ট পাত্রে ফেলো, সিঙ্কে নয়।", en:"Put waste in the marked container, never down the sink."},
    {bn:"ল্যাবের ভেতরে খাওয়া-দাওয়া বা পান করা কখনোই নয়।", en:"Never eat or drink inside the lab."},
  ],
  chips:{bn:["ল্যাব কোর্ট","পিপেট","বুনসেন বার্নার"], en:["Lab coat","Pipette","Bunsen burner"]}
},
{
  id:"y1c2", year:1, no:2,
  bn:{ title:"পদার্থের অবস্থা", sub:"States of matter" },
  en:{ title:"States of matter", sub:"পদার্থের অবস্থা" },
  concept:{
    bn:"সব পদার্থই ছোট ছোট কণা দিয়ে তৈরি। এই কণাগুলো কত জোরে কাঁপছে আর কতটা আঁকড়ে আছে — তার ওপরই ঠিক হয় পদার্থটি কঠিন, তরল নাকি গ্যাস।",
    en:"Everything is made of tiny particles. How fast they move and how tightly they hold each other decides whether the substance is solid, liquid or gas."
  },
  analogy:{
    bn:"কঠিন = ক্লাসে শান্তভাবে বসে থাকা ছাত্ররা। তরল = একটু এদিক-ওদিক নড়াচড়া। গ্যাস = টিফিনের ঘণ্টায় সবাই দৌড়ে ছড়িয়ে পড়া।",
    en:"Solid = students sitting still in class. Liquid = shuffling around a little. Gas = the lunch bell rings and everyone runs and spreads out."
  },
  points:[
    {bn:"কঠিন: নির্দিষ্ট আকার ও আয়তন, কণা খুব কাছাকাছি, শুধু কম্পন করে।", en:"Solid: fixed shape and volume, particles very close, only vibrate."},
    {bn:"তরল: নির্দিষ্ট আয়তন আছে কিন্তু আকার নেই, কণা কাছাকাছি কিন্তু একে অপরের পাশ দিয়ে গড়াতে পারে।", en:"Liquid: fixed volume, no fixed shape; particles close but can slide past each other."},
    {bn:"গ্যাস: আয়তন ও আকার দুটোই অনির্দিষ্ট, কণা অনেক দূরে, দ্রুত গতিশীল।", en:"Gas: no fixed shape or volume; particles far apart and moving fast."},
    {bn:"গলন (melting): কঠিন → তরল; বাষ্পীভবন (vaporisation): তরল → গ্যাস; ঊর্ধ্বপাতন (sublimation): কঠিন → সরাসরি গ্যাস।", en:"Melting: solid→liquid; vaporisation: liquid→gas; sublimation: solid→gas directly."},
    {bn:"নিঃসরণ (effusion) = চাপের পার্থক্যে ছোট ছিদ্র দিয়ে গ্যাস বেরিয়ে যাওয়া।", en:"Effusion = gas escaping through a tiny hole because of a pressure difference."},
    {bn:"চাপ বাড়ালে গ্যাসের আয়তন কমে — বয়েলের সূত্র (PV = ধ্রুবক, স্থির তাপমাত্রায়)।", en:"More pressure, less volume — Boyle's law (PV = constant at constant T)."}
  ],
  extra:[
    {bn:"কঠিন → তরল = গলন (melting), তরল → কঠিন = জমাট (freezing)।", en:"Solid → liquid is melting; liquid → solid is freezing."},
    {bn:"তরল → গ্যাস = বাষ্পীভবন, গ্যাস → তরল = ঘনীভবন (condensation)।", en:"Liquid → gas is vaporisation; gas → liquid is condensation."},
    {bn:"কঠিন → সরাসরি গ্যাস = ঊর্ধ্বপাতন; যেমন কর্পূর, আয়োডিন, ন্যাপথলিন।", en:"Solid → gas directly is sublimation, as with camphor, iodine and naphthalene."},
    {bn:"প্লাজমা হলো পদার্থের চতুর্থ অবস্থা — নক্ষত্র ও বিদ্যুতের ঝলকানিতে পাওয়া যায়।", en:"Plasma is the fourth state — found in stars and lightning."},
    {bn:"চার্লসের সূত্র: স্থির চাপে গ্যাসের আয়তন ∝ পরম তাপমাত্রা।", en:"Charles's law: at constant pressure, gas volume ∝ absolute temperature."},
    {bn:"আদর্শ গ্যাস সমীকরণ: PV = nRT।", en:"Ideal gas equation: PV = nRT."},
  ],
  chips:{bn:["গলনাঙ্ক","ঊর্ধ্বপাতন","ডিফিউশন","PV=nRT"], en:["Melting point","Sublimation","Diffusion","PV=nRT"]}
},
{
  id:"y1c3", year:1, no:3,
  bn:{ title:"পরমাণুর গঠন", sub:"Structure of atom" },
  en:{ title:"Structure of atom", sub:"পরমাণুর গঠন" },
  concept:{
    bn:"পরমাণু মানে ক্ষুদ্রতম অংশ যা রাসায়নিক বিক্রিয়ায় ভাঙে না। এর কেন্দ্রে নিউক্লিয়াস (প্রোটন + নিউট্রন), আর চারদিকে ঘুরছে ইলেকট্রন।",
    en:"An atom is the smallest part that does not break in a chemical reaction. At the centre is the nucleus (protons + neutrons), with electrons moving around it."
  },
  analogy:{
    bn:"নিউক্লিয়াস = সূর্য, ইলেকট্রন = গ্রহ। তবে পার্থক্য একটাই — গ্রহের মতো নির্দিষ্ট রাস্তায় নয়, ইলেকট্রন থাকে সম্ভাব্য অঞ্চলে (orbital)।",
    en:"Nucleus = the Sun, electrons = the planets. But unlike planets on a fixed path, electrons live in probability clouds (orbitals)."
  },
  points:[
    {bn:"প্রোটন (+1) ও নিউট্রন (0) নিউক্লিয়াসে; ইলেকট্রন (−1) বাইরে।", en:"Protons (+1) and neutrons (0) in the nucleus; electrons (−1) outside."},
    {bn:"পারমাণবিক সংখ্যা (Z) = প্রোটন সংখ্যা। ভরসংখ্যা (A) = প্রোটন + নিউট্রন।", en:"Atomic number Z = number of protons. Mass number A = protons + neutrons."},
    {bn:"আইসোটোপ: একই Z, ভিন্ন A (যেমন ¹²C ও ¹⁴C)।", en:"Isotopes: same Z, different A (e.g. ¹²C and ¹⁴C)."},
    {bn:"আইসোবার: একই A, ভিন্ন Z। আইসোটোন: একই নিউট্রন সংখ্যা।", en:"Isobars: same A, different Z. Isotones: same number of neutrons."},
    {bn:"বোর মডেল: ইলেকট্রন নির্দিষ্ট শক্তিস্তরে ঘোরে; শক্তি শোষণ করলে উপরে ওঠে, নিঃসরণ করলে নিচে নামে।", en:"Bohr model: electrons orbit in fixed energy levels; absorb energy to go up, emit to come down."},
    {bn:"হুন্ডের নিয়ম: সমশক্তি সম্পন্ন অরবিটালে ইলেকট্রন আগে একা একা ভরে, তারপর জোড়া বাঁধে।", en:"Hund's rule: electrons fill degenerate orbitals singly first, then pair up."},
    {bn:"আউফবাউ নীতি: শক্তি কম থেকে বেশি ক্রমে ইলেকট্রন ভরে। পাউলির বর্জন নীতি: একই চারটি কোয়ান্টাম সংখ্যা দুই ইলেকট্রনের হতে পারে না।", en:"Aufbau: fill lowest energy first. Pauli exclusion: no two electrons share all four quantum numbers."}
  ],
  extra:[
    {bn:"রাদারফোর্ডের পরীক্ষা প্রমাণ করে পরমাণুর বেশিরভাগ অংশই ফাঁকা।", en:"Rutherford's experiment showed the atom is mostly empty space."},
    {bn:"নিউক্লিয়াসের ব্যাস পরমাণুর ব্যাসের প্রায় ১০⁻⁵ গুণ — তুলনা করলে একটা মটরের মতো।", en:"The nucleus is about 10⁻⁵ of the atom's diameter — like a marble in a stadium."},
    {bn:"কোয়ান্টাম সংখ্যা চারটি: n (শক্তি স্তর), l (আকৃতি), m (দিক), s (স্পিন)।", en:"The four quantum numbers are n (shell), l (shape), m (orientation) and s (spin)."},
    {bn:"s অরবিটালে সর্বোচ্চ ২টি, p-তে ৬টি, d-তে ১০টি, f-তে ১৪টি ইলেকট্রন।", en:"An s orbital holds 2 electrons, p holds 6, d holds 10 and f holds 14."},
    {bn:"একটি মৌলের রাসায়নিক ধর্ম নির্ভর করে তার যোজ্যতা ইলেকট্রন সংখ্যার ওপর।", en:"An element's chemistry is set by its number of valence electrons."},
    {bn:"আয়ন তৈরি হয় ইলেকট্রন দান-গ্রহণের মাধ্যমে: ক্যাটায়ন ধনাত্মক, অ্যানায়ন ঋণাত্মক।", en:"Ions form by losing or gaining electrons: cations positive, anions negative."},
  ],
  chips:{bn:["প্রোটন","নিউট্রন","আইসোটোপ","অরবিটাল"], en:["Proton","Neutron","Isotope","Orbital"]}
},
{
  id:"y1c4", year:1, no:4,
  bn:{ title:"রাসায়নিক বন্ধন", sub:"Chemical bonding" },
  en:{ title:"Chemical bonding", sub:"রাসায়নিক বন্ধন" },
  concept:{
    bn:"পরমাণুরা একা থাকতে চায় না, কারণ বাইরের কক্ষ অসম্পূর্ণ। দুটি পরমাণু মিলে ইলেকট্রন ভাগ করে বা দান-গ্রহণ করে স্থিতিশীল (নোবেল গ্যাসের মতো) হতে চায় — এটাই বন্ধন।",
    en:"Atoms do not like being alone because their outer shell is incomplete. Two atoms become stable (noble-gas-like) by sharing or transferring electrons — that is a bond."
  },
  analogy:{
    bn:"সহভাগ বন্ধন = দুই বন্ধু মিলে একটা পেন ভাগ করে ব্যবহার। আয়নিক বন্ধন = একজন পেন দিয়ে দিল, অন্যজন নিয়ে নিল — দেওয়া-নেওয়া।",
    en:"Covalent bond = two friends share one pen. Ionic bond = one gives the pen away, the other takes it — a transfer."
  },
  points:[
    {bn:"আয়নিক বন্ধন: ধাতু → অধাতু ইলেকট্রন দান করে (যেমন NaCl)। উচ্চ গলনাঙ্ক, পানিতে তড়িৎ পরিবাহী।", en:"Ionic: metal → non-metal electron transfer (e.g. NaCl). High melting point, conducts in water."},
    {bn:"সমযোজী বন্ধন: দুটি অধাতু ইলেকট্রন ভাগ করে (যেমন H₂O, CH₄)।", en:"Covalent: two non-metals share electrons (e.g. H₂O, CH₄)."},
    {bn:"ধাতব বন্ধন: ধাতুর ধনাত্মক আয়নগুলোর মধ্যে ইলেকট্রনের 'সমুদ্র' — তাই নমনীয় ও তড়িৎ পরিবাহী।", en:"Metallic: a 'sea' of electrons among metal cations — hence malleable and conducting."},
    {bn:"সমযোজী বন্ধনের মেরুতা: সমান ভাগ = অমেরু (Cl₂), অসম ভাগ = পোলার (HCl)।", en:"Covalent polarity: equal sharing = nonpolar (Cl₂), unequal = polar (HCl)."},
    {bn:"সন্নিবেশ বন্ধন (coordinate): একটি পরমাণুই জোড়া ইলেকট্রন দেয়, অন্যটি শুধু গ্রহণ করে (NH₄⁺)।", en:"Coordinate bond: one atom donates the whole electron pair (NH₄⁺)."},
    {bn:"হাইড্রোজেন বন্ধন: H সাথে O, N বা F যুক্ত হলে দুর্বল কিন্তু গুরুত্বপূর্ণ আকর্ষণ — পানির উচ্চ স্ফুটনাঙ্ক এর জন্যই।", en:"Hydrogen bond: weak but important attraction when H is attached to O, N or F — it is why water boils high."},
    {bn:"VSEPR: ইলেকট্রন জোড়া যত দূরে থাকতে পারে তত দূরে থাকার চেষ্টা করে → আকার ঠিক হয় (CH₄ = চতুস্তলকীয়)।", en:"VSEPR: electron pairs repel and stay as far apart as possible → shape (CH₄ = tetrahedral)."}
  ],
  extra:[
    {bn:"আয়নিক যৌগের সংকেত লেখার সময় ক্রস-পদ্ধতি ব্যবহার করা হয়: NaCl, CaCl₂, Al₂O₃।", en:"Ionic formulae use the criss-cross method: NaCl, CaCl₂, Al₂O₃."},
    {bn:"সমযোজী যৌগ সাধারণত তরল বা গ্যাস, গলনাঙ্ক কম, তড়িৎ অপরিবাহী।", en:"Covalent compounds are often liquids or gases with low melting points and no conduction."},
    {bn:"পোলার অণু পানিতে দ্রবণীয়, অমেরু অণু (যেমন তেল) পানিতে অদ্রবণীয়।", en:"Polar molecules dissolve in water; nonpolar ones (like oil) do not."},
    {bn:"জল অণুতে দুটি O–H বন্ধনের কোণ ১০৪.৫°, তাই এটি পোলার।", en:"The 104.5° angle between the two O–H bonds is what makes water polar."},
    {bn:"লবণ পানিতে দ্রবীভূত হলে আয়ন-ডাইপোল আকর্ষণে হাইড্রেশনে আবদ্ধ হয়।", en:"In water, ions are surrounded by hydration shells through ion–dipole attraction."},
    {bn:"বন্ধন ভাঙতে শক্তি লাগে, নতুন বন্ধন তৈরি হলে শক্তি নির্গত হয় — এই পার্থক্যই বিক্রিয়ার ΔH।", en:"Breaking bonds costs energy, forming them releases it — the difference is ΔH."},
  ],
  chips:{bn:["আয়নিক","সমযোজী","ধাতব","VSEPR"], en:["Ionic","Covalent","Metallic","VSEPR"]}
},
{
  id:"y1c5", year:1, no:5,
  bn:{ title:"পর্যায় সারণি", sub:"Periodic table" },
  en:{ title:"The periodic table", sub:"পর্যায় সারণি" },
  concept:{
    bn:"সব মৌলকে একই বৈশিষ্ট্য অনুযায়ী সাজিয়ে রাখা হয়েছে এক টেবিলে। উপর থেকে নিচে গেলে পরমাণু বড় হয়, বাম থেকে ডানে গেলে ছোট হয় — এভাবেই বৈশিষ্ট্য বদলায়।",
    en:"All elements are arranged in one table by their properties. Going down a group the atom gets bigger; going left to right across a period it gets smaller — that is how properties change."
  },
  analogy:{
    bn:"এটা ঠিক স্কুলের রোল-কলের মতো। একই শ্রেণির ছাত্ররা একই কলামে (গ্রুপ), আর প্রতিটি সারি (পিরিয়ড) মানে একই শেলের ধাপ।",
    en:"It is like a school register: students of the same class sit in one column (group), and each row (period) is one shell level."
  },
  points:[
    {bn:"গ্রুপ (উল্লম্ব, ১৮টি): একই সংখ্যক যোজ্যতা ইলেকট্রন → একই রকম রাসায়নিক ধর্ম।", en:"Group (vertical, 18): same number of valence electrons → similar chemistry."},
    {bn:"পিরিয়ড (অনুভূমিক, ৭টি): একই শেল সংখ্যা।", en:"Period (horizontal, 7): same number of shells."},
    {bn:"আধুনিক ভিত্তি: পারমাণবিক সংখ্যা (Z)। মেন্ডেলিভের ভিত্তি ছিল পারমাণবিক ভর।", en:"Modern basis: atomic number Z. Mendeleev used atomic mass."},
    {bn:"বাম→ডানে: পারমাণবিক ব্যাসার্ধ কমে, আয়নীকরণ শক্তি বাড়ে, তড়িৎ ঋণাত্মকতা বাড়ে।", en:"Left→right: radius decreases, ionisation energy increases, electronegativity increases."},
    {bn:"গ্রুপে উপর→নিচে: ব্যাসার্ধ বাড়ে, আয়নীকরণ শক্তি কমে, ধাতব ধর্ম বাড়ে।", en:"Down a group: radius increases, ionisation energy decreases, metallic character increases."},
    {bn:"F সবচেয়ে তড়িৎ ঋণাত্মক; নোবেল গ্যাসগুলো সবচেয়ে নিষ্ক্রিয়।", en:"F is the most electronegative; noble gases are the most inert."}
  ],
  extra:[
    {bn:"মেন্ডেলিভ ১৮৬৯ সালে ৬৩টি মৌল নিয়ে প্রথম ব্যবহারযোগ্য পর্যায় সারণি দেন।", en:"Mendeleev published the first useful table in 1869 with 63 elements."},
    {bn:"মোজলে ১৯১৩ সালে পারমাণবিক সংখ্যাকে ভিত্তি হিসেবে প্রতিষ্ঠা করেন।", en:"Moseley established atomic number as the basis in 1913."},
    {bn:"আধুনিক পর্যায় সারণিতে ৭টি পিরিয়ড ও ১৮টি গ্রুপ।", en:"The modern table has 7 periods and 18 groups."},
    {bn:"১ম গ্রুপ = ক্ষার ধাতু, ২য় = মৃৎক্ষার, ১৭ = হ্যালোজেন, ১৮ = নিষ্ক্রিয় গ্যাস।", en:"Group 1 alkali metals, group 2 alkaline earth, group 17 halogens, group 18 noble gases."},
    {bn:"ল্যান্থানাইড ও অ্যাক্টিনাইড আলাদা সারিতে রাখা হয়, তাই টেবিলের আকৃতি সংক্ষিপ্ত।", en:"Lanthanides and actinides sit in separate rows, which keeps the table compact."},
    {bn:"হাইড্রোজেনের অবস্থান বিশেষ — ১ম গ্রুপে থাকলেও ধাতব ধর্ম নেই।", en:"Hydrogen is special: placed in group 1 but is not a metal."},
  ],
  chips:{bn:["গ্রুপ","পিরিয়ড","তড়িৎ ঋণাত্মকতা"], en:["Group","Period","Electronegativity"]}
},
{
  id:"y1c6", year:1, no:6,
  bn:{ title:"রাসায়নিক গণনা", sub:"Chemical calculations" },
  en:{ title:"Chemical calculations", sub:"রাসায়নিক গণনা" },
  concept:{
    bn:"রসায়নবিদের কাছে 'কতগুলো কণা' গোনার সবচেয়ে সহজ উপায় মোল। ১ মোল = ৬.০২৩ × ১০²³ টি কণা (অ্যাভোগাড্রো সংখ্যা)।",
    en:"The chemist's way to count particles is the mole. 1 mole = 6.023 × 10²³ particles (Avogadro's number)."
  },
  analogy:{
    bn:"ডজন = ১২টি, রিম = ৫০০টি — তেমনি মোল = ৬.০২৩×১০²³ টি। বিশাল সংখ্যা একসাথে বলার শর্টকাট।",
    en:"A dozen = 12, a ream = 500 — a mole = 6.023×10²³. A shortcut for a huge count."
  },
  points:[
    {bn:"মোল সংখ্যা n = ভর ÷ মোলার ভর = m/M।", en:"Moles n = mass ÷ molar mass = m/M."},
    {bn:"গ্যাসের ক্ষেত্রে: PV = nRT (R = 0.0821 L·atm/mol·K বা 8.314 J/mol·K)।", en:"For gases: PV = nRT (R = 0.0821 L·atm/mol·K or 8.314 J/mol·K)."},
    {bn:"STP-তে ১ মোল গ্যাসের আয়তন ২২.৪ L।", en:"At STP, 1 mole of gas occupies 22.4 L."},
    {bn:"মোলারিটি M = মোল ÷ লিটারে আয়তন।", en:"Molarity M = moles ÷ volume in litres."},
    {bn:"শতকরা সংযুক্তি = (মৌলের মোট ভর ÷ যৌগের মোলার ভর) × ১০০%।", en:"% composition = (mass of element ÷ molar mass of compound) × 100%."},
    {bn:"আণবিক সংকেত = n × মূল সংকেত, যেখানে n = মোলার ভর ÷ মূল সংকেতের ভর।", en:"Molecular formula = n × empirical formula, n = molar mass ÷ empirical mass."},
    {bn:"লিমিটিং বিক্রিয়ক: যে আগে শেষ হয়ে যায়, তার ওপর উৎপাদের পরিমাণ নির্ভর করে।", en:"Limiting reactant: the one that runs out first decides the yield."}
  ],
  extra:[
    {bn:"মোলার ভর = একটি যৌগের ১ মোলের ভর (g/mol)।", en:"Molar mass is the mass of one mole of a compound in g/mol."},
    {bn:"১ মোল = ৬.০২৩ × ১০²³ টি অণু — অ্যাভোগাড্রো সংখ্যা।", en:"1 mole = 6.023 × 10²³ particles — Avogadro's number."},
    {bn:"শতকরা উৎপাদ = (প্রাপ্ত ভর ÷ তাত্ত্বিক ভর) × ১০০%।", en:"Percentage yield = (actual mass ÷ theoretical mass) × 100%."},
    {bn:"পানির মোলার ভর ১৮ g/mol — অর্থাৎ ১ মোল পানির ভর ১৮ গ্রাম।", en:"Water's molar mass is 18 g/mol, so one mole of water weighs 18 g."},
    {bn:"ঘনমাত্রা প্রকাশের একক: মোলারিটি (M), মোলালিটি (m), নরমালিটি (N)।", en:"Concentration units: molarity (M), molality (m) and normality (N)."},
    {bn:"রাসায়নিক গণনার প্রথম ধাপ সবসময়: সমীকরণ ব্যালান্স করা।", en:"The first step in any calculation is always: balance the equation."},
  ],
  chips:{bn:["মোল","মোলারিটি","PV=nRT","স্টয়কিওমিতি"], en:["Mole","Molarity","PV=nRT","Stoichiometry"]}
},
{
  id:"y1c7", year:1, no:7,
  bn:{ title:"জারণ-বিজারণ", sub:"Oxidation and reduction" },
  en:{ title:"Oxidation and reduction", sub:"জারণ-বিজারণ" },
  concept:{
    bn:"সহজ ভাষায় — ইলেকট্রন ছাড়া = জারণ, ইলেকট্রন নেওয়া = বিজারণ। এই দুটো কখনো একা হয় না; একসাথে হয় বলে একে রেডক্স (redox) বলে।",
    en:"Simply: losing electrons = oxidation, gaining electrons = reduction. They never happen alone — together it is called redox."
  },
  analogy:{
    bn:"মোমবাতি জ্বলে অক্সিজেন নেয়, আর লোহায় মরিচা পড়ে — দুটোই জারণ। উদ্ভিদের সালোকসংশ্লেষণে পানি জারণ হয়ে অক্সিজেন ছাড়ে, CO₂ বিজারিত হয়।",
    en:"A candle burning takes oxygen, iron rusts — both oxidation. In photosynthesis water is oxidised to oxygen while CO₂ is reduced."
  },
  points:[
    {bn:"OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons)।", en:"OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons)."},
    {bn:"জারণ সংখ্যা বাড়লে জারণ, কমলে বিজারণ।", en:"Oxidation number increases → oxidation; decreases → reduction."},
    {bn:"জারক পদার্থ নিজে বিজারিত হয়, অন্যকে জারিত করে (যেমন KMnO₄, K₂Cr₂O₇)।", en:"An oxidising agent is itself reduced and oxidises the other (e.g. KMnO₄, K₂Cr₂O₇)।"},
    {bn:"বিজারক পদার্থ নিজে জারিত হয়, অন্যকে বিজারিত করে (যেমন H₂, Zn)।", en:"A reducing agent is itself oxidised and reduces the other (e.g. H₂, Zn)."},
    {bn:"অর্ধ-বিক্রিয়া পদ্ধতিতে প্রথমে পরমাণু ব্যালান্স, তারপর O (পানি দিয়ে), H (H⁺ দিয়ে), শেষে চার্জ (ইলেকট্রন দিয়ে)।", en:"Half-reaction method: balance atoms, then O with water, H with H⁺, finally charge with electrons."},
    {bn:"সেল গঠন: অ্যানোডে জারণ, ক্যাথোডে বিজারণ।", en:"In a cell: oxidation at anode, reduction at cathode."}
  ],
  extra:[
    {bn:"জারণ সংখ্যা: মুক্ত মৌলে ০, একপারমাণবিক আয়নে আয়নের চার্জের সমান।", en:"Oxidation number is 0 in an element and equals the charge in a monatomic ion."},
    {bn:"অক্সিজেনের জারণ সংখ্যা সাধারণত −২, কিন্তু পারক্সাইডে −১।", en:"Oxygen is usually −2, but −1 in peroxides."},
    {bn:"হাইড্রোজেনের জারণ সংখ্যা সাধারণত +১, কিন্তু হাইড্রাইডে −১।", en:"Hydrogen is usually +1, but −1 in hydrides."},
    {bn:"মোট জারণ সংখ্যার যোগফল নিরপেক্ষ যৌগে ০, আয়নে আয়নের চার্জ।", en:"Oxidation numbers sum to 0 in a neutral compound and to the ion charge in an ion."},
    {bn:"দৈনন্দিন উদাহরণ: আপেল কাটলে বাদামি হওয়া, লোহার মরিচা, শ্বাস-প্রশ্বাস।", en:"Everyday redox: a cut apple browning, iron rusting, respiration."},
    {bn:"তড়িৎ কোষে জারণ-বিজারণ আলাদা পাত্রে ঘটে — তাই ইলেকট্রন তার দিয়ে চলে।", en:"In a cell the two halves are separated, so electrons travel through the wire."},
  ],
  chips:{bn:["OIL RIG","জারক","বিজারক","অর্ধ-বিক্রিয়া"], en:["OIL RIG","Oxidant","Reductant","Half-reaction"]}
},
{
  id:"y1c8", year:1, no:8,
  bn:{ title:"রাসায়নিক পরিবর্তন ও শক্তি", sub:"Chemical change and energy" },
  en:{ title:"Chemical change and energy", sub:"রাসায়নিক পরিবর্তন ও শক্তি" },
  concept:{
    bn:"প্রতিটি রাসায়নিক বিক্রিয়ায় শক্তি বের হয় বা ঢোকে — কারণ বন্ধন ভাঙতে শক্তি লাগে, নতুন বন্ধন তৈরি হলে শক্তি নির্গত হয়।",
    en:"Every reaction either releases or absorbs energy: breaking bonds needs energy, forming new bonds releases it."
  },
  analogy:{
    bn:"তালা ভাঙতে শক্তি লাগে, নতুন তালা লাগালে 'ক্লিক' শব্দে শক্তি বের হয় — বন্ধনের ক্ষেত্রেও ঠিক তাই।",
    en:"Breaking a lock takes effort; closing a new one gives a satisfying click — same with bonds."
  },
  points:[
    {bn:"তাপোৎপাদী (exothermic): শক্তি নির্গত, ΔH ঋণাত্মক, পাত্র গরম হয়।", en:"Exothermic: energy released, ΔH negative, container gets warm."},
    {bn:"তাপশোষী (endothermic): শক্তি শোষিত, ΔH ধনাত্মক, পাত্র ঠান্ডা হয়।", en:"Endothermic: energy absorbed, ΔH positive, container gets cold."},
    {bn:"এনথালপি H = অভ্যন্তরীণ শক্তি + চাপ×আয়তন (H = U + PV)।", en:"Enthalpy H = internal energy + PV (H = U + PV)."},
    {bn:"হেসের সূত্র: বিক্রিয়ার মোট এনথালপি পরিবর্তন পথের ওপর নির্ভর করে না, শুধু প্রাথমিক ও চূড়ান্ত অবস্থার ওপর।", en:"Hess's law: total ΔH depends only on initial and final states, not the path."},
    {bn:"বন্ধন শক্তি: বন্ধন ভাঙার শক্তি যত বেশি, অণু তত স্থিতিশীল।", en:"Bond energy: higher bond dissociation energy = more stable molecule."},
    {bn:"গিবস মুক্ত শক্তি ΔG = ΔH − TΔS; ΔG ঋণাত্মক হলে বিক্রিয়া স্বতঃস্ফূর্ত।", en:"Gibbs free energy ΔG = ΔH − TΔS; negative ΔG means spontaneous."}
  ],
  extra:[
    {bn:"এনথালপির একক kJ/mol; ΔH ঋণাত্মক = তাপ নির্গত।", en:"Enthalpy is in kJ/mol; negative ΔH means heat is released."},
    {bn:"বিক্রিয়ার হারের ওপর তাপমাত্রার বড় প্রভাব আছে — সাধারণত প্রতি ১০°C-এ হার প্রায় দ্বিগুণ হয়।", en:"Temperature strongly affects rate — roughly doubling per 10°C rise."},
    {bn:"মোট শক্তি সংরক্ষিত থাকে — শুধু এক রূপ থেকে অন্য রূপে বদলায়।", en:"Total energy is conserved; it only changes form."},
    {bn:"সক্রিয়ণ শক্তি কমালে বিক্রিয়া দ্রুত হয় — প্রভাবকের কাজ এটাই।", en:"Lowering activation energy speeds a reaction — that is what a catalyst does."},
    {bn:"বন্ধন ভাঙতে শোষিত শক্তি, বন্ধন তৈরি হওয়ায় নির্গত শক্তি।", en:"Energy is absorbed to break bonds and released when new ones form."},
    {bn:"তাপশোষী দ্রবীভবন: NH₄Cl পানিতে দিলে পাত্র ঠান্ডা হয়।", en:"Endothermic dissolving: NH₄Cl in water makes the beaker feel cold."},
  ],
  chips:{bn:["ΔH","এনথালপি","তাপোৎপাদী","হেসের সূত্র"], en:["ΔH","Enthalpy","Exothermic","Hess's law"]}
},
{
  id:"y1c9", year:1, no:9,
  bn:{ title:"রাসায়নিক সাম্যাবস্থা", sub:"Chemical equilibrium" },
  en:{ title:"Chemical equilibrium", sub:"রাসায়নিক সাম্যাবস্থা" },
  concept:{
    bn:"বিক্রিয়া যখন সামনে যাওয়ার হার আর পিছনে ফেরার হার সমান হয়ে যায়, তখন মিশ্রণে পরিমাণ আর বদলায় না — এটাই সাম্যাবস্থা। মনে হয় কিছু হচ্ছে না, আসলে দুটোই চলছে।",
    en:"When the forward and reverse rates become equal, the amounts stop changing — that is equilibrium. It looks like nothing is happening, but both reactions are still running."
  },
  analogy:{
    bn:"দুই বন্ধু একই গেট দিয়ে একজন ঢুকছে আর একজন বের হচ্ছে — ভেতরে মানুষের সংখ্যা একই থাকে।",
    en:"Two friends through one gate: one entering, one leaving at the same rate — the number inside stays constant."
  },
  points:[
    {bn:"সাম্য ধ্রুবক Kc = [উৎপাদ]^শক্তি ÷ [বিক্রিয়ক]^শক্তি (ভর ক্রিয়া সূত্র)।", en:"Equilibrium constant Kc = [products]^n ÷ [reactants]^n."},
    {bn:"লি-শাতেলিয়ে নীতি: সাম্যাবস্থায় পরিবর্তন ঘটালে সিস্টেম সেই পরিবর্তনের বিপরীতে কাজ করে।", en:"Le Chatelier: disturb the equilibrium and the system shifts to oppose the change."},
    {bn:"তাপমাত্রা বাড়ালে তাপশোষী দিকে সাম্য সরে।", en:"Raising temperature shifts equilibrium toward the endothermic side."},
    {bn:"চাপ বাড়ালে গ্যাসের মোল কম দিকে সাম্য সরে।", en:"Raising pressure shifts toward the side with fewer gas moles."},
    {bn:"প্রভাবক (catalyst) সাম্যে পৌঁছাতে সময় কমায়, কিন্তু সাম্যের অবস্থান বদলায় না।", en:"A catalyst speeds up reaching equilibrium but does not change its position."},
    {bn:"Kb = Kw ÷ Ka সম্পর্কটি দুর্বল ক্ষারকের জন্য কাজে লাগে।", en:"Kb = Kw ÷ Ka for a conjugate base."}
  ],
  extra:[
    {bn:"সাম্য ধ্রুবকের মান তাপমাত্রার ওপর নির্ভর করে, চাপ বা ঘনমাত্রার ওপর নয়।", en:"The equilibrium constant depends on temperature, not on pressure or concentration."},
    {bn:"Kc খুব বড় হলে বিক্রিয়া প্রায় সম্পূর্ণ ডান দিকে যায়।", en:"A very large Kc means the reaction goes almost to completion to the right."},
    {bn:"সাম্যাবস্থায় বিক্রিয়া থেমে যায় না — দুটো দিকেই সমান হারে চলতে থাকে।", en:"At equilibrium the reaction has not stopped — both directions run at the same rate."},
    {bn:"প্রভাবক সাম্যের মান বদলায় না, শুধু সময় কমায়।", en:"A catalyst does not change K, only the time taken."},
    {bn:"শিল্পে হেবার প্রক্রিয়ায় ৪০০–৫০০°C ও ২০০ atm চাপ ব্যবহার হয়।", en:"The Haber process uses about 400–500°C and 200 atm."},
    {bn:"দুর্বল অ্যাসিড-ক্ষারকের pH নির্ণয়ে Ka, Kb কাজে লাগে।", en:"Ka and Kb are used to find the pH of weak acids and bases."},
  ],
  chips:{bn:["Kc","লি-শাতেলিয়ে","প্রভাবক"], en:["Kc","Le Chatelier","Catalyst"]}
},
{
  id:"y1c10", year:1, no:10,
  bn:{ title:"তড়িৎ রসায়ন", sub:"Electrochemistry" },
  en:{ title:"Electrochemistry", sub:"তড়িৎ রসায়ন" },
  concept:{
    bn:"রাসায়নিক বিক্রিয়া থেকে বিদ্যুৎ বানানো যায় (গ্যালভানিক সেল), আবার বিদ্যুৎ দিয়ে রাসায়নিক বিক্রিয়া চালানো যায় (তড়িৎ বিশ্লেষণ)।",
    en:"A chemical reaction can make electricity (galvanic cell), and electricity can drive a chemical reaction (electrolysis)."
  },
  analogy:{
    bn:"ব্যাটারি = পানির ট্যাংক উঁচুতে রাখা; ইলেকট্রন নিচের দিকে গড়ায়। চার্জ দিয়ে আবার ট্যাংক ভরে দেওয়া যায়।",
    en:"A battery is like a water tank held high: electrons flow down. Charging lifts the water back up."
  },
  points:[
    {bn:"অ্যানোড = জারণ (+ গ্যালভানিক সেলে −), ক্যাথোড = বিজারণ।", en:"Anode = oxidation (− in galvanic cells), cathode = reduction."},
    {bn:"কোষ বিভব E°cell = E°cathode − E°anode। ধনাত্মক হলে বিক্রিয়া স্বতঃস্ফূর্ত।", en:"Cell potential E°cell = E°cathode − E°anode. Positive means spontaneous."},
    {bn:"ফ্যারাডের ১ম সূত্র: জমা পদার্থের ভর ∝ চার্জ (m = ZIt)।", en:"Faraday's 1st law: mass deposited ∝ charge (m = ZIt)."},
    {bn:"ফ্যারাডের ২য় সূত্র: একই চার্জে জমা ভরের অনুপাত = তুল্য ভরের অনুপাত।", en:"Faraday's 2nd law: masses from the same charge are in the ratio of equivalent masses."},
    {bn:"নের্নস্ট সমীকরণ: E = E° − (0.059/n) log Q (২৫°C)।", en:"Nernst equation: E = E° − (0.059/n) log Q at 25°C."},
    {bn:"তড়িৎ বিশ্লেষণে ক্যাথোডে ধাতু/হাইড্রোজেন জমে, অ্যানোডে Cl₂ বা O₂ নির্গত হয়।", en:"In electrolysis metals/H₂ deposit at cathode; Cl₂ or O₂ evolves at anode."}
  ],
  extra:[
    {bn:"তড়িৎ রসায়নের জনক — মাইকেল ফ্যারাডে।", en:"Michael Faraday is the father of electrochemistry."},
    {bn:"লবণ সেতু দুটি অর্ধকোষের চার্জ ভারসাম্য রক্ষা করে।", en:"The salt bridge balances charge between the two half-cells."},
    {bn:"স্ট্যান্ডার্ড হাইড্রোজেন ইলেকট্রোড (SHE) এর E° ধরা হয় শূন্য।", en:"The standard hydrogen electrode (SHE) is assigned E° = 0."},
    {bn:"তড়িৎ বিশ্লেষণে ক্যাথোড ঋণাত্মক, অ্যানোড ধনাত্মক (গ্যালভানিক সেলে উল্টো)।", en:"In electrolysis the cathode is negative and the anode positive (the reverse of a galvanic cell)."},
    {bn:"১ ফ্যারাডে = ৯৬৫০০ কুলম্ব = ১ মোল ইলেকট্রন।", en:"1 faraday = 96,500 coulombs = 1 mole of electrons."},
    {bn:"তড়িৎ লেপন, ধাতু পরিশোধন ও রাসায়নিক সংশ্লেষে তড়িৎ বিশ্লেষণ ব্যবহৃত হয়।", en:"Electrolysis is used for plating, refining metals and chemical synthesis."},
  ],
  chips:{bn:["গ্যালভানিক সেল","E°cell","ফ্যারাডে","নের্নস্ট"], en:["Galvanic cell","E°cell","Faraday","Nernst"]}
},
/* ==================== ২য় বর্ষ / 2nd Year ==================== */
{
  id:"y2c1", year:2, no:1,
  bn:{ title:"পর্যায় সারণির ধর্ম", sub:"Properties of elements" },
  en:{ title:"Properties of the elements", sub:"পর্যায় সারণির ধর্ম" },
  concept:{
    bn:"পর্যায় সারণিতে অবস্থানের ওপর ভিত্তি করে মৌলের আকার, আয়নীকরণ শক্তি, তড়িৎ ঋণাত্মকতা কীভাবে বদলায় — এটাই এই অধ্যায়ের মূল কথা।",
    en:"How size, ionisation energy and electronegativity change with position in the table is the core of this chapter."
  },
  analogy:{
    bn:"নিউক্লিয়াস = মা, ইলেকট্রন = সন্তান। শেল যত বেশি (দূরে), মায়ের টান তত কম — ইলেকট্রন ছাড়তে সহজ।",
    en:"Nucleus = mother, electrons = children. More shells (further away) means a weaker pull, so electrons leave easily."
  },
  points:[
    {bn:"পারমাণবিক ব্যাসার্ধ: বাম→ডানে কমে, উপর→নিচে বাড়ে।", en:"Atomic radius: decreases left→right, increases top→bottom."},
    {bn:"আয়নীকরণ শক্তি: একটি ইলেকট্রন সরাতে প্রয়োজনীয় শক্তি; বাম→ডানে বাড়ে।", en:"Ionisation energy: energy to remove an electron; increases left→right."},
    {bn:"ইলেকট্রন আসক্তি: ইলেকট্রন গ্রহণে নির্গত শক্তি; হ্যালোজেনে সবচেয়ে বেশি।", en:"Electron affinity: energy released on gaining an electron; highest for halogens."},
    {bn:"তড়িৎ ঋণাত্মকতা: বন্ধনে ইলেকট্রন টানার ক্ষমতা; F > O > N > Cl।", en:"Electronegativity: ability to pull bonding electrons; F > O > N > Cl."},
    {bn:"ধাতব ধর্ম গ্রুপে নিচে বাড়ে, পিরিয়ডে ডানে কমে।", en:"Metallic character increases down a group, decreases across a period."},
    {bn:"আয়নিক ব্যাসার্ধ: ক্যাটায়ন < মূল পরমাণু < অ্যানায়ন।", en:"Ionic radius: cation < parent atom < anion."}
  ],
  extra:[
    {bn:"আয়নিক ব্যাসার্ধ: ধনাত্মক আয়ন ছোট, ঋণাত্মক আয়ন বড়।", en:"Ionic radius: cations are smaller, anions larger than the parent atom."},
    {bn:"আয়নীকরণ শক্তি পরিমাপ করা যায় ইলেকট্রন বিম বা বর্ণালি দিয়ে।", en:"Ionisation energy can be measured from spectra or electron beams."},
    {bn:"ধাতব ধর্ম বেশি মানে সহজে ইলেকট্রন ছাড়ে, তাই ভালো বিজারক।", en:"More metallic character means losing electrons easily, so a good reducing agent."},
    {bn:"নোবেল গ্যাসের আয়নীকরণ শক্তি সবচেয়ে বেশি।", en:"Noble gases have the highest ionisation energies."},
    {bn:"তড়িৎ ঋণাত্মকতা পাউলিং স্কেলে মাপা হয় (F = ৪.০)।", en:"Electronegativity uses the Pauling scale (F = 4.0)."},
    {bn:"পিরিয়ডে ডানে গেলে অম্লীয় অক্সাইড তৈরি হয়, বামে গেলে ক্ষারীয়।", en:"Oxides become more acidic to the right of a period and more basic to the left."},
  ],
  chips:{bn:["ব্যাসার্ধ","আয়নীকরণ শক্তি","ইলেকট্রন আসক্তি"], en:["Radius","Ionisation energy","Electron affinity"]}
},
{
  id:"y2c2", year:2, no:2,
  bn:{ title:"জৈব রসায়ন", sub:"Organic chemistry" },
  en:{ title:"Organic chemistry", sub:"জৈব রসায়ন" },
  concept:{
    bn:"কার্বন চারটি বন্ধন তৈরি করতে পারে, নিজের সাথে শিকল বানাতে পারে — এ কারণেই কোটি কোটি জৈব যৌগ সম্ভব, আর আমাদের শরীর থেকে প্লাস্টিক সবই কার্বনের খেলা।",
    en:"Carbon makes four bonds and can chain with itself, which is why millions of organic compounds exist — from our bodies to plastics."
  },
  analogy:{
    bn:"কার্বন = চার হাতওয়ালা লেগো। এই চার হাত দিয়েই লম্বা চেইন, রিং, শাখা — যা খুশি বানানো যায়।",
    en:"Carbon is a four-armed LEGO brick: chains, rings, branches — build anything."
  },
  points:[
    {bn:"কার্বনের যোজনী ৪; C–C শিকল, শাখা ও রিং তৈরি করে (ক্যাটিনেশন)।", en:"Carbon has valency 4; it forms chains, branches and rings (catenation)."},
    {bn:"সমগোত্রীয় শ্রেণি: একই সাধারণ সংকেত, একই ধর্ম (অ্যালকেন CnH2n+2, অ্যালকিন CnH2n, অ্যালকাইন CnH2n−2)।", en:"Homologous series: same general formula and chemistry (alkane CnH2n+2, alkene CnH2n, alkyne CnH2n−2)."},
    {bn:"কার্যকরী মূলক ঠিক করে যৌগের ধর্ম: –OH (অ্যালকোহল), –COOH (কার্বক্সিলিক অ্যাসিড), –CHO (অ্যালডিহাইড)।", en:"Functional groups decide properties: –OH alcohol, –COOH carboxylic acid, –CHO aldehyde."},
    {bn:"আইসোমার: একই সংকেত, ভিন্ন গঠন (n-বিউটেন ও আইসোবিউটেন)।", en:"Isomers: same formula, different structure (n-butane and isobutane)."},
    {bn:"অ্যালকেন প্রতিস্থাপন বিক্রিয়া দেয়; অ্যালকিন/অ্যালকাইন সংযোজন বিক্রিয়া দেয়।", en:"Alkanes undergo substitution; alkenes/alkynes undergo addition."},
    {bn:"মার্কনিকফের নিয়ম: H যোগ হয় সেই কার্বনে যেখানে বেশি হাইড্রোজেন আছে।", en:"Markovnikov's rule: H adds to the carbon with more hydrogens."},
    {bn:"বেনজিন সুগন্ধি — ৬ কার্বনের সমতলীয় রিং, সংযোজন নয় বরং প্রতিস্থাপন সহজ।", en:"Benzene is aromatic — a planar 6-carbon ring; substitution rather than addition."}
  ],
  extra:[
    {bn:"কার্বনের সবচেয়ে বড় বৈশিষ্ট্য — সমসংযোগ (catenation), নিজের সাথে বন্ধন বানানো।", en:"Carbon's key feature is catenation — bonding with itself."},
    {bn:"অ্যালকেন সম্পৃক্ত, অ্যালকিনে একটি দ্বিবন্ধন, অ্যালকাইনে একটি ত্রিবন্ধন।", en:"Alkanes are saturated, alkenes have one double bond, alkynes one triple bond."},
    {bn:"মিথেন (CH₄) সবচেয়ে সরল জৈব যৌগ।", en:"Methane (CH₄) is the simplest organic compound."},
    {bn:"অ্যালকোহল ও কার্বক্সিলিক অ্যাসিডে হাইড্রোজেন বন্ধন থাকায় স্ফুটনাঙ্ক বেশি।", en:"Alcohols and carboxylic acids boil higher because of hydrogen bonding."},
    {bn:"সাবান তৈরি হয় চর্বি + NaOH → গ্লিসারল + সাবান (স্যাপোনিফিকেশন)।", en:"Soap is made by boiling fat with NaOH — saponification."},
    {bn:"জ্বালানি হিসেবে অকটেন ও সিটেন সংখ্যা গুরুত্বপূর্ণ।", en:"Octane and cetane numbers describe fuel quality."},
  ],
  chips:{bn:["কার্বন","আইসোমার","কার্যকরী মূলক","বেনজিন"], en:["Carbon","Isomer","Functional group","Benzene"]}
},
{
  id:"y2c3", year:2, no:3,
  bn:{ title:"পরিমাণগত রসায়ন", sub:"Quantitative chemistry" },
  en:{ title:"Quantitative chemistry", sub:"পরিমাণগত রসায়ন" },
  concept:{
    bn:"'কতটুকু' এই প্রশ্নের উত্তর দেওয়ার বিজ্ঞান। টাইট্রেশন করে অজানা ঘনমাত্রা বের করা, শতকরা পরিমাণ নির্ণয় — সব এখানেই।",
    en:"The science of answering 'how much' — finding an unknown concentration by titration, working out percentages, and so on."
  },
  analogy:{
    bn:"রান্নায় লবণ দেওয়ার মতো: কতটুকু দিলে ঠিক হবে? টাইট্রেশন ঠিক তেমনই — ফোঁটা ফোঁটা করে যোগ করে 'ঠিক বিন্দু' খোঁজা।",
    en:"Like salting food: how much is just right? Titration adds drop by drop until the exact point."
  },
  points:[
    {bn:"টাইট্রেশনে V₁M₁/n₁ = V₂M₂/n₂।", en:"In titration V₁M₁/n₁ = V₂M₂/n₂."},
    {bn:"নির্দেশক: ফেনলফথ্যালিন (ক্ষারীয় ক্ষেত্রে গোলাপি), মিথাইল অরেঞ্জ (অম্লীয় ক্ষেত্রে লাল)।", en:"Indicators: phenolphthalein (pink in base), methyl orange (red in acid)."},
    {bn:"পিপেট (নির্দিষ্ট আয়তন নেয়) ও বুরেট (পরিবর্তনশীল আয়তন দেয়) ব্যবহার হয়।", en:"A pipette measures a fixed volume; a burette delivers a variable one."},
    {bn:"মোলারিটি বনাম নরমালিটি: নরমালিটি = মোলারিটি × তুল্যাঙ্ক।", en:"Molarity vs normality: normality = molarity × n-factor."},
    {bn:"প্রতিশত পরিমাণ (percentage purity) ও শতকরা উৎপাদ (yield) নির্ণয় করা যায়।", en:"Percentage purity and percentage yield can both be calculated."}
  ],
  extra:[
    {bn:"স্ট্যান্ডার্ড দ্রবণ = যে দ্রবণের ঘনমাত্রা নিশ্চিতভাবে জানা আছে।", en:"A standard solution has a precisely known concentration."},
    {bn:"টাইট্রেশনে সমতা বিন্দুতে (equivalence point) বিক্রিয়ক দুটি ঠিক মিশে যায়।", en:"At the equivalence point the reactants have reacted in exact proportion."},
    {bn:"শেষবিন্দু (end point) নির্দেশকের রঙ বদলের বিন্দু, সমতা বিন্দুর খুব কাছে।", en:"The end point is where the indicator changes colour, close to the equivalence point."},
    {bn:"বুরেট পড়ার সময় চোখ সমান উচ্চতায় রাখো, নাহলে ভুল হয়।", en:"Read the burette at eye level or the reading is wrong."},
    {bn:"গ্র্যাভিমেট্রিক বিশ্লেষণে ভর মেপে পরিমাণ নির্ণয় করা হয়।", en:"Gravimetric analysis measures mass to find the amount."},
    {bn:"প্রতিটি পাঠে অন্তত তিনবার টাইট্রেশন করে গড় নাও।", en:"Take at least three concordant titres and average them."},
  ],
  chips:{bn:["টাইট্রেশন","মোলারিটি","নির্দেশক"], en:["Titration","Molarity","Indicator"]}
},
{
  id:"y2c4", year:2, no:4,
  bn:{ title:"তড়িৎ রসায়ন (২য় অংশ)", sub:"Electrochemistry II" },
  en:{ title:"Electrochemistry (part II)", sub:"তড়িৎ রসায়ন" },
  concept:{
    bn:"ব্যাটারি, মরিচা পড়া, তড়িৎ লেপন — সবই একই নীতির ওপর চলে: ইলেকট্রন কে ছাড়বে আর কে নেবে।",
    en:"Batteries, rusting, electroplating all run on one idea: who gives electrons and who takes them."
  },
  analogy:{
    bn:"লোহার ওপর দস্তার আস্তরণ (গ্যালভানাইজেশন) = লোহার গায়ে বর্ম পরানো, যাতে মরিচা না ধরে।",
    en:"Galvanising iron with zinc is armour plating so it does not rust."
  },
  points:[
    {bn:"শুষ্ক কোষ (Leclanché), সীসা সঞ্চয়ক কোষ, লিথিয়াম আয়ন কোষ — প্রত্যেকের নিজস্ব বিক্রিয়া।", en:"Dry cell (Leclanché), lead-acid accumulator and lithium-ion cell each have their own reactions."},
    {bn:"সীসা সঞ্চয়ক কোষ পুনরায় চার্জ করা যায় (secondary cell)।", en:"The lead-acid cell is rechargeable (a secondary cell)."},
    {bn:"তড়িৎ লেপন (electroplating): ক্যাথোডে যে বস্তুতে প্রলেপ দিতে হবে, অ্যানোডে প্রলেপের ধাতু।", en:"Electroplating: the object is the cathode, the plating metal is the anode."},
    {bn:"ক্ষয় (corrosion): লোহার মরিচা পড়তে অক্সিজেন ও পানি দুটোই দরকার।", en:"Corrosion: iron rusting needs both oxygen and water."},
    {bn:"ক্যাথোডিক সুরক্ষা: বেশি সক্রিয় ধাতু (Zn, Mg) লাগিয়ে লোহাকে রক্ষা করা।", en:"Cathodic protection: attach a more reactive metal (Zn, Mg) to protect iron."}
  ],
  extra:[
    {bn:"শুষ্ক কোষে জিংক অ্যানোড ও কার্বন ক্যাথোড ব্যবহার হয়।", en:"A dry cell uses a zinc anode and a carbon cathode."},
    {bn:"সীসা সঞ্চয়ক কোষে ইলেকট্রোলাইট হিসেবে dilute H₂SO₄ থাকে।", en:"A lead-acid cell uses dilute H₂SO₄ as the electrolyte."},
    {bn:"লিথিয়াম আয়ন ব্যাটারি হালকা ও বেশি শক্তি ধরে রাখে — মোবাইলে এটাই।", en:"Lithium-ion batteries are light with high energy density — that is what phones use."},
    {bn:"গ্যালভানাইজেশনে লোহাকে দস্তার প্রলেপ দেওয়া হয়।", en:"Galvanising coats iron with zinc."},
    {bn:"মরিচার রাসায়নিক রূপ Fe₂O₃·xH₂O।", en:"Rust is chemically Fe₂O₃·xH₂O."},
    {bn:"জ্বালানি কোষ (fuel cell) হাইড্রোজেন ও অক্সিজেন থেকে বিদ্যুৎ ও পানি তৈরি করে।", en:"A fuel cell makes electricity and water from hydrogen and oxygen."},
  ],
  chips:{bn:["শুষ্ক কোষ","তড়িৎ লেপন","ক্ষয়"], en:["Dry cell","Electroplating","Corrosion"]}
},
{
  id:"y2c5", year:2, no:5,
  bn:{ title:"অজৈব রসায়ন — s ও p ব্লক", sub:"s- and p-block elements" },
  en:{ title:"s- and p-block elements", sub:"s ও p ব্লক মৌল" },
  concept:{
    bn:"s ব্লক = ১ম ও ২য় গ্রুপ (ক্ষার ও মৃৎক্ষার ধাতু), p ব্লক = ১৩–১৮ গ্রুপ। এদের যৌগেই আমরা দৈনন্দিন জীবনে সবচেয়ে বেশি পাই — লবণ, চুন, সোডা, সার।",
    en:"s-block = groups 1 and 2 (alkali and alkaline earth metals), p-block = groups 13–18. Their compounds fill daily life: salt, lime, soda, fertiliser."
  },
  analogy:{
    bn:"ক্ষার ধাতু = অত্যন্ত উদার বন্ধু, সহজেই ইলেকট্রন দিয়ে দেয় (তাই খুব সক্রিয়)। নোবেল গ্যাস = যার কিছুই দরকার নেই, তাই নিষ্ক্রিয়।",
    en:"Alkali metals are generous friends who give electrons away (very reactive). Noble gases need nothing, so they are inert."
  },
  points:[
    {bn:"ক্ষার ধাতু নরম, ঘনত্ব কম, পানিতে খুব সক্রিয়, H₂ গ্যাস ছাড়ে।", en:"Alkali metals are soft, low density, very reactive with water, releasing H₂."},
    {bn:"Na₂CO₃ (সোডা অ্যাশ), NaHCO₃ (বেকিং সোডা), NaOH (কস্টিক সোডা) — শিল্পে অপরিহার্য।", en:"Na₂CO₃, NaHCO₃ and NaOH are essential in industry."},
    {bn:"CaO (চুন), Ca(OH)₂ (কলিচুন), CaSO₄·2H₂O (জিপসাম) — নির্মাণ ও কৃষিতে ব্যবহৃত।", en:"CaO, Ca(OH)₂ and gypsum are used in construction and farming."},
    {bn:"হ্যালোজেন: সক্রিয়তা F > Cl > Br > I।", en:"Halogens: reactivity F > Cl > Br > I."},
    {bn:"নোবেল গ্যাস: সম্পূর্ণ ইলেকট্রন শেল, তাই নিষ্ক্রিয়; নিয়ন সাইনবোর্ডে, হিলিয়াম বেলুনে।", en:"Noble gases have full shells, so inert; neon in signs, helium in balloons."},
    {bn:"সার হিসেবে ইউরিয়া, TSP, MOP ব্যবহার হয়।", en:"Fertilisers include urea, TSP and MOP."}
  ],
  extra:[
    {bn:"সোডিয়াম ধাতু কেরোসিনে রাখা হয়, কারণ বাতাসের আর্দ্রতায় বিক্রিয়া করে।", en:"Sodium is stored under kerosene because it reacts with air moisture."},
    {bn:"NaCl থেকে তড়িৎ বিশ্লেষণে NaOH, Cl₂ ও H₂ একসাথে পাওয়া যায় (ক্লোর-ক্ষার প্রক্রিয়া)।", en:"Electrolysis of brine gives NaOH, Cl₂ and H₂ together (chlor-alkali process)."},
    {bn:"জিপসাম (CaSO₄·2H₂O) ১২০°C-এ গরম করলে প্লাস্টার অব প্যারিস হয়।", en:"Gypsum heated to 120°C becomes plaster of Paris."},
    {bn:"ক্লোরিন পানি বিশুদ্ধকরণে ব্যবহৃত হয়।", en:"Chlorine is used to disinfect water."},
    {bn:"নাইট্রোজেন সার (ইউরিয়া) প্রোটিন সংশ্লেষে সাহায্য করে।", en:"Nitrogen fertiliser (urea) helps plants build protein."},
    {bn:"সিলিকন সেমিকন্ডাক্টর শিল্পের মূল উপাদান।", en:"Silicon is the backbone of the semiconductor industry."},
  ],
  chips:{bn:["s ব্লক","হ্যালোজেন","নোবেল গ্যাস","সার"], en:["s-block","Halogens","Noble gases","Fertiliser"]}
},
{
  id:"y2c6", year:2, no:6,
  bn:{ title:"ধাতু নিষ্কাশন", sub:"Extraction of metals" },
  en:{ title:"Extraction of metals", sub:"ধাতু নিষ্কাশন" },
  concept:{
    bn:"প্রকৃতিতে ধাতু বিশুদ্ধ অবস্থায় কম পাওয়া যায়, বেশিরভাগই অক্সাইড বা সালফাইড আকারে। এই যৌগ থেকে ধাতু আলাদা করাই নিষ্কাশন।",
    en:"Metals are rarely found pure; most occur as oxides or sulphides. Separating the metal from those compounds is extraction."
  },
  analogy:{
    bn:"সোনা খনিতে মাটির সাথে মিশে থাকে — ধুয়ে, গুঁড়ো করে, গলিয়ে তবেই সোনা পাওয়া যায়। লোহার ক্ষেত্রে তাপ দিয়ে 'অক্সিজেন ছিনিয়ে নিতে' হয়।",
    en:"Gold is dug out mixed with soil and must be washed and melted; for iron, heat is used to pull the oxygen away."
  },
  points:[
    {bn:"ধাতুর সক্রিয়তা ক্রম: K > Na > Ca > Mg > Al > Zn > Fe > Pb > Cu > Ag > Au।", en:"Reactivity series: K > Na > Ca > Mg > Al > Zn > Fe > Pb > Cu > Ag > Au."},
    {bn:"অতি সক্রিয় ধাতু (K, Na) তড়িৎ বিশ্লেষণে পাওয়া যায়।", en:"Very reactive metals (K, Na) are obtained by electrolysis."},
    {bn:"মাঝারি সক্রিয় (Fe, Zn) কার্বন বা CO দিয়ে বিজারিত হয় (ব্লাস্ট ফার্নেস)।", en:"Moderately reactive metals (Fe, Zn) are reduced with carbon or CO (blast furnace)."},
    {bn:"কম সক্রিয় ধাতু (Cu, Ag, Au) প্রকৃতিতে প্রায় মুক্ত অবস্থায় পাওয়া যায়।", en:"Less reactive metals (Cu, Ag, Au) occur nearly free."},
    {bn:"আকরিকের সংকেত: হেমাটাইট Fe₂O₃, বক্সাইট Al₂O₃·2H₂O, ক্যালকোপাইরাইট CuFeS₂।", en:"Ores: haematite Fe₂O₃, bauxite Al₂O₃·2H₂O, chalcopyrite CuFeS₂."},
    {bn:"ধাতুর গলনাঙ্ক বেশি, নমনীয়, তাপ ও তড়িৎ পরিবাহী, ধাতব দ্যুতি আছে।", en:"Metals have high melting points, are malleable, conduct heat and electricity, and are lustrous."}
  ],
  extra:[
    {bn:"খনিজ ও আকরিকের পার্থক্য: সব আকরিক খনিজ, কিন্তু সব খনিজ আকরিক নয়।", en:"Every ore is a mineral, but not every mineral is an ore."},
    {bn:"গ্যাং (gangue) = আকরিকের সাথে থাকা অপ্রয়োজনীয় মাটি ও পাথর।", en:"Gangue is the unwanted rock and soil mixed with the ore."},
    {bn:"ভাঙা, গুঁড়ো করা, ঘনীভবন, তাপ দিয়ে বিজারণ — এই ধাপগুলোই নিষ্কাশনের পথ।", en:"Crushing, concentration, reduction with heat — these are the steps of extraction."},
    {bn:"বক্সাইট থেকে অ্যালুমিনিয়াম পাওয়া যায় তড়িৎ বিশ্লেষণে (হলের পদ্ধতি)।", en:"Aluminium is obtained from bauxite by electrolysis (Hall's process)."},
    {bn:"ধাতুর সংকর (alloy): ইস্পাত = Fe + C, ব্রোঞ্জ = Cu + Sn, পিতল = Cu + Zn।", en:"Alloys: steel = Fe + C, bronze = Cu + Sn, brass = Cu + Zn."},
    {bn:"ধাতু পুনর্ব্যবহার করলে শক্তি ও আকরিক দুটোই বাঁচে।", en:"Recycling metals saves both energy and ore."},
  ],
  chips:{bn:["আকরিক","ব্লাস্ট ফার্নেস","তড়িৎ বিশ্লেষণ"], en:["Ore","Blast furnace","Electrolysis"]}
},
{
  id:"y2c7", year:2, no:7,
  bn:{ title:"জৈব যৌগের গুণগত বিশ্লেষণ", sub:"Qualitative organic analysis" },
  en:{ title:"Qualitative organic analysis", sub:"জৈব যৌগের গুণগত বিশ্লেষণ" },
  concept:{
    bn:"অজানা জৈব যৌগকে চেনার উপায় — তার কার্যকরী মূলক কী, আর তাতে কোন মৌল আছে। রঙ বদল, গ্যাস নির্গমন, গন্ধ — এগুলোই সূত্র দেয়।",
    en:"To identify an unknown organic compound you find its functional group and which elements it contains — colour changes, gas bubbles and smells are the clues."
  },
  analogy:{
    bn:"বন্ধুকে চেনা যায় কণ্ঠ, হাঁটার ভঙ্গি দিয়ে — রসায়নেও প্রতিটি মূলকের নিজস্ব 'স্বাক্ষর' আছে।",
    en:"You recognise a friend by their voice and walk; each functional group has its own signature too."
  },
  points:[
    {bn:"লাসাইনের পরীক্ষা: Na ধাতুর সাথে গলিয়ে নাইট্রোজেন শনাক্ত (প্রুশিয়ান ব্লু)।", en:"Lassaigne's test: fuse with sodium to detect nitrogen (Prussian blue)."},
    {bn:"ব্রোমিন পানি বিবর্ণ হয় → অসম্পৃক্ত যৌগ (C=C)।", en:"Bromine water decolourised → unsaturated compound (C=C)."},
    {bn:"টলেনের বিকারক: রূপার আয়না তৈরি → অ্যালডিহাইড।", en:"Tollens' reagent gives a silver mirror → aldehyde."},
    {bn:"ফেহলিং দ্রবণ: ইটের মতো লাল অধঃক্ষেপ → অ্যালডিহাইড বা রিডিউসিং শর্করা।", en:"Fehling's solution gives a brick-red precipitate → aldehyde / reducing sugar."},
    {bn:"সোডিয়াম বাইকার্বোনেট → বুদবুদ = কার্বক্সিলিক অ্যাসিড।", en:"Sodium bicarbonate → fizz = carboxylic acid."},
    {bn:"নিউট্রাল ফেরিক ক্লোরাইড: বেগুনি রঙ → ফেনল।", en:"Neutral ferric chloride: violet colour → phenol."}
  ],
  extra:[
    {bn:"জৈব যৌগে সাধারণত C ও H থাকে; N, S, O, হ্যালোজেনও থাকতে পারে।", en:"Organic compounds usually contain C and H, often with N, S, O or halogens."},
    {bn:"লাসাইনের পরীক্ষায় সোডিয়াম ধাতু ব্যবহার হয়, কারণ এটি যৌগকে ভেঙে আয়ন তৈরি করে।", en:"Lassaigne's test uses sodium metal because it breaks the compound into ions."},
    {bn:"টলেনের বিকারক = AgNO₃ + NH₄OH (সদ্য প্রস্তুত)।", en:"Tollens' reagent is freshly prepared AgNO₃ + NH₄OH."},
    {bn:"ফেহলিং দ্রবণে CuSO₄ ও সোডিয়াম পটাশিয়াম টারট্রেট থাকে।", en:"Fehling's solution contains CuSO₄ and sodium potassium tartrate."},
    {bn:"2,4-DNP (ব্র্যাডির বিকারক) দিয়ে অ্যালডিহাইড ও কিটোন দুটোই শনাক্ত হয়।", en:"2,4-DNP (Brady's reagent) detects both aldehydes and ketones."},
    {bn:"সোডিয়াম মেটাল যুক্ত করলে অ্যালকোহল থেকে H₂ গ্যাস নির্গত হয়।", en:"Adding sodium metal releases H₂ gas from an alcohol."},
  ],
  chips:{bn:["লাসাইনের পরীক্ষা","টলেন","ফেহলিং"], en:["Lassaigne's test","Tollens'","Fehling's"]}
},
{
  id:"y2c8", year:2, no:8,
  bn:{ title:"পরিবেশ রসায়ন", sub:"Environmental chemistry" },
  en:{ title:"Environmental chemistry", sub:"পরিবেশ রসায়ন" },
  concept:{
    bn:"বায়ু, পানি, মাটি — সবখানে রাসায়নিক ভারসাম্য আছে। মানুষ সেখানে বেশি কিছু ঢেলে দিলেই দূষণ হয়।",
    en:"Air, water and soil all have a chemical balance. Pollution begins when we pour in more than the balance can take."
  },
  analogy:{
    bn:"ঘর বন্ধ করে আগুন জ্বালালে ধোঁয়ায় শ্বাস নিতে কষ্ট হয় — বায়ুমণ্ডলও অনেক বড় বন্ধ ঘর।",
    en:"Burn a fire in a closed room and the smoke chokes you — the atmosphere is one big closed room."
  },
  points:[
    {bn:"বায়ু দূষণ: CO, SO₂, NOₓ, Pb, particulate matter; উৎস মোটরযান ও কলকারখানা।", en:"Air pollution: CO, SO₂, NOₓ, Pb, particulates; sources are vehicles and factories."},
    {bn:"SO₂ ও NOₓ থেকে অ্যাসিড বৃষ্টি → মাটি ও পানির pH কমে।", en:"SO₂ and NOₓ cause acid rain, lowering soil and water pH."},
    {bn:"গ্রিনহাউস গ্যাস: CO₂, CH₄, N₂O, CFC → বৈশ্বিক উষ্ণায়ন।", en:"Greenhouse gases: CO₂, CH₄, N₂O, CFCs → global warming."},
    {bn:"CFC ওজোন স্তর ভাঙে (O₃ → O₂); মন্ট্রিল প্রোটোকলে নিষিদ্ধ।", en:"CFCs destroy the ozone layer (O₃ → O₂); banned by the Montreal Protocol."},
    {bn:"BOD (জৈব রাসায়নিক অক্সিজেন চাহিদা) বেশি মানে পানি বেশি দূষিত।", en:"Higher BOD (biochemical oxygen demand) means more polluted water."},
    {bn:"সবুজ রসায়ন (Green chemistry): কম বর্জ্য, নিরাপদ দ্রাবক, পুনর্ব্যবহার — দূষণ কমানোর পথ।", en:"Green chemistry: less waste, safer solvents, recycling — the way to reduce pollution."}
  ],
  extra:[
    {bn:"বাংলাদেশে বায়ু দূষণের বড় কারণ ইটভাটা ও পুরোনো যানবাহন।", en:"Brick kilns and old vehicles are major air-pollution sources in Bangladesh."},
    {bn:"সীসা (Pb) মিশ্রিত পেট্রোল শিশুদের মস্তিষ্কের ক্ষতি করে — এখন নিষিদ্ধ।", en:"Lead in petrol damaged children's brains — now banned."},
    {bn:"pH ৫.৬-এর নিচে বৃষ্টিকে অ্যাসিড বৃষ্টি ধরা হয়।", en:"Rain below pH 5.6 counts as acid rain."},
    {bn:"ওজোন স্তর স্ট্র্যাটোস্ফিয়ারে, ভূপৃষ্ঠের ওজোন ধোঁয়াশার উপাদান।", en:"The ozone layer is in the stratosphere; ground-level ozone is a smog component."},
    {bn:"জল দূষণে সবচেয়ে বড় বিপদ আর্সেনিক — বাংলাদেশে গভীর নলের পানি পরীক্ষা জরুরি।", en:"Arsenic is the biggest water-pollution danger in Bangladesh — test tube-well water."},
    {bn:"৩R: Reduce, Reuse, Recycle — দূষণ কমানোর সহজ সূত্র।", en:"The three Rs — reduce, reuse, recycle — are the simplest pollution fix."},
  ],
  chips:{bn:["অ্যাসিড বৃষ্টি","গ্রিনহাউস","BOD","ওজোন"], en:["Acid rain","Greenhouse","BOD","Ozone"]}
},
{
  id:"y2c9", year:2, no:9,
  bn:{ title:"পলিমার", sub:"Polymers" },
  en:{ title:"Polymers", sub:"পলিমার" },
  concept:{
    bn:"একই ছোট অণু (মনোমার) হাজার হাজার জুড়ে গিয়ে বড় শিকল বানায় — সেটাই পলিমার। প্লাস্টিক, রাবার, প্রোটিন, DNA — সব পলিমার।",
    en:"Many small units (monomers) join into a long chain — that is a polymer. Plastics, rubber, proteins, even DNA are polymers."
  },
  analogy:{
    bn:"পুঁতি এক এক করে না, কিন্তু সুতায় গাঁথলে মালা হয়। পুঁতি = মনোমার, মালা = পলিমার।",
    en:"Beads threaded on a string make a necklace. Bead = monomer, necklace = polymer."
  },
  points:[
    {bn:"সংযোজন পলিমার: C=C ভেঙে জোড়া লাগে (পলিইথিলিন, PVC, টেফলন)।", en:"Addition polymerisation: C=C opens and links (polyethylene, PVC, Teflon)."},
    {bn:"ঘনীভবন পলিমার: ছোট অণু (পানি) বেরিয়ে যায় (নাইলন, পলিয়েস্টার, বেকেলাইট)।", en:"Condensation polymerisation: a small molecule (water) leaves (nylon, polyester, bakelite)."},
    {bn:"হোমোপলিমার = একই মনোমার; কোপলিমার = দুই বা ততোধিক মনোমার।", en:"Homopolymer = one monomer; copolymer = two or more."},
    {bn:"থার্মোপ্লাস্টিক গরমে নরম হয়, বারবার আকার দেওয়া যায় (পলিইথিলিন)।", en:"Thermoplastics soften on heating and can be reshaped (polyethylene)."},
    {bn:"থার্মোসেটিং প্লাস্টিক একবার তৈরি হলে আর গলানো যায় না (বেকেলাইট)।", en:"Thermosetting plastics cannot be melted again (bakelite)."},
    {bn:"জৈব-অবচনীয় পলিমার (biodegradable) পরিবেশ বাঁচায় — বর্তমানে বড় গবেষণার ক্ষেত্র।", en:"Biodegradable polymers protect the environment — a major research area now."}
  ],
  extra:[
    {bn:"প্রাকৃতিক পলিমার: সেলুলোজ, স্টার্চ, প্রোটিন, রাবার, DNA।", en:"Natural polymers: cellulose, starch, protein, rubber, DNA."},
    {bn:"কৃত্রিম পলিমার: পলিইথিলিন, PVC, নাইলন, টেফলন, বেকেলাইট।", en:"Synthetic polymers: polyethylene, PVC, nylon, Teflon, bakelite."},
    {bn:"পলিইথিলিন ব্যাগ পরিবেশে ৪০০+ বছর টেকে — এ কারণেই পলিব্যাগ নিষিদ্ধ।", en:"Polyethylene bags last 400+ years in the environment — the reason for bans."},
    {bn:"ভলকানাইজেশন: রাবার + সালফার গরম করলে শক্তি ও স্থিতিস্থাপকতা বাড়ে।", en:"Vulcanisation heats rubber with sulfur to increase strength and elasticity."},
    {bn:"PVC = পলিভিনাইল ক্লোরাইড; টেফলন = PTFE (নন-স্টিক কোটিং)।", en:"PVC = polyvinyl chloride; Teflon = PTFE (non-stick coating)."},
    {bn:"জৈব-অবচনীয় প্লাস্টিক তৈরি হচ্ছে ভুট্টার স্টার্চ থেকে।", en:"Biodegradable plastics are now made from corn starch."},
  ],
  chips:{bn:["মনোমার","পলিইথিলিন","নাইলন","থার্মোপ্লাস্টিক"], en:["Monomer","Polyethylene","Nylon","Thermoplastic"]}
}
];
