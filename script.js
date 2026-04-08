// 🌿 DATA
const data = [
  {name:"Forest Spirit 🌲", category:"nature"},
  {name:"Sky Castle ☁️", category:"sky"},
  {name:"Wind Dragon 🐉", category:"spirit"},
  {name:"Ocean Dream 🌊", category:"nature"},
  {name:"Flying Island 🏝️", category:"sky"},
  {name:"Hidden Shrine ⛩️", category:"spirit"}
];

const container = document.getElementById("cardContainer");

// 🎴 LOAD CARDS
function loadCards(filter="all") {
  container.innerHTML = "";
  data.forEach(item => {
    if(filter==="all" || item.category===filter){
      let div = document.createElement("div");
      div.className="card";
      div.innerText=item.name;
      container.appendChild(div);

      setTimeout(()=>div.classList.add("show"),100);
    }
  });
}
loadCards();

// 🔍 SEARCH
document.getElementById("searchInput").addEventListener("input", e=>{
  let val = e.target.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card=>{
    card.style.display = card.innerText.toLowerCase().includes(val) ? "block":"none";
  });
});

// 🎯 FILTER
function filterCategory(cat){
  loadCards(cat);
}

// 🌙 DARK MODE
document.getElementById("themeToggle").onclick=()=>{
  document.body.classList.toggle("dark");
};

// 🎵 MUSIC
let music=document.getElementById("bgMusic");
let play=false;
document.getElementById("musicToggle").onclick=()=>{
  play?music.pause():music.play();
  play=!play;
};

// ✨ PARTICLES
const p = document.querySelector(".particles");
for(let i=0;i<40;i++){
  let s=document.createElement("span");
  s.style.left=Math.random()*100+"vw";
  s.style.animationDuration=(5+Math.random()*5)+"s";
  p.appendChild(s);
}