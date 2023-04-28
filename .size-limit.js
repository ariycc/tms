const { sizeLimit } = require("@next-core/build-config-factory");

module.exports = sizeLimit({
  bricks: {
    "*": "50 KB",
  },
  lazyBricks: {
    "*": "50 KB",
  },
  chunks: {
    "*": "50 KB",
  },
  workers: {
    "*": "50 KB",
  },
  templates: {
    "*": "5 KB",
  },
  editors: {
    "*": "10 KB",
  },
});
