class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  afficherLeJeu(){
    this.view.afficherLeJeu(this.model.grille,this.model.serpent,this.model.fruit);
  }
}
