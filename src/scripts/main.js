let base = [];

function askTerms() {
    base.length = parseInt(prompt("Digite quantos termos deseja adicionar: "))

    for (let i = 0; i < base.length; i++) {
        base[i] = prompt("Digite o termo que você quer adicionar na base:")

        let resposta = prompt(`Deseja parar? Você digitou ${i + 1} termos até agora. Digite 's' para parar:`)
        if (resposta === 's') {
            base.length = i + 1
            break;
        }
    }
    return base;
}

function bubbleSort(base) {
    let tam = base.length;
    let sortedBase = [...base]; // Faz uma cópia da base original
    for (let i = 0; i < tam; i++) {
        for (let j = 0; j < tam - i - 1; j++) {
            if (sortedBase[j] > sortedBase[j + 1]) {
                console.log(`Bubble sort: ${sortedBase[j+1]} é menor que ${sortedBase[j]}.`)
                // Troca 
                let k = sortedBase[j];
                sortedBase[j] = sortedBase[j + 1]
                sortedBase[j + 1] = k
                console.log(`Sua troca fica como: ${sortedBase}`)
            }
        }
    }
    return sortedBase; // Retorna a lista ordenada
}

function selectionSort(base) {
    let tam = base.length
    let sortedBase = [...base]; // Faz uma cópia da base original
    // Laço para iterar sobre todos os elementos da lista
    for (let i = 0; i < tam; i++) {
        // Define o primeiro item supondo que ele é o menor
        let MinI = i;
        // Laço para encontrar o menor elemento da parte não ordenada na lista
        for (let j = i + 1; j < tam; j++) {
            if (sortedBase[j] < sortedBase[MinI]) { // Verifica se encontramos um valor menor
                MinI = j // Atualiza o índice do mínimo
            }
        }
        // Se o índice do mínimo for diferente do índice atual, faz a troca
        if (MinI != i) {
            let temp = sortedBase[i]         // Troca
            sortedBase[i] = sortedBase[MinI]
            sortedBase[MinI] = temp
        }
        console.log(`Selection sort: ${i} iteração(ões) realizada(s). ${sortedBase}`)
    }
    return sortedBase; // Retorna a lista ordenada
}

function insertionSort() {
    let tam = base.length
    let sortedBase = [...base] // Cópia da base original

    for (let i = 1; i < tam; i++) { // Laço padrão
        let atual = sortedBase[i]
        let j = i - 1
        
        // Comparar o elemento atual com os elementos anteriores e deslocar os maiores
        while (j >= 0 && sortedBase[j] > atual) {
            sortedBase[j + 1] = sortedBase[j] // Desloca o elemento para a direita
            j--
        }
        
        // Inserir o elemento atual na posição correta
        sortedBase[j + 1] = atual

        console.log(`Insertion sort: ${i} iteração(ões) realizada(s). ${sortedBase}`)
    }
    
    return sortedBase // Retorna a base ordenada
}

askTerms()
console.log(`A base original é ${base}`)
console.log(`Bubble Sort da base é ${bubbleSort(base)}`)
console.log(`Selection Sort da base é ${selectionSort(base)}`)
console.log(`Insertion Sort da base é ${insertionSort(base)}`)

