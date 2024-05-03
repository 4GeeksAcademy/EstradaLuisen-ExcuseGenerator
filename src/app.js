/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let noun = who[Math.floor(Math.random() * who.length)] + " ";
  let verb = action[Math.floor(Math.random() * action.length)] + " ";
  let obj = what[Math.floor(Math.random() * what.length)] + " ";
  let time = when[Math.floor(Math.random() * when.length)] + ".";

  console.log(noun + verb + obj + time);
  console.log("Hello Rigo from the console!");
  const excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = noun + verb + obj + time;
};
