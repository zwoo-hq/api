import prompts from "prompts";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import colors from "picocolors";

const { cyan, magenta, yellow, gray, green, red } = colors;

const projects = [
  { name: "@zwoo/api-zrp", path: "./zrp/api-zrp", type: "npm" },
  { name: "Zwoo.Api.ZRP", path: "./zrp/Zwoo.Api.ZRP", type: "nuget" },
];

const formatType = (type) => {
  switch (type) {
    case "npm":
      return `[${yellow(type.toUpperCase())}]`;
    case "nuget":
      return `[${magenta(type.toUpperCase())}]`;
    default:
      return `[${gray("-")}]`;
  }
};

const NUGET_VERSION_REGEX = /<Version>(.*)<\/Version>/;
const NPM_VERSION_REGEX = /"version": "(.*)"/;

const getNugetVersion = (path) => {
  const file = fs.readFileSync(path);
  const match = NUGET_VERSION_REGEX.exec(file);
  return match[1];
};

const getNpmVersion = (path) => {
  const file = fs.readFileSync(path);
  const match = NPM_VERSION_REGEX.exec(file);
  return match[1];
};

const setNpmVersion = (path, version) => {
  const file = fs.readFileSync(path)?.toString();
  const newFile = file.replace(NPM_VERSION_REGEX, `"version": "${version}"`);
  fs.writeFileSync(path, newFile);
};

const setNugetVersion = (path, version) => {
  const file = fs.readFileSync(path)?.toString();
  const newFile = file.replace(
    NUGET_VERSION_REGEX,
    `<Version>${version}</Version>`
  );
  fs.writeFileSync(path, newFile);
};

const getProjectPath = (project) => {
  switch (project.type) {
    case "npm":
      return path.join(project.path, "package.json");
    case "nuget":
      return path.join(project.path, project.name + ".csproj");
    default:
      return null;
  }
};

const getCurrentVersion = (project) => {
  const projectPath = getProjectPath(project);
  switch (project.type) {
    case "npm":
      return getNpmVersion(projectPath);
    case "nuget":
      return getNugetVersion(projectPath);
    default:
      return null;
  }
};

const setVersion = (project) => {
  const projectPath = getProjectPath(project);
  switch (project.type) {
    case "npm":
      setNpmVersion(projectPath, project.version);
      break;
    case "nuget":
      setNugetVersion(projectPath, project.version);
      break;
  }
};

const updateVersions = async () => {
  for (const project of projects) {
    console.log(`project: ${green(project.name)}: ${project.path}`);
  }

  // check if git is clean
  //   const stdout = execSync("git status --porcelain");
  //   if (stdout.toString().trim()) {
  //     console.log(
  //       red(
  //         "Git is not clean. Please commit your changes before running this script."
  //       )
  //     );
  //     return;
  //   }

  const response = await prompts(
    projects.map((p) => ({
      type: "text",
      name: p.name,
      message: `${formatType(p.type)} Enter the new version for ${cyan(
        p.name
      )} (v${getCurrentVersion(p)})`,
    }))
  );

  const updates = Object.entries(response)
    .map(([name, version]) => {
      if (!version) return null;
      const project = projects.find((p) => p.name === name);
      if (!project) return null;
      return {
        ...project,
        version,
      };
    })
    .filter((update) => !!update);

  console.log();
  console.log(red("Running updates:"));
  for (const update of updates) {
    console.log(
      `  ${formatType(update.type)} ${cyan(update.name)}: ${gray(
        `v${getCurrentVersion(update)}`
      )} => ${green(`v${update.version}`)}`
    );
  }
  console.log();

  const confirm = await prompts({
    type: "confirm",
    name: "value",
    message: "Do you want to continue?",
    initial: false,
  });

  if (!confirm.value) {
    console.log(red("Aborted"));
    return;
  }

  for (const update of updates) {
    setVersion(update);
    execSync(`git add ${getProjectPath(update)}`);
    execSync(`git commit -m "release: ${update.name}@v${update.version}"`);
    execSync(`git tag ${update.name}@v${update.version}`);
  }
};

updateVersions();
