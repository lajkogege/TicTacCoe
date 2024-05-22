import JatekTer from "./JatekTer";

const jatekLISTA = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let lepes = 0; /* ha a lépés számláló páros, akkor X következik, ha páratlan akkor az O*/
/*Lépés számlálot akkor nőveljük, ha rákattintunk egy elemre(div-re)*/

/*példányositjuk*/
new JatekTer(jatekLISTA);


/*feliratkozom a saját kattintásom eseményemre*/
$(window).on("kattintasom", (event) => {
    console.log(event.detail)
    /*Megváltoztattam a program állapotát  */
    let index = event.detail;
    if (lepes / 2 === 0) {
        jatekLISTA[index] = "X";
    } else {
        jatekLISTA[index] = "O";
    }
    lepes++;
    /*Újra megjelenítem a program állapotát*/
    new JatekTer(jatekLISTA);
})