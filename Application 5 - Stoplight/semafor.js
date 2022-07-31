let regimNoapte = null;
let regimZi = null;
let culori = ['rosu', 'galben', 'verde'];
let stareCurenta = 0;

const ziua = document.querySelector('#ziua');
const noaptea = document.querySelector('#noaptea');

ziua.addEventListener('click',semaforZiua);
noaptea.addEventListener('click',semaforNoaptea);

function semaforNoaptea() {
    clearTimeout(regimZi);
    clearInterval(regimNoapte)
    document.querySelector(".rosu").classList.add('inactiv');
    document.querySelector(".verde").classList.add('inactiv');

    regimNoapte = setInterval(regimNocturn, 1000)

}

function regimNocturn() {
    document.querySelector(".galben").classList.toggle("inactiv");
}



function semaforZiua() {
    clearInterval(regimNoapte)
    clearTimeout(regimZi);

    culori.forEach(function(culoare) {
            document.querySelector(`.${culoare}`).classList.add("inactiv");    
        });

        stareCurenta = 0;
        regimDiurn()

}

function regimDiurn() {

    let secventa = [

        [1, 0, 0, 1200],
        [1, 1, 0, 4000],
        [0, 0, 1, 1200],
        [0, 1, 1, 4000],
    ]


    setTimeout(function schimbaCuloarea() {

        for (let i = 0; i <=2; i++) {

                if (secventa[stareCurenta][i] ==1)
                    document.querySelector(`.${culori[i]}`).classList.remove("inactiv")
                else document.querySelector(`.${culori[i]}`).classList.add("inactiv")
        }
        stareCurenta++;
        if (stareCurenta ==4) stareCurenta = 0;

        regimZi = setTimeout(schimbaCuloarea,secventa[stareCurenta][3]);


    }, 10)



}



