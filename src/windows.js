const CONFIG_ID = 'config-window';
const ADD_NOTE_ID = 'create-note';
const ADD_VIDEO_ID = 'create-video';
const ADD_IMAGE_ID = 'create-picture';
const ADD_BOOKMARK_ID = 'create-bookmark';
const ADD_BOOKMARKS_ID = 'create-bookmarks';

/** CREATE NEW WINDOW FUNCTIONS **/
function createAddBookmarksWindow() {
  createWindow(
    ADD_BOOKMARKS_ID,
    'Create a new Folder',
    `<div class="padded-content">
      <div class="input-field">
        <label>Name</label>
        <input id="bookmarks-name-input" />
      </div>
      <div class="button-field">
        <button class="button" onclick="removeWindow('${ADD_BOOKMARKS_ID}')">Cancel</button>
        <button class="button" onclick="addBookmarks()">OK</button>
      </div>
    </div>`,
    { width: '350px', height: 'auto' }
  );
}

function createAddNoteWindow() {
  createWindow(
    ADD_NOTE_ID,
    'Create Note Window',
    `<div class="padded-content">
      <div class="input-field">
        <label>Name</label>
        <input id="note-name-input" />
      </div>
      <div class="button-field">
        <button class="button" onclick="removeWindow('${ADD_NOTE_ID}')">Cancel</button>
        <button class="button" onclick="addNote()">OK</button>
      </div>
    </div>`,
    { width: '350px', height: 'auto' }
  );
}

function createAddPictureWindow() {
  createWindow(
    ADD_IMAGE_ID,
    'Create Image Window',
    `<div class="padded-content">
      <div class="input-field">
        <label>Name</label>
        <input id="image-name-input" />
      </div>
      <div class="input-field">
        <label>Image URL</label>
        <input id="image-input" />
      </div>
      <div class="button-field">
        <button class="button" onclick="removeWindow('${ADD_IMAGE_ID}')">Cancel</button>
        <button class="button" onclick="addPicture()">OK</button>
      </div>
    </div>`,
    { width: '350px', height: 'auto' }
  );
}

function createAddVideoWindow() {
  createWindow(
    ADD_VIDEO_ID,
    'Create Video Window',
    `<div class="padded-content">
      <div class="input-field">
        <label>Name</label>
        <input id="video-name-input" />
      </div>
      <div class="input-field">
        <label>Video URL</label>
        <input id="video-input" />
      </div>
      <div class="button-field">
        <button class="button" onclick="removeWindow('${ADD_VIDEO_ID}')">Cancel</button>
        <button class="button" onclick="addVideo()">OK</button>
      </div>
    </div>`,
    { width: '350px', height: 'auto' }
  );
}

function createAddBookmarkWindow(id, options = {}) {
  createWindow(
    ADD_BOOKMARK_ID,
    'Add App',
    `<div class="padded-content">
      <div class="input-field">
        <label>Name</label>
        <input id="name-input" />
      </div>
      <div class="input-field">
        <label>URL</label>
        <input id="href-input" />
      </div>
      <div class="button-field">
        <button class="button" onclick="removeWindow('${ADD_BOOKMARK_ID}')">Cancel</button>
        <button class="button" onclick="addBookmark('${id}')">OK</button>
      </div>
    </div>`,
    { width: '350px', height: 'auto', ...options }
  );
}

/** WINDOW FUNCTIONS **/
function createImageWindow(id) {
  createWindow(
    id,
    windows[id].title,
    `<div
      class="image-window"
      style="background-image:url('${windows[id].url}');"
      alt="${windows[id].title}"
    ></div>`,
    { width: '350px', height: '600px' }
  );
}

function createVideoWindow(id) {
  createWindow(
    id,
    windows[id].title,
    `<iframe
      class="webpage-iframe"
      src="${windows[id].url}"
      title="${windows[id].title}"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
      allowfullscreen
    />"`,
    { width: '350px', height: '600px' }
  );
}

function createNoteWindow(id) {
  createWindow(
    id,
    windows[id].title,
    `<textarea id="${
      id + '-content'
    }" class="note-content" onkeyup="updateNoteText('${id}')">${
      windows[id].text
    }</textarea>`
  );
}

function createWebpageWindow(id, title, url) {
  if (!id) id = genId();

  if (!windows[id]) {
    windows[id] = {
      title,
      url,
      location: { x: DEFAULT_LOCATON.x, y: DEFAULT_LOCATON.y },
    };
    saveWindows();
  }

  createWindow(
    id,
    windows[id].title,
    `<iframe class="webpage-iframe" src="${windows[id].url}" title="${windows[id].title}"></iframe>`,
    { width: '350px', height: '600px' }
  );
}

function createdirectory(id, title, url) {
  if (!id) id = genId();

  if (!windows[id]) {
    windows[id] = {
      title,
      url,
      location: { x: DEFAULT_LOCATON.x, y: DEFAULT_LOCATON.y },
    };
    saveWindows();
  }

  createWindow(
    id,
    windows[id].title,
    `<iframe class="webpage-iframe" src="https://thedirectory.koiltech.repl.co" title="[thedirectory]"></iframe>`,
    { width: '350px', height: '600px' }
  );
}

function createsearch(id, title, url) {
  if (!id) id = genId();

  if (!windows[id]) {
    windows[id] = {
      title,
      url,
      location: { x: DEFAULT_LOCATON.x, y: DEFAULT_LOCATON.y },
    };
    saveWindows();
  }

  createWindow(
    id,
    windows[id].title,
    `<iframe class="webpage-iframe" src="https://piper-ai.github.io/seARch/" title="seARch!!"></iframe>`,
    { width: '350px', height: '600px' }
  );
}

function createcalc(id, title, url) {
  if (!id) id = genId();

  if (!windows[id]) {
    windows[id] = {
      title,
      url,
      location: { x: DEFAULT_LOCATON.x, y: DEFAULT_LOCATON.y },
    };
    saveWindows();
  }

  createWindow(
    id,
    windows[id].title,
    `<iframe class="webpage-iframe" src="https://ifxhashpay.github.io" title="HashPay"></iframe>`,
    { width: '350px', height: '600px' }
  );
}

function createConfigWindow() {
  createWindow(
    CONFIG_ID,
    'Henry, The Everthing App Settings',
    `<div class="padded-content">
      <div class="input-field">
        <label>Wallpaper</label>
        <input id="wallpaper-input" value="${config.wallpaper || ''}"/>
      </div>

      <div class="input-field">
        <label>Display Webpages Internally?</label>
        <button
          id="internal-webpages-input"
          class="button ${config.internalWebpages ? 'active' : ''}"
          onclick="toggleButton('internal-webpages-input', ['Internal', 'External'])"
        >
          ${config.internalWebpages ? 'Interal' : 'External'}
        </button>
      </div>

      <div class="input-field">
        <label>Display Webpages In a New Tab?</label>
        <button
          id="tab-webpages-input"
          class="button ${config.newTab ? 'active' : ''}"
          onclick="toggleButton('tab-webpages-input', ['Same Window', 'New Tab'])"
        >
          ${config.newTab ? 'Same Window' : 'New Tab'}
        </button>
      </div>

      

      <div class="button-field">
        <button class="button" onclick="updateConfig()">SAVE</button>
      </div>
    </div>`
  );
}

/* <div class="input-field">
        <label>Theme</label>
        <select id="theme-input" name="theme-input">
          <option value="default">Default</option>  
          <option value="dark">Dark</option>
        </select>
      </div> */

function createBookmarkWindow(id, options = {}) {
  createWindow(
    id,
    windows[id].title,
    bookmarkContent(id, windows[id].bookmarks),
    options
  );
}

/** CONTENT FUNCTIONS **/
function bookmarkContent(id, bookmarks) {
  const lis = bookmarks.map((b, idx) => {
    if (config.internalWebpages) {
      return `
        <li
          class="bookmark"
          role="button"
          
        >
            <div class="flex-end">
              <button class="close-button" onclick='removeBookmark("${id}", "${idx}")'></button>
            </div>
            <div onclick="createWebpageWindow('', '${b.label}', '${b.href}')">
              <div class="bookmark-icon"></div>
              <p class="bookmark-title">${b.label}</p>
            </div>
        </li>
      `;
    }
    return `
      <li class="bookmark">
        <div class="flex-end">
          <button class="close-button" onclick='removeBookmark("${id}", "${idx}")'></button>
        </div>
        <a href="${b.href}" ${config.newTab ? 'target="_blank"': ''}>
          <div class="bookmark-icon"></div>
          <p class="bookmark-title">${b.label}</p>
        </a>
      </li>
    `;
  });

  return `
    <div class="bookmark-toolbar">
      <p class="toolbar-text">${bookmarks.length} items</p>
      <p class="toolbar-text">${bookmarks.length * 128}K in Folder</p>
      <button class="toolbar-button" onclick="createAddBookmarkWindow('${id}')">
        Add App
      </button>
    </div>
    <ul class="bookmark-list">${lis.join('')}</ul>
  `;
}
