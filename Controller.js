class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  /**
   * Permet d'afficher le jeu pour l'utilisateur
   */
  afficherLeJeu(){
    this.view.afficherLeJeu(this.model.genererMatrice());
  }

   /**
   * Permet d'afficher l'écran de fin de jeu
   */
  afficherEcranFin(){

  }
}

const app = new Controller(new Model(), new View());

app.afficherLeJeu();
