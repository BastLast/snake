class Case {

    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }

    /**
     * Permet de vérifier si 2 cases ont les mêmes coordonées
     * @param {*} case2 
     */
    superpose(case2) {
        let case1 = this;
        var aProps = Object.getOwnPropertyNames(case1);
        var bProps = Object.getOwnPropertyNames(case2);
        if (aProps.length != bProps.length) {
            return false;
        }
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
            if (case1[propName] !== case2[propName]) {
                return false;
            }
        }
        return true;
    }

}
