const contenedor = document.querySelector(`.flex-container`)
document.querySelector(`.send-button`).value=`COMPRAR`
let crearLlave= (nombre,modelo,precio) => {
    img= `<img class="llave-img" src="./multimedia/llave.png" alt="llave">`;
    nombre =`<h2>${nombre}</h2>`;
    modelo= `<h3 id= "${modelo}">${modelo}</h3>`;
    precio= `<p>Precio:<b> $${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}

const changeHidden = (number) => {
    document.querySelector(`.key-data`).value = number
}
let documentFragment= document.createDocumentFragment()

for (let i = 1; i <21; i++) {
    let precioRandom= Math.round(((Math.random()*10)+30));
    let modeloRandom= Math.round(((Math.random())*10000));
    let llave=crearLlave(`Llave ${i}`,`modelo ${modeloRandom}`, `${precioRandom}`);
    let div = document.createElement(`DIV`);
    div.addEventListener(`click`,()=> {changeHidden(modeloRandom)})
    div.setAttribute(`tabIndex`,i)
    div.classList.add(`item-${i}`,`flex-item`)
    div.innerHTML=llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div)
}

contenedor.appendChild(documentFragment)
