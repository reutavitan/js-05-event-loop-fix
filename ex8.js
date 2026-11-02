// ex8.js
function run() {
  const steps = ["Step 1", "Step 2", "Step 3"];

  for (let i = 0; i < steps.length; i++) {
    setTimeout(() => {
      setMessage(steps[i]);
      addLine(steps[i]);
    }, 10 * (i + 1));
  }
  setTimeout(() => {
    setMessage("Done!");
    addLine("Done!");
  }, 60);
}

if (typeof module !== "undefined") module.exports = { run };
