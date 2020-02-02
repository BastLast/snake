class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  /**
   * Permet d'afficher le jeu pour l'utilisateur
   */
  afficherLeJeu() {
    this.view.afficherLeJeu(this.model.genererMatrice(), localStorage.getItem('couleur'));
  }


  /**
   * Permet d'afficher le jeu pour l'utilisateur
   */
  actualiserLeJeu() {
    this.view.actualiserLeJeu(this.model.genererMatrice(), localStorage.getItem('couleur'));
    this.view.actualiserLeScore(this.model.serpent.size);
    app.model.sauvegarderRecord(app.model.serpent.size);
    this.view.actualiserLeScoreMax(localStorage.getItem("scoreMax"));
  }

  /**
  * Permet d'afficher l'écran de fin de jeu
  */
  afficherEcranFin() {
    this.view.afficherEcranFin(this.model.genererMatrice());
  }
}

let app = new Controller(new Model(), new View());

app.afficherLeJeu();
restoreSelectedSnake();
restoreDifficulte();

/**
 * affiche le snake qui est selectionné à partir de la sauvegarde
 */
function restoreSelectedSnake() {
  switch (localStorage.getItem('couleur')) {
    case "vert":
      app.view.animation('vert', 'orange', 'bleu');
      break;
    case "bleu":
      app.view.animation('bleu', 'vert', 'orange');
      break;
    case "orange":
      app.view.animation('orange', 'vert', 'bleu');
      break;
    default:
      app.view.animation('vert', 'orange', 'bleu');
  }
}

/**
 * Affiche la difficulté qui a été selectionnée à partir de la sauvegarde
 */
function restoreDifficulte() {
  switch (localStorage.getItem('difficulte')) {
    case "facile":
      app.view.animationButton('facile', 'normal', 'difficile');
      break;
    case "normal":
      app.view.animationButton('normal', 'facile', 'difficile');
      break;
    case "difficile":
      app.view.animationButton('difficile', 'normal', 'facile');
      break;
    default:
      app.view.animationButton('facile', 'normal', 'difficile');
  }
}

/**
 * Permet d'executer le jeu
 */
function jeu() {
  if (app.model.deplacerSerpent()) {
    app.actualiserLeJeu();
  } else {
    clearInterval(interval); //arret du jeu
    app.afficherEcranFin();
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
  app.model.serpent.changerDirection(nouvelleDirection);
}, false);

let speed = obtenirVitesse();
let interval = setInterval(jeu, speed);
let restartButton = document.getElementById('restartButton');

/**
 * Permet de réinitialiser le jeu au clic sur un bouton
 */
restartButton.onclick = function () {
  app = new Controller(new Model(), new View());
  app.afficherLeJeu();
  clearInterval(interval);
  let speed = obtenirVitesse();
  interval = setInterval(jeu, speed);
};



/**
 * Permet de recuperer la valeur de la vitesse à partir de la sauvegarde
 */
function obtenirVitesse() {
  let speed;
  switch (localStorage.getItem('difficulte')) {
    case "facile":
      speed = 150;
      break;
    case "normal":
      speed = 100;
      break;
    case "difficile":
      speed = 75;
      break;
    default:
      speed = 150;
  }
  return speed;
}

