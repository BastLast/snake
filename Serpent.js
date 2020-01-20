class Serpent {
    constructor() {
        this.size = 3;
        this.direction = "est";
        this.positions = new Array();
        this.positions.push(new Case(7, 1, false, true));
        this.positions.push(new Case(7, 2, false, true));
        this.positions.push(new Case(7, 3, false, true));
    }

    /**
     * Envoi la case de la tête du serpent
     */
    getTete() {
        return this.positions[this.positions.length - 1];
    }

    /**
     * Ajoute au serpent la case correspondante à la direction si possible
     */
    avancer() {
        let tete = this.getTete();
        switch (direction) {
            case "est":
                this.positions.push(
                    new Case(tete.posX, tete.posY + 1, false, true));
                break;
            case "sud":
                this.positions.push(
                    new Case(tete.posX + 1, tete.posY, false, true));
                break;
            case "nord":
                this.positions.push(
                    new Case(tete.posX - 1, tete.posY, false, true));
                break;
            case "ouest":
                this.positions.push(
                    new Case(tete.posX, tete.posY - 1, false, true));
                break;
            default:
                break;
        }
    }

    /**
     * Permet de changer la direction dans laquelle le serpent va
     * @param {*} nouvelleDirection 
     */
    changerDirection(nouvelleDirection) {
        switch (nouvelleDirection) {
            case "est":
                if (this.direction != "ouest") {
                    this.direction = nouvelleDirection;
                }
                break;
            case "sud":
                if (this.direction != "nord") {
                    this.direction = nouvelleDirection;
                }
                break;
            case "nord":
                if (this.direction != "sud") {
                    this.direction = nouvelleDirection;
                }
                break;
            case "ouest":
                if (this.direction != "est") {
                    this.direction = nouvelleDirection;
                }
                break;
            default:
                break;
        }
    }

    /**
     * Permet de verifier que le serpent se mord la queue
     */
    seMordQueue() {
        let tete = this.getTete();
        let count = 0
        for (let i = 0; i < this.positions.length; i++) { //recherche de la tête dans le serpent
            const element = array[i];
            if (element == tete) {
                count++;
            }
        }
        return count > 1; //la tête a été trouvée plus d'une fois
    }

    /**
     * Permet de faire avancer la queue du serpent
     */
    avancerQueue() {
        this.positions.shift();
    }

    /**
     * Augmente la longueur du serpent quand il mange un fruit
     */
    manger() {
        this.size++;
    }

    /**
     * Permet de verifier qu'une case donnée en parametre fais parti du serpent
     * @param {*} c 
     */
    faisPartiDuSerpent(c) {
        let count = 0
        for (let i = 0; i < this.positions.length; i++) { //recherche de la case dans le serpent
            const element = array[i];
            if (element.posX == c.posX && element.posY == c.posY) {
                count++;
            }
        }
        return count > 0; //la case a été trouvée
    }
}
