const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');

let ChoixUtilisateur
let Resultat
let ChoixOrdinateur


choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click',(e)=>{
    ChoixUtilisateur = e.target.id;
    contenantChoixUtilisateur.innerHTML = `<img src="${ChoixUtilisateur}.png">`

    generer_choix_ordinateur()
    verification()

}))


function generer_choix_ordinateur(){ 
    random = Math.floor(Math.random() * 3) +1
    if(random === 1){
        ChoixOrdinateur = "Pierre"
    }
    if(random === 2){
        ChoixOrdinateur = "Papier"
    }
    if(random === 3){
        ChoixOrdinateur = "Ciseaux"
    }

    contenantChoixOrdinateur.innerHTML = `<img src="${ChoixOrdinateur}.png">`
}

function verification(){
    if(ChoixUtilisateur == ChoixOrdinateur){
        Resultat = "Egalité !";
    }//Le cas ou ça gagne 
    if(ChoixUtilisateur == "Papier" && ChoixOrdinateur == "Pierre"){
        Resultat = "Gagné !";
    }    
    if(ChoixUtilisateur == "Ciseaux" && ChoixOrdinateur == "Papier"){
        Resultat = "Gagné !";
    }        
    if(ChoixUtilisateur == "Pierre" && ChoixOrdinateur == "Ciseaux"){
        Resultat = "Gagné !";
    }//Celui ou ça perd 
    if(ChoixUtilisateur == "Pierre" && ChoixOrdinateur == "Papier"){
        Resultat= "Perdu !";
    }        
    if(ChoixUtilisateur == "Ciseaux" && ChoixOrdinateur == "Papier"){
        Resultat= "Perdu !";
    }        
    if(ChoixUtilisateur == "Papier" && ChoixOrdinateur == "Pierre"){
        Resultat= "Perdu !";
        
    }        
    contenantResultat.innerHTML = Resultat;
}