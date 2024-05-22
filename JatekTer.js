import Elem from "./Elem.js";

export default class JatekTer {
    #jatekLISTA = [];

    constructor(JatekLISTA) {
        this.#jatekLISTA = this.#jatekLISTA;
        /*példányositjuk az Elem osztályt*/
        const szuloElem = $(".jatekter");

        for (let index = 0; index < this.JatekLISTA.length; index++) {
            const elem = new Elem(this.#JatekLISTA[index], szuloElem);
            console.log("Oke")
        }
    }
}


