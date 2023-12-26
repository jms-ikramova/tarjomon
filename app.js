const form = document.getElementById("form")
const label = document.getElementById("label")
const input = document.getElementById("input")
const result = document.getElementById("result")
const chanLanguage =document.getElementById("changelanguage")


let SwitcherLanguage = false

function LanguageChange() {
    if (SwitcherLanguage) {
        chanLanguage.innerHTML = "<=>"
        label.innerHTML= "Ingliz tilidan Uzbek tiliga"
        SwitcherLanguage = false
        
    }else{
            chanLanguage.innerHTML = "<=>"
            label.innerHTML= "Uzbek tilidan ingliz tiliga"
            SwitcherLanguage = true
    }
    
}


function formFunction(event) {
    event.preventDefault()

    if (SwitcherLanguage) {
        UzbToEng()
    }else{
        EngToUzb()

    }

    // switch (input.value) {
    //     case "apple":
    //         result.innerHTML = "olma"
    //         break;
    //     case "car":
    //         result.innerHTML = "mashina"
    //         break;
    //     case "tea":
    //         result.innerHTML = "choy"
    //         break;
    //     case "book":
    //         result.innerHTML = "kitob"
    //         break;
    //     case "water":
    //         result.innerHTML = "suv"
    //         break;
    //     case "shade":
    //         result.innerHTML = "soya"
    //         break;
    //     case "stream":
    //         result.innerHTML = "soy"
    //         break;
    //     case "reduce":
    //         result.innerHTML = "kamaytirmoq"
    //         break;
    //     case "sword":
    //         result.innerHTML = "qilich"
    //         break;
    //     case "single":
    //         result.innerHTML = "yakka"
    //         break;
    //     case "rust":
    //         result.innerHTML = "zanglamoq"
    //         break;
    //     case "portray":
    //         result.innerHTML = "tasvirlamoq"
    //         break;
    //     case "idle":
    //         result.innerHTML = "yalqov"
    //         break;
    //     case "distance":
    //         result.innerHTML = "masofa"
    //         break;
    //     case "soul":
    //         result.innerHTML = "qalb"
    //         break;
    //     case "carriage":
    //         result.innerHTML = "foytun"
    //         break;

    //     case "surgery":
    //         result.innerHTML = "jarrohlik"
    //         break;

    //     case "council":
    //         result.innerHTML = "kengash"
    //         break;

    //     case "teapot":
    //         result.innerHTML = "choynak"
    //         break;

    //     case "pancake":
    //         result.innerHTML = "quymoq"
    //         break;

    //     case "run":
    //         result.innerHTML = "yugurmoq"
    //         break;

    //     case "rumor":
    //         result.innerHTML = "mish-mish"
    //         break;

    //     case "face":
    //         result.innerHTML = "yuz"
    //         break;

    //     case "liquid":
    //         result.innerHTML = "suyuqlik"
    //         break;

    //     case "milk":
    //         result.innerHTML = "sut"
    //         break;

    //     case "swim":
    //         result.innerHTML = "suzmoq"
    //         break;

    //     case "window":
    //         result.innerHTML = "deraza"
    //         break;

    //     case "family":
    //         result.innerHTML = "oila"
    //         break;

    //     case "rice":
    //         result.innerHTML = "guruch"
    //         break;

    //     case "price":
    //         result.innerHTML = "guruch"
    //         break;

    //     case "bag":
    //         result.innerHTML = "sumka"
    //         break;

    //     case "handsome":
    //         result.innerHTML = "kelishgan"
    //         break;

    //     case "foot":
    //         result.innerHTML = "oyoq"
    //         break;

    //     case "laptop":
    //         result.innerHTML = "noutbook"
    //         break;
    //     case "carpet":
    //         result.innerHTML = "gilam"
    //         break;

    //     case "shampoo":
    //         result.innerHTML = "shampun"
    //         break;

    //     case "life":
    //         result.innerHTML = "hayot"
    //         break;

    //     case "wife":
    //         result.innerHTML = "ayol"
    //         break;

    //     default:
    //         result.innerHTML = "Lug'atda bunday so'z mavjud emas"
    //         break;
    // }

    input.value = ""


}

function EngToUzb(params) {
    switch(input.value){
        case "apple":
            result.innerHTML = "olma"
            break;
        case "car":
            result.innerHTML = "mashina"
            break;
        case "tea":
            result.innerHTML = "choy"
            break;
        case "book":
            result.innerHTML = "kitob"
            break;
        case "water":
            result.innerHTML = "suv"
            break;
        case "shade":
            result.innerHTML = "soya"
            break;
        case "stream":
            result.innerHTML = "soy"
            break;
        case "reduce":
            result.innerHTML = "kamaytirmoq"
            break;
        case "sword":
            result.innerHTML = "qilich"
            break;
        case "single":
            result.innerHTML = "yakka"
            break;
        case "rust":
            result.innerHTML = "zanglamoq"
            break;
        case "portray":
            result.innerHTML = "tasvirlamoq"
            break;
        case "idle":
            result.innerHTML = "yalqov"
            break;
        case "distance":
            result.innerHTML = "masofa"
            break;
        case "soul":
            result.innerHTML = "qalb"
            break;
        case "carriage":
            result.innerHTML = "foytun"
            break;

        case "surgery":
            result.innerHTML = "jarrohlik"
            break;

        case "council":
            result.innerHTML = "kengash"
            break;

        case "teapot":
            result.innerHTML = "choynak"
            break;

        case "pancake":
            result.innerHTML = "quymoq"
            break;

        case "run":
            result.innerHTML = "yugurmoq"
            break;

        case "rumor":
            result.innerHTML = "mish-mish"
            break;

        case "face":
            result.innerHTML = "yuz"
            break;

        case "liquid":
            result.innerHTML = "suyuqlik"
            break;

        case "milk":
            result.innerHTML = "sut"
            break;

        case "swim":
            result.innerHTML = "suzmoq"
            break;

        case "window":
            result.innerHTML = "deraza"
            break;

        case "family":
            result.innerHTML = "oila"
            break;

        case "rice":
            result.innerHTML = "guruch"
            break;

        case "price":
            result.innerHTML = "guruch"
            break;

        case "bag":
            result.innerHTML = "sumka"
            break;

        case "handsome":
            result.innerHTML = "kelishgan"
            break;

        case "foot":
            result.innerHTML = "oyoq"
            break;

        case "laptop":
            result.innerHTML = "noutbook"
            break;
        case "carpet":
            result.innerHTML = "gilam"
            break;

        case "shampoo":
            result.innerHTML = "shampun"
            break;

        case "life":
            result.innerHTML = "hayot"
            break;

        case "wife":
            result.innerHTML = "ayol"
            break;

        default:
            result.innerHTML = "Lug'atda bunday so'z mavjud emas"
            break;
    }
    
    
}


function UzbToEng(params) {
    switch(input.value){
        case "olma":
            result.innerHTML = "apple"
            break;
        case "mashina":
            result.innerHTML = "car"
            break;
        case "choy":
            result.innerHTML = "tea"
            break;
        case "kitob":
            result.innerHTML = "book"
            break;
        case "suv":
            result.innerHTML = "water"
            break;
        case "soya":
            result.innerHTML = "shade"
            break;
        case "soy":
            result.innerHTML = "stream"
            break;
        case "kamaytirmoq":
            result.innerHTML = "reduce"
            break;
        case "qilich":
            result.innerHTML = "sword"
            break;
        case "yakka":
            result.innerHTML = "single"
            break;
        case "zanglamoq":
            result.innerHTML = "rust"
            break;
        case "tasvirlamoq":
            result.innerHTML = "portray"
            break;
        case "yalqov":
            result.innerHTML = "idle"
            break;
        case "masofa":
            result.innerHTML = "distance"
            break;
        case "soul":
            result.innerHTML = "qalb"
            break;
        case "foytun":
            result.innerHTML = "carriage"
            break;

        case "jarrohlik":
            result.innerHTML = "surgery"
            break;

        case "kengash":
            result.innerHTML = "council"
            break;

        case "choynak":
            result.innerHTML = "teapot"
            break;

        case "quymoq":
            result.innerHTML = "pancake"
            break;

        case "yugurmoq":
            result.innerHTML = "run"
            break;

        case "mish-mish":
            result.innerHTML = "rust"
            break;

        case "yuz":
            result.innerHTML = "face"
            break;

        case "suyuqlik":
            result.innerHTML = "liquid"
            break;

        case "sut":
            result.innerHTML = "milk"
            break;

        case "suzmoq":
            result.innerHTML = "swim"
            break;

        case "deraza":
            result.innerHTML = "window"
            break;

        case "oila":
            result.innerHTML = "family"
            break;

        case "guruch":
            result.innerHTML = "rice"
            break;

        case "narx":
            result.innerHTML = "price"
            break;

        case "sumka":
            result.innerHTML = "bag"
            break;

        case "kelishgan":
            result.innerHTML = "handsome"
            break;

        case "oyoq":
            result.innerHTML = "foot"
            break;

        case "noutbook":
            result.innerHTML = "laptop"
            break;
        case "gilam":
            result.innerHTML = "carpet"
            break;

        case "shampun":
            result.innerHTML = "shampoo"
            break;

        case "hayot":
            result.innerHTML = "life"
            break;

        case "ayol":
            result.innerHTML = "wife"
            break;

        default:
            result.innerHTML = "Lug'atda bunday so'z mavjud emas"
            break;
    }
} 

form.addEventListener("submit", formFunction)