import { gridSize } from "@/data/Data";
const GridBox = (
  {
    isBlack = false,
    onClick,
    blackColor = "bg-black",
    whiteColor = "bg-transparent",
  }: {
    isBlack?: boolean;
    onClick?: () => void;
    blackColor?: string;
    whiteColor?: string;
  },
) => (
  // if there is onClick, then it becomes clickable
  <div
    className={`w-${gridSize} h-${gridSize} ${
      isBlack ? blackColor : whiteColor
    }`}
    onClick={onClick}
    style={{
      cursor: onClick ? "pointer" : "default",
      height: "24px",
      width: "24px",
    }}
  />
);

interface BulletType {
  position: { top: number; left: number };
  direction: string;
}

const Bullet = (
  { position, direction }: BulletType,
) => {
  const pattern = (direction === "left" || direction === "right")
    ? [[1, 1, 1]]
    : [[1], [1], [1]];
  return (
    <div
      style={{ position: "absolute", top: position.top, left: position.left }}
    >
      <GridSection pattern={pattern} />
    </div>
  );
};

const GridSection = (
  {
    pattern,
    onClick = () => {},
    onlyBlackClickable = true,
    blackColor = "bg-black",
    whiteColor = "bg-transparent",
  }: {
    pattern: number[][];
    onClick?: () => void;
    onlyBlackClickable?: boolean;
    blackColor?: string;
    whiteColor?: string;
  },
) => {
  return (
    <div>
      {pattern.map((row, i) => (
        <div key={i} style={{ display: "flex" }}>
          {row.map((cell, j) => (
            <GridBox
              key={`${i}-${j}`}
              isBlack={cell === 1}
              onClick={onlyBlackClickable
                ? (cell === 1 ? onClick : undefined)
                : onClick}
              blackColor={blackColor}
              whiteColor={whiteColor}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const FilledRectangle = (
  { width = 20, height = 20, onClick = () => {} }: {
    width?: number;
    height?: number;
    onClick?: () => void;
  },
) => {
  const pattern = Array(height).fill(1).map(() => Array(width).fill(1));
  return <GridSection pattern={pattern} onClick={onClick} />;
};
const BorderRectangle = (
  {
    width = 20,
    height = 20,
    onClick = () => {},
    whiteColor = "bg-transparent",
  }: {
    width?: number;
    height?: number;
    onClick?: () => void;
    whiteColor?: string;
  },
) => {
  const pattern = Array(height).fill(1).map((_row, i) => (
    Array(width).fill(1).map((_cell, j) => (
      i === 0 || i === height - 1 || j === 0 || j === width - 1 ? 1 : 0
    ))
  ));
  return (
    <GridSection pattern={pattern} onClick={onClick} whiteColor={whiteColor} />
  );
};

// Export the components
export { BorderRectangle, Bullet, FilledRectangle, GridBox, GridSection };
export type { BulletType };
