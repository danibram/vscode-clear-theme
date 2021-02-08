const image = ["jpeg", "jpg", "gif", "png", "bmp", "ico"];
const text = ["md", "mdx", "txt"];
const script = [
  "html",
  "htm",
  "hxml",
  "xml",
  "gpx",
  "svg",
  "vue",
  "tsx",
  "jsx",
  "php",
];
const shell = ["sh", "zsh", "bash", "fish", "bat", "cmd", "ps1"];
const style = ["css", "sass", "scss", "less"];
const lambda = ["re", "rei", "hs", "lhs"];
const lock = ["lock", "sock"];
const textStruct = ["yaml", "yml", "conf"];
const curly = [
  "ts",
  "js",
  "py",
  "rb",
  "go",
  "lua",
  "c",
  "h",
  "hpp",
  "hxx",
  "hh",
  "cpp",
  "cc",
  "cxx",
  "java",
  "coffee",
  "litcoffee",
  "elm",
  "erl",
  "tex",
];
const brackets = [
  "dart",
  "mjs",
  "cs",
  "fs",
  "rs",
  "jl",
  "P",
  "swift",
  "vb",
  "jade",
  "pug",
  "scala",
  "json",
  "snap",
];

const data = {
  shell,
  text,
  brackets,
  curly,
  style,
  script,
  image,
  lambda,
  lock,
  textStruct,
};

const fileExtensions = (type) =>
  Object.keys(data).reduce((acc, k) => {
    return {
      ...acc,
      ...data[k].reduce(
        (accc, kk) => ({
          ...accc,
          [`${kk}`]: `${k}.${type}`,
        }),
        {}
      ),
    };
  }, {});

const iconDefinitions = () =>
  Object.keys(font).reduce((acc, k) => {
    let cfg = (fontColor) => ({
      fontCharacter: font[k],
      fontColor,
    });

    return {
      ...acc,
      [`${k}.black`]: cfg("#000000"),
      [`${k}.gray`]: cfg("#bbbbbb"),
    };
  }, {});

const font = {
  folder: "\\0052",
  "folder.expanded": "\\0053",
  document: "\\0051",
  shell: "\\0059",
  text: "\\0050",
  brackets: "\\0063",
  curly: "\\0064",
  style: "\\0062",
  script: "\\005a",
  image: "\\0055",
  lambda: "\\0056",
  lock: "\\0065",
  textStruct: "\\0066",
};

module.exports = {
  fonts: [
    {
      id: "core",
      src: [
        {
          path: "./Core.woff",
          format: "woff",
        },
      ],
      weight: "regular",
      style: "regular",
      size: "1.8em",
    },
  ],
  iconDefinitions: iconDefinitions(),
  folder: "folder.gray",
  folderExpanded: "folder.expanded.gray",
  file: "document.gray",
  fileNames: {
    dockerfile: "textStruct.gray",
    procfile: "lock.gray",
  },
  fileExtensions: fileExtensions("gray"),
  languageIds: {},
  light: {
    folder: "folder.black",
    folderExpanded: "folder.expanded.black",
    file: "document.black",
    fileNames: {
      dockerfile: "textStruct.black",
      procfile: "lock.black",
    },
    fileExtensions: fileExtensions("black"),
    languageIds: {},
  },
  hidesExplorerArrows: true,
};
