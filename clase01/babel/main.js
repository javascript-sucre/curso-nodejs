// creando la clase Message con un metodo que permita sumar 2 números
class Message {

    // contructor que inicializa los LOGS
    constructor() {
        this.listLogs = [];
    }

    // método que guarda en una array los LOGS
    log(log) {
        this.listLogs.push(log)
    }

    // método que realiza la suma de dos numero A y B
    method(a, b) {
        this.log(`sumatoria de  ${a} + ${b} = ${a + b}`);
        return a + b;
    }

    // ver lista de LOGS
    viewLogs() {
        this.listLogs.forEach(element => {
            console.log(element + '\n');
        });
    }
}

// crear instancia de Message
let message = new Message();

// invocar al método 
message.method(4, 5)
message.method(3, 88)
message.method(7, 456)
message.method(345, 445)

// mostrar todos los logs
message.viewLogs()