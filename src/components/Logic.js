function findPaths(graph, start, target, path = []) {

    path.push(start);

    if (start === target) {
      return [path];
    }
    const paths = [];
  
    const neighbors = graph[start];

    for (const neighbor of neighbors) {
      if (!path.includes(neighbor)) {
        const neighborPaths = findPaths(graph, neighbor, target, path.slice());
        paths.push(...neighborPaths);
      }
    }
  
    return paths;
  }
  export default findPaths;