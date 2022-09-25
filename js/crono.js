const deg =6;
const hora = document.querySelector("#hora");
const minuto = document.querySelector("#minuto");
const segundo = document.querySelector("#segundo");

setInterval(()=>{
    let dia = new Date();
    let hh = dia.getHours() * 30;
    let mm = dia.getMinutes() * deg;
    let ss = dia.getSeconds() * deg;

    hora.style.transform=`rotateZ(${(hh)+(mm/12)}deg)`;
    minuto.style.transform=`rotateZ(${mm}deg)`;
    segundo.style.transform=`rotateZ(${ss}deg)`;

})

document.querySelector("#btnCambiar")
    ,addEventListener("click",()=>{
        toDarkmode();
})

function toDarkmode(){
   
    if(document.querySelector("#body").classList.contains("bg")){
        document.querySelector("#body").classList.remove("bg");
        document.querySelector("#body").classList.add("bd");
    }else{
        document.querySelector("#body").classList.add("bg");
        document.querySelector("#body").classList.remove("bd");
    }

}

