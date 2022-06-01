const path = require("path");
const fs = require("fs");
const glob = require("glob");

const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const componentFolderPath = path.join(__dirname, "../", `src/components/**/*`).replace(/\\/g, "/");

let componentPaths = glob.sync(componentFolderPath + ".ts");

componentPaths = componentPaths.filter((componentPath) => !/.css.ts$/.test(componentPath));

// maybe you want to throw an error if no style files were found for that package
if (!componentPaths.length) {
  throw new Error("why you no provide files?");
}

componentPaths.forEach((componentPath) => {
  // parse the filePath for use later
  // https://nodejs.org/api/path.html#pathparsepath
  const parsedFilePath = path.parse(componentPath);

  // figure out ahead of time what the outpfilePathut path should be
  // based on the original file path
  // ALL output files will end with `.css.ts
  // since all outputs will be css as exported TS strings
  const styleTSFilePath = path.format(
    Object.assign({}, parsedFilePath, { base: `${parsedFilePath.name}.css.ts` })
  );

  // set a variable to hold the final style output
  let styleOutput;

  styleOutput = `@tailwind base;
                 @tailwind components;
                 @tailwind utilities;`;

  const tailwindConfig = require("../tailwind.config.js");

  // tailwindConfig.content = [componentPath];
  tailwindConfig.content = [`${parsedFilePath.dir}/**/*.ts`];

  postcss([autoprefixer, require("tailwindcss")(tailwindConfig), cssnano])
    // the 'from' property in the options makes sure that any
    // css imports are properly resolved as if processing from
    // the original file path
    .process(styleOutput, { from: undefined })
    .then((result) => {
      // This line allow Pseudo-Classes, Pseudo-Element and media queries in tailwind to work
      const css = result.css.replace(/\\/g, "\\\\").replace(/`/g, "\\`");

      const cssToTSContent = `
        import { css } from 'lit';
        export default css\`${css}\`;
     `;

      // write the final file back to its location next to the
      // original .css/.scss file
      fs.writeFileSync(styleTSFilePath, cssToTSContent);
      console.log("\x1b[1m(CandyDoc)\x1b[0m\x1b[2m", styleTSFilePath, "\x1b[0mhas been written.");
    });
});

console.log("\x1b[1m(CandyDoc)\x1b[0m", "\x1b[34m\x1b[4mLit tailwind CSS generation\x1b[0m");
