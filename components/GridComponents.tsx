
const GridBox = ({ isBlack = false, onClick}: { isBlack?: boolean, onClick?: () => void}) => (
  // if there is onClick, then it becomes clickable
  <div 
    className={`w-6 h-6 ${isBlack ? 'bg-black' : 'bg-white'}`}
    onClick={onClick}
    style={{ cursor: onClick ? 'pointer' : 'default' }}
  />
);

  const GridSection = ({ pattern, onClick = () => {}, onlyBlackClickable = true  }: { 
    pattern: number[][]; 
    onClick?: () => void; 
    onlyBlackClickable?: boolean;
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
// New Bullet component
interface Bullet {
  id: number;
  position: number;
  row: number;
}

const BulletPattern = [[1, 1, 1]];

const GridBullet = ({ position, row }: { position: number; row: number }) => {
  return (
    <div 
      style={{ 
        transform: `translateX(${position * 24}px)`, // 24px = 6px (GridBox width) * 4
        top: `${row * 24}px`
      }}
    >
      <GridSection pattern={BulletPattern} />
    </div>
  );
};
// Export the components
export {GridSection, GridBox, FilledRectangle, GridBullet};
export type {Bullet};
