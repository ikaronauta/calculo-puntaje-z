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
let tablasNovedad = [];

function inicio() {
  eventos();
}

function eventos() {
  document.querySelectorAll('input[name="1"]').forEach((item) => {
    item.addEventListener("change", ninoActivo);
  });

  document.getElementById("calcular").addEventListener("click", function () {
    edad = document.getElementById("edad").value;
    peso = document.getElementById("peso").value;
    talla = document.getElementById("talla").value;
    tablasNovedad = [];

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

      if (tablasNovedad.length > 0) mostrarErrores();
    }
  });
}

function tallaParaEdad() {
  let resConsultaT1 = consultaTabla1();
  let resConsultaT2 = consultaTabla2();

  let resultado = (talla - resConsultaT1) / resConsultaT2;
  mostrarResultado1(resConsultaT1, resConsultaT2, resultado);
}

function pesoParaEdad() {
  let resConsultaT3 = consultaTabla3();
  let valor, sd;

  if (resultado1 < 0) valor = consultaTabla5();
  else valor = consultaTabla4();

  sd = parseFloat(resConsultaT3 - valor);

  let resultado = (peso - resConsultaT3) / sd;

  mostrarResultado2(resConsultaT3, sd, resultado);
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
  } else {
    tallaConsulta = arrTalla[0];
  }

  let resConsultaT6 = consultaTabla6(tallaConsulta);

  if (resultado1 < 0) valor = consultaTabla8(tallaConsulta);
  else valor = consultaTabla7(tallaConsulta);

  sd = parseFloat(resConsultaT6 - valor);

  let resultado = (peso - resConsultaT6) / sd;

  mostrarResultado3(resConsultaT6, sd, resultado);
}

function consultaTabla1() {
  let dataNinos;
  if (sexoNino == "nino") dataNinos = ninosTabla1;
  else dataNinos = ninasTabla1;

  let datosFiltrados = dataNinos.filter(function (dataNino) {
    return dataNino.Edad == edad;
  });

  if (datosFiltrados.length > 0) return datosFiltrados[0].Media;
  else return tablasNovedad.push("tabla1");
}

function consultaTabla2() {
  let dataNinos;
  if (sexoNino == "nino") dataNinos = ninosTabla2;
  else dataNinos = ninasTabla2;

  let datosFiltrados = dataNinos.filter(function (dataNino) {
    return dataNino.Edad == edad;
  });

  if (datosFiltrados.length > 0) return datosFiltrados[0].Media;
  else return tablasNovedad.push("tabla2");
}

function consultaTabla3() {
  let dataNinos;
  if (sexoNino == "nino") dataNinos = ninosTabla3;
  else dataNinos = ninasTabla3;

  let datosFiltrados = dataNinos.filter(function (dataNino) {
    return dataNino.Edad == edad;
  });

  if (datosFiltrados.length > 0) return datosFiltrados[0].Media;
  else return tablasNovedad.push("tabla3");
}

function consultaTabla4() {
  let dataNinos;
  if (sexoNino == "nino") dataNinos = ninosTabla4;
  else dataNinos = ninasTabla4;

  let datosFiltrados = dataNinos.filter(function (dataNino) {
    return dataNino.Edad == edad;
  });

  if (datosFiltrados.length > 0) return datosFiltrados[0].Media;
  else return tablasNovedad.push("tabla4");
}

function consultaTabla5() {
  let dataNinos;
  if (sexoNino == "nino") dataNinos = ninosTabla5;
  else dataNinos = ninasTabla5;

  let datosFiltrados = dataNinos.filter(function (dataNino) {
    return dataNino.Edad == edad;
  });

  if (datosFiltrados.length > 0) return datosFiltrados[0].Media;
  else return tablasNovedad.push("tabla5");
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

  if (datosFiltrados.length > 0) return datosFiltrados[0].Media;
  else return tablasNovedad.push("tabla6");
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

  if (datosFiltrados.length > 0) return datosFiltrados[0].Media;
  else return tablasNovedad.push("tabla7");
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

  if (datosFiltrados.length > 0) return datosFiltrados[0].Media;
  else return tablasNovedad.push("tabla8");
}

function mostrarResultado1(mediaT1, mediaT2, resultado) {
  resultado1 = resultado;
  let textoResultado1;
  if (resultado <= -3) {
    textoResultado1 = "Desnutrición Crónica Severa";
    document.getElementById("item1").style.backgroundColor = "red";
    document.getElementById("item1").style.color = "white";
  } else if (resultado > -3 && resultado <= -2) {
    textoResultado1 = "Desnutrición Crónica Moderada";
    document.getElementById("item1").style.backgroundColor = "yellow";
    document.getElementById("item1").style.color = "black";
  } else {
    textoResultado1 = "Normal";
    document.getElementById("item1").style.backgroundColor = "green";
    document.getElementById("item1").style.color = "white";
  }

  document.getElementById("valor1").innerHTML = `(${talla} - ${mediaT1.toFixed(
    2
  )}) / ${mediaT2.toFixed(2)} = ${resultado1.toFixed(2)}`;
  document.getElementById("texto1").innerHTML = textoResultado1;
  document.getElementById("item1").innerHTML = textoResultado1;
}

function mostrarResultado2(mediaT3, sd, media) {
  resultado2 = media;
  let textoResultado2;
  if (media <= -3) {
    textoResultado2 = "Bajo peso severo";
    document.getElementById("item2").style.backgroundColor = "red";
    document.getElementById("item2").style.color = "white";
  } else if (media > -3 && media <= -2) {
    textoResultado2 = "Bajo peso moderado";
    document.getElementById("item2").style.backgroundColor = "yellow";
    document.getElementById("item2").style.color = "black";
  } else {
    textoResultado2 = "Normal";
    document.getElementById("item2").style.backgroundColor = "green";
    document.getElementById("item2").style.color = "white";
  }

  document.getElementById("valor2").innerHTML = `(${peso} - ${mediaT3.toFixed(
    2
  )}) / ${sd.toFixed(2)} = ${resultado2.toFixed(2)}`;
  document.getElementById("texto2").innerHTML = textoResultado2;
  document.getElementById("item2").innerHTML = textoResultado2;
}

function mostrarResultado3(mediaT6, sd, media) {
  resultado3 = media;
  let textoResultado3;
  if (media <= -3) {
    textoResultado3 = "Desnutrición Aguda Severa";
    document.getElementById("item3").style.backgroundColor = "red";
    document.getElementById("item3").style.color = "white";
  } else if (media >= -2.99 && media <= -2) {
    textoResultado3 = "Desnutrición Aguda Moderada";
    document.getElementById("item3").style.backgroundColor = "orange";
    document.getElementById("item3").style.color = "white";
  } else if (media >= -1.99 && media <= -1.5) {
    textoResultado3 = "Riesgo desnutrición aguda";
    document.getElementById("item3").style.backgroundColor = "yellow";
    document.getElementById("item3").style.color = "black";
  } else if (media >= -1.49 && media < 1.99) {
    textoResultado3 = "Estado nutricional normal";
    document.getElementById("item3").style.backgroundColor = "green";
    document.getElementById("item3").style.color = "white";
  } else if (media >= 2 && media < 2.99) {
    textoResultado3 = "Sobrepeso";
    document.getElementById("item3").style.backgroundColor = "yellow";
    document.getElementById("item3").style.color = "black";
  } else {
    textoResultado3 = "Obesidad";
    document.getElementById("item3").style.backgroundColor = "green";
    document.getElementById("item3").style.color = "white";
  }

  document.getElementById("valor3").innerHTML = `(${peso} - ${mediaT6.toFixed(
    2
  )}) / ${sd.toFixed(2)} = ${resultado3.toFixed(2)}`;
  document.getElementById("texto3").innerHTML = textoResultado3;
  document.getElementById("item3").innerHTML = textoResultado3;
}

function mostrarErrores() {
  document.getElementById(
    "valor1"
  ).innerHTML = `Parametros incorrectos para la consulta de las tablas: 
  <b>${tablasNovedad.join(", ")}</b>`;
  document.getElementById("texto1").innerHTML = "";
  document.getElementById(
    "valor2"
  ).innerHTML = `Parametros incorrectos para la consulta de las tablas: 
  <b>${tablasNovedad.join(", ")}</b>`;
  document.getElementById("texto2").innerHTML = "";
  document.getElementById(
    "valor3"
  ).innerHTML = `Parametros incorrectos para la consulta de las tablas: 
    <b>${tablasNovedad.join(", ")}</b>`;
  document.getElementById("texto3").innerHTML = "";
}

function ninoActivo() {
  if (this.value == "nino") {
    document.getElementById("ninaImg").className = "disable";
    document.getElementById("ninaImg").style.border = "3px solid gray";
    document.getElementById("ninoImg").className = "";
    document.getElementById("ninoImg").style.border =
      "3px solid rgb(255, 166, 0)";
  } else {
    document.getElementById("ninoImg").className = "disable";
    document.getElementById("ninoImg").style.border = "3px solid gray";
    document.getElementById("ninaImg").className = "";
    document.getElementById("ninaImg").style.border =
      "3px solid rgb(255, 166, 0)";
  }
}

inicio();
