class Model {
  constructor() {
    this.grille = new Grille();
    this.serpent = new Serpent();
    this.fruit = new Case(8, 13);
  }

  /**
   * Effectue un tour du jeu, déplace le serpent et vérifie que le joueur n'a pas perdu ou mangé de fruit
   */
  deplacerSerpent() {
    this.serpent.avancer();
    if (!this.serpentMangeFruit()) {
      // Si le serpent ne mange pas de fruit il faut faire avancer la queue du serpent
      this.serpent.avancerQueue();
    }
    if (this.serpentMangeFruit()) {
      // Le serpent mange le fruit.
      this.serpent.manger();
      this.genererFruit();
    }
    return !(this.serpentSorsDeLaGrille() || this.serpent.seMordQueue());
  }

  /**
   *  Verifie que le serpent n'est pas sorti de la grille
   */
  serpentSorsDeLaGrille() {
    return this.serpent.getTete().posX >= this.grille.size || this.serpent.getTete().posY >= this.grille.size || this.serpent.getTete().posY < 0 || this.serpent.getTete().posX < 0;
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
      nouveauFruit = new Case(nouveauPosX, nouveauPosY);
    }
    while (this.serpent.faisPartiDuSerpent(nouveauFruit));
    this.fruit = nouveauFruit //le fruit a été placé sur une case qui n'est pas sur le serpent
  }

  /**
   * Permet d'enregistrer le record dans un fichier 
   * @param {*} score 
   */
  sauvegarderRecord(score) {
    if (localStorage.getItem("scoreMax") == "") localStorage.setItem("scoreMax", score);
    if (score > localStorage.getItem("scoreMax")) localStorage.setItem("scoreMax", score);
  }


  /**
   * Permet de generer la matrice qui servira à l'affichage
   * S = corps serpent
   * T = tete serpent
   * F = fruit
   * X = rien
   */
  genererMatrice() {
    var matrice = [];
    for (var i = 0; i < this.grille.size; i++) {
      matrice[i] = [];
      for (var j = 0; j < this.grille.size; j++) {
        var c = new Case(i, j); //création de la case étudiée
        matrice[i][j] = 'X'; // valeur par défaut
        this.serpent.positions.forEach(element => {
          if (element.superpose(c)) { //test si la case fait parti du serpent
            matrice[i][j] = 'S';
            if (c.superpose(this.serpent.getTete())) { //test si la case est la tête du serpent
              matrice[i][j] = 'T';
            }
          }
        });
        if (c.superpose(this.fruit)) {// test si la case est un fruit
          matrice[i][j] = 'F';
        }
      }
    }
    return matrice;
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
