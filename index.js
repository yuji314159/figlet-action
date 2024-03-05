const core = require("@actions/core");
const figlet = require("figlet");

try {
  const text = core.getInput("text");
  const font = core.getInput("font");
  const horizontalLayout = core.getInput("horizontal-layout");
  const verticalLayout = core.getInput("vertical-layout");
  const width = Number.parseInt(core.getInput("width"));
  const whitespaceBreak = core.getBooleanInput("whitespace-break");

  const message = figlet.textSync(text, {
    font,
    horizontalLayout,
    verticalLayout,
    width,
    whitespaceBreak,
  });
  console.log(message);
} catch (error) {
  core.setFailed(error.message);
}
