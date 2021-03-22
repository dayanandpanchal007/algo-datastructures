
class Graph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) this.adjacentList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (this.adjacentList[v1] && this.adjacentList[v2]) {
      this.adjacentList[v1].push(v2);
      this.adjacentList[v2].push(v1);
    }
  }

  removeEdge(v1, v2) {
    if (this.adjacentList[v1] && this.adjacentList[v2]) {
      this.adjacentList[v1].filter(v => v !== v2);
      this.adjacentList[v2].filter(v => v !== v1);
    }
  }

  removeVertex(vertex) {
    if (!this.adjacentList[vertex]) return undefined;
    const neighbors = this.adjacentList[vertex];
    neighbors.forEach(neighbor => {
      this.removeEdge(neighbor, vertex);
    });
    delete this.adjacentList[vertex];
  }

  removeVertexAnotherSolution(vertex) {
    if (!this.adjacentList[vertex]) return undefined;
    while(this.adjacentList[vertex].length) {
      const adjacentVertex = this.adjacentList[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacentList[vertex];
  }

  dfsRecursive(start) {
    const result = [];
    const visited = {};
    const adjacentList = this.adjacentList;

    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);

      adjacentList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    }

    dfs(start);
    return result;
  }

  dfsIterative(start) {
    const result = [];
    const visited = {};
    const stack = [start];
    visited[start] = true;
    let vertex;
    while(stack.length) {
      vertex = stack.pop();
      result.push(vertex);
      this.adjacentList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  bfsIterative(start) {
    const result = [];
    const visited = {};
    const queue = [start];
    visited[start] = true;

    let vertex;
    while(queue.length) {
      vertex = queue.shift();
      result.push(vertex);
      console.log('adj ', this.adjacentList[vertex]);
      this.adjacentList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

let g = new Graph();
// g.addVertex('Tokyo');
// g.addVertex('Dallas');
// g.addVertex('Aspen');
// g.addVertex('Hong Kong');
// g.addVertex('Los Angeles');

// g.addEdge('Dallas', 'Tokyo');
// g.addEdge('Dallas', 'Aspen');
// g.addEdge('Hong Kong', 'Tokyo');
// g.addEdge('Hong Kong', 'Dallas');
// g.addEdge('Los Angeles', 'Hong Kong');
// g.addEdge('Los Angeles', 'Aspen');


g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

// dfs recursive/iterative
// g.addEdge('A', 'B');
// g.addEdge('A', 'C');
// g.addEdge('B', 'D');
// g.addEdge('C', 'E');
// g.addEdge('D', 'E');
// g.addEdge('D', 'F');
// g.addEdge('E', 'F');


// bfs iterative
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
