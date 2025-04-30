// 計算ロジック
function calcValue(hp, atk, matk, def, mdef, bAtk, bMatk, bDef, bMdef) {
  const floor = Math.floor;
  let v = 0;
  v += floor(hp / 3);
  v += floor(atk * (1 + bAtk / 100));
  v += floor(matk * (1 + bMatk / 100));
  v += floor(def * (1 + bDef / 100));
  v += floor(mdef * (1 + bMdef / 100));
  return v;
}

document.getElementById('calcBtn').addEventListener('click', () => {
  const A = {
    hp: +document.getElementById('hpA').value,
    atk: +document.getElementById('atkA').value,
    matk: +document.getElementById('matkA').value,
    def: +document.getElementById('defA').value,
    mdef: +document.getElementById('mdefA').value,
    bAtk: +document.getElementById('buffAtkA').value,
    bMatk: +document.getElementById('buffMatkA').value,
    bDef: +document.getElementById('buffDefA').value,
    bMdef: +document.getElementById('buffMdefA').value
  };
  const B = {
    hp: +document.getElementById('hpB').value,
    atk: +document.getElementById('atkB').value,
    matk: +document.getElementById('matkB').value,
    def: +document.getElementById('defB').value,
    mdef: +document.getElementById('mdefB').value,
    bAtk: +document.getElementById('buffAtkB').value,
    bMatk: +document.getElementById('buffMatkB').value,
    bDef: +document.getElementById('buffDefB').value,
    bMdef: +document.getElementById('buffMdefB').value
  };

  const valA = calcValue(...Object.values(A));
  const valB = calcValue(...Object.values(B));
  let msg = `A の計算結果: ${valA} ／ B の計算結果: ${valB} → `;
  if (valA > valB) msg += 'Aが先に行動';
  else if (valB > valA) msg += 'Bが先に行動';
  else msg += '同値。残HP割合の多いユニットが先に行動';
  document.getElementById('result').textContent = msg;
});

// ── モーダル開閉 & タブ切替 ──
const helpBtn = document.getElementById('helpBtn');
const helpModal = document.getElementById('helpModal');
const closeHelp = document.getElementById('closeHelp');

helpBtn.addEventListener('click', () => helpModal.style.display = 'flex');
closeHelp.addEventListener('click', () => helpModal.style.display = 'none');
window.addEventListener('click', e => {
  if (e.target === helpModal) helpModal.style.display = 'none';
});

document.querySelectorAll('.tabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tabs button, .tab-panel')
      .forEach(el => el.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});
