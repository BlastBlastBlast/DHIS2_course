# DHIS2 Course: Vite + Tailwind Development Environment

This project sets up a simple development environment for learning HTML, CSS, and JavaScript using [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/). Vite provides fast live reloading and a modern workflow for front-end development, while Tailwind CSS gives you powerful utility classes for styling.

## Key Setup Steps

### 1. Initialize npm and install Vite
```sh
npm init -y
npm install vite --save-dev
```

### 2. Create starter files
- `index.html`: The main HTML file for your app.
- `main.js`: Your main JavaScript file.
- `style.css`: Your main stylesheet.
- `vite.config.js`: Basic configuration for Vite.

### 3. Add a dev script to `package.json`
Add the following to the `scripts` section:
```json
"dev": "vite"
```

### 4. Install Tailwind CSS and dependencies
```sh
npm install -D tailwindcss postcss autoprefixer
```

### 5. Create Tailwind and PostCSS config files
If `npx tailwindcss init -p` does not work, manually create:
- `tailwind.config.js`:
  ```js
  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./main.js"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```
- `postcss.config.js`:
  ```js
  export default {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
  ```

### 6. Configure Tailwind in your CSS
Replace all contents of `style.css` with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
(You can add custom CSS below or migrate your styles to Tailwind utility classes.)

### 7. Run the development server
```sh
npm run dev
```
Open the provided `localhost` URL in your browser to see your app live. Edit your HTML and use Tailwind classes for styling.

## Required Files
- `index.html` — Main HTML file
- `main.js` — JavaScript entry point
- `style.css` — CSS styles (now with Tailwind directives)
- `vite.config.js` — Vite configuration
- `tailwind.config.js` — Tailwind configuration
- `postcss.config.js` — PostCSS configuration
- `package.json` — Project metadata and scripts

## Usage
- Edit `index.html`, `main.js`, or `style.css`.
- Use Tailwind utility classes in your HTML for styling.
- Save your changes and see them update live in your browser.

## Troubleshooting
- If `npm run dev` does not work, ensure Node.js and npm are installed.
- If Tailwind classes do not apply, check that your config files are correct and that you are importing `style.css` in your HTML.
- Check for errors in your terminal and resolve any missing dependencies.

---

Happy coding and learning!
