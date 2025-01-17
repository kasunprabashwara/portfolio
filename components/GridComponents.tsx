import { gridSize, gridSizePx } from "@/data/Data";
const GridBox = (
  {
    isBlack = false,
    onClick,
    blackColor = "bg-black",
    whiteColor = "bg-transparent",
    zIndex = 1,
  }: {
    isBlack?: boolean;
    onClick?: () => void;
    blackColor?: string;
    whiteColor?: string;
    zIndex?: number;
  },
) => (
  <div
    className={`w-${gridSize} h-${gridSize} ${
      isBlack ? blackColor : whiteColor
    }`}
    onClick={onClick}
    style={{
      cursor: onClick ? "pointer" : "default",
      height: `${gridSizePx}px`,
      width: `${gridSizePx}px`,
      zIndex: isBlack ? zIndex : 0,
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
    zIndex = 0,
  }: {
    pattern: number[][];
    onClick?: () => void;
    onlyBlackClickable?: boolean;
    blackColor?: string;
    whiteColor?: string;
    zIndex?: number;
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
              zIndex={zIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const FilledRectangle = (
  { width = 20, height = 20, onClick = () => {}, children }: {
    width?: number;
    height?: number;
    onClick?: () => void;
    children?: React.ReactNode;
  },
) => {
  const pattern = Array(height).fill(1).map(() => Array(width).fill(1));
  return (
    <div className="relative">
      <GridSection pattern={pattern} onClick={onClick} />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
const BorderRectangle = (
  {
    width = 20,
    height = 20,
    onClick = () => {},
    whiteColor = "bg-transparent",
    children,
  }: {
    width?: number;
    height?: number;
    onClick?: () => void;
    whiteColor?: string;
    children?: React.ReactNode;
  },
) => {
  const pattern = Array(height).fill(1).map((_row, i) => (
    Array(width).fill(1).map((_cell, j) => (
      i === 0 || i === height - 1 || j === 0 || j === width - 1 ? 1 : 0
    ))
  ));
  return (
    <div className="relative">
      <GridSection
        pattern={pattern}
        onClick={onClick}
        whiteColor={whiteColor}
        zIndex={10}
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

// Export the components
export { BorderRectangle, Bullet, FilledRectangle, GridBox, GridSection };
export type { BulletType };
