import { gridSize } from "@/data/Data";

const GridBox = ({ isBlack = false, onClick, blackColor='bg-black'}: { isBlack?: boolean, onClick?: () => void, blackColor?: string }) => (
  // if there is onClick, then it becomes clickable
  <div 
    className={`w-${gridSize} h-${gridSize} ${isBlack ? blackColor : 'bg-transparent'}`}
    onClick={onClick}
    style={{ cursor: onClick ? 'pointer' : 'default' }}
  />
);

const Bullet = ({ position, direction }: { position: { top: number, left: number }, direction: string }) => {
  const pattern = (direction === 'left' || direction === 'right') ? [[1,1,1]] : [[1],[1],[1]];
  return (
    <div style={{ position: 'absolute', top: position.top, left: position.left }}>
      <GridSection pattern={pattern} />
    </div>
  );
};

const GridSection = ({ pattern, onClick = () => {}, onlyBlackClickable = true, blackColor='bg-black' }: {
  pattern: number[][]; 
  onClick?: () => void; 
  onlyBlackClickable?: boolean;
  blackColor?: string;
}) => {
  return (
    <div>
      {pattern.map((row, i) => (
        <div key={i} style={{ display: 'flex' }}>
          {row.map((cell, j) => (
            <GridBox 
              key={`${i}-${j}`} 
              isBlack={cell === 1}
              onClick={onlyBlackClickable ? (cell === 1 ? onClick : undefined) : onClick}
              blackColor={blackColor}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const FilledRectangle = ({ width = 20, height = 20, onClick = () => {} }: { width?: number, height?: number, onClick?: () => void }) => {
  const pattern = Array(height).fill(1).map(() => Array(width).fill(1));
  return <GridSection pattern={pattern} onClick={onClick} />;
}

// Export the components
export { GridSection, GridBox, FilledRectangle, Bullet };