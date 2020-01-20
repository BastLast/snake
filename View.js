class View {
  constructor() {
  }

  /**
   * Affiche le jeu pour l'utilisateur
   */
  afficherLeJeu(grille,serpent,fruit) {
    var matrix = new Array();
    for(var i = 0; i < grille.size; i++ ){
      for(var j = 0; j < grille.size; j++){
        var image = new Image();
        matrix[i][j] = image;
        if(i==7 && (j==1 || j==2 || j==3)){
          var case = new Case(i,j,false,true);
        }
        if(i==7 && j==12) {
          var case = new Case(i,j,true,false);
        }

        var case = new Case(i,j,false,false);

        if(i == 0 || j == 0) image.src = "/ressources/wall.png";
        if(!case.serpent && !case.fruit && i != 0 && j != 0) image.src = "/ressources/boardgame.png";
        if(case.serpent) {
          if(serpent.getTete == case){
              image.src = "/ressources/headsnake.png";
          }else{
            image.src = "/ressources/bodysnake.png";
          }
        }

        if(case.fruit) image.src = "/ressources/food.png";

      }
    }


  }
}
