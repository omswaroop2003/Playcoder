const { exec } = require("child_process");
const path = require("path");

const PROJECT_DIR = path.resolve("./npm-packages");

exports.installPackage = (req, res) => {
  const { packageName } = req.body;

  if (!packageName) {
    return res.status(400).json({ error: "Package name is required" });
  }

  const command = `npm install ${packageName} --prefix ${PROJECT_DIR}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${stderr}`);
      return res.status(500).json({ error: "Failed to install package" });
    }

    console.log(`Package installed: ${stdout}`);
    res.status(200).json({ message: `Package ${packageName} installed successfully!` });
  });
};
