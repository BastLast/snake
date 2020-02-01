class View {
  constructor() {

  }

  /**
   * Initialisation de l'affichage du jeu
   * @param {*} matrice
   */
  async afficherLeJeu(matrice, couleur) {
    couleur = this.chargerCouleurParDefaut(couleur);
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var fond = new Image();
    var teteSerp = new Image();
    var corpsSerp = new Image();
    var fruit = new Image();
    fond.onload = () => {
      this.afficherFond(matrice, ctx, fond);
      teteSerp.onload = () => {
        this.afficherTete(matrice, ctx, teteSerp);
      }
      corpsSerp.onload = () => {
        this.afficherCorp(matrice, ctx, corpsSerp);
      }
      fruit.onload = () => {
        this.afficherFruit(matrice, ctx, fruit);
      }
      teteSerp.src = 'ressources/headsnake-' + couleur + '.png';
      corpsSerp.src = 'ressources/bodysnake-' + couleur + '.png';
      fruit.src = 'ressources/food.png';
    }
    fond.src = 'ressources/boardgame.png';
  }

  /**
   * Parcours la matrice et affiche le fruit.
   * @param {*} matrice 
   * @param {*} ctx 
   * @param {*} fruit 
   */
  afficherFruit(matrice, ctx, fruit) {
    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        if (matrice[j][i] == "F") {
          ctx.drawImage(fruit, (i + 3) * 30, (j + 3) * 30, 30, 30);
        }
      }
    }
  }

  /**
   * Parcours la matrice et affiche le corp du serpent
   * @param {*} matrice 
   * @param {*} ctx 
   * @param {*} corpsSerp 
   */
  afficherCorp(matrice, ctx, corpsSerp) {
    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        if (matrice[j][i] == "S") {
          ctx.drawImage(corpsSerp, (i + 3) * 30, (j + 3) * 30, 30, 30);
        }
      }
    }
  }

  /**
   * Parcours la matrice et affiche la tete du serpent
   * @param {*} matrice 
   * @param {*} ctx 
   * @param {*} teteSerp 
   */
  afficherTete(matrice, ctx, teteSerp) {

    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        if (matrice[j][i] == "T") {
          ctx.drawImage(teteSerp, (i + 3) * 30, (j + 3) * 30, 30, 30);
        }
      }
    }
  }

  /**
   * Parcours la matrice et affiche le fond
   * @param {*} matrice 
   * @param {*} ctx 
   * @param {*} fond 
   */
  afficherFond(matrice, ctx, fond) {
    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        ctx.drawImage(fond, (i + 3) * 30, (j + 3) * 30, 30, 30);
      }
    }
  }

  /**
   * Verifie si la couleur a été correctement chargée et sinon définie la couleur sur vert
   * @param {*} couleur 
   */
  chargerCouleurParDefaut(couleur) {
    if (!couleur) {
      couleur = "vert";
    }
    return couleur;
  }

  /**
 * actualise l'affichage
 * @param {*} matrice
 */
  actualiserLeJeu(matrice, couleur) {
    var ctx;
    var fond;
    var teteSerp;
    var corpsSerp;
    var fruit;
    ({ ctx, fond, teteSerp, corpsSerp, fruit, couleur } = this.chargerRessources(couleur));
    this.afficherFond(matrice, ctx, fond);
    this.afficherTete(matrice, ctx, teteSerp);
    this.afficherCorp(matrice, ctx, corpsSerp);
    this.afficherFruit(matrice, ctx, fruit);
  }

  /**
   * Permet de charger les ressources du jeu
   * @param {*} couleur 
   */
  chargerRessources(couleur) {
    couleur = this.chargerCouleurParDefaut(couleur);
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var fond = new Image();
    fond.src = 'ressources/boardgame.png';
    var teteSerp = new Image();
    teteSerp.src = 'ressources/headsnake-' + couleur + '.png';
    var corpsSerp = new Image();
    corpsSerp.src = 'ressources/bodysnake-' + couleur + '.png';
    var fruit = new Image();
    fruit.src = 'ressources/food.png';
    return { ctx, fond, teteSerp, corpsSerp, fruit, couleur };
  }


  /**
   * Affiche l'écran de Game Over
   * @param {*} matrice 
   */
  afficherEcranFin(matrice) {
    var { ctx, fond } = this.chargerRessourcesFin();

    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        ctx.drawImage(fond, (i + 3) * 30, (j + 3) * 30, 30, 30);
      }
    }
    ctx.fillStyle = "white";
    ctx.font = "40px '8bit'";
    ctx.fillText("Game Over", 200, 200);

  }

  /**
   * Charge les ressources de fin
   */
  chargerRessourcesFin() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var fond = new Image();
    fond.src = 'ressources/boardgame.png';
    return { ctx, fond };
  }

  /**
   * Affiche le score sur la partie droite de l'écran
   * @param {*} score
   */
  actualiserLeScore(score) {
    document.getElementById('affScore').innerHTML = "Score actuel : " + score
  }


  /**
   * Affiche le record sur la partie droite de l'écran
   * @param {*} score
   */
  actualiserLeScoreMax(score) {
    document.getElementById('affScoreMax').innerHTML = "Score max : " + score;
  }

}
