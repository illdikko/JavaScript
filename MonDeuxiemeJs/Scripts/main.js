let user_name1 = prompt(`Bonjour! Quel est ton nom?`);
let user_name2 = prompt(`Et quel est ton prénom?`);
alert(`Nous allons faire des maths ensemble! Nous allons faire une addition.`);
let number1 = prompt(`Entre un premier chiffre ou nombre à additionner :`);
let number2 = prompt(`Entre un second chiffre ou nombre à additionner :`);
num1=parseFloat(number1);
num2=parseFloat(number2);
let result = num1+num2;
// alert(`Bonjour `+user_name2+` `+user_name1+`, le résultat de `+ number1+`+`+number2+` est `+result); Fonctionne mais est un peu dense à lire.
alert(`Bonjour ${user_name2} ${user_name1}, le résultat de ${number1} + ${number2} est ${num1+num2}`); // écriture à préférer pour les concaténations

