# HTML

A modern HTML project utilizing Tailwind CSS for building responsive web applications with minimal setup.

## 🚀 Features

- **HTML5** - Modern HTML structure with best practices
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Custom Components** - Pre-built component classes for buttons and containers
- **NPM Scripts** - Easy-to-use commands for development and building
- **Responsive Design** - Mobile-first approach for all screen sizes

## 📋 Prerequisites

- Node.js (v12.x or higher)
- npm or yarn

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Start Tailwind in watch mode:
```bash
npm run dev
# or
yarn dev
```

3. Preview the website with clean URLs:
```bash
npm run preview
```

Then open `http://localhost:4173/`.

Important: folder-based URLs like `/phantom/` and `/coachimhungry/` require a local web server. If you open the repo directly from the filesystem, your browser may show a directory index instead of loading `index.html` automatically.

## 📁 Project Structure

```
html_app/
├── css/
│   ├── tailwind.css   # Tailwind source file with custom utilities
│   └── main.css       # Compiled CSS (generated)
├── coachimhungry/     # CoachImHungry route
├── phantom/           # Phantom route
├── contact/           # Contact route
├── privacy-policy/    # Privacy Policy route
├── terms/             # Terms route
├── client-terms/      # Client Terms route
├── index.html         # Homepage route
├── package.json       # Project dependencies and scripts
└── tailwind.config.js # Tailwind CSS configuration
```

## 🎨 Styling

This project uses Tailwind CSS for styling. Custom utility classes include:


## 🧩 Customization

To customize the Tailwind configuration, edit the `tailwind.config.js` file:


## 📦 Build for Production

Build the CSS for production:

```bash
npm run build:css
# or
yarn build:css
```

## 📱 Responsive Design

The app is built with responsive design using Tailwind CSS breakpoints:

- `sm`: 640px and up
- `md`: 768px and up
- `lg`: 1024px and up
- `xl`: 1280px and up
- `2xl`: 1536px and up

## 🙏 Acknowledgments

- Built with [Rocket.new](https://rocket.new)
- Powered by HTML and Tailwind CSS

Built with ❤️ on Rocket.new
