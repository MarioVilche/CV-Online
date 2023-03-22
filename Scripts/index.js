const estilos = document.documentElement.style;

let irAInicio = document.querySelector(".irAInicio");
let body = document.querySelector("body");

let estudios = document.querySelector("#botonEstudios");
let experiencia = document.querySelector("#botonExperiencia");
let otros = document.querySelector("#botonOtros");
let contacto = document.querySelector("#botonContacto");
let habilidades = document.querySelector("#botonHabilidades");

let circulos = document.querySelector(".circulos");

let circulo = document.querySelectorAll(".circulo");
let radio1 = document.querySelectorAll(".circulo1");
let radio2 = document.querySelectorAll(".circulo2");

window.addEventListener("scroll", function () {
  var scroll1 = document.documentElement.scrollTop;
  if (scroll1 > 500) {
    irAInicio.setAttribute("style", "bottom:15px;");
  } else {
    irAInicio.setAttribute("style", "bottom:-75px");
  }
});

//Activar el modo oscuro

function modoscuro() {
  let section = document.querySelectorAll(".section");
  let cabecera = document.querySelector(".cabecera");

  body.style.backgroundColor = "black";
  body.style.color = "white";
  cabecera.setAttribute("class", "cabeceraOscuro");
  for (let i = 0; i < 5; i++) {
    section[i].setAttribute("class", "sectionOscuro");
  }

  for (a = 0; a < 3; a++) {
    radio2[a].style.setProperty("stroke", "var(--colorFondoOscuro)");
  }

  reemplazarBotonOscuro();
}

function reemplazarBotonOscuro() {
  let textoC = document.createTextNode("✲ Modo claro");
  let botonC = document.createElement("button");
  let modoOscuro = document.querySelector("#oscuro");
  let inicio = document.querySelector("#inicio");

  inicio.removeChild(modoOscuro);

  botonC.appendChild(textoC);
  inicio.appendChild(botonC);
  botonC.setAttribute("id", "claro");
  botonC.setAttribute("onclick", "modoC()");
}

//Activar el modo claro

function modoC() {
  let sectionOscuro = document.querySelectorAll(".sectionOscuro");
  let cabeceraO = document.querySelector(".cabeceraOscuro");
  let body = document.querySelector("body");

  body.style.backgroundColor = "white";
  body.style.color = "rgb(63, 63, 63)";
  cabeceraO.setAttribute("class", "cabecera");
  for (let i = 0; i < 5; i++) {
    sectionOscuro[i].setAttribute("class", "section");
  }

  for (a = 0; a < 3; a++) {
    radio2[a].style.setProperty("stroke", "var(--colorFondoClaro)");
  }

  reemplazarBotonClaro();
}

function reemplazarBotonClaro() {
  let textoO = document.createTextNode("☽ Modo oscuro");
  let botonO = document.createElement("button");
  let modoclaro = document.querySelector("#claro");
  let inicio = document.querySelector("#inicio");

  inicio.removeChild(modoclaro);

  botonO.appendChild(textoO);
  inicio.appendChild(botonO);
  botonO.setAttribute("id", "oscuro");
  botonO.setAttribute("onclick", "modoscuro()");
}

//Iluminacion de las secciones cuando son seleccionadas desde los botones

estudios.addEventListener("click", function () {
  let section = document.querySelector("#estudios");
  let section2 = document.querySelector("#experiencia");
  let section3 = document.querySelector("#habilidades");
  let section4 = document.querySelector("#otros");
  let section5 = document.querySelector("#contacto");

  section.style.boxShadow = "0px 0px 25px rgba(93, 121, 214, 1)";
  section2.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section3.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section4.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section5.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
});

experiencia.addEventListener("click", function () {
  let section = document.querySelector("#estudios");
  let section2 = document.querySelector("#experiencia");
  let section3 = document.querySelector("#habilidades");
  let section4 = document.querySelector("#otros");
  let section5 = document.querySelector("#contacto");

  section2.style.boxShadow = "0px 0px 25px rgba(93, 121, 214, 1)";
  section.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section3.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section4.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section5.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
});

habilidades.addEventListener("click", function () {
  let section = document.querySelector("#estudios");
  let section2 = document.querySelector("#experiencia");
  let section3 = document.querySelector("#habilidades");
  let section4 = document.querySelector("#otros");
  let section5 = document.querySelector("#contacto");

  section3.style.boxShadow = "0px 0px 25px rgba(93, 121, 214, 1)";
  section2.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section4.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section5.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
});

otros.addEventListener("click", function () {
  let section = document.querySelector("#estudios");
  let section2 = document.querySelector("#experiencia");
  let section3 = document.querySelector("#habilidades");
  let section4 = document.querySelector("#otros");
  let section5 = document.querySelector("#contacto");

  section4.style.boxShadow = "0px 0px 25px rgba(93, 121, 214, 1)";
  section2.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section3.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section5.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
});

contacto.addEventListener("click", function () {
  let section = document.querySelector("#estudios");
  let section2 = document.querySelector("#experiencia");
  let section3 = document.querySelector("#habilidades");
  let section4 = document.querySelector("#otros");
  let section5 = document.querySelector("#contacto");

  section5.style.boxShadow = "0px 0px 25px rgba(93, 121, 214, 1)";
  section2.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section3.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section4.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
});

irAInicio.addEventListener("click", function () {
  let section = document.querySelector("#estudios");
  let section2 = document.querySelector("#experiencia");
  let section3 = document.querySelector("#habilidades");
  let section4 = document.querySelector("#otros");
  let section5 = document.querySelector("#contacto");

  section.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section2.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section3.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section4.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
  section5.style.boxShadow = "0px 0px 15px rgba(136, 136, 136, 0.9)";
});

//Implementacion de la api RandomUser

var foto = document.querySelector("#foto");
var nombre = document.querySelector("#Nombre");
var trabajo = document.querySelector("#trabajo");
var trabajosM = [
  "Ingeniero en Sistemas",
  "Testing de videojuegos",
  "Desarrollador web",
  "Psicologo",
  "Diseñador web",
  "Estudiante de programación",
  "Analista de sistemas",
];
var trabajosF = [
  "Ingeniera en Sistemas",
  "Testing de videojuegos",
  "Desarrolladora web",
  "Psicologa",
  "Diseñadora web",
  "Estudiante de programación",
  "Analista de sistemas",
];
var localidad = document.querySelector("#localidad");
var nacimiento = document.querySelector("#nacimiento");
var numero = document.querySelector("#numero");
var email = document.querySelector("#email");
var exp = [
  {
    exp1: "Desarrollador de software junior en XYZ Inc.",
    exp2: "Especialista en soporte técnico en ABC Tech.",
    exp3: "Analista de seguridad de la información en DEF Corp.",
  },
];
var experiencia1 = document.querySelector("#exp1");
var experiencia2 = document.querySelector("#exp2");
var experiencia3 = document.querySelector("#exp3");
var veiculo = document.querySelector("#veiculo");
var tieneVeiculo = ["Si", "No"];

let nivelHtml = Math.ceil(Math.random() * 100);
let nivelCss = Math.ceil(Math.random() * 100);
let nivelJs = Math.ceil(Math.random() * 100);

const url = "https://randomuser.me/api/";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    var persona = data.results;
    (persona) => persona.json();
    console.log(persona[0].name);

    var genero = persona[0].gender;

    foto.setAttribute("src", persona[0].picture.large);

    nombre.textContent = persona[0].name.first + " " + persona[0].name.last;

    if (genero == "male") {
      trabajo.textContent =
        trabajosM[Math.floor(Math.random() * trabajosM.length)];
    } else {
      trabajo.textContent =
        trabajosF[Math.floor(Math.random() * trabajosF.length)];
    }

    experiencia1.textContent = exp[0].exp1;
    experiencia2.textContent = exp[0].exp2;
    experiencia3.textContent = exp[0].exp3;

    localidad.textContent =
      persona[0].location.state + " (" + persona[0].location.country + ")";

    let numeroDeLetras = persona[0].dob.date;
    numeroDeLetras = numeroDeLetras.substring(0, 10);

    veiculo.textContent =
      tieneVeiculo[Math.floor(Math.random() * tieneVeiculo.length)];

    nacimiento.textContent = numeroDeLetras;

    numero.textContent = persona[0].phone;

    email.textContent = persona[0].email;
  })
  .catch((err) => defaultPerson());

function defaultPerson() {
  foto.setAttribute("src", "img/Foto1.jpg");
  nombre.textContent = "Mario Vilche";
  trabajo.textContent = "Estudiante de programación";
  localidad.textContent = "Zárate (Argentina)";
  nacimiento.textContent = "1994-05-05";
  veiculo.textContent = "No";
  numero.textContent = "+5493487-15-328770";
  email.textContent = "Marioevilche@gmail.com";
  nivelHtml = 75;
  nivelCss = 55;
  nivelJs = 40;
}

//Carga los circulos de habilidades cuando sean visibles

window.addEventListener("scroll", function () {
  let scroll1 = document.documentElement.scrollTop;
  let nHtml = document.querySelector("#html");
  let nCss = document.querySelector("#css");
  let nJs = document.querySelector("#javascript");
  let porcentajeHtml = document.querySelector("#porcentajeHtml");
  let porcentajeCss = document.querySelector("#porcentajeCss");
  let porcentajeJs = document.querySelector("#porcentajeJs");

  if (scroll1 > 600) {
    estilos.setProperty("--nivelHtml", nivelHtml);
    nHtml.setAttribute("style", "animation:rellenarHtml 2s ease forwards");
    estilos.setProperty("--nivelCss", nivelCss);
    nCss.setAttribute("style", "animation:rellenarCss 2s ease forwards");
    estilos.setProperty("--nivelJs", nivelJs);
    nJs.setAttribute("style", "animation:rellenarJs 2s ease forwards");
  }

  porcentajeHtml.textContent = nivelHtml + "%";
  porcentajeCss.textContent = nivelCss + "%";
  porcentajeJs.textContent = nivelJs + "%";
});
