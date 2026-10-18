import { fetchNews } from "./api.js";

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
// P9: added category so the filter buttons have something to filter
// P9: export so dom.js can use it
export const projects = [
  { title: "Personal Profile Page", year: 2026, done: true, category: "web" },
  { title: "Simple Calculator", year: 2026, done: true, category: "tool" },
  { title: "Recipe Catalog", year: 2026, done: false, category: "web" },
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
// P9: exported so dom.js uses the same text for each card
export const makeLine = (project) =>
  `${project.title} (${project.year}) — ${project.done ? "done" : "in progress"}`;

const projectLines = projects.map(makeLine);
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

// P9: the innerHTML line that showed the projects is removed,
// dom.js draws the list now with createElement + textContent

// ===== Sheet E: input value is text, change it to a number first =====
const input = document.querySelector("#new-projects");
const button = document.querySelector("#count-btn");

button.addEventListener("click", () => {
  const total = projectCount + Number(input.value);
  document.querySelector("#total").textContent = `Total projects: ${total}`;
  console.log(activeFilter, total);
});

// ===== P10: news from the network (fetch lives in api.js) =====
const newsList = document.querySelector("#news-list");
const newsStatus = document.querySelector("#news-status");

function showStatus(text) {
  newsStatus.textContent = text;
  newsStatus.hidden = text === "";
}

// one article = one card, textContent only (data comes from the network)
function renderNews(list) {
  newsList.textContent = ""; // clear first, so cards don't multiply

  if (list.length === 0) {
    showStatus("No news yet.");
    return;
  }
  showStatus("");

  list.forEach((n) => {
    const card = document.createElement("article");
    card.className = "news-card";

    const heading = document.createElement("h3");
    heading.textContent = n.title;

    const info = document.createElement("p");
    info.className = "news-info";
    info.textContent = n.news_site + " · " + n.published_at.slice(0, 10);

    const link = document.createElement("a");
    link.href = n.url;
    link.target = "_blank";
    link.textContent = "Read more";

    card.append(heading, info, link);
    newsList.append(card);
  });
}

// second try/catch: app.js handles the rejection from api.js
async function loadNews() {
  showStatus("Loading news...");
  newsList.textContent = "";
  try {
    const articles = await fetchNews();
    console.log(articles); // check the shape once
    renderNews(articles);
  } catch (error) {
    showStatus("Could not load the news: " + error.message);
  }
}

loadNews();

// so I can test the empty state from the Console: renderNews([])
window.renderNews = renderNews;
