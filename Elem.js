export default class Elem {
    //adattagok
    #ertek = "";
    #szuloElem;
    #divElem;
    #index;

    constructor(index, ertek, szuloElem) {
        //beállitotuk az adattagokat
        this.#index = index;
        this.#ertek = ertek;
        this.#szuloElem = szuloElem;
        this.#megjelenit();
        /*eseménykezelő a div elemre*/
        //a div elem megfogása
        this.#divElem = this.#szuloElem.children("div:last-child");
        console.log(this.#divElem)
        this.#divElem.on("click", function () {
            /* Névtelen fügvényként Function használva a This arra a Html Elem-re mutat, ami kiváltottaaz Eseményt.
            Nyíl függvény esetén a This a konkrét Objektum Példányra mutatt.*/
            console.log(this)

        })
    }

    #megjelenit() {
        /*elkészitjuk a html kódot*/
        let txt = `
        <div class="elem">
            <p>
                ${this.#ertek}
            </p>
        </div>`
        this.#szuloElem.append(txt);
    }

    /* Saját esemény létrehozása*/
    #trigger(esemenyNev) {
        //Létrehozzunk egy saját eseményt
        //Osztály amit használunk CustomEvent*/
        const e = new CustomEvent(esemenyNev,{detail:this.#index});
        //Hozzá rendelem az eseményt a teljes ablakhoz. Az eseményt elérhetővé tesszem az egész programban
        window.dispatchEvent(e);
    }
}