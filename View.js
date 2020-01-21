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
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.restore();
    ctx.beginPath();

    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        if(i==0) jeu.appendChild(document.createElement('br'));
        switch (matrice[j][i]) {
            case "X": ctx.fillRect(i*5,j*5,50,50); ctx.fillStyle = "green";
            break;
            case "S":  ctx.fillRect(i*5,j*5,50,50); ctx.fillStyle = "yellow";
            break;
            case "T":  ctx.fillRect(i*5, j*5,50,50); ctx.fillStyle = "yellow";
            break;
            case "F":  ctx.fillRect(i*5, j*5,50,50); ctx.fillStyle = "red";
            break;
            default:  ctx.fillRect(i*5, j*5,50,50); ctx.fillStyle = "black";
        }
        ctx.stroke();
      }
    }

  }

}
