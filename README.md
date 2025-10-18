# macbook-m2-dfu-restore-demo
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MacBook Pro M2 DFU Restore Demo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; background: #f8f8f8; margin: 0; }
    #container { max-width: 500px; margin: 40px auto; background: white; padding: 2em; border-radius: 10px; box-shadow: 0 4px 16px #0001; }
    .step-title { font-size: 1.3em; margin-bottom: 0.5em; }
    .step { margin-bottom: 1.2em; }
    .buttons { display: flex; gap: 1em; }
    button { padding: 0.7em 1.5em; font-size: 1em; border-radius: 6px; border: none; background: #007aff; color: white; cursor: pointer; }
    button:disabled { background: #aaa; }
    .lang-switch { margin-bottom: 1em; }
    .lang-switch button { background: #eee; color: #333; border: 1px solid #ccc;}
    .lang-switch button.active { background: #007aff; color: white; }
    .important { color: #d00; font-weight: bold; }
    .note { font-size: 0.95em; color: #333; }
  </style>
</head>
<body>
  <div id="container">
    <div class="lang-switch">
      <button id="enBtn" class="active">English</button>
      <button id="viBtn">Tiếng Việt</button>
    </div>
    <div id="step"></div>
    <div class="buttons">
      <button id="prevBtn" disabled>Previous</button>
      <button id="nextBtn">Next</button>
    </div>
  </div>
<script>
const stepsEN = [
  {
    title: "What You Need",
    content: `<ul>
      <li>Host Mac with Apple Configurator 2 installed</li>
      <li>USB-C to USB-C data cable (not charging-only)</li>
      <li>Power adapter for the MacBook Pro M2</li>
    </ul>
    <div class="note">Gather these items before starting.</div>`
  },
  {
    title: "Set Up the Host Mac",
    content: `<ul>
      <li>Open Apple Configurator 2 on the Host Mac.</li>
      <li>Make sure the Host Mac is connected to power.</li>
    </ul>`
  # macbook-m2-dfu-restore-demo

  This repository contains a small static demo that walks through DFU restore/revive steps for a MacBook Pro M2.

  Open `index.html` in a browser to view the interactive step-by-step demo.

  Quick local preview with Python's simple HTTP server:

  ```bash
  python3 -m http.server 8000
  # then open http://localhost:8000/index.html
  ```

  If you'd like, I can also add a GitHub Pages workflow to publish this automatically (requires enabling Pages in repository settings).