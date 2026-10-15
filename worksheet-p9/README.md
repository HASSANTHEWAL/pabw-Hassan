# PABW 2026/2027 — Worksheet P9

**Name:** Hassan Waleed Hassan Abdo Al-Awadhi
**NIM:** 25523274
**Class:** IP

## Meeting 9 — DOM, Events, and Interactivity

My project list is not written in HTML anymore. JavaScript builds it from the `projects` array, and the filter buttons and the form work without reloading the page.

### Files

```
worksheet-p9/
├── profile.html     the page (from Meeting 8 + filter buttons + my Meeting 3 form)
├── css/style.css    Meeting 8 styles + active button, error message
├── js/app.js        data and functions (from Meeting 8, projects now have a category)
├── js/dom.js        everything that touches the page
└── README.md
```

### What is in dom.js

| Sheet | What I did |
|---|---|
| A | All elements selected at the top with `querySelector`, tested in the Console first |
| B | `buildCard(project)` makes one `<li>` with `createElement` + `textContent` |
| C | One `click` listener on `#filter`, `event.target.closest("button")`, `dataset.category` |
| D | `render(data)`: clear → check empty → fill. Form: `preventDefault`, `trim()`, message per field, button disabled until valid |

### Changes to app.js

- `projects` got a `category` and is exported so dom.js can import it.
- Removed the line that put the list on the page with `innerHTML` (unsafe), dom.js does it now.

### Hard cases (Sheet E)

| Symptom | Cause | Line I changed |
|---|---|---|
| | | |
| | | |
| | | |

### AI declaration

- **AI helped with:** 
- **I did myself:** 
