const biometrico = {
  decimoAsistencia: {
    user: "admin",
    password: "Admin2931",
    ip:""
  },
  decimo: {
    user: "admin",
    password: "Seeusa10"
  },
  octavo: {
    user: "admin",
    password: "Seeusa10",
    
  }
 
};
const datos={
  direciones_ip:{
    octavo818:"172.16.200.15",
    octavoAsitencia:"172.16.200.16",
    octavo801:"172.16.200.14",
    octavo802:"172.16.200.19"
  },
  vpns:{
    avoris:"portalvpn.avoristravel.com",
    pulse:" vpnssl.globalia.com/"
  }
}
const { decimoAsistencia, octavo,decimo } = biometrico;
const {direciones_ip,vpns}=datos;
const contenedor = document.getElementById("main");
const boton = document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();

  let parrafo = document.createElement("p");
  parrafo.classList.add("texto");
  parrafo.innerHTML =
    `los datos generados del biometrico son:   ${decimoAsistencia.user}  ${decimoAsistencia.password}
    `;

  contenedor.appendChild(parrafo);
  setTimeout(() => {
    parrafo.remove()
  }, 10000);
});

const btnoctavo =document.getElementById("octavo")
btnoctavo.addEventListener("click",(e)=>{
    e.preventDefault()

    let parrafo =document.createElement("p");
    parrafo.classList.add("texto");
    parrafo.innerHTML=`
    los  datos generados del octavo son ${octavo.user} ${octavo.password}
    la ip del dispotivo es:${direciones_ip.octavoAsitencia}`
    contenedor.appendChild(parrafo)
    
    setTimeout(() => {
           parrafo.remove();
    }, 10000);
})




const btn_impresora = document.getElementById("btn-impresora");
btn_impresora.addEventListener("click", (e) => {
  e.preventDefault();

  const texto = document.createElement("p");
  texto.classList.add("texto");
  texto.textContent = "172.16.100.1";

  setTimeout(() => {
    texto.remove();
  }, 10000);
  contenedor.appendChild(texto);
});

const decimotbn=document.getElementById("decimo").addEventListener("click",(e)=>{
    e.preventDefault()
    let parrafo=document.createElement("p")
    parrafo.classList.add("texto");
    parrafo.textContent=`
     los  datos generados del octavo son ${decimo.user} ${decimo.password}
    `;
    contenedor.appendChild(parrafo)
    setTimeout(() => {
        parrafo.remove()
    }, 10000);
})
const avoris=document.getElementById("vpn");
avoris.addEventListener("click",(e)=>{
  e.preventDefault();
  let parrafo=document.createElement("p")
  parrafo.classList.add("texto");
  parrafo.innerHTML=`
  la direcion de avoris  es: <b class="negrita">${vpns.avoris}</b>
  y la de pulse es: <b class="negrita">${vpns.avoris}</b>
  `
  contenedor.appendChild(parrafo);
  setTimeout(() => {
    parrafo.remove()
  }, 10000);
  
})
const octavo801=document.getElementById("801");
octavo801.addEventListener("click",(e)=>{
     e.preventDefault();
     let parrafo=document.createElement("p")
     parrafo.classList.add("texto");
     parrafo.innerHTML=`
       la ip estatica del 801 es<b class="negrita">${direciones_ip.octavo801}</b>
            `;
            contenedor.appendChild(parrafo);
            setTimeout(() => {
              parrafo.remove()
            }, 10000);
            
})
const octavo802=document.getElementById("802");
octavo802.addEventListener("click",(e)=>{
  e.preventDefault();
  let parrafo=document.createElement("p")
  parrafo.classList.add("texto");
  parrafo.innerHTML=`
    la ip estatica del 801 es<b class="negrita">${direciones_ip.octavo802}</b>
         `;
         contenedor.appendChild(parrafo);
         setTimeout(() => {
           parrafo.remove()
         }, 10000);
})