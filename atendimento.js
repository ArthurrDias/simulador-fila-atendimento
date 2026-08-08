const prompt = require('prompt-sync')();

// FUNCTIONS
function message(msg, timems) {
    const time = timems === undefined ? 2000 : timems;
    console.log("\nMensagem:", msg);
    sleep(time);
}

function sleep(ms) {
    const date = Date.now();
    let currentDate = null;

    do {
        currentDate = Date.now();
    } while (currentDate - date < ms);
}

// Classe Queue
class Queue {
    constructor() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;

        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.lowestCount];
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    toString() {
        const arr = [];

        for (
            let i = this.lowestCount;
            i < this.count;
            i++
        ) {
            arr.push(this.items[i]);
        }

        return arr.toString();
    }
}

// MAIN
let queue = new Queue();

let option;

do {
    console.clear();

    console.log("Simulação de Atendimento");
    console.log("=============================\n");

    console.log(
        "Fila de Clientes: [" + queue.toString() + "]\n"
    );

    console.log("** OPERAÇÕES **");
    console.log("1 - Adicionar Cliente");
    console.log("2 - Atender o Próximo Cliente");
    console.log("3 - Mostrar Tamanho da Fila");
    console.log("4 - Limpar Fila");
    console.log("5 - Sair");

    option = parseInt(prompt("Opção: "), 10);

    switch (option) {

        case 1:
            const cliente = prompt("Cliente: ");

            queue.enqueue(cliente);

            message("Cliente adicionado à fila!");
            break;

        case 2:
            const clienteAtendido = queue.dequeue();

            if (clienteAtendido !== undefined) {
                message(
                    "Cliente " +
                    clienteAtendido +
                    " atendido(a)!"
                );
            } else {
                message("A fila está vazia!");
            }

            break;

        case 3:
            if (!queue.isEmpty()) {
                message(
                    "Existem " +
                    queue.size() +
                    " clientes na fila."
                );
            } else {
                message("A fila de clientes está vazia!");
            }

            break;

        case 4:
            queue = new Queue();

            message("Fila de clientes limpa!");
            break;

        case 5:
            console.log("Lista de Atendimento Finalizada");
            break;

        default:
            message("Opção inválida!");
    }

} while (option !== 5);