class Model {
  constructor() {
    this.grille = new Grille();
    this.serpent = new Serpent();
    this.fruit = new Case(7, 12, true, false);
  }

  /**
   * Effectue un tour du jeu, déplace le serpent et vérifie que le joueur n'a pas perdu ou mangé de fruit
   */
  deplacerSerpent() {
    this.serpent.avancer();
    if (this.serpentSorsDeLaGrille() || this.serpent.seMordQueue()) {
      // Le jeu est terminé, le joueur a perdu 
    } else {
      if (!this.serpentMangeFruit()) {
        // Si le serpent ne mange pas de fruit il faut faire avancer la queue du serpent
        this.serpent.avancerQueue();
      } else {
        // Le serpent mange le fruit.
        this.serpent.manger();
        this.genererFruit();
      }
    }
  }

  /**
   *  Verifie que le serpent n'est pas sorti de la grille
   */
  serpentSorsDeLaGrille() {
    return this.serpent.getTete().posX == this.grille.size || this.serpent.getTete().posY == this.grille.size || this.serpent.getTete().posY < 0 || this.serpent.getTete().posX < 0;
  }

  /**
   *  Verifie que le serpent est en train de manger un fruit
   */
  serpentMangeFruit() {
    return this.serpent.getTete().posX == this.fruit.posX && this.serpent.getTete().posY == this.fruit.posY;
  }

  /**
   * Generer un fruit à une position aléatoire sur la grille (mais pas sur le serpent)
   */
  genererFruit() {
    let nouveauFruit;
    do {
      let nouveauPosX = this.genererNombreAleatoire(0, this.grille.size - 1);
      let nouveauPosY = this.genererNombreAleatoire(0, this.grille.size - 1);
      nouveauFruit = new Case(nouveauPosX, nouveauPosY, true, false);
    }
    while (this.serpent.faisPartiDuSerpent(nouveauFruit))
    this.fruit = nouveauFruit //le fruit a été placé sur une case qui n'est pas sur le serpent
  }


  /**
   * Generer un nombre entier aléatoire
   * @param {*} min 
   * @param {*} max 
   */
  genererNombreAleatoire(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  };
}
