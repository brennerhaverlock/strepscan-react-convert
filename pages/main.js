import './css/style.css';

document.querySelector('#app').innerHTML = `
  <h1 class="text-center">Camera PWA</h1>

  <div>
    <button id="installApp">Install</button>
  </div>

  <div>
    <div id="liveVideo">
      <video id="webcam" autoplay></video>
      <canvas id="canvas"></canvas>
    </div>

    <p id="information">Loading model. Please wait before starting camera.</p>
    <div class="video-controls">
      <button id="play" title="Play">Start camera</button>
      <button id="pause" title="Pause">Pause</button>
      <button id="save-image" title="Save">Save Image</button>
      <button id="view" title="View">View Photos</button>
    </div>
    <div>
      <input type="range" id="zoom" name="zoom">
      <label for="zoom">Zoom</label>

      <input type="range" id="focus" name="focus">
      <label for="focus">Focus</label>

      <button id="current-settings">Get current camera settings</button>
    </div>

    <p id="errorMessage"></p>
  </div>
`;
