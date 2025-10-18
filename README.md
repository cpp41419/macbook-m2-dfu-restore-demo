# macbook-m2-dfu-restore-demo

This repository contains a React-based interactive guide for DFU restore/revive steps for a MacBook Pro M2.

## Features

- ✅ Step-by-step guidance through the DFU restore process
- 🌐 Bilingual support (English and Vietnamese)
- 📱 Mobile-friendly and responsive design
- ♿ Accessibility features (keyboard navigation, ARIA labels)
- 🔗 URL hash-based persistent state
- 🔄 "Restart Guide" option on completion
- 🎨 Clean, minimal UI design

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm start
```

This will start the development server at http://localhost:3000

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

This project is configured for easy deployment to Vercel:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the React app and deploy it

Alternatively, you can deploy using the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Project Structure

```
├── public/          # Static files
├── src/
│   ├── App.js       # Main application component
│   ├── App.css      # Application styles
│   ├── steps.js     # Step definitions with bilingual content
│   └── index.js     # Entry point
├── package.json     # Dependencies and scripts
└── vercel.json      # Vercel deployment configuration
```

## Usage

1. Navigate through steps using "Previous" and "Next" buttons
2. Toggle between English and Vietnamese using the language button
3. Access specific steps directly via URL hash (e.g., `#step-3`)
4. On the final step, use "Restart Guide" to begin again

## Legacy Version

The original static HTML version is backed up as `index.html.backup` for reference.
