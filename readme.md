# ACP Summer School 2026 — Event Website (static template)

## Project overview
This repository contains the static website files for the ACP Summer School 2026 event. It's a lightweight Bootstrap-based template with all required assets (HTML, CSS, JS, images) stored in the project — no build step is required.

The site is suitable for event information, schedule, speakers, venue and registration guidance.

## What is in this folder
Top-level files and folders included in this project:

- `index.html` — main landing page (event overview, schedule, speakers, etc.)
- `registration.html` — registration page and guidance
- `assets/` — static assets used by the pages
- `LICENSE` — MIT license file
- `README.md` — this file

Inside `assets/` the main folders are:

- `assets/css/` — stylesheets. Examples included:
	- `animate.css`, `bootsnav.css`, `bootstrap.min.css`, `flaticon.css`, `font-awesome.min.css`,
		`linearicons.css`, `owl.carousel.min.css`, `owl.theme.default.min.css`, `responsive.css`, `style.css`
- `assets/js/` — client-side scripts. Examples included:
	- `bootsnav.js`, `bootstrap.min.js`, `countdown.js`, `custom.js`, `feather.min.js`, `jquery.js`,
		`owl.carousel.min.js`, `registration-status.js`
- `assets/images/` — images grouped by purpose, for example `partners/`, `schedule/`, `speakers/`, `welcome-hero/`
- `assets/fonts/` — any custom fonts (if present)

Note: file names above reflect what is present in the repository root `assets/` folder. If you add or replace files, keep consistent paths so the HTML pages can find them.

## Local preview (quick)
There is no build step. The simplest way to preview is to open `index.html` or `registration.html` directly in a browser. For some features (AJAX, form testing) it's better to run a local HTTP server.

### Using Python (works in Windows PowerShell)
1. Make sure Python 3 is installed: `python --version`.
2. In PowerShell, change to the project directory (where `index.html` is):

```powershell
Set-Location -Path 'D:\ACP\MyACP'
python -m http.server 8000
```

3. Open `http://localhost:8000` in your browser. To view the registration page, open `http://localhost:8000/registration.html`.

## Customization tips

- Replace images in `assets/images/` with event photos and logos. Keep backups of original files.
- Edit `index.html` and `registration.html` to update dates, descriptions, speaker info and schedule entries.
- Update or extend styles in `assets/css/style.css`.
- Update behavior in `assets/js/custom.js` or `assets/js/countdown.js` (set correct target date/time).

## Notes about repository contents

- This is a static, zero-build template. Everything needed to serve the site is contained in the repo.
- There are a few alternate/experimental folders in some workspaces (for historical/experimental pages). This README only documents the primary `index.html`, `registration.html` and `assets/` structure.
- If you copy or publish the site, ensure the relative paths under `assets/` remain correct.

## Contributing
Small fixes or content updates can be done by editing the HTML/CSS/JS files directly. If you plan larger changes, keep a copy of the originals and maintain consistent asset paths.

## License
This project is licensed under the MIT License — see the `LICENSE` file for details.

---

*Last updated: 2025-11-08*

