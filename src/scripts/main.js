let base = [];
const res = document.querySelector('div#res');
const resa = document.querySelector('div.resultadoa');

function aparecer(){
    if (!resa.classList.contains('aparece')){
        resa.classList.add('aparece')
    }
}

function askTerms() {
    base.length = parseInt(prompt("Digite quantos termos deseja adicionar: "));

    for (let i = 0; i < base.length; i++) {
        base[i] = prompt("Digite o número que você quer adicionar na base (Digite 'p' para parar):")
        if (base[i] === 'p'){
            base.length = i + 1;
            break;
        }
        else{
            Number(base[i])
        }
    }
    return base;
    const domBase = document.querySelector('div#domBase')
    domBase.innerHTML += `<p>A base adicionada ao sistema foi: ${base}</p>`
}

function bubbleSort(base) {
    let tam = base.length;
    let sortedBase = [...base]; // Faz uma cópia da base original
    for (let i = 0; i < tam; i++) {
        for (let j = 0; j < tam - i - 1; j++) {
            if (sortedBase[j] > sortedBase[j + 1]) {
                res.innerHTML += `<p>Bubble sort: ${sortedBase[j+1]} é menor que ${sortedBase[j]}.</p>`;
                // Troca 
                let k = sortedBase[j];
                sortedBase[j] = sortedBase[j + 1];
                sortedBase[j + 1] = k;
                res.innerHTML += `<p>Sua troca fica como: ${sortedBase}</p>`;
            }
        }
    }
    return sortedBase; // Retorna a lista ordenada
}

function selectionSort(base) {
    let tam = base.length;
    let sortedBase = [...base]; // Faz uma cópia da base original
    for (let i = 0; i < tam; i++) {
        let MinI = i;
        for (let j = i + 1; j < tam; j++) {
            if (sortedBase[j] < sortedBase[MinI]) {
                MinI = j; // Atualiza o índice do menor
            }
        }
        if (MinI != i) {
            let temp = sortedBase[i];
            sortedBase[i] = sortedBase[MinI];
            sortedBase[MinI] = temp;
        }
        res.innerHTML += `<p>Selection sort: ${i} iteração(ões) realizada(s). ${sortedBase}</p>`;
    }
    return sortedBase; // Retorna a lista ordenada
}

function insertionSort(base) {
    let tam = base.length;
    let sortedBase = [...base]; // Cópia da base original

    for (let i = 1; i < tam; i++) {
        let atual = sortedBase[i];
        let j = i - 1;

        while (j >= 0 && sortedBase[j] > atual) {
            sortedBase[j + 1] = sortedBase[j];
            j--;
        }
        sortedBase[j + 1] = atual;
        res.innerHTML += `<p>Insertion sort: ${i} iteração(ões) realizada(s). ${sortedBase}</p>`;
    }

    return sortedBase; // Retorna a base ordenada
}

function clickBase() {
    askTerms();
}

function clickBubble() {
    res.innerHTML = ""; // Limpa o resultado anterior
    if (base.length === 0) {
        clickBase();
    }
    bubbleSort(base);
    aparecer();
}

function clickSelection() {
    res.innerHTML = ""; // Limpa o resultado anterior
    if (base.length === 0) {
        clickBase();
    }
    selectionSort(base);
    aparecer();
}

function clickInsertion() {
    res.innerHTML = ""; // Limpa o resultado anterior
    if (base.length === 0) {
        clickBase();
    }
    insertionSort(base);
    aparecer();
}
