class View {
  constructor() {

  }

/**
 * Affihche le jeu pour l'utilisateur
 * TODO : séparer la génération de la matrice
 * @param {*} matrice
 */
  afficherLeJeu(matrice) {
    var jeu = document.getElementById("jeu");

    console.log(matrice);
    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        if(j==0) jeu.appendChild(document.createElement('br'));
        var image = new Image(30,30);
        switch (matrice[i][j]) {
            case "X": image.src = "ressources/boardgame.png";
            break;
            case "S":  image.src = "ressources/bodysnake.png";
            break;
            case "T": image.src = "ressources/headsnake.png";
            break;
            case "F":  image.src = "ressources/food.png";
            break;
            default:  image.src = "ressources/boardgame.png";
        }
        jeu.appendChild(image);

      }
    }
  }
}
