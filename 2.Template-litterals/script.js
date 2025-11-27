/* 
  Les "template literals" ou "template strings" sont des chaînes utilisant une syntaxe extrêmement pratique.
  
  On peut les utiliser pour :
  - Intégrer des expressions JS à une chaîne
  - Intégrer des sauts de ligne
  - Concaténer des chaînes
  - Créer des templates (morceau de code).

  On crée un gabarit(traduction fr) en utilisant les backticks ``.
  Pour intégrer une expression, on utilise la syntaxe ${expression} entre les backticks.
*/

/* Ajout d'expression */
const a = 5
const b = 10

console.log("la somme de a plus b est : ", a + b )
console.log(`la somme de a plus b est : ${a + b} merci 
  de passer a la ligne ` )

/* Saut de ligne */

console.log(`Voici un texte de saut 
  a la ligne `)



/* Utilisation de l'expression retournée par une fonction. */
 function foo(){
    return "ABC"
  }
  console.log (`l'alphabet commence par : ${foo()}`)