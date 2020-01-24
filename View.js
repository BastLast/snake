class View {
  constructor() {

  }

  /**
   * Affihche le jeu pour l'utilisateur
   * @param {*} matrice
   */
  afficherLeJeu(matrice) {
    //var jeu = document.getElementById("jeu");
    var canvas = document.getElementById("canvas");
    canvas.width = document.getElementById("jeu").clientWidth;
    canvas.length = document.getElementById("jeu").clientHeight;
    var ctx = canvas.getContext("2d");

    var fond = new Image();
    fond.src = 'ressources/boardgame.png';

    var mur = new Image();
    mur.src = 'ressources/wall.png';

    var teteSerp = new Image();
    teteSerp.src = 'ressources/headsnake.png';

    var corpsSerp = new Image();
    corpsSerp.src = 'ressources/bodysnake.png';

    var fruit = new Image();
    fruit.src = 'ressources/food.png';

    fond.onload = () => {
      for (var i = 0; i < matrice.length; i++) {
        for (var j = 0; j < matrice.length; j++) {
          if (matrice[j][i] == "X") {
            ctx.drawImage(fond, (i +3) * 30, (j +3) * 30, 30, 30);
          }
        }
      }
    }

    mur.onload = () => {
      for (var i = 0; i < matrice.length; i++) {
        for (var j = 0; j < matrice.length; j++) {
          if (matrice[j][i] == "W") {
            ctx.drawImage(mur, (i + 3) * 30, (j + 3) * 30, 30, 30);
          }
        }
      }
    }

    teteSerp.onload = () => {
      for (var i = 0; i < matrice.length; i++) {
        for (var j = 0; j < matrice.length; j++) {
          if (matrice[j][i] == "T") {
            ctx.drawImage(teteSerp, (i + 3) * 30, (j + 3) * 30, 30, 30);
          }
        }
      }
    }

    corpsSerp.onload = () => {
      for (var i = 0; i < matrice.length; i++) {
        for (var j = 0; j < matrice.length; j++) {
          if (matrice[j][i] == "S") {
            ctx.drawImage(corpsSerp, (i + 3) * 30, (j + 3) * 30, 30, 30);
          }
        }
      }
    }

    fruit.onload = () => {
      for (var i = 0; i < matrice.length; i++) {
        for (var j = 0; j < matrice.length; j++) {
          if (matrice[j][i] == "F") {
            ctx.drawImage(fruit, (i + 3) * 30, (j + 3) * 30, 30, 30);
          }
        }
      }
    }
  }

  /**
 * actualise l'affichage
 * @param {*} matrice
 */
  actualiserLeJeu(matrice) {
    //var jeu = document.getElementById("jeu");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");


    var fond = new Image();
    fond.src = 'ressources/boardgame.png';

    var mur = new Image();
    mur.src = 'ressources/wall.png';

    var teteSerp = new Image();
    teteSerp.src = 'ressources/headsnake.png';

    var corpsSerp = new Image();
    corpsSerp.src = 'ressources/bodysnake.png';

    var fruit = new Image();
    fruit.src = 'ressources/food.png';


    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        if (matrice[j][i] == "X") {
          ctx.drawImage(fond, (i + 3) * 30, (j + 3) * 30, 30, 30);
        }
      }
    }

    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        if (matrice[j][i] == "W") {
          ctx.drawImage(mur, (i + 3) * 30, (j + 3) * 30, 30, 30);
        }
      }
    }

    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        if (matrice[j][i] == "T") {
          ctx.drawImage(teteSerp, (i + 3) * 30, (j + 3) * 30, 30, 30);
        }
      }
    }

    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        if (matrice[j][i] == "S") {
          ctx.drawImage(corpsSerp, (i + 3) * 30, (j + 3) * 30, 30, 30);
        }
      }
    }

    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        if (matrice[j][i] == "F") {
          ctx.drawImage(fruit, (i + 3) * 30, (j + 3) * 30, 30, 30);
        }
      }
    }

  }

}
