/* 
    Redécouvrons ensemble les fonctions fléchées et leurs différences avec les fonctions classiques.
*/


/* 
    1. Syntaxe.
    La syntaxe est moins chargée, pouvant ainsi être plus facilement utilisée en tant qu'argument, notamment en tant que fonction callback.
*/
console.log(add(10, 5))
function add(a,b){
    return a + b
}

// function flecher 
const add2 = (a, b) => a + b
const add3 = a => a
console.log(add2(10, 15))
console.log(add3(10))

const numbers = [1, 2, 3]
numbers.forEach(function(el){ return console.log(el)})
numbers.forEach(el =>console.log(el))
/* 
    2. Le mot clé this.

    Les fonctions classiques créent un mot clé this lors de leur exécution, en fonction de l'objet qui les appelle.
    Si elles ne sont pas appelées par un objet, this est automatiquement égal à window (l'objet global).

    Les fonctions fléchées ne créent pas de this, néanmoins elles peuvent lire le this d'une fonction classique si elles se situent dedans.
    Si elles ne sont pas dans l'environnement(donc contexte) une fonction classique, elle lisent le this de l'objet global, car elles sont dans le contexte d'execution global.
*/

const oscar = {
    nom : "prince ", 
    getName : function(){
        return this.nom
    }
}
console.log(oscar.getName())

const oscaro = {
    nom : "Nomasso ", 
    getName : function(){
        const functionFlecher = ()=> {
            console.log(this)
        }
        functionFlecher()
        return this
    }
}
console.log(oscaro.getName())
/* 
    3. arguments
    Même chose pour l'objet "arguments" qui est crée chez les fonctions classiques, mais pas les fonctions fléchées.
*/




/*
    Petit recap pour vous aider avec la valeur de this dans des fonctions classiques vs fléchées (hors fonction constructeur / usestrict)

    Fonction classique : 
    1. La fonction est appelée depuis un objet ? this = cet objet.
    2. La fonction n'est pas appelée depuis un objet ? this = objet global window.

    Fonction fléchée :
    1. La fonction fléchée se situe dans une fonction classique ? this = le this de la fonction classique.
    2. La fonction fléchée ne se situe pas dans une fonction classique ? this = objet global window.
*/