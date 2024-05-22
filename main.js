import JatekTer from "./JatekTer.js";


class AllapotKezelo {
    #jatekLISTA = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    #lepes = 0;
    /* ha a lépés számláló páros, akkor X következik, ha páratlan akkor az O
   Lépés számlálot akkor nőveljük, ha rákattintunk egy elemre(div-re)*/
    constructor() {
        new JatekTer(this.#jatekLISTA);
        /*feliratkozom a saját kattintásom eseményemre*/
        $(window).on("kattintasom", (event) => {
            console.log(event.detail)
            /*Megváltoztattam a program állapotát  */

            let index = event.detail;
            if (this.#lepes / 2 === 0) {
                this.#jatekLISTA[index] = "X";
            } else {
                this.#jatekLISTA[index] = "O";
            }
            this.#lepes++;

            /*Újra megjelenítem a program állapotát*/
            new JatekTer(this.#jatekLISTA);
        });
    }
}

new AllapotKezelo();



