export default class Elem {
    //adattagok
    #ertek = "";
    #szuloElem;

    constructor(ertek, szuloElem) {
        //beállitotuk az adattagokat
        this.#ertek = ertek;
        this.#szuloElem = szuloElem;
        this.#megjelenit();
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
}