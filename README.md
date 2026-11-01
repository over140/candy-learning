# candy-learning

Static revision site (no build step). Works on GitHub Pages as-is.

- `index.html` — subject list
- `arabic/` — Year 8 Arabic, Sports & Hobbies unit
  - `review.html` key points · `vocab.html` vocabulary/flashcards/quiz · `exam.html?set=1|2` practice exams
  - `data/vocab.js`, `data/exams.js` — content (first option of each question is the correct one; options are shuffled on screen)

Local test: `python3 -m http.server 8000` then open http://localhost:8000/

Deploy: push to `main`, then GitHub → Settings → Pages → Deploy from branch `main` / root.
