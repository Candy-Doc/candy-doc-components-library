const path = require("path");
const fs = require("fs");
const glob = require("glob");

const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const sass = require("sass");

const componentPath = path.join(__dirname, "../", `src/components/**/*`);

const styleFilesCss = glob.sync(componentPath + ".css");
const styleFilesScss = glob.sync(componentPath + ".scss");

const styleFiles = [...styleFilesCss, ...styleFilesScss];

// maybe you want to throw an error if no style files were found for that package
if (!styleFiles.length) {
  throw new Error("why you no provide files?");
}

styleFiles.forEach((filePath) => {
  // parse the filePath for use later
  // https://nodejs.org/api/path.html#pathparsepath
  const parsedFilePath = path.parse(filePath);

  // figure out ahead of time what the output path should be
  // based on the original file path
  // ALL output files will end with `.css.ts
  // since all outputs will be css as exported TS strings
  const styleTSFilePath = path.format(
    Object.assign({}, parsedFilePath, { base: `${parsedFilePath.name}.css.ts` })
  );

  // set a variable to hold the final style output
  let styleOutput;

  // grab the file type of the current file
  const fileType = parsedFilePath.ext === ".scss" ? "scss" : "css";

  // read the file contents
  // passing the encoding returns the file contents as a string
  // otherwise a Buffer would be returned
  // https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
  const originalFileContents = fs.readFileSync(filePath, { encoding: "utf-8" });

  // one-liner to process scss if the fileType is 'scss'
  // if not using scss just do:
  // styleOutput = originalFileContents;
  styleOutput =
    fileType === "css" ? originalFileContents : sass.renderSync({ file: filePath }).css.toString();

  styleOutput = `@tailwind base;
                 @tailwind components;
                 @tailwind utilities;
                 ${styleOutput}`;

  //   const tailwindConfig = require('./tailwind.config.js');

  const tailwindConfig = {
    enabled: true,
    content: [
      /* the files you want tailwind to purge from nearby to the original css/scss file */
      `${parsedFilePath.dir}/**/*.{ts,css}`,
    ],
    options: {},
  };

  postcss([autoprefixer, require("tailwindcss")(tailwindConfig), cssnano])
    // the 'from' property in the options makes sure that any
    // css imports are properly resolved as if processing from
    // the original file path
    .process(styleOutput, { from: filePath })
    .then((result) => {
      // This line allow Pseudo-Classes, Pseudo-Element and media queries in tailwind to work
      const css = result.css.replace(/\\/g, "\\\\");

      const cssToTSContents = `
        import { css } from 'lit';
        export default css\`${css}\`;
     `;

      // write the final file back to its location next to the
      // original .css/.scss file
      fs.writeFileSync(styleTSFilePath, cssToTSContents);
    });
});

console.log("Lit tailwind CSS generated");
