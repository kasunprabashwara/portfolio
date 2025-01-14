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
const gridSize = 6;
const gridSizePx = 24;
// Main content sections
const sections = {
  home: {
    title: "Navigation",
    links: ["Profile", "Projects", "Contact", "Blog"],
  },
  profile: { title: "Profile", content: "View my background" },
  projects: { title: "Projects", content: "See my work" },
  contact: { title: "Contact", content: "Get in touch" },
  blog: { title: "Blog", content: "Read my thoughts" },
};
export { arrowPatterns, gridSize, gridSizePx, sections };
