# DHIS2 Course: Vite Development Environment

This project sets up a simple development environment for learning HTML, CSS, and JavaScript using [Vite](https://vitejs.dev/). Vite provides fast live reloading and a modern workflow for front-end development.

## Key Setup Steps

1. **Initialize npm and install Vite**
   ```sh
   npm init -y
   npm install vite --save-dev
   ```
2. **Create the following files:**
   - `index.html`: The main HTML file for your app.
   - `main.js`: Your main JavaScript file.
   - `style.css`: Your main stylesheet.
   - `vite.config.js`: Basic configuration for Vite (optional for simple setups, but included here).
3. **Update `package.json`**
   - Add the following script to the `scripts` section:
     ```json
     "dev": "vite"
     ```
4. **Run the development server:**
   ```sh
   npm run dev
   ```
   - Open the provided `localhost` URL in your browser to see your app live.

## Required Files

- `index.html` — Main HTML file
- `main.js` — JavaScript entry point
- `style.css` — CSS styles
- `vite.config.js` — Vite configuration
- `package.json` — Project metadata and scripts

## Usage
- Edit `index.html`, `main.js`, or `style.css`.
- Save your changes and see them update live in your browser.

## Troubleshooting
- If `npm run dev` does not work, ensure Node.js and npm are installed.
- Check for errors in your terminal and resolve any missing dependencies.

---

Happy coding and learning!
