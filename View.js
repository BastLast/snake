class View {
  constructor() {
  }

/**
 * Affihche le jeu pour l'utilisateur 
 * TODO : séparer la génération de la matrice 
 * @param {*} matrice
 */
  afficherLeJeu(grille, serpent, fruit) {
    var matrix = [];
    for (var i = 0; i < grille.size; i++) {
      matrix[i] = [];
      for (var j = 0; j < grille.size; j++) {
        var c = new Case(i, j);
        serpent.positions.forEach(element => {
          if (element.estEquivalent(c)) {
            console.log("element")
          }
          else {
            c = new Case(i, j);
          }
        });
        if (i == 7 && j == 12) {
          var c = new Case(i, j);
        }

        //TODO ci- apres : A refaire 
        var image = new Image();
        matrix[i][j] = image;
        if (i == 0 || j == 0 || i == grille.size - 1 || j == grille.size - 1) image.src = "ressources/wall.png";
        if (!c.serpent && !c.fruit && i != 0 && j != 0 && i != grille.size - 1 && j != grille.size - 1) image.src = "ressources/boardgame.png";
        if (c.serpent) {
          console.log(serpent.estLaTete(c))
          if (serpent.estLaTete(c)) {
            image.src = "ressources/headsnake.png";
          } else {
            image.src = "ressources/bodysnake.png";
          }
        }

        if (c.fruit) image.src = "ressources/food.png";

        image.width = 30;
        image.height = 30;
        if (j == 0) { document.body.appendChild(document.createElement('br')); }

        document.body.appendChild(image);
      }
    }
    console.log(matrix);

  }
}
