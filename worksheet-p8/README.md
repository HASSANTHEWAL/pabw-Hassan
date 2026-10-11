# PABW 2026/2027 — Worksheet P8

**Name:** Hassan Waleed Hassan Abdo Al-Awadhi
**NIM:** 25523274
**Class:** IP

## Meeting 8 — Modern JavaScript ES6+, Data Structures, and Array Methods

My profile page now gets its content from JavaScript, not from text written in the HTML.

### Files

```
worksheet-p8/
├── profil.html      the page (only structure, no content)
├── css/style.css    styles from Meeting 6 (responsive, 2 columns on tablet+)
├── js/app.js        all the data + functions + array methods
└── README.md
```

### What is in app.js

| Sheet | What I did |
|---|---|
| B | `profile` object (name, role, skills), `projectCount`, `activeFilter`. The name is used in `<title>` and `<header>`. |
| C | Two pure functions: `makeIntro({ name, role })` and `formatSkills(list)` |
| D | `projects` array of objects + `filter`, `find`, `map`, and sort on a copy `[...projects]` |
| E | The input value is changed with `Number(input.value)` before adding |

### Errors I found (Sheet E)

1. `undefined` — I typed `profile.nmae`; fixed to `profile.name`.
2. `Cannot read properties of null` — `querySelector("#nama")` but the id in the HTML is `name`; fixed the selector.
3. Total showed `31` not `4` — the input value is text; fixed with `Number(input.value)`.

### AI declaration

- **AI helped with:** I used AI to help me write the first version then Doing it by myself, and this README. It also helped me translate the worksheet to English.
- **I did myself:** I chose my profile content and projects, ran the page with Live Server, checked the Console, read and understood every line, and filled in the worksheet.
