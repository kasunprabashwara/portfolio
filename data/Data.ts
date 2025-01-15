import { BulletType } from "@/components/GridComponents";

const arrowPatterns = {
  right: [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
  ],
  left: [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ],
  up: [
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ],
  down: [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
  ],
};
const arrowPatternsBig = {
  right: [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
  ],
  left: [
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1],
  ],
};
const gridSize = 6;
const gridSizePx = 24;
// Main content sections
interface SectionType {
  title: string;
  content?: string;
  links?: string[];
}
const sections: Record<string, SectionType> = {
  home: {
    title: "Navigation",
    links: ["Profile", "Projects", "Contact"],
  },
  profile: { title: "Profile", content: "View my background" },
  projects: { title: "Projects", content: "See my work" },
  contact: { title: "Contact", content: "Get in touch" },
};
const bulletCombinations: BulletType[][] = [
  [{
    position: {
      top: -gridSizePx * 4,
      left: window.innerWidth / 2 + gridSizePx * 7.5,
    },
    direction: "bottom",
  }],
  [{
    position: {
      top: -gridSizePx * 4,
      left: window.innerWidth / 2 - gridSizePx * 8.5,
    },
    direction: "bottom",
  }],
  [{
    position: {
      top: window.innerHeight + gridSizePx * 4,
      left: window.innerWidth / 2 + gridSizePx * 7.5,
    },
    direction: "top",
  }],
  [{
    position: {
      top: window.innerHeight + gridSizePx * 4,
      left: window.innerWidth / 2 - gridSizePx * 8.5,
    },
    direction: "top",
  }],
  [{
    position: {
      top: window.innerHeight / 2 + gridSizePx * 7.5,
      left: -gridSizePx * 4,
    },
    direction: "right",
  }],
  [{
    position: {
      top: window.innerHeight / 2 - gridSizePx * 8.5,
      left: -gridSizePx * 4,
    },
    direction: "right",
  }],
  [{
    position: {
      top: window.innerHeight / 2 + gridSizePx * 7.5,
      left: window.innerWidth + gridSizePx * 4,
    },
    direction: "left",
  }],
  [{
    position: {
      top: window.innerHeight / 2 - gridSizePx * 8.5,
      left: window.innerWidth + gridSizePx * 4,
    },
    direction: "left",
  }],
  [{
    position: {
      top: -gridSizePx * 4,
      left: window.innerWidth / 2 + gridSizePx * 12.5,
    },
    direction: "bottom",
  }, {
    position: {
      top: -gridSizePx * 4,
      left: window.innerWidth / 2 - gridSizePx * 13.5,
    },
    direction: "bottom",
  }],
  [{
    position: {
      top: window.innerHeight + gridSizePx * 4,
      left: window.innerWidth / 2 + gridSizePx * 12.5,
    },
    direction: "top",
  }, {
    position: {
      top: window.innerHeight + gridSizePx * 4,
      left: window.innerWidth / 2 - gridSizePx * 13.5,
    },
    direction: "top",
  }],
  [{
    position: {
      top: window.innerHeight / 2 + gridSizePx * 12.5,
      left: -gridSizePx * 4,
    },
    direction: "right",
  }, {
    position: {
      top: window.innerHeight / 2 - gridSizePx * 13.5,
      left: -gridSizePx * 4,
    },
    direction: "right",
  }],
  [{
    position: {
      top: window.innerHeight / 2 + gridSizePx * 12.5,
      left: window.innerWidth + gridSizePx * 4,
    },
    direction: "left",
  }, {
    position: {
      top: window.innerHeight / 2 - gridSizePx * 13.5,
      left: window.innerWidth + gridSizePx * 4,
    },
    direction: "left",
  }],
];
export {
  arrowPatterns,
  arrowPatternsBig,
  bulletCombinations,
  gridSize,
  gridSizePx,
  sections,
};
export type { SectionType };
