class View {
  constructor() {
  }

  /**
   * Affiche le jeu pour l'utilisateur
   */
  afficherLeJeu(grille,serpent,fruit) {
    var matrix = [];
    for(var i = 0; i < grille.size; i++ ){
      matrix[i] = [];
      for(var j = 0; j < grille.size; j++){
        var image = new Image();
        matrix[i][j] = image;
        if(i==7 && (j==1 || j==2 || j==3)){
          var c = new Case(i,j,false,true);
        }
        if(i==7 && j==12) {
          var c = new Case(i,j,true,false);
        }

        var c = new Case(i,j,false,false);

        if(i == 0 || j == 0) image.src = "/ressources/wall.png";
        if(!c.serpent && !c.fruit && i != 0 && j != 0) image.src = "/ressources/boardgame.png";
        if(c.serpent) {
          if(serpent.getTete == c){
              image.src = "/ressources/headsnake.png";
          }else{
            image.src = "/ressources/bodysnake.png";
          }
        }

        if(c.fruit) image.src = "/ressources/food.png";

        document.body.appendChild(image);
      }
    }


  }
}
