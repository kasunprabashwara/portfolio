export const toggleCell = (grid: number[][], row: number, col: number): number[][] => {
    return grid.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? 1 - cell : cell))
    );
  };
  
  export const getNextGeneration = (grid: number[][]): number[][] => {
    const gridWidth = grid.length;
    const gridHeight = grid[0].length;
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    return grid.map((row: number[], i: number) =>
      row.map((cell, j) => {
        const liveNeighbors = directions.reduce((count, [dx, dy]) => {
          const x = i + dx;
          const y = j + dy;
          if (x >= 0 && x < gridWidth && y >= 0 && y < gridHeight) {
            return count + grid[x][y];
          }
          return count;
        }, 0);
  
        if (cell === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
          return 0;
        }
        if (cell === 0 && liveNeighbors === 3) {
          return 1;
        }
        return cell;
      })
    );
  };