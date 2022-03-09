class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.nodes++;
    }

    // agrega un borde, conectando nodo1 con nodo2. Me paro en un borde y veo qué nodos están conectados allí.
    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    // para hacer un dirijo podria ser igual al que tenemos de esta clase pero cambiando la clase del edge por algo asi...
    make_conection(from, to){
        this.adjacentList[from].push(to)
    }
}

const myGraph = new Graph();
myGraph.addVertex("1");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addVertex("8");
