# Semaine7_exo4_condition
# Switch

### Exercice 1
- Demande l'âge de l'utilisateur via un prompt. Si l'utilisateur indique 18, tu lui réponds via une console.log "tu es majeur". S'il indique 25, tu lui réponds, "Un quart de siècle ça se fête". S'il indique 50, tu lui réponds "1/2 siècle c'est quelque chose". 

### Exercice 2 pas adapté pour un switch. Mieux pour une fonction
- Demande à l'utilisateur d'indiquer un mot via un prompt. Si le mot est de type string tu lui répond via une console.log "La valeur indiquez est un string". Si le mot est de type nombre, tu lui répond "La valeur indiquez est un nombre"

### Exercice 3
- Stock la date d'aujourd'hui dans une variable const. (Attention utilise la méthode date). Une fois la date stockée, fais un swtich qui va nous renvoyez le jour de la semaine que nous sommes

### Exercice 4 
- Stock un mdp dans une variable via un prompt. Via un swtich vérifie si le mdp est le bon. Si oui tu renvoies "Connecté", sinon "Erreur"

### Exercice 5 
- Stock une variable qui selon toi définit TON niveau en coding. (Une note sur 100). Via un switch, vérifie sur le nombre est égale ou supérieur à 90. 
Si oui tu lui répond "Tu as un niveau de coach".
Si le le nombre est = ou > à 70, tu lui répond "Tu peux mieux faire !". 
Si le nombre est = ou > 50, tu lui répond "Attention, faut plus travailler ! ". 
Sinon tu lui répond "Pas bon dutout, à travailler davantage ! "

### Exercice 6
- Créer un programme qui va demander via un prompt le résultat d'un test scolaire. (La notation est celui inspiré du systeme Americain. Ex: A,B,C,..)
Par rapport à la notation, vous repondez via une console.log une appréciation du résultat.
Ex: Si l'étudiant a eu un B, tu lui réponds via une console.log "Bravo, belle côte"

# If..else

## Introduction
### Exercice 1
- déclare une variable avec ton prénom
- via un if, vérifie dans l'instruction si le contenu de la variable est égale à ton prénom.
- pour qu'une condition sois vérifiée, l'instruction doit répondre vrai

### Exercice 2
- Reprend la condtion de l'exerice 1 et dans l'instruction verifie la condition avec un seul "="
- dans le bloc du if, rajoute un console.log de : 'je suis dans le if"
- à la suite du if, affiche le résultat de la variable que vous avez verifié
- regarde le résultat et analyse le.

### Exercice 3
- Déclarer une variable du nom de agePerso1 avec comme valeur 30 (integer) 
- Déclarer une variable du nom de agePerso2 avec comme valeur 40 (integer)
- Déclarer une variable "comparaison" dans laquelle se trouve le résultat de la comparaison des deux autres variables. Compararer s'ils sont égal.
- Dans un if else, passer en instruction la variable (comparaison) sans une autre instruction. Dans le if, mettez un console.log de "je suis dans le if" et dans le else, mettez un console.log de "je suis dans le else".
- Regardez le résultat et analyser le

## Exercice logique
# Exercice 1
- A l'aide de 2 prompts, demander 2 nombres et dite quel est le plus grand

# Exercice 2
- A l'aide d'un prompt, demander un nombre
- Afficher si le nombre est paire ou impaire 

# Exercice 3
- A l'aide d'un prompt, demande le prenom
- Afficher `Votre prenom a moins de 5 caractères` si la taille du prenom est < 5
- Afficher `Votre prenom a  5 caractères` si la taille du prenom est == 5
- Afficher `Votre prenom a plus de 5 caractères` si la taille du prenom est > 5

# Exercice 4
- Entrez 2 prenoms via des prompts
- Afficher `Prenom1 a moins de caractères que Prenom2` si la taille de prenom1 est < taille de prenom2
- Afficher `Prenom1 a le meme nombre de caractères que Prenom2` si la taille du prenom1 est == taille de prenom2
- Afficher `Prenom1 a plus de caractères que Prenom2` si la taille du prenom1 est > taille de prenom2

# Exercice 5
- Entrez votre vitesse
- La vitesse limite de la route est 50km/h
- Afficher `Vous pouvez continuer a cette vitesse. (vitesse => vitesse entrée)` si la vitesse est < que le vitesse limite
- Afficher `Attention vous roulez a la vitesse limite. (vitesse => vitesse entrée)` si la vitesse est == que le vitesse limite
- Afficher `Ralentissez, vous avez depassé la vitesse limite!! (vitesse => vitesse entrée)` si la vitesse est > que le vitesse limite

# Exercice 6
- Demander le prenom et l'age d'une personne.
- Afficher `Salut, nom de la personne! Vu que t'as l'age de la personne ans, ce soir tu peux sortir en discoteque` si la est >= 18
- Afficher `Salut, nom de la personne! Vu que t'as l'age de la personne ans, aujourd'hui tu iras au cinema` si la est < 18

# Exercice 7
- Entrer 2 nombres et demander quel operateur on veut utiliser
- Afficher le resultat pour l'operateur choisi
- Ex: 3 * 2 = 6