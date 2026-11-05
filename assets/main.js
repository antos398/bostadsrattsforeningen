(function(){
  const button = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-menu]');
  if(button && nav){
    button.addEventListener('click',()=>{
      const open = nav.classList.toggle('is-open');
      button.setAttribute('aria-expanded',String(open));
      button.setAttribute('aria-label',open?'Stäng menyn':'Öppna menyn');
    });
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape' && nav.classList.contains('is-open')){
        nav.classList.remove('is-open'); button.setAttribute('aria-expanded','false');button.focus();
      }
    });
  }
  const fee = document.getElementById('fee');
  const rate = document.getElementById('rate');
  if(fee && rate){
    const formatter=new Intl.NumberFormat('sv-SE',{style:'currency',currency:'SEK',maximumFractionDigits:0});
    const update=()=>{
      const current=Math.max(0,Number(fee.value)||0);
      const pct=Number(rate.value)||0;
      const extra=current*pct/100;
      document.getElementById('new-fee').textContent=formatter.format(current+extra);
      document.getElementById('extra-month').textContent=formatter.format(extra);
      document.getElementById('extra-year').textContent=formatter.format(extra*12);
    };
    fee.addEventListener('input',update);
    rate.addEventListener('input',update);
    update();
  }
})();