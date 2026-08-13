const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const nav = document.getElementById('tabs');
const menuToggle = document.getElementById('menuToggle');

function activateTab(id) {
  tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === id));
  panels.forEach(p => p.classList.toggle('active', p.id === id));
  history.replaceState(null, '', `#${id}`);
  if (window.innerWidth <= 900) nav.classList.remove('open');
}

tabs.forEach(tab => tab.addEventListener('click', () => activateTab(tab.dataset.tab)));
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));

const initial = location.hash.replace('#','');
if ([...panels].some(p => p.id === initial)) activateTab(initial);

document.getElementById('year').textContent = new Date().getFullYear();

const teams = [
  ['1','Orlando FL Dodge Ball','8','2','.800'],
  ['2','Miami Heat Seekers','7','3','.700'],
  ['3','Tampa Bay Thunder','6','4','.600'],
  ['4','Jacksonville Strike','5','5','.500'],
  ['5','South Beach Ballers','3','7','.300'],
  ['6','Space Coast Titans','1','9','.100']
];
const standingsBody = document.getElementById('standingsBody');
standingsBody.innerHTML = teams.map(r => `<tr>${r.map((c,i)=>`<td${i===1&&r[0]==='1'?' style="color:#ef233c;font-weight:700"':''}>${c}</td>`).join('')}</tr>`).join('');

const heatRange = document.getElementById('heatRange');
const heatValue = document.getElementById('heatValue');
const heatBar = document.getElementById('heatBar');
heatRange.addEventListener('input', () => {
  heatValue.textContent = heatRange.value;
  heatBar.style.width = `${heatRange.value}%`;
});

document.querySelectorAll('.buy-btn').forEach(btn => btn.addEventListener('click', () => {
  document.getElementById('shopMessage').textContent = 'Shop buttons are demo placeholders. Replace with your real product links later.';
}));

document.getElementById('playFeature').addEventListener('click', e => {
  e.currentTarget.textContent = e.currentTarget.textContent === '▶' ? '❚❚' : '▶';
});

const clipsData = [
  {type:'highlight', title:'Clutch Play Highlight'},
  {type:'promo', title:'Trash Talk Promo'},
  {type:'social', title:'Fan Reaction Cam'},
  {type:'highlight', title:'Match Point Replay'},
  {type:'promo', title:'Weekend Walkout Teaser'}
];
const clips = document.getElementById('clips');
function renderClips(filter='all') {
  clips.innerHTML = clipsData.filter(c => filter==='all' || c.type===filter).map(c => `<div class="clip"><span>${c.type}</span><strong>${c.title}</strong></div>`).join('');
}
renderClips();
document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderClips(btn.dataset.filter);
}));

const tourStops = [
  ['Orlando, FL','Opening Weekend','Date TBD'],
  ['Miami, FL','Regional Stop','Date TBD'],
  ['Tampa, FL','Regional Stop','Date TBD'],
  ['Jacksonville, FL','Regional Stop','Date TBD'],
  ['The Big Game','Championship Weekend','Date TBD']
];
document.getElementById('tourList').innerHTML = tourStops.map(s => `<div class="tour-stop"><div><strong>${s[0]}</strong><br><small>${s[1]}</small></div><small>${s[2]}</small></div>`).join('');

document.getElementById('ticketLink').addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('ticketMessage').textContent = 'Add your official arena or ticketing URL to this button when tickets go live.';
});
