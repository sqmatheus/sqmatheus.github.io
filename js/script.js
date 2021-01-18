function calc() {

    if (document.getElementById("result")) {
        document.getElementById("result").remove();
    }

    let elementDoc = document.getElementById("field").value;
    let int = elementDoc.split(",").map((i) => Number(i));

    let div = document.createElement("div");
    div.id = "result";
    div.className = "text-center mx-4 my-2 bg-danger text-white rounded pt-3 pb-1";

    let insert = (text) => {
        let p = document.createElement("p");
        let title = document.createTextNode(text);
        p.appendChild(title);
        div.appendChild(p);
    }

    console.log(int);

    let getMedia = () => {
        let sum = 0;
        for (const key in int) {
            if (int.hasOwnProperty(key)) {
                const element = int[key];
                sum += element;
            }
        }
        return sum / int.length;
    }

    let media = getMedia();

    insert("Media: " + media.toFixed(2));

    let getDesvioMedio = () => {
        let sum = 0;
        for (const key in int) {
            if (int.hasOwnProperty(key)) {
                const element = int[key];
                let sub = Math.abs(element - media);
                sum += sub;
            }
        }
        return sum / int.length;
    }

    let desvioMedio = getDesvioMedio();

    insert("Desvio medio: " + desvioMedio.toFixed(2));

    let getVar = () => {
        let sum = 0;
        for (const key in int) {
            if (int.hasOwnProperty(key)) {
                const element = int[key];
                let sub = Math.abs(element - media);
                sub = Math.pow(sub, 2);
                console.log(sub);
                sum += sub;
            }
        }
        return sum / int.length;
    }

    let _var = getVar();

    insert("Variância: " + _var.toFixed(2));

    let desvioPadrao = Math.sqrt(_var);

    insert("Desvio padrão: " + desvioPadrao.toFixed(2));

    let medianoFunc = () => {
        let array = int;
        array.sort((a, b) => a - b);
        insert("Lista crescente: " + array.join(", "));
        if (array.length % 2 === 0) {
            let aux = array.length / 2;
            return (array[aux - 1] + array[aux]) / 2;
        }
        return array[Math.floor(array.length / 2)];
    }

    let mediano = medianoFunc();

    insert("Mediano: " + mediano);

    document.getElementById("box").appendChild(div);

}





