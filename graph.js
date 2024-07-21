class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let i = 0; i<vertexArray.length; i++){
        this.nodes.add(vertexArray[i])
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex)
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let toVisitStack = [start];
    let seen = new Set(toVisitStack)
    let result = []
    while (toVisitStack.length > 0){
      // array.pop() removes the last element
      
      let currVertex = toVisitStack.pop();
      result.push(currVertex.value)
      for(let vertex of currVertex.adjacent){
        if(!seen.has(vertex)){
          // adds to the end of the array
          toVisitStack.push(vertex);
          seen.add(vertex)
          
        }
      }
    }
   
    return result
  } 

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let toVisitStack = [start];
    let seen = new Set(toVisitStack)
    let result = []
    while(toVisitStack.length > 0 ){
      let currVertex = toVisitStack.shift();
      result.push(currVertex.value)
      for(let vertex of currVertex.adjacent){
        if(!seen.has(vertex)){
          // adds to the end of the array
          toVisitStack.push(vertex);
          seen.add(vertex)
          
        }
      }
    }
    console.log(result)
    return result
  }
}

module.exports = {Graph, Node}