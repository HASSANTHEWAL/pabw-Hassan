// dom.js = puts the data from app.js on the page
import { projects, makeLine } from "./app.js";

// ===== Sheet A: select the elements first =====
const list = document.querySelector("#project-list");
const filterRow = document.querySelector("#filter");
const emptyMsg = document.querySelector("#empty-msg");

const form = document.querySelector("#mc-form");
const playerName = document.querySelector("#player-name");
const mode = document.querySelector("#favorite-mode");
const activity = document.querySelector("#favorite-activity");
const submitBtn = document.querySelector("#submit-btn");
const formOk = document.querySelector("#form-ok");

// ===== Sheet B: one project = one card =====
function buildCard(project) {
  const li = document.createElement("li");
  li.className = "project-card";
  li.textContent = makeLine(project); // textContent, not innerHTML
  return li;
}

// ===== Sheet D: one render function =====
function render(data) {
  list.textContent = ""; // 1. clear first

  if (data.length === 0) { // 2. empty?
    emptyMsg.hidden = false;
    return;
  }
  emptyMsg.hidden = true;

  // 3. fill again
  data.forEach((project) => list.append(buildCard(project)));
}

// ===== Sheet C: one listener on the parent =====
function markActiveButton(activeButton) {
  document.querySelectorAll("#filter button").forEach((btn) => {
    btn.classList.toggle("active", btn === activeButton);
  });
}

filterRow.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return; // clicked outside a button

  const category = btn.dataset.category;
  const selected = projects.filter(
    (project) => category === "all" || project.category === category
  );

  markActiveButton(btn);
  render(selected);
});

render(projects); // first draw

// ===== Sheet D: form validation =====
// each field: what to check + what message to show
const fields = [
  { input: playerName, check: (v) => v.length >= 3, msg: "Write your player name, at least 3 letters." },
  { input: mode, check: (v) => v !== "", msg: "Choose one game mode." },
  { input: activity, check: (v) => v !== "", msg: "Write your favorite activity." },
];

function checkField(field, showMsg) {
  const value = field.input.value.trim(); // trim so only spaces = empty
  const ok = field.check(value);
  const errorEl = document.querySelector(`#${field.input.id}-error`);

  if (showMsg) {
    if (ok) {
      errorEl.textContent = "";
      field.input.removeAttribute("aria-invalid");
    } else {
      errorEl.textContent = field.msg;
      field.input.setAttribute("aria-invalid", "true");
    }
  }
  return ok;
}

// check all fields, return true when everything is ok
function checkForm(showMsg) {
  let valid = true;
  fields.forEach((field) => {
    if (!checkField(field, showMsg)) valid = false;
  });
  submitBtn.disabled = !valid;
  return valid;
}

// while typing: only show the message for the field the user is in
form.addEventListener("input", (event) => {
  formOk.hidden = true;
  const field = fields.find((f) => f.input === event.target);
  if (field) checkField(field, true);
  checkForm(false); // update the button only
});

// when leaving a field empty: show its message too
// (the button is disabled, so this is how an empty field gets its error)
form.addEventListener("focusout", (event) => {
  const field = fields.find((f) => f.input === event.target);
  if (field) checkField(field, true);
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); // first line: no reload

  if (!checkForm(true)) {
    // focus the first wrong field
    form.querySelector('[aria-invalid="true"]').focus();
    return;
  }

  formOk.hidden = false;
  form.reset();
  submitBtn.disabled = true;
});
