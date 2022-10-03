import { ninosTabla1, ninasTabla1 } from "./assets/data1.js";
import { ninosTabla2, ninasTabla2 } from "./assets/data2.js";
import { ninosTabla3, ninasTabla3 } from "./assets/data3.js";
import { ninosTabla4, ninasTabla4 } from "./assets/data4.js";
import { ninosTabla5, ninasTabla5 } from "./assets/data5.js";
import {
  ninosMenoresTabla6,
  ninasMenoresTabla6,
  ninosMayoresTabla6,
  ninasMayoresTabla6,
} from "./assets/data6.js";
import {
  ninosMenoresTabla7,
  ninasMenoresTabla7,
  ninosMayoresTabla7,
  ninasMayoresTabla7,
} from "./assets/data7.js";
import {
  ninosMenoresTabla8,
  ninasMenoresTabla8,
  ninosMayoresTabla8,
  ninasMayoresTabla8,
} from "./assets/data8.js";

let resultado1, resultado2, resultado3;
let sexoNino, edad, peso, talla;

function inicio() {
  eventos();
}

function eventos() {
  document.getElementById("calcular").addEventListener("click", function () {
    edad = document.getElementById("edad").value;
    peso = document.getElementById("peso").value;
    talla = document.getElementById("talla").value;

    if (
      document.querySelector('input[name="1"]:checked') == null ||
      edad == "" ||
      peso == "" ||
      talla == ""
    ) {
      alert("Ingrese toda la información para poder continuar");
    } else {
      sexoNino = document.querySelector('input[name="1"]:checked').value;
      // edad = document.getElementById("edad").value;
      // peso = document.getElementById("peso").value;
      // talla = document.getElementById("talla").value;

      tallaParaEdad();
      pesoParaEdad();
      pesoParaTalla();
    }
  });
}

function tallaParaEdad() {
  let resConsultaT1 = consultaTabla1();
  let resConsultaT2 = consultaTabla2();

  // console.log(talla + " " + resConsultaT1 + " " + resConsultaT2);
  let resultado = (talla - resConsultaT1) / resConsultaT2;
  mostrarResultado1(resultado);
}

function pesoParaEdad() {
  let resConsultaT3 = consultaTabla3();
  let valor, sd;

  if (resultado1 < 0) valor = consultaTabla5();
  else valor = consultaTabla4();

  if (valor >= 13.6 && valor <= 15.3) sd = 1.7;
  else sd = valor;

  // console.log(peso + " " + resConsultaT3 + " " + sd);
  let resultado = (peso - resConsultaT3) / sd;

  mostrarResultado2(resultado);
}

function pesoParaTalla() {
  let arrTalla = talla.split(".");
  let tallaConsulta, valor, sd;

  if (arrTalla[1]) {
    if (arrTalla[1] > 0 && arrTalla[1] <= 5) {
      arrTalla.splice(1, 1, 5);
      tallaConsulta = parseFloat(arrTalla.join("."));
    } else {
      tallaConsulta = Math.round(talla);
    }
  }

  let resConsultaT6 = consultaTabla6(tallaConsulta);

  if (resultado2 < 0) valor = consultaTabla8(tallaConsulta);
  else valor = consultaTabla7(tallaConsulta);

  console.log(valor == 12.3);

  if (valor <= "13.4" && valor >= "12.3") sd = 1.1;
  else sd = valor;

  // let DE = resConsultaT6 - valor;

  console.log(peso + " " + resConsultaT6 + " " + sd);
  let resultado = (peso - resConsultaT6) / sd;

  mostrarResultado3(resultado);
}

function consultaTabla1() {
  let dataNinos;
  if (sexoNino == "nino") dataNinos = ninosTabla1;
  else dataNinos = ninasTabla1;

  let datosFiltrados = dataNinos.filter(function (dataNino) {
    return dataNino.Edad == edad;
  });

  return datosFiltrados[0].Media;
}

function consultaTabla2() {
  let dataNinos;
  if (sexoNino == "nino") dataNinos = ninosTabla2;
  else dataNinos = ninasTabla2;

  let datosFiltrados = dataNinos.filter(function (dataNino) {
    return dataNino.Edad == edad;
  });

  return datosFiltrados[0].Media;
}

function consultaTabla3() {
  let dataNinos;
  if (sexoNino == "nino") dataNinos = ninosTabla3;
  else dataNinos = ninasTabla3;

  let datosFiltrados = dataNinos.filter(function (dataNino) {
    return dataNino.Edad == edad;
  });

  return datosFiltrados[0].Media;
}

function consultaTabla4() {
  let dataNinos;
  if (sexoNino == "nino") dataNinos = ninosTabla4;
  else dataNinos = ninasTabla4;

  let datosFiltrados = dataNinos.filter(function (dataNino) {
    return dataNino.Edad == edad;
  });

  if (datosFiltrados != "") return datosFiltrados[0].Media;
  else
    return alert(
      "No se encontraron resultados a la consulta, por favor revise la información ingresada y vuelva a intentarlo."
    );
}

function consultaTabla5() {
  let dataNinos;
  if (sexoNino == "nino") dataNinos = ninosTabla5;
  else dataNinos = ninasTabla5;

  let datosFiltrados = dataNinos.filter(function (dataNino) {
    return dataNino.Edad == edad;
  });

  return datosFiltrados[0].Media;
}

function consultaTabla6(ct) {
  let dataNinos;

  if (sexoNino == "nino") {
    if (edad < 2) dataNinos = ninosMenoresTabla6;
    else dataNinos = ninosMayoresTabla6;
  } else {
    if (edad < 2) dataNinos = ninasMenoresTabla6;
    else dataNinos = ninasMayoresTabla6;
  }

  let datosFiltrados = dataNinos.filter(function (dataNino) {
    return dataNino.Talla == ct;
  });

  return datosFiltrados[0].Media;
}

function consultaTabla7(ct) {
  let dataNinos;

  if (sexoNino == "nino") {
    if (edad < 2) dataNinos = ninosMenoresTabla7;
    else dataNinos = ninosMayoresTabla7;
  } else {
    if (edad < 2) dataNinos = ninasMenoresTabla7;
    else dataNinos = ninasMayoresTabla7;
  }

  let datosFiltrados = dataNinos.filter(function (dataNino) {
    return dataNino.Talla == ct;
  });

  return datosFiltrados[0].Media;
}

function consultaTabla8(ct) {
  let dataNinos;

  if (sexoNino == "nino") {
    if (edad < 2) dataNinos = ninosMenoresTabla8;
    else dataNinos = ninosMayoresTabla8;
  } else {
    if (edad < 2) dataNinos = ninasMenoresTabla8;
    else dataNinos = ninasMayoresTabla8;
  }

  let datosFiltrados = dataNinos.filter(function (dataNino) {
    return dataNino.Talla == parseInt(ct);
  });

  return datosFiltrados[0].Media;
}

function mostrarResultado1(media) {
  resultado1 = media;
  let textoResultado1;
  if (media <= -3) textoResultado1 = "Desnutrición Crónica Severa";
  else if (media > -3 && media <= -2)
    textoResultado1 = "Desnutrición Crónica Moderada";
  else textoResultado1 = "Normal";

  document.getElementById("valor1").innerHTML = media.toFixed(2);
  document.getElementById("texto1").innerHTML = textoResultado1;
}

function mostrarResultado2(media) {
  resultado2 = media;
  let textoResultado2;
  if (media <= -3) textoResultado2 = "Bajo peso severo";
  else if (media > -3 && media <= -2) textoResultado2 = "Bajo peso moderado";
  else textoResultado2 = "Normal";

  document.getElementById("valor2").innerHTML = media.toFixed(2);
  document.getElementById("texto2").innerHTML = textoResultado2;
}

function mostrarResultado3(media) {
  resultado3 = media;
  let textoResultado3;
  if (media <= -3) textoResultado3 = "Desnutrición Aguda Severa";
  else if (media >= -2.99 && media <= -2)
    textoResultado3 = "Desnutrición Aguda Moderada";
  else if (media >= -1.99 && media <= 1.5)
    textoResultado3 = "Riesgo desnutrición aguda";
  else if (media >= -1.49 && media < 1.99)
    textoResultado3 = "Estado nutricional normal";
  else if (media >= 2 && media < 2.99) textoResultado3 = "Sobrepeso";
  else textoResultado3 = "Obesidad";

  document.getElementById("valor3").innerHTML = media.toFixed(2);
  document.getElementById("texto3").innerHTML = textoResultado3;
}

inicio();
