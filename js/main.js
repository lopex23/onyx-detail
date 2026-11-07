/* ---------- CONFIGURACIÓN (edita aquí) ---------- */
const NEGOCIO = { nombre: "Onyx Detail", whatsapp: "573142187349" };
const PRECIOS = {
  tamanos: [
    { id:"sedan", nombre:"Sedán",           nota:"Mazda 3, Corolla" },
    { id:"suv5",  nombre:"SUV 5 pasajeros", nota:"Tucson, CX-5" },
    { id:"suv7",  nombre:"SUV 7 pasajeros", nota:"4x4 o pick-up" }
  ],
  // Precio fijo de cada paquete según el tipo de vehículo (id de tamanos)
  paquetes: [
    { id:"basico", nombre:"Paquete Básico", nota:"Lavado con espuma, aspirado, vidrios, dash y puertas con protección UV, llantas",
      tiempo:"1 h a 1 h 30 min", precios:{ sedan:40000, suv5:50000, suv7:65000 } },
    { id:"inter",  nombre:"Paquete Intermedio", nota:"Todo el básico + limpieza de asientos, encerado con protección UV, motor y plásticos externos",
      tiempo:"3 a 4 h", precios:{ sedan:120000, suv5:150000, suv7:180000 } },
    { id:"vip",    nombre:"Paquete VIP", nota:"Tapicería completa (asientos, alfombra, cinturones y cielo raso), encerado, motor y plásticos externos",
      tiempo:"5 a 6 h", precios:{ sedan:350000, suv5:400000, suv7:450000 } }
  ],
  // Adicionales: vacío hasta tener precios reales. Formato: { id:"motor", nombre:"Limpieza de motor", precio:60000 }
  extras: []
};
/* ------------------------------------------------- */

const cop = new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",maximumFractionDigits:0});
const $ = s => document.querySelector(s);
const redondear = n => Math.round(n/5000)*5000;

function opt(type,name,o,checked,extra){
  return `<div class="opt"><input type="${type}" name="${name}" id="${name}-${o.id}" value="${o.id}" ${checked?"checked":""}>
  <label for="${name}-${o.id}"><span>${o.nombre}<small>${o.nota||""}</small></span>${extra?`<span class="p">${extra}</span>`:""}</label></div>`;
}
$("#sizes").innerHTML  = PRECIOS.tamanos.map((o,i)=>opt("radio","tam",o,i===0)).join("");
$("#packs").innerHTML  = PRECIOS.paquetes.map((o,i)=>opt("radio","paq",o,i===1,"desde "+cop.format(Math.min(...Object.values(o.precios))))).join("");
$("#extras").innerHTML = PRECIOS.extras.map(o=>opt("checkbox","ext",o,false,"+"+cop.format(o.precio))).join("");
$("#extras-set").hidden = PRECIOS.extras.length === 0;
$("#phone").textContent = "+" + NEGOCIO.whatsapp.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})$/,"$1 $2 $3 $4");

function calcular(){
  const tam = PRECIOS.tamanos.find(t=>t.id===document.querySelector('input[name=tam]:checked').value);
  const paq = PRECIOS.paquetes.find(p=>p.id===document.querySelector('input[name=paq]:checked').value);
  const ext = [...document.querySelectorAll('input[name=ext]:checked')].map(e=>PRECIOS.extras.find(x=>x.id===e.value));
  const lineas = [[paq.nombre, redondear(paq.precios[tam.id])]];
  ext.forEach(x=>{ lineas.push([x.nombre, redondear(x.precio)]); });
  const total = lineas.reduce((s,l)=>s+l[1],0);
  $("#total").textContent = cop.format(total);
  $("#time").textContent = "Vehículo: " + tam.nombre + " · Tiempo aprox.: " + paq.tiempo + " · A domicilio";
  $("#lines").innerHTML = lineas.map(l=>`<li><span>${l[0]}</span><span>${cop.format(l[1])}</span></li>`).join("");
  const msg = `Hola ${NEGOCIO.nombre}, quiero cotizar:\n• Vehículo: ${tam.nombre}\n• Paquete: ${paq.nombre}` +
    (ext.length? `\n• Adicionales: ${ext.map(x=>x.nombre).join(", ")}` : "") +
    `\nEstimado en la página: ${cop.format(total)}\n¿Qué disponibilidad tienen?`;
  $("#msg").textContent = msg;
  $("#wa").href = "https://wa.me/" + NEGOCIO.whatsapp + "?text=" + encodeURIComponent(msg);
}
$("#qform").addEventListener("change",calcular);
calcular();

$("#copy").addEventListener("click",()=>{
  const t = $("#msg").textContent, done=()=>{ $("#copied").hidden=false; setTimeout(()=>$("#copied").hidden=true,2000); };
  try{ navigator.clipboard.writeText(t).then(done,()=>sel()); }catch(e){ sel(); }
  function sel(){ const r=document.createRange(); r.selectNodeContents($("#msg")); const s=getSelection(); s.removeAllRanges(); s.addRange(r); }
});
