/* Galf3D Herramientas — utilidades compartidas */
(function(){
  var b=document.getElementById('burger'), l=document.getElementById('navLinks');
  if(b&&l){ b.addEventListener('click',function(){ l.classList.toggle('open'); }); }
  var y=document.getElementById('year'); if(y){ y.textContent=new Date().getFullYear(); }
})();
window.G3 = {
  num: function(id){ var v=parseFloat(String(document.getElementById(id).value).replace(',','.')); return isFinite(v)?v:0; },
  mxn: function(n){ return (isFinite(n)?n:0).toLocaleString('es-MX',{style:'currency',currency:'MXN',minimumFractionDigits:2,maximumFractionDigits:2}); },
  fmt: function(n,d){ return (isFinite(n)?n:0).toLocaleString('es-MX',{minimumFractionDigits:d||0,maximumFractionDigits:d||0}); },
  watch: function(ids,fn){ ids.forEach(function(id){ var e=document.getElementById(id); if(e){ e.addEventListener('input',fn); e.addEventListener('change',fn);} }); fn(); }
};
