// // -----------SWITCH---------
// //----EXERCICE 1-----
// let age = prompt("Quel age avez-vous s'il vous plait?")

// switch (true){
//     case age <= 17:
//         console.log("Vous êtes mineur");
//         alert("Vous êtes mineur")
//         break
//     case age == 18:
//         console.log("Vous êtes majeur");
//         alert("Vous êtes majeur")
//         break;
//     case age == 25:
//         console.log("Un quart de siècle ça se fête");
//         alert("Un quart de siècle ça se fête")
//         break;
//     case age == 50:
//         console.log("1/2 siècle c'est quelque chose");
//         alert("1/2 siècle c'est quelque chose")
//         break;
//     case age == 75:
//         console.log("3/4 de siècle ca se fête");
//         alert("3/4 de siècle ca se fête")
//         break;
//     case age == 100:
//         console.log("Un siècle ca se fête");
//         alert("Un siècle ca se fête")
//         break;
// }

// //----EXERCICE 2-----
// let mot = prompt("Pouvez-vous ecrire un mot s'il vous plait")
// switch(true){
//     case typeof mot == "string":
//         console.log("la valeur indiquée est un string");
//         break;
//     case typeof (mot) == "number":
//         console.log("La valeur indiquée est un nombre");
//         break;
//     default:
//         console.log("Ce n'est ni un nombre ni un string");
//         break
// }

//----EXERCICE 3-----
const date = new Date();
let jour = date.getDay();

switch (true){
    case jour == 1:
        console.log("Lundi");
        break
    case jour == 2:
        console.log("Mardi");
        break
    case jour == 3:
        console.log("Mercredi");
        break
    case jour == 4:
        console.log("Jeudi");
        break
    case jour == 5:
        console.log("Vendredi");
        break
    case jour == 6:
        console.log("Samedi");
        break
    case jour == 7:
        console.log("Dimanche");
        break
}

alert(`Aujourd'hui, nous sommes ${date}.`)

//----EXERCICE 4-----
let mypassword = prompt(" créer votre mot de pase")
let password = prompt("mot passe")

switch (true) {
    case mypassword == password:
        console.log("connecté");
        alert("connecté");
        break;
    default:
        console.log("mauvais mot de passe");
        alert("mauvais mot de passe");
        break;
}

//----EXERCICE 5-----
let niveau = 10;
switch(true){
    case niveau >= 90:
        console.log("Tu as un niveau de coach");
        alert("Tu as un niveau de coach");
        break;
    case niveau >= 70:
        console.log("Tu peux mieux faire!");
        alert("Tu peux mieux faire!");
        break;
    case niveau >= 50:
        console.log("Attention, faut plus travailler ! ");
        alert("Attention, faut plus travailler ! ");
        break;
    default:
        console.log("Pas bon du tout, à travailler davantage ! ");
        alert("Pas bon dutout, à travailler davantage ! ");
        break;
}
//----EXERCICE 6-----
let test = prompt("Quels sont vos resultats scolaire ?");
switch (true){
    case test == "A":
        console.log("Félicitaion!");
        alert("Félicitaion!");
        break;
    case test == "B":
        console.log("Bon travail!");
        alert("Bon travail!");
        break;
    case test == "C":
        console.log("Moyen!");
        alert("Moyen!");
        break;
    case test == "D":
        console.log("Nul!");
        alert("Nul!");
        break;
    default:
        console.log("Veuillez entrer une note entre A-B-C-D");
        alert("Veuillez entrer une note entre A-B-C-D");
        break;
}
//------------IF..ELSE----------
//----EXERCICE 1-----
let prenom = "Enide";
if (prenom == "Enide");{}

//----EXERCICE 2-----
if (prenom = "Enide"){
    console.log("Je suis dans le if");
}
console.log(prenom);
//----EXERCICE 3-----
let agePerso1 = 30; 
let agePerso2 = 40; 
let comparaison = (agePerso1 == agePerso2); 

if( comparaison == true ){
    console.log("Je suis dans le if");
}else{
    console.log("Je suis dans le else");
}

//EXERCICE LOGIQQUE
//----EXERCICE 1-----
let chiffre1 = prompt("Pouvez donner un nombre s'il vous plait?");
let chiffre2 = prompt("Pouvez donner un deuxième nombre s'il vous plait?");
if (isNaN(chiffre1) == true || isNaN(chiffre2) == true){
    console.log("Ceci n'est pas un chiffre");
} else if (chiffre1 > chiffre2){
    console.log(chiffre1);
} else if (chiffre2 > chiffre1){
    console.log(chiffre2);
} else if (chiffre1 == chiffre2){
    console.log("Les deux chiffres sont égaux");
} 

//----EXERCICE 2-----
let chiffre3 =  prompt("Pouvez donner un nombre s'il vous plait?");
    if (isNaN(chiffre3) == true ) {
        console.log("ceci n'est pas un chiffre"); 
    }else if (chiffre3 == 1){
    console.log("le chiffre est impair");
    }else {
    console.log("le chiffre est pair"); 
    }      

//----EXERCICE 3-----
let prenom1 = prompt("Puis-je avoir un prénom svp");
if(prenom1.length<5){
    console.log("Votre prénom à moins de 5 caractere");
}else if(prenom1.length == 5){
    console.log("Votre prénom est égal à 5 caractere");
}else if(prenom1.length > 5){
    console.log("Votre prénom supérieur à 5 caractere");
}

//----EXERCICE 3-----
let prenom2 = prompt("Puis-je avoir un prénom svp");
if(prenom1.length<5){
    console.log("Votre prénom à moins de 5 caractere");
}else if(prenom1.length == 5){
    console.log("Votre prénom est égal à 5 caractere");
}else if(prenom1.length > 5){
    console.log("Votre prénom supérieur à 5 caractere");
}