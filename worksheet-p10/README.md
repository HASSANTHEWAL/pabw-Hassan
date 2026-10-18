# PABW 2026/2027 — Worksheet P10

**Name:** Hassan Waleed Hassan Abdo Al-Awadhi
**NIM:** 25523274
**Class:** IP

## Meeting 10 — Asynchronous JavaScript: fetch, Promise, and JSON

My profile page now has a **Space News** section. The news comes from a public API, not from data written in my code.

**API:** `https://api.spaceflightnewsapi.net/v4/articles/?limit=6` (https, no key, allows CORS)

### Files

```
worksheet-p10/
├── profile.html     Meeting 9 page + a Space News section
├── css/style.css    Meeting 9 styles + news cards
├── js/api.js        NEW: the data layer, only file that calls fetch
├── js/app.js        Meeting 8/9 data + imports fetchNews and shows the news
├── js/dom.js        Meeting 9 (filter + form), not changed
└── README.md
```

### Layer boundary

| File | Job |
|---|---|
| `js/api.js` | `URL` at the top, `fetchNews()` calls fetch, checks `response.ok`, reads `json()`, exports the function |
| `js/app.js` | `import { fetchNews } from "./api.js"`, second try/catch in `loadNews()`, `renderNews(list)` builds cards with `textContent` |

Exported function name for Meeting 11: **`fetchNews`**

### Four states

| State | What shows |
|---|---|
| Loading | "Loading news..." |
| Success | one card per article: title, site, date, "Read more" link |
| Failure | "Could not load the news: " + the error message |
| Empty | "No news yet." |

### Hard cases (Sheet E)

| Symptom I saw | Cause | How I fixed it |
|---|---|---|
| | | |
| | | |
| | | |

### AI declaration

- **AI helped with:** 
- **I did myself:** 
