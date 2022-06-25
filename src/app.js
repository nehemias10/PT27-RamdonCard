/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generarTodo();
  console.log("Hello Rigo from the console!");
};

const generarTodo = () => {
  /* Hacer aleatorio los iconos */
  let iconos = ["♦", "♥", "♠", "♣"];
  let icono = Math.floor(Math.random() * 4);
  let iconosIcono = iconos[icono];
  console.log(iconos[icono]);

  /* HAcer aleatorio los numeros*/
  let numero = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numeros = Math.floor(Math.random() * 13);
  let numeroNumeros = numero[numeros];

  /* insertar al html con dom*/

  let numero1 = document.querySelector(".num1");
  numero1.innerHTML = iconosIcono;
  let numerotres = document.querySelector(".num3");
  numerotres.innerHTML = iconosIcono;
  let numero2 = document.querySelector(".num2");
  numero2.innerHTML = numeroNumeros;

  if (iconosIcono == "♦" || iconosIcono == "♥") {
    numero1.style.color = "red";
    numerotres.style.color = "red";
    numero2.style.color = "red";
  } else {
    numero1.style.color = "black";
    numerotres.style.color = "black";
    numero2.style.color = "black";
  }

  let generar = document.querySelector("button");
  generar.addEventListener("click", generarTodo);
};
