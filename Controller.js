class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  /**
   * Permet d'afficher le jeu pour l'utilisateur
   */
  afficherLeJeu() {
    this.view.afficherLeJeu(this.model.genererMatrice());
  }


  /**
   * Permet d'afficher le jeu pour l'utilisateur
   */
  actualiserLeJeu() {
    this.view.actualiserLeJeu(this.model.genererMatrice());
  }

  /**
  * Permet d'afficher l'écran de fin de jeu
  */
  afficherEcranFin() {

  }
}

const app = new Controller(new Model(), new View());

app.afficherLeJeu();

/**
 * Permet d'executer le jeu
 */
function jeu() {
  if (app.model.deplacerSerpent()) {
    app.actualiserLeJeu();
  } else {
    clearInterval(interval); //arret du jeu
    this.alert(" Vous avez perdu ! \n\n Score : " + app.model.serpent.size);
    app.model.stockScore(app.model.serpent.size);
  }
};

/**
 * Fais tourner le serpent en fonction de la touche pressée
 */
document.addEventListener('keydown', (event) => {
  const nomTouche = event.key;
  let nouvelleDirection;
  switch (nomTouche) {
    case "ArrowUp":
      nouvelleDirection = "nord"
      break;
    case "ArrowDown":
      nouvelleDirection = "sud"
      break;
    case "ArrowLeft":
      nouvelleDirection = "ouest"
      break;
    case "ArrowRight":
      nouvelleDirection = "est"
      break;
    default:
      break;
  }
  app.model.serpent.changerDirection(nouvelleDirection)
}, false);

let interval = setInterval(jeu, 150);
