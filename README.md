# Neonode Minimal: HubSpot Theme Project

Welcome to the **Neonode Minimal** project! This repository is designed for modern HubSpot theme development, leveraging Tailwind CSS v4 and the next-generation HubSpot **Projects** workflow.

---

## 🚀 Quick Start Guide

If you are just joining the project, follow these four steps to get your environment ready:

1.  **Install Global Prerequisites**:
    Ensure you have [Node.js (v20+)](https://nodejs.org/) installed. Then, install the HubSpot CLI globally:

    ```bash
    npm install -g @hubspot/cli@latest
    ```

2.  **Authenticate with HubSpot**:
    The latest HubSpot CLI uses a global configuration. To authenticate your terminal, run:

    ```bash
    hs account auth
    ```

    Full instructions are available at [HubSpot CLI Documentation](https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/reference).

3.  **Install Local Dependencies**:
    Download the local build tools (Tailwind, Dev Server, etc.):

    ```bash
    npm install
    ```

4.  **Start Developing**:
    Run the development suite:
    ```bash
    npm run dev
    ```
    _This will watch your Tailwind changes and start a local preview server at `localhost:3000`._

---

## 🏗 Project Architecture

This project uses a **Two-Tiered** structure to separate development tools from production code.

### 1. Root Level (The Workbench)

Contains configuration for tools like Tailwind CSS and the HubSpot CLI.

- **`package.json`**: Defines local build scripts and developer tools.
- **`tailwind.css`**: The input file where we import Tailwind v4.

### 2. `src/` Level (The HubSpot Theme)

Contains the actual templates, modules, and assets that run on HubSpot.

- **`src/theme/my-minimal-theme/package.json`**: This is a **Project Manifest**. It tells HubSpot which cloud dependencies (like React) our theme needs to run.
- **`hsproject.json`**: The configuration file that tells the HubSpot CLI this is a "Project" and not just a folder of files.

---

## 🎨 Tailwind CSS v4 Workflow

We use Tailwind CSS v4 to generate our styles.

- **Wait, where is the CSS?** We don't write CSS in `main.css`. Instead, we add Tailwind classes (like `text-blue-500`) to our HubL/HTML files.
- **The Process**: The `npm run dev` script watches your files. Every time you save, it scans for classes and updates `src/theme/my-minimal-theme/css/main.css` automatically.
- **NEVER edit `main.css` directly**: Any changes there will be overwritten by the compiler.

---

## 🔄 The Big Shift: From `hs cms` to `hs projects`

Historically, HubSpot developers used the `hs cms` commands to upload files. This project uses the modern **HubSpot Projects** workflow.

### What's the difference?

| Feature            | `hs cms` (Old)                  | `hs projects` (Modern)              |
| :----------------- | :------------------------------ | :---------------------------------- |
| **Logic**          | File-based sync                 | App-based deployment                |
| **Dependencies**   | Hardcoded scripts in `<head>`   | Managed via `package.json`          |
| **Integrity**      | Can result in "partial" uploads | Atomic deployments (all or nothing) |
| **Next-Gen Tools** | Limited                         | Required for React/JS Components    |

**Why we use Projects:**
The Project workflow treats your theme like a real application. It allows us to use modern JavaScript (React) for complex interactive components and ensures that when we upload our code, it stays consistent as a single, versioned unit.

**Commands to remember:**

- `npm run project:dev`: Starts the local preview server.
- `npm run project:upload`: Ships your entire project to HubSpot as a single atomic update.

---

## 🛠 Useful Scripts

| Command                  | Description                                              |
| :----------------------- | :------------------------------------------------------- |
| `npm run dev`            | Runs Tailwind Watcher + HubSpot Dev Server concurrently. |
| `npm run project:upload` | Deploys the current state to the HubSpot portal.         |
| `npm run tailwind`       | Performs a one-time build of the CSS.                    |
| `npm run init`           | Authenticates your global CLI (uses `hs account auth`).  |
