// ===== Sheet B: page data as variables =====
const profile = {
  name: "Hassan Waleed Hassan Abdo Al-Awadhi",
  role: "Informatics student (IP class) learning front-end",
  skills: ["HTML", "CSS", "JavaScript", "Git"],
};

const projectCount = 3;
let activeFilter = "all";

// one variable, used in two places: <title> and <header>
document.title = `${profile.name} — Profile`;
document.querySelector("#name").textContent = profile.name;
document.querySelector("#role").textContent = profile.role;


// 1. Makes an intro sentence from one object
function makeIntro({ name, role }) {
  return `${name} — ${role}`;
}

// 2. Turns the skills list into one line of text
const formatSkills = (list) => list.join(" · ");

console.log(makeIntro(profile));
console.log(formatSkills(profile.skills));
document.querySelector("#intro").textContent = makeIntro(profile);
document.querySelector("#skills").textContent = formatSkills(profile.skills);

// ===== Sheet D: array of objects + array methods =====
const projects = [
  { title: "Personal Profile Page", year: 2026, done: true },
  { title: "Simple Calculator", year: 2026, done: true },
  { title: "Recipe Catalog", year: 2026, done: false },
];

console.table(profile.skills);
console.table(projects);

// filter: only finished projects
const finished = projects.filter((project) => project.done);
console.table(finished);

// find: one project by title
const catalog = projects.find((project) => project.title === "Recipe Catalog");
console.log(catalog);

// map: one line of text for each project
const projectLines = projects.map(
  (project) => `${project.title} (${project.year}) — ${project.done ? "done" : "in progress"}`
);
console.log(projectLines);

// sort a COPY, so the original order stays the same
const sorted = [...projects].sort((a, b) => a.title.localeCompare(b.title));
console.table(sorted);
console.table(projects);

// copy an object with spread, not with =
const copy = { ...profile };
copy.name = "Test";
console.log(profile.name); // still my real name

// optional chaining and ?? : address does not exist yet
console.log(profile.address?.city ?? "city not filled in yet");

// show the projects on the page
document.querySelector("#project-list").innerHTML = projectLines
  .map((line) => `<li>${line}</li>`)
  .join("");

// ===== Sheet E: input value is text, change it to a number first =====
const input = document.querySelector("#new-projects");
const button = document.querySelector("#count-btn");

button.addEventListener("click", () => {
  const total = projectCount + Number(input.value);
  document.querySelector("#total").textContent = `Total projects: ${total}`;
  console.log(activeFilter, total);
});
