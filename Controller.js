class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  /**
   * Permet d'afficher le jeu pour l'utilisateur
   */
  afficherLeJeu(){
    this.view.afficherLeJeu(this.model.grille,this.model.serpent,this.model.fruit);
  }

   /**
   * Permet d'afficher l'écran de fin de jeu
   */
  afficherEcranFin(){
    
  }
}
