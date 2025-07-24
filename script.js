(function() {
    'use strict';

    // --- DOM Elements ---
    const DOMElements = {
        sidebar: document.getElementById('sidebar'),
        mobileMenuBtn: document.getElementById('mobile-menu-btn'),
        sidebarFooter: document.getElementById('sidebar-footer'),
        sidebarResizeHandle: document.getElementById('sidebar-resize-handle'),
        mainContent: document.getElementById('main-content'),
        appTitle: document.getElementById('app-title'),
        archiveList: document.getElementById('archive-list'),
        labelsContainer: document.getElementById('labels-container'),
        notesGrid: document.getElementById('notes-grid'),
        filterInput: document.getElementById('filter'),
        notification: document.getElementById('notification'),
        body: document.querySelector('body'),
        archiveSection: document.getElementById('archive-section'),
        archiveToggle: document.getElementById('archive-toggle'),
        modalOverlay: document.getElementById('modal-overlay'),
        welcomeModal: document.getElementById('welcome-modal'),
        closeWelcomeModalBtn: document.getElementById('close-welcome-modal'),
        confirmClearModal: document.getElementById('confirm-clear-modal'),
        deleteConfirmationInput: document.getElementById('delete-confirmation-input'),
        cancelClearBtn: document.getElementById('cancel-clear-btn'),
        confirmClearActionBtn: document.getElementById('confirm-clear-action-btn'),
        batchDeleteConfirmModal: document.getElementById('batch-delete-confirm-modal'),
        batchDeleteMessage: document.getElementById('batch-delete-message'),
        cancelBatchDeleteBtn: document.getElementById('cancel-batch-delete-btn'),
        confirmBatchDeleteActionBtn: document.getElementById('confirm-batch-delete-action-btn'),
        globalDropZone: document.getElementById('global-drop-zone'),
        editNotePane: document.getElementById('edit-note-pane'),
        sidePaneResizeHandle: document.getElementById('side-pane-resize-handle'),
        editNoteTitleInput: document.getElementById('edit-note-title'),
        editNoteEditor: document.getElementById('edit-note-editor'),
        editToolbar: document.getElementById('edit-toolbar'),
        editNoteLabelInput: document.getElementById('edit-note-label'),
        editNoteCardColorInput: document.getElementById('edit-note-card-color-input'),
        saveEditNoteBtn: document.getElementById('save-edit-note'),
        cancelEditNoteBtn: document.getElementById('cancel-edit-note'),
        deleteNoteBtn: document.getElementById('delete-note'),
        archiveNoteBtn: document.getElementById('archive-note'),
        shareNoteBtn: document.getElementById('share-note-btn'),
        fabAddNoteBtn: document.getElementById('fab-add-note'),
        newNotePane: document.getElementById('new-note-pane'),
        newNoteTitleInput: document.getElementById('new-note-title'),
        newNoteEditor: document.getElementById('new-note-editor'),
        newNoteToolbar: document.getElementById('new-note-toolbar'),
        bottomResizeHandle: document.getElementById('bottom-resize-handle'),
        newNoteLabelInput: document.getElementById('new-note-label'),
        newNoteCardColorInput: document.getElementById('new-note-card-color-input'),
        saveNewNoteBtn: document.getElementById('save-new-note'),
        cancelNewNoteBtn: document.getElementById('cancel-new-note'),
        calendarBtn: document.getElementById('calendar-btn'),
        calendarModal: document.getElementById('calendar-modal'),
        settingsBtn: document.getElementById('settings-btn'),
        settingsModal: document.getElementById('settings-modal'),
        labelsDatalist: document.getElementById('labels-datalist'),
        embedModal: document.getElementById('embed-modal'),
        embedCodeInput: document.getElementById('embed-code-input'),
        saveEmbedBtn: document.getElementById('save-embed-btn'),
        cancelEmbedBtn: document.getElementById('cancel-embed-btn'),
        iframeHelperBtn: document.getElementById('iframe-helper-btn'),
        iframeHelperModal: document.getElementById('iframe-helper-modal'),
        iframeUrlInput: document.getElementById('iframe-url'),
        iframeWidthInput: document.getElementById('iframe-width'),
        iframeHeightInput: document.getElementById('iframe-height'),
        addIframeBtn: document.getElementById('add-iframe-btn'),
        cancelIframeHelperBtn: document.getElementById('cancel-iframe-helper-btn'),
        videoHelperBtn: document.getElementById('video-helper-btn'),
        videoHelperModal: document.getElementById('video-helper-modal'),
        videoUrlInput: document.getElementById('video-url'),
        videoWidthInput: document.getElementById('video-width'),
        videoHeightInput: document.getElementById('video-height'),
        videoControlsCheckbox: document.getElementById('video-controls'),
        addVideoBtn: document.getElementById('add-video-btn'),
        cancelVideoHelperBtn: document.getElementById('cancel-video-helper-btn'),
        importFileInput: document.getElementById('import-file-input'),
        imageUploadInput: document.getElementById('image-upload-input'),
        avatarUploadInput: document.getElementById('avatar-upload-input'),
        avatarUploadBtn: document.getElementById('avatar-upload-btn'),
        avatarPreview: document.getElementById('avatar-preview'),
        clearStorageBtn: document.getElementById('clear-storage-btn'),
        dashboardView: document.getElementById('dashboard-view'),
        notesView: document.getElementById('notes-view'),
        dashboardLink: document.getElementById('dashboard-link'),
        allNotesLink: document.getElementById('all-notes-link'),
        greetingBanner: document.getElementById('greeting-banner'),
        greetingText: document.getElementById('greeting-text'),
        timeDisplay: document.getElementById('time-display'),
        recentNotesContainer: document.getElementById('recent-notes-container'),
        selectModeBtn: document.getElementById('select-mode-btn'),
        batchActionBar: document.getElementById('batch-action-bar'),
        selectionCount: document.getElementById('selection-count'),
        batchExportBtn: document.getElementById('batch-export-btn'),
        batchArchiveBtn: document.getElementById('batch-archive-btn'),
        batchDeleteBtn: document.getElementById('batch-delete-btn'),
        collabQrCodeModal: document.getElementById('collab-qr-code-modal'),
        collabQrCodeContainer: document.getElementById('collab-qr-code-container'),
        collabInviteLinkDisplay: document.getElementById('collab-invite-link-display'),
        copyLinkFromModalBtn: document.getElementById('copy-link-from-modal-btn'),
        closeCollabQrCodeModalBtn: document.getElementById('close-collab-qr-code-modal'),
        collaborationLink: document.getElementById('collaboration-link'),
        collaborationView: document.getElementById('collaboration-view'),
        collaborationNotesGrid: document.getElementById('collaboration-notes-grid'),
        chatContainer: document.getElementById('chat-container'),
        chatInput: document.getElementById('chat-input'),
        sendChatBtn: document.getElementById('send-chat-btn'),
        whiteboardBtn: document.getElementById('whiteboard-btn'),
        addGameBtn: document.getElementById('add-game-btn'),
        addGameModal: document.getElementById('add-game-modal'),
        cancelAddGameBtn: document.getElementById('cancel-add-game-btn'),
        addYoutubeBtn: document.getElementById('add-youtube-btn'),
        youtubeModal: document.getElementById('youtube-modal'),
        youtubeUrlInput: document.getElementById('youtube-url-input'),
        confirmYoutubeAddBtn: document.getElementById('confirm-youtube-add-btn'),
        cancelYoutubeAddBtn: document.getElementById('cancel-youtube-add-btn'),
        collaborationStartModal: document.getElementById('collaboration-start-modal'),
        customRoomIdInput: document.getElementById('custom-room-id-input'),
        joinSessionBtn: document.getElementById('join-session-btn'),
        cancelCollaborationStartBtn: document.getElementById('cancel-collaboration-start-btn'),
        saveCollabNotesModal: document.getElementById('save-collab-notes-modal'),
        sessionManagementModal: document.getElementById('session-management-modal'),
        sessionModalPeerList: document.getElementById('session-modal-peer-list'),
        sessionModalRoomId: document.getElementById('session-modal-room-id'),
        sessionModalCopyBtn: document.getElementById('session-modal-copy-btn'),
        sessionModalQrBtn: document.getElementById('session-modal-qr-btn'),
        sessionModalLeaveBtn: document.getElementById('session-modal-leave-btn'),
        sessionModalCloseBtn: document.getElementById('session-modal-close-btn'),
        confirmSaveCollabBtn: document.getElementById('confirm-save-collab-btn'),
        declineSaveCollabBtn: document.getElementById('decline-save-collab-btn'),
        fabChatLogBtn: document.getElementById('fab-chat-log'),
        chatLogPane: document.getElementById('chat-log-pane'),
        closeChatLogBtn: document.getElementById('close-chat-log-btn'),
        sessionInfoHub: document.getElementById('session-info-hub'),
        chatLogMessages: document.getElementById('chat-log-messages'),
        chatLogInput: document.getElementById('chat-log-input'),
        sendChatLogBtn: document.getElementById('send-chat-log-btn'),
        videoWallBtn: document.getElementById('video-wall-btn'),
        videoWallModal: document.getElementById('video-wall-modal'),
        videoWallUrlInput: document.getElementById('video-wall-url-input'),
        cancelVideoWallBtn: document.getElementById('cancel-video-wall-btn'),
        removeVideoWallBtn: document.getElementById('remove-video-wall-btn'),
        saveVideoWallBtn: document.getElementById('save-video-wall-btn'),
        videoWallBackdrop: document.getElementById('video-wall-backdrop'),
        videoWallUrlSetting: document.getElementById('video-wall-url-setting'),
        whiteboardModal: document.getElementById('whiteboard-modal'),
        whiteboardCanvas: document.getElementById('whiteboard-canvas'),
        wbColorPicker: document.getElementById('wb-color-picker'),
        wbBrushSize: document.getElementById('wb-brush-size'),
        wbBrushPreview: document.getElementById('wb-brush-preview'),
        wbClearBtn: document.getElementById('wb-clear-btn'),
        wbCloseBtn: document.getElementById('wb-close-btn'),
        loadingOverlay: document.getElementById('loading-overlay'),
        importLocalNoteBtn: document.getElementById('import-local-note-btn'),
        importLocalNoteModal: document.getElementById('import-local-note-modal'),
        importNoteSearch: document.getElementById('import-note-search'),
        importNoteList: document.getElementById('import-note-list'),
        cancelImportLocalNoteBtn: document.getElementById('cancel-import-local-note-btn'),
        confirmImportLocalNoteBtn: document.getElementById('confirm-import-local-note-btn'),
        collabActionsBtn: document.getElementById('collab-actions-btn'),
        collabActionsMenu: document.getElementById('collab-actions-menu'),
    };

    // --- App State ---
    let state = {
        notes: [],
        settings: {},
        currentNoteId: null,
        activeEditor: null,
        currentDate: new Date(),
        selectModeActive: false,
        selectedNoteIds: new Set(),
        showArchived: false,
        peer: null,
        connections: new Map(),
        roomId: null,
        isHost: false,
        isSecureSession: false,
        collaborationNotes: [],
        peerInfo: new Map(),
        chatLog: [],
        isChatLogOpen: false,
        youtubePlayers: new Map(),
        isYTPlayerSyncing: false,
        whiteboard: {
            activeUsers: new Set(),
            history: [],
            ctx: null,
            isDrawing: false,
            lastX: 0,
            lastY: 0,
        },
        syncingPeers: new Set(),
        syncUpdateQueue: new Map(),
    };

    const defaultSettings = {
        title: 'Collections',
        bgColor: '#303030',
        sidebarColor: '#000000',
        fontColor: '#ffffff',
        fabColor: '#000000',
        noteCardColor: '#000000',
        noteCardOpacity: 0.7,
        modalBgColor: '#000000',
        textInputBgColor: '#ffffff',
        textInputFontColor: '#000000',
        footerText: 'Niilow 1.8',
        modalOpacity: 0.95,
        userName: 'User',
        sessionPassword: '',
        userAvatar: null,
        videoWall: '',
    };
    
    let touchTimer;

    let autoSaveTimeout = null;

    // --- IndexedDB Helper ---
    const db = {
        instance: null,
        init(dbName, version, upgradeCallback) {
            return new Promise((resolve, reject) => {
                const request = indexedDB.open(dbName, version);
                request.onupgradeneeded = upgradeCallback;
                request.onsuccess = (e) => {
                    this.instance = e.target.result;
                    resolve();
                };
                request.onerror = (e) => reject(`IndexedDB error: ${e.target.errorCode}`);
            });
        },
        get(storeName, key) {
            return new Promise((resolve, reject) => {
                const tx = this.instance.transaction(storeName, 'readonly');
                const store = tx.objectStore(storeName);
                const request = store.get(key);
                request.onsuccess = (e) => resolve(e.target.result);
                request.onerror = (e) => reject(e.target.error);
            });
        },
        getAll(storeName) {
            return new Promise((resolve, reject) => {
                const tx = this.instance.transaction(storeName, 'readonly');
                const store = tx.objectStore(storeName);
                const request = store.getAll();
                request.onsuccess = (e) => resolve(e.target.result);
                request.onerror = (e) => reject(e.target.error);
            });
        },
        put(storeName, value, key) {
            return new Promise((resolve, reject) => {
                const tx = this.instance.transaction(storeName, 'readwrite');
                const store = tx.objectStore(storeName);
                const request = store.put(value, key);
                tx.oncomplete = () => resolve(request.result);
                tx.onerror = () => reject(tx.error);
            });
        },
        clear(storeName) {
            return new Promise((resolve, reject) => {
                const tx = this.instance.transaction(storeName, 'readwrite');
                const store = tx.objectStore(storeName);
                store.clear();
                tx.oncomplete = () => resolve();
                tx.onerror = () => reject(tx.error);
            });
        }
    };

    async function loadFromDB() {
        try {
            state.notes = await db.getAll('notes') || [];
            const savedSettings = await db.get('settings', 'appSettings');
            state.settings = { ...defaultSettings,
                ...savedSettings
            };
            if (!state.settings.customLinks) {
                state.settings.customLinks = [];
            }
        } catch (e) {
            console.error("Failed to load data from IndexedDB", e);
            state.settings = defaultSettings;
        }
    }

    async function saveData() {
        try {
            await Promise.all([
                db.clear('notes').then(() => Promise.all(state.notes.map(note => db.put('notes', note)))),
                db.put('settings', state.settings, 'appSettings')
            ]);
        } catch (e) {
            showNotification('An error occurred while saving.', 'error');
            console.error("Save failed:", e);
        }
        renderAll();
    }

    // --- Platform & Sound Helpers ---
    function isUnsupportedDevice() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    function playSound(soundUrl) {
        try {
            const audio = new Audio(soundUrl);
            audio.play().catch(e => console.error("Audio play failed. Browser might have blocked it.", e));
        } catch (e) {
            console.error("Failed to create or play sound:", e);
        }
    }

    // --- HTML Sanitizer ---
    function sanitizeHTML(dirtyHTML) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = dirtyHTML;
        const allowedTags = [
            'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BLOCKQUOTE', 'P', 'A', 'UL', 'OL', 'LI', 'B', 'I', 'STRONG', 'EM', 'U', 'BR', 'DIV', 'SPAN',
            'TABLE', 'THEAD', 'TBODY', 'TR', 'TH', 'TD', 'IMG', 'VIDEO', 'SOURCE', 'IFRAME', 'FONT'
        ];
        const allowedAttrs = {
            '*': ['style', 'class', 'title'],
            'A': ['href', 'target'],
            'IMG': ['src', 'alt', 'width', 'height'],
            'VIDEO': ['src', 'controls', 'width', 'height', 'autoplay', 'muted', 'loop', 'poster'],
            'SOURCE': ['src', 'type'],
            'IFRAME': ['src', 'width', 'height', 'frameborder', 'allow', 'allowfullscreen', 'loading', 'sandbox'],
            'FONT': ['color']
        };

        const cleanNode = (node) => {
            if (node.nodeType === 3) return node.cloneNode();
            if (node.nodeType !== 1) return null;

            const tagName = node.tagName.toUpperCase();
            if (!allowedTags.includes(tagName)) return null;

            const newNode = document.createElement(node.tagName);
            const universalAttrs = allowedAttrs['*'] || [];
            const tagSpecificAttrs = allowedAttrs[tagName] || [];
            const allAllowedAttrs = [...new Set([...universalAttrs, ...tagSpecificAttrs])];

            for (const attr of node.attributes) {
                if (allAllowedAttrs.includes(attr.name.toLowerCase()) && !attr.name.startsWith('on')) {
                    if (attr.name === 'src' || attr.name === 'href') {
                        if (!attr.value.startsWith('http:') && !attr.value.startsWith('https:') && !attr.value.startsWith('data:')) {
                            continue;
                        }
                    }
                    newNode.setAttribute(attr.name, attr.value);
                }
            }

            for (const child of node.childNodes) {
                const cleanChild = cleanNode(child);
                if (cleanChild) newNode.appendChild(cleanChild);
            }

            return newNode;
        }

        const fragment = document.createDocumentFragment();
        for (const child of tempDiv.childNodes) {
            const cleanChild = cleanNode(child);
            if (cleanChild) fragment.appendChild(cleanChild);
        }

        const cleanDiv = document.createElement('div');
        cleanDiv.appendChild(fragment);
        return cleanDiv.innerHTML;
    }


    // --- Rendering & UI ---
    function hexToRgba(hex, alpha) {
        let r = 0,
            g = 0,
            b = 0;
        if (!hex) return `rgba(0,0,0,${alpha})`;
        if (hex.length == 4) {
            r = "0x" + hex[1] + hex[1];
            g = "0x" + hex[2] + hex[2];
            b = "0x" + hex[3] + hex[3];
        } else if (hex.length == 7) {
            r = "0x" + hex[1] + hex[2];
            g = "0x" + hex[3] + hex[4];
            b = "0x" + hex[5] + hex[6];
        }
        return `rgba(${+r},${+g},${+b},${alpha})`;
    }

    function applySettings() {
        const {
            settings
        } = state;
        const settingsModal = DOMElements.settingsModal;
        DOMElements.appTitle.innerText = settings.title;
        DOMElements.body.style.backgroundColor = settings.bgColor;
        DOMElements.sidebar.style.backgroundColor = settings.sidebarColor;
        DOMElements.body.style.color = settings.fontColor;
        DOMElements.sidebarFooter.innerText = settings.footerText;

        DOMElements.fabAddNoteBtn.style.backgroundColor = settings.fabColor;
        DOMElements.fabChatLogBtn.style.backgroundColor = settings.fabColor;

        const rgbaModalBg = hexToRgba(settings.modalBgColor, settings.modalOpacity);
        [DOMElements.calendarModal, settingsModal, DOMElements.editNotePane, DOMElements.newNotePane, DOMElements.chatLogPane, DOMElements.embedModal, DOMElements.iframeHelperModal, DOMElements.videoHelperModal, DOMElements.welcomeModal, DOMElements.confirmClearModal, DOMElements.collabQrCodeModal, DOMElements.batchDeleteConfirmModal, DOMElements.collaborationStartModal, DOMElements.sessionManagementModal, DOMElements.saveCollabNotesModal, DOMElements.videoWallModal, DOMElements.addGameModal, DOMElements.whiteboardModal, DOMElements.youtubeModal, DOMElements.importLocalNoteModal].forEach(el => {
            if (el) {
                el.style.backgroundColor = rgbaModalBg;
            }
        });

        const rgbaBannerBg = hexToRgba(settings.noteCardColor, settings.noteCardOpacity);
        DOMElements.greetingBanner.style.backgroundColor = rgbaBannerBg;


        document.querySelectorAll('.text-input-field').forEach(el => {
            el.style.backgroundColor = settings.textInputBgColor;
            el.style.color = settings.textInputFontColor;
            if (el.id === 'edit-note-label' || el.id === 'new-note-label') {
                el.style.backgroundColor = hexToRgba(settings.textInputBgColor, 0.75);
            }
        });

        if (settingsModal) {
            settingsModal.querySelector('#user-name-setting').value = settings.userName;
            settingsModal.querySelector('#title-setting').value = settings.title;
            settingsModal.querySelector('#footer-text-setting').value = settings.footerText;
            settingsModal.querySelector('#session-password-setting').value = settings.sessionPassword || '';
            if (DOMElements.avatarPreview) DOMElements.avatarPreview.src = settings.userAvatar || 'https://www.niilow.com/logo.png';
            settingsModal.querySelector('#bg-color-setting').value = settings.bgColor;
            settingsModal.querySelector('#sidebar-color-setting').value = settings.sidebarColor;
            settingsModal.querySelector('#font-color-setting').value = settings.fontColor;
            settingsModal.querySelector('#fab-color-setting').value = settings.fabColor;
            settingsModal.querySelector('#note-card-color-setting').value = settings.noteCardColor;
            settingsModal.querySelector('#note-card-opacity-setting').value = settings.noteCardOpacity;
            settingsModal.querySelector('#modal-bg-color-setting').value = settings.modalBgColor;
            settingsModal.querySelector('#modal-opacity-setting').value = settings.modalOpacity;
            settingsModal.querySelector('#text-input-bg-color-setting').value = settings.textInputBgColor;
            settingsModal.querySelector('#text-input-font-color-setting').value = settings.textInputFontColor;
            DOMElements.videoWallUrlSetting.value = settings.videoWall || '';
        }
    }

    function renderAll() {
        renderDashboard();
        renderNoteLists();
        renderNotesGrid();
    }

    function renderDashboard() {
        const hour = new Date().getHours();
        const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
        DOMElements.greetingText.textContent = `${greeting}, ${state.settings.userName}!`;

        const recentNotes = state.notes.filter(n => !n.archived).sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).slice(0, 5);
        DOMElements.recentNotesContainer.innerHTML = '';
        recentNotes.forEach(note => {
            const card = document.createElement('div');
            card.className = 'note-card recent-note-card';
            card.dataset.id = note.id;
            const baseColor = note.color || state.settings.noteCardColor;
            const opacity = state.settings.noteCardOpacity || 1;
            card.style.backgroundColor = hexToRgba(baseColor, opacity);
            card.innerHTML = `<div class="note-card-title">${note.title}</div><div class="note-card-content">${note.content}</div>`;
            card.addEventListener('click', () => openEditPane(note.id));
            DOMElements.recentNotesContainer.appendChild(card);
        });
    }

    function getFilteredNotes() {
        const filterText = DOMElements.filterInput.value.toLowerCase();
        if (!filterText) return state.notes;
        return state.notes.filter(note => {
            const titleMatch = (note.title || '').toLowerCase().includes(filterText);
            const contentMatch = (note.content || '').toLowerCase().includes(filterText);
            const labelMatch = (note.label || '').toLowerCase().includes(filterText);
            return titleMatch || contentMatch || labelMatch;
        });
    }

    function renderNoteLists() {
        DOMElements.labelsContainer.innerHTML = '';
        DOMElements.archiveList.innerHTML = '';

        const filteredNotes = getFilteredNotes();

        const activeNotes = filteredNotes.filter(n => !n.archived);
        const archivedNotes = filteredNotes.filter(n => n.archived);

        const buildAndAppendLabelGroups = (container, notes, defaultTitle) => {
            if (notes.length === 0) return;

            const notesByLabel = {};
            const labels = [...new Set(notes.map(n => n.label).filter(Boolean))];
            labels.forEach(label => notesByLabel[label] = []);
            const uncategorized = [];

            notes.forEach(note => {
                if (note.label && notesByLabel[note.label]) {
                    notesByLabel[note.label].push(note);
                } else {
                    uncategorized.push(note);
                }
            });

            const createLabelGroupElement = (title, notesInGroup) => {
                if (notesInGroup.length === 0) return null;

                const details = document.createElement('details');
                details.open = true;
                details.className = 'mt-2';

                const summary = document.createElement('summary');
                summary.className = 'cursor-pointer font-semibold p-1 rounded hover:bg-gray-700';
                summary.textContent = title;

                const listContainer = document.createElement('div');
                listContainer.className = 'pl-2 border-l-2 border-gray-600';

                notesInGroup.forEach(note => {
                    listContainer.appendChild(createNoteListItem(note));
                });

                details.appendChild(summary);
                details.appendChild(listContainer);
                return details;
            };

            const uncategorizedGroup = createLabelGroupElement(defaultTitle, uncategorized);
            if (uncategorizedGroup) {
                container.appendChild(uncategorizedGroup);
            }

            labels.sort().forEach(label => {
                const labeledGroup = createLabelGroupElement(label, notesByLabel[label]);
                if (labeledGroup) {
                    container.appendChild(labeledGroup);
                }
            });
        }

        buildAndAppendLabelGroups(DOMElements.labelsContainer, activeNotes, 'Unsorted Notes');
        buildAndAppendLabelGroups(DOMElements.archiveList, archivedNotes, 'Uncategorized');

        DOMElements.archiveSection.style.display = archivedNotes.length > 0 ? 'block' : 'none';
    }

    function createNoteListItem(note) {
        const noteEl = document.createElement('div');
        noteEl.className = 'p-2 rounded cursor-pointer truncate hover:bg-gray-600';
        noteEl.dataset.id = note.id;
        noteEl.innerText = note.title || "Untitled Note";
        noteEl.addEventListener('click', (e) => {
            e.stopPropagation();
            openEditPane(note.id);
        });
        return noteEl;
    }

    function renderNotesGrid() {
        DOMElements.notesGrid.innerHTML = '';
        const filteredNotes = getFilteredNotes();
        const filterText = DOMElements.filterInput.value.toLowerCase();

        let notesToShow;

        if (filterText) {
            notesToShow = filteredNotes;
        } else {
            notesToShow = filteredNotes.filter(n => n.archived === state.showArchived);
        }

        notesToShow.forEach(note => {
            const card = createNoteCard(note, openEditPane);
            DOMElements.notesGrid.appendChild(card);
        });
        new Sortable(DOMElements.notesGrid, {
            animation: 150,
            ghostClass: 'sortable-ghost',
            disabled: state.selectModeActive,
            delay: 200,
            delayOnTouchOnly: true
        });
    }

    function createNoteCard(note, clickHandler) {
        const card = document.createElement('div');
        card.className = 'note-card';
        card.dataset.id = note.id;

        if (note.archived) {
            card.classList.add('is-archived');
        }
        if (state.selectModeActive && state.selectedNoteIds.has(note.id)) {
            card.classList.add('selected');
        }

        const baseColor = note.color || state.settings.noteCardColor;
        const opacity = state.settings.noteCardOpacity || 1;
        card.style.backgroundColor = hexToRgba(baseColor, opacity);
        card.innerHTML = `<div class="note-card-title">${note.title}</div><div class="note-card-content">${note.content}</div>`;

        card.addEventListener('click', () => {
            if (state.selectModeActive) {
                toggleNoteSelection(note.id, card);
            } else {
                clickHandler(note.id);
            }
        });
        return card;
    }

    function updateTime() {
        const now = new Date();
        DOMElements.timeDisplay.textContent = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    function makeResizable(element, handle, direction) {
        if (!handle || !element) return;
        handle.addEventListener('mousedown', (e) => {
            e.preventDefault();
            const startX = e.clientX;
            const startY = e.clientY;
            const startWidth = element.offsetWidth;
            const startHeight = element.offsetHeight;

            const doDrag = (moveEvent) => {
                if (direction === 'horizontal') {
                    const deltaX = moveEvent.clientX - startX;
                    let newWidth = startWidth + (handle === DOMElements.sidePaneResizeHandle ? -deltaX : deltaX);
                    element.style.width = `${newWidth}px`;
                } else { // vertical
                    const deltaY = moveEvent.clientY - startY;
                    element.style.height = `${startHeight - deltaY}px`;
                }
            };

            const stopDrag = () => {
                document.removeEventListener('mousemove', doDrag);
                document.removeEventListener('mouseup', stopDrag);
            };

            document.addEventListener('mousemove', doDrag);
            document.addEventListener('mouseup', stopDrag);
        });
    }

    async function handleSaveNewNote() {
        const title = DOMElements.newNoteTitleInput.value || 'Untitled Note';
        const content = sanitizeHTML(DOMElements.newNoteEditor.innerHTML);
        const label = DOMElements.newNoteLabelInput.value.trim();
        const color = DOMElements.newNoteCardColorInput.value;
        const now = new Date().toISOString();
        const newNote = {
            id: Date.now().toString(),
            title,
            content,
            createdAt: now,
            updatedAt: now,
            archived: false,
            label,
            color,
            author: state.settings.userName
        };

        const inCollabView = !DOMElements.collaborationView.classList.contains('hidden');

        if (inCollabView) {
            const action = {
                type: 'request_add_note',
                note: newNote
            };
            if (state.isHost) {
                handleHostAction(action, state.peer.id);
            } else {
                const hostConn = state.connections.get(state.roomId);
                if (hostConn && hostConn.open) {
                    hostConn.send(action);
                } else {
                    showNotification('Cannot add note. Not connected to host.', 'error');
                }
            }
        } else {
            state.notes.push(newNote);
            await saveData();
            showNotification('Note saved!');
        }

        closeNewNotePane();
    }

    async function handleSaveEdit(silent = false) {
        if (!state.currentNoteId) return;

        const inCollabView = !DOMElements.collaborationView.classList.contains('hidden');
        const notesSource = inCollabView ? state.collaborationNotes : state.notes;

        const noteIndex = notesSource.findIndex(n => n.id === state.currentNoteId);
        if (noteIndex === -1) return;

        const updatedNote = { ...notesSource[noteIndex]
        };
        updatedNote.title = DOMElements.editNoteTitleInput.value;
        updatedNote.content = sanitizeHTML(DOMElements.editNoteEditor.innerHTML);
        updatedNote.label = DOMElements.editNoteLabelInput.value.trim();
        updatedNote.color = DOMElements.editNoteCardColorInput.value;
        updatedNote.updatedAt = new Date().toISOString();

        if (inCollabView) {
            const action = {
                type: 'request_update_note',
                note: updatedNote
            };
            if (state.isHost) {
                handleHostAction(action, state.peer.id);
            } else {
                const hostConn = state.connections.get(state.roomId);
                if (hostConn && hostConn.open) {
                    hostConn.send(action);
                } else {
                    if (!silent) showNotification('Cannot send edit. Not connected to host.', 'error');
                }
            }
        } else {
            state.notes[noteIndex] = updatedNote;
            await saveData();
            if (!silent) showNotification('Note updated!');
        }

        if (!silent) {
            closeEditPane();
        }
    }

    async function handleDeleteNote() {
        if (!state.currentNoteId) return;
        const inCollabView = !DOMElements.collaborationView.classList.contains('hidden');

        if (inCollabView) {
            const action = {
                type: 'request_delete_note',
                noteId: state.currentNoteId
            };
            if (state.isHost) {
                handleHostAction(action, state.peer.id);
            } else {
                const hostConn = state.connections.get(state.roomId);
                if (hostConn && hostConn.open) {
                    hostConn.send(action);
                } else {
                    showNotification('Cannot send delete request. Not connected to host.', 'error');
                }
            }
        } else {
            state.notes = state.notes.filter(note => note.id !== state.currentNoteId);
            await saveData();
            showNotification('Note deleted.', 'error');
        }

        closeEditPane();
    }

    async function handleArchiveNote() {
        if (!state.currentNoteId) return;
        const inCollabView = !DOMElements.collaborationView.classList.contains('hidden');
        if (inCollabView) {
            showNotification("Archiving is disabled in collaboration mode.", "error");
            return;
        }

        const note = state.notes.find(n => n.id === state.currentNoteId);
        note.archived = !note.archived;
        note.updatedAt = new Date().toISOString();
        await saveData();
        closeEditPane();
        showNotification(note.archived ? 'Note archived.' : 'Note unarchived.');
    }

    async function handleExport() {
        const password = state.settings.sessionPassword;
        if (!password) {
            showNotification('Please set a Session Password in Settings before exporting.', 'error');
            return;
        }
        const settingsForExport = { ...state.settings
        };
        delete settingsForExport.sessionPassword;
        delete settingsForExport.userName;
        const dataToEncrypt = JSON.stringify({
            notes: state.notes,
            settings: settingsForExport
        });
        try {
            const salt = window.crypto.getRandomValues(new Uint8Array(16));
            const keyMaterial = await window.crypto.subtle.importKey('raw', new TextEncoder().encode(password), {
                name: 'PBKDF2'
            }, false, ['deriveKey']);
            const key = await window.crypto.subtle.deriveKey({
                name: 'PBKDF2',
                salt,
                iterations: 100000,
                hash: 'SHA-256'
            }, keyMaterial, {
                name: 'AES-GCM',
                length: 256
            }, true, ['encrypt']);
            const iv = window.crypto.getRandomValues(new Uint8Array(12));
            const encodedData = new TextEncoder().encode(dataToEncrypt);
            const encryptedContent = await window.crypto.subtle.encrypt({
                name: 'AES-GCM',
                iv
            }, key, encodedData);
            const combinedData = new Uint8Array(salt.length + iv.length + encryptedContent.byteLength);
            combinedData.set(salt, 0);
            combinedData.set(iv, salt.length);
            combinedData.set(new Uint8Array(encryptedContent), salt.length + iv.length);
            const blob = new Blob([combinedData], {
                type: 'application/octet-stream'
            });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `${state.settings.title.replace(/\s/g, '-')}-Export.nii`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            showNotification('Secure data exported successfully!');
        } catch (err) {
            console.error("Encryption failed:", err);
            showNotification('Export failed due to an encryption error.', 'error');
        }
    }

    function processNiiFile(file) {
        const password = prompt("Enter the session password for this file:");
        if (!password) {
            showNotification('Password is required to import a file.', 'error');
            return;
        }
        importNiiFile(file, password);
    }

    function handleImport(e) {
        const file = e.target.files[0];
        if (!file) return;
        processNiiFile(file);
        DOMElements.importFileInput.value = '';
    }

    function importNiiFile(file, password) {
        const reader = new FileReader();
        reader.onload = async (event) => {
            try {
                const combinedData = new Uint8Array(event.target.result);
                const salt = combinedData.slice(0, 16);
                const iv = combinedData.slice(16, 28);
                const encryptedContent = combinedData.slice(28);
                const keyMaterial = await window.crypto.subtle.importKey('raw', new TextEncoder().encode(password), {
                    name: 'PBKDF2'
                }, false, ['deriveKey']);
                const key = await window.crypto.subtle.deriveKey({
                    name: 'PBKDF2',
                    salt,
                    iterations: 100000,
                    hash: 'SHA-256'
                }, keyMaterial, {
                    name: 'AES-GCM',
                    length: 256
                }, true, ['decrypt']);
                const decryptedContent = await window.crypto.subtle.decrypt({
                    name: 'AES-GCM',
                    iv
                }, key, encryptedContent);
                const decodedString = new TextDecoder().decode(decryptedContent);
                const importedState = JSON.parse(decodedString);

                let newNotes = [];
                if (Array.isArray(importedState)) {
                    newNotes = importedState;
                } else if (importedState.notes) {
                    newNotes = importedState.notes;
                }

                const existingNoteIds = new Set(state.notes.map(n => n.id));
                const uniqueNewNotes = newNotes.filter(n => !existingNoteIds.has(n.id));
                state.notes.push(...uniqueNewNotes);

                if (importedState.settings) {
                    const currentPassword = state.settings.sessionPassword;
                    const currentUserName = state.settings.userName;
                    state.settings = { ...state.settings,
                        ...importedState.settings,
                        sessionPassword: currentPassword,
                        userName: currentUserName
                    };
                }

                await saveData();
                applySettings();
                showNotification(`${uniqueNewNotes.length} new note(s) imported successfully!`);
            } catch (err) {
                console.error("Decryption/Import failed:", err);
                showNotification('Import failed: Invalid password or corrupted file.', 'error');
            }
        };
        reader.readAsArrayBuffer(file);
    }

    async function handleUrlDataImport(dataFromUrl, password) {
        try {
            const base64 = dataFromUrl.replace(/-/g, '+').replace(/_/g, '/');
            const binary_string = window.atob(base64);
            const len = binary_string.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            const encryptedData = bytes;

            const salt = encryptedData.slice(0, 16);
            const iv = encryptedData.slice(16, 28);
            const data = encryptedData.slice(28);

            const keyMaterial = await window.crypto.subtle.importKey('raw', new TextEncoder().encode(password), {
                name: 'PBKDF2'
            }, false, ['deriveKey']);
            const key = await window.crypto.subtle.deriveKey({
                name: 'PBKDF2',
                salt,
                iterations: 100000,
                hash: 'SHA-256'
            }, keyMaterial, {
                name: 'AES-GCM',
                length: 256
            }, true, ['decrypt']);
            const decryptedCompressed = await window.crypto.subtle.decrypt({
                name: 'AES-GCM',
                iv
            }, key, data);

            const decompressedString = LZString.decompressFromUint8Array(new Uint8Array(decryptedCompressed));
            if (!decompressedString) {
                throw new Error("Decompression failed. The data might be corrupted or the password is wrong.");
            }
            const importedNote = JSON.parse(decompressedString);

            const existingNoteIds = new Set(state.notes.map(n => n.id));

            if (!existingNoteIds.has(importedNote.id)) {
                state.notes.unshift(importedNote);
                await saveData();
                applySettings();
                showNotification(`Imported note "${importedNote.title}"!`, 'success');
            } else {
                showNotification('Note from URL already exists.', 'info');
            }

            history.replaceState({}, document.title, window.location.pathname);

        } catch (err) {
            console.error("URL Data Import failed:", err);
            showNotification('Could not load note from URL. Invalid link or password.', 'error');
            history.replaceState({}, document.title, window.location.pathname);
        }
    }


    function handleClearLocalStorage() {
        openModal(DOMElements.confirmClearModal);
    }

    async function handleShareNoteAsCollab() {
        if (!state.currentNoteId) return;

        if (!state.settings.sessionPassword) {
            showNotification('Please set a Session Password in Settings before sharing a note as a collaboration.', 'error');
            openModal(DOMElements.settingsModal);
            return;
        }

        state.isHost = true;
        state.isSecureSession = true;
        state.roomId = `niilow-${Date.now().toString(36)}`;

        const noteToShare = state.notes.find(n => n.id === state.currentNoteId);
        if (noteToShare) {
            state.collaborationNotes = [{ ...noteToShare }];
        } else {
            showNotification('Could not find the note to share.', 'error');
            return;
        }

        showNotification('Creating secure collaboration session...', 'success');
        DOMElements.loadingOverlay.classList.remove('hidden');
        initPeer();

        closeEditPane();
    }


    function insertImageFile(file, editor) {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const dataUrl = e.target.result;
                const imgHTML = `<img src="${dataUrl}" style="max-width: 100%; height: auto; border-radius: 8px;">`;
                editor.focus();
                document.execCommand('insertHTML', false, imgHTML);
            };
            reader.readAsDataURL(file);
        }
    }

    function handleImageDrop(files, editor) {
        state.activeEditor = editor;
        if (files.length > 0) {
            insertImageFile(files[0], editor);
        }
    }

    function handleImageUpload(event) {
        if (event.target.files.length > 0) {
            insertImageFile(event.target.files[0], state.activeEditor);
        }
        event.target.value = '';
    }

    function handleAvatarUpload(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const dataUrl = e.target.result;
                updateSetting('userAvatar', dataUrl);
            };
            reader.readAsDataURL(file);
        }
        event.target.value = '';
    }

    function handleSaveEmbed() {
        const embedCode = DOMElements.embedCodeInput.value;
        if (embedCode && state.activeEditor) {
            const sanitizedCode = sanitizeHTML(embedCode);
            state.activeEditor.focus();
            document.execCommand('insertHTML', false, sanitizedCode);
            closeModal(DOMElements.embedModal);
            DOMElements.embedCodeInput.value = '';
        }
    }

    function handleAddIframe() {
        const url = DOMElements.iframeUrlInput.value;
        const width = DOMElements.iframeWidthInput.value;
        const height = DOMElements.iframeHeightInput.value;
        if (url) {
            const iframeHTML = `<iframe src="${url}" width="${width}" height="${height}" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
            DOMElements.embedCodeInput.value = iframeHTML;
            closeModal(DOMElements.iframeHelperModal);
        } else {
            showNotification('URL is required to build an iFrame.', 'error');
        }
    }

    function handleAddVideo() {
        const url = DOMElements.videoUrlInput.value;
        const width = DOMElements.videoWidthInput.value;
        const height = DOMElements.videoHeightInput.value;
        const controls = DOMElements.videoControlsCheckbox.checked;

        if (url) {
            if (!url.toLowerCase().endsWith('.mp4')) {
                showNotification('Please provide a URL ending in .mp4', 'error');
                return;
            }
            const controlsAttr = controls ? 'controls' : '';
            const videoHTML = `<video width="${width}" height="${height}" ${controlsAttr}><source src="${url}" type="video/mp4"></video>`;
            DOMElements.embedCodeInput.value = videoHTML;
            closeModal(DOMElements.videoHelperModal);
        } else {
            showNotification('Video URL is required.', 'error');
        }
    }

    function handleAddGameNote(gameUrl, gameTitle) {
        const content = `<iframe src="${gameUrl}" width="500" height="500" style="border:0; width: 100%; height: 500px;" allowfullscreen="" loading="lazy"></iframe>`;
        const now = new Date().toISOString();
        const newNote = {
            id: Date.now().toString(),
            title: gameTitle,
            content: content,
            createdAt: now,
            updatedAt: now,
            archived: false,
            label: 'Games',
            color: '#4a5568',
            author: state.settings.userName
        };

        const action = {
            type: 'request_add_note',
            note: newNote
        };
        if (state.isHost) {
            handleHostAction(action, state.peer.id);
        } else {
            const hostConn = state.connections.get(state.roomId);
            if (hostConn && hostConn.open) {
                hostConn.send(action);
            } else {
                showNotification('Cannot add game. Not connected to host.', 'error');
            }
        }
        closeModal(DOMElements.addGameModal);
    }

    async function updateSetting(key, value) {
        state.settings[key] = value;
        await saveData();
        applySettings();
        if (key === 'noteCardColor' || key === 'noteCardOpacity' || key === 'fontColor') {
            renderNotesGrid();
            renderDashboard();
        }
        if (key === 'videoWall') {
            applyVideoWall();
            if (state.isHost) {
                broadcastToAllPeers({
                    type: 'video_wall_update',
                    url: value
                });
            }
        }
    }

    function openNewNotePane() {
        state.currentNoteId = null;
        DOMElements.newNotePane.classList.add('is-open');
        DOMElements.modalOverlay.classList.remove('hidden');
        setTimeout(() => DOMElements.modalOverlay.classList.remove('opacity-0'), 10);

        const allLabels = [...new Set(state.notes.map(n => n.label).filter(Boolean))];
        DOMElements.labelsDatalist.innerHTML = allLabels.map(l => `<option value="${l}"></option>`).join('');

        DOMElements.newNoteTitleInput.value = '';
        DOMElements.newNoteEditor.innerHTML = '';
        DOMElements.newNoteLabelInput.value = '';
        DOMElements.newNoteCardColorInput.value = state.settings.noteCardColor;
        closeSidebarMobile();
    }

    function closeNewNotePane() {
        DOMElements.newNotePane.classList.remove('is-open');
        updateOverlayState();
    }

    function openEditPane(noteId) {
        state.currentNoteId = noteId;
        const inCollabView = !DOMElements.collaborationView.classList.contains('hidden');
        const notesSource = inCollabView ? state.collaborationNotes : state.notes;
        const note = notesSource.find(n => n.id === noteId);
        if (!note) return;

        const allLabels = [...new Set(notesSource.map(n => n.label).filter(Boolean))];
        DOMElements.labelsDatalist.innerHTML = allLabels.map(l => `<option value="${l}"></option>`).join('');

        DOMElements.editNoteTitleInput.value = note.title;
        DOMElements.editNoteEditor.innerHTML = note.content;
        DOMElements.editNoteLabelInput.value = note.label || '';
        DOMElements.editNoteCardColorInput.value = note.color || state.settings.noteCardColor;

        DOMElements.archiveNoteBtn.title = note.archived ? 'Unarchive' : 'Archive';
        DOMElements.archiveNoteBtn.classList.toggle('bg-green-500', note.archived);
        DOMElements.archiveNoteBtn.classList.toggle('hover:bg-green-600', note.archived);
        DOMElements.archiveNoteBtn.style.display = inCollabView ? 'none' : 'inline-flex';
        DOMElements.shareNoteBtn.style.display = inCollabView ? 'none' : 'inline-flex';


        DOMElements.editNotePane.classList.add('is-open');
        DOMElements.modalOverlay.classList.remove('hidden');
        setTimeout(() => DOMElements.modalOverlay.classList.remove('opacity-0'), 10);
        closeSidebarMobile();
    }

    function closeEditPane() {
        document.querySelectorAll('.remote-cursor').forEach(el => el.remove());
        clearTimeout(autoSaveTimeout);
        DOMElements.editNotePane.classList.remove('is-open');
        state.currentNoteId = null;
        updateOverlayState();
    }

    function toggleChatLogPane() {
        state.isChatLogOpen = !state.isChatLogOpen;
        if (state.isChatLogOpen) {
            renderSessionInfo();
            DOMElements.chatLogPane.classList.add('is-open');
            DOMElements.modalOverlay.classList.remove('hidden');
            setTimeout(() => DOMElements.modalOverlay.classList.remove('opacity-0'), 10);
            DOMElements.fabChatLogBtn.classList.remove('has-unread');
        } else {
            DOMElements.chatLogPane.classList.remove('is-open');
            updateOverlayState();
        }
    }

    function openModal(modal) {
        if (!modal) return;
        DOMElements.modalOverlay.classList.remove('hidden');
        modal.classList.remove('hidden');
        setTimeout(() => {
            DOMElements.modalOverlay.classList.remove('opacity-0');
            modal.classList.remove('opacity-0', 'scale-95');
        }, 10);
    }

    function closeModal(modal) {
        if (!modal) return;
        modal.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            updateOverlayState();
        }, 300);
    }

    function updateOverlayState() {
        const anyPopupOpen = DOMElements.newNotePane.classList.contains('is-open') ||
            DOMElements.editNotePane.classList.contains('is-open') ||
            DOMElements.chatLogPane.classList.contains('is-open') ||
            !DOMElements.calendarModal.classList.contains('hidden') ||
            !DOMElements.settingsModal.classList.contains('hidden') ||
            !DOMElements.embedModal.classList.contains('hidden') ||
            !DOMElements.iframeHelperModal.classList.contains('hidden') ||
            !DOMElements.videoHelperModal.classList.contains('hidden') ||
            !DOMElements.welcomeModal.classList.contains('hidden') ||
            !DOMElements.collabQrCodeModal.classList.contains('hidden') ||
            !DOMElements.confirmClearModal.classList.contains('hidden') ||
            !DOMElements.batchDeleteConfirmModal.classList.contains('hidden') ||
            !DOMElements.collaborationStartModal.classList.contains('hidden') ||
            !DOMElements.saveCollabNotesModal.classList.contains('hidden') ||
            !DOMElements.videoWallModal.classList.contains('hidden') ||
            !DOMElements.addGameModal.classList.contains('hidden') ||
            !DOMElements.whiteboardModal.classList.contains('hidden') ||
            !DOMElements.youtubeModal.classList.contains('hidden') ||
            !DOMElements.importLocalNoteModal.classList.contains('hidden');

        const isSidebarOpen = !DOMElements.sidebar.classList.contains('-translate-x-full');

        if (!anyPopupOpen && !isSidebarOpen) {
            DOMElements.modalOverlay.classList.add('opacity-0');
            setTimeout(() => DOMElements.modalOverlay.classList.add('hidden'), 300);
        } else {
            DOMElements.modalOverlay.classList.remove('hidden');
            setTimeout(() => DOMElements.modalOverlay.classList.remove('opacity-0'), 10);
        }
    }

    function closeSidebarMobile() {
        if (window.innerWidth < 768) {
            DOMElements.sidebar.classList.add('-translate-x-full');
            updateOverlayState();
        }
    }

    function openSessionManagementModal() {
        if (!state.peer) return;

        DOMElements.sessionModalRoomId.textContent = state.roomId;
        const peerListContainer = DOMElements.sessionModalPeerList;
        peerListContainer.innerHTML = '';

        for (const [peerId, info] of state.peerInfo.entries()) {
            const isSelf = peerId === state.peer.id;
            const peerName = isSelf ? `${info.name} (You)` : info.name;
            const peerEl = document.createElement('div');
            peerEl.className = 'flex items-center gap-2 text-sm';
            peerEl.innerHTML = `
                <img src="${info.avatar || 'https://www.niilow.com/logo.png'}" class="w-6 h-6 rounded-full">
                <span>${peerName}</span>
            `;
            peerListContainer.appendChild(peerEl);
        }

        openModal(DOMElements.sessionManagementModal);
    }

    function closeAllPopups() {
        closeNewNotePane();
        closeEditPane();
        if (state.isChatLogOpen) toggleChatLogPane();
        closeModal(DOMElements.calendarModal);
        closeModal(DOMElements.settingsModal);
        closeModal(DOMElements.embedModal);
        closeModal(DOMElements.iframeHelperModal);
        closeModal(DOMElements.videoHelperModal);
        closeModal(DOMElements.welcomeModal);
        closeModal(DOMElements.confirmClearModal);
        closeModal(DOMElements.collabQrCodeModal);
        closeModal(DOMElements.batchDeleteConfirmModal);
        closeModal(DOMElements.collaborationStartModal);
        closeModal(DOMElements.whiteboardModal);
        closeModal(DOMElements.saveCollabNotesModal);
        closeModal(DOMElements.videoWallModal);
        closeModal(DOMElements.addGameModal);
        closeModal(DOMElements.youtubeModal);
        closeModal(DOMElements.sessionManagementModal);
        closeModal(DOMElements.importLocalNoteModal);
    }

    function setupToolbar(toolbarEl, editorEl) {
        toolbarEl.addEventListener('mousedown', (e) => {
            e.preventDefault();
            const target = e.target.closest('button, input');
            if (!target) return;
            const command = target.dataset.command;
            state.activeEditor = editorEl;
            editorEl.focus();

            if (command === 'insertImage') {
                DOMElements.imageUploadInput.click();
            } else if (command === 'insertEmbed') {
                openModal(DOMElements.embedModal);
            } else if (command === 'insertChecklistItem') {
                document.execCommand('insertUnorderedList', false, null);
                const selection = window.getSelection();
                if (selection.rangeCount > 0) {
                    let parent = selection.getRangeAt(0).startContainer;
                    while (parent && parent.tagName !== 'LI') {
                        parent = parent.parentElement;
                    }
                    if (parent && parent.tagName === 'LI') {
                        parent.classList.toggle('task-item');
                    }
                }
            } else if (command) {
                document.execCommand(command, false, target.value || null);
            }
        });
        editorEl.addEventListener('keyup', () => {
            toolbarEl.querySelectorAll('button[data-command]').forEach(btn => {
                try {
                    const isActive = document.queryCommandState(btn.dataset.command);
                    btn.classList.toggle('active', isActive);
                } catch (e) { /* some commands don't support queryCommandState */ }
            });
        });
    }

    function showNotification(message, type = 'success') {
        const {
            notification
        } = DOMElements;
        notification.textContent = message;
        notification.className = `fixed top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-white py-2 px-6 rounded-b-lg shadow-lg transition-transform duration-500 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`;
        notification.classList.remove('hidden');
        setTimeout(() => {
            notification.classList.remove('-translate-y-full');
        }, 10);
        setTimeout(() => {
            notification.classList.add('-translate-y-full');
            setTimeout(() => notification.classList.add('hidden'), 500);
        }, 3000);
    }

    function showView(viewName) {
        ['dashboard', 'notes', 'collaboration'].forEach(view => {
            DOMElements[view + 'View'].classList.add('hidden');
        });
        DOMElements[viewName + 'View'].classList.remove('hidden');

        const inCollab = !!state.peer;
        DOMElements.fabChatLogBtn.classList.toggle('hidden', !inCollab);
    }

    function renderCalendar() {
        const {
            calendarModal
        } = DOMElements;
        if (!calendarModal) return;
        const grid = calendarModal.querySelector('#calendar-grid');
        const monthYear = calendarModal.querySelector('#month-year');
        const notesList = calendarModal.querySelector('#calendar-notes-list');

        grid.innerHTML = '';
        notesList.innerHTML = '';
        const year = state.currentDate.getFullYear();
        const month = state.currentDate.getMonth();
        monthYear.innerText = `${state.currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day => {
            grid.innerHTML += `<div class="font-semibold text-gray-400 text-sm">${day}</div>`;
        });

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDayOfMonth; i++) {
            grid.appendChild(document.createElement('div'));
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayEl = document.createElement('button');
            dayEl.className = 'calendar-day hover:bg-gray-700 p-2 rounded-full';
            dayEl.innerText = day;
            const dateStr = new Date(year, month, day).toISOString().split('T')[0];
            const notesOnDay = state.notes.filter(n => n.updatedAt && n.updatedAt.startsWith(dateStr));

            if (notesOnDay.length > 0) {
                dayEl.classList.add('bg-blue-500', 'text-white');
            }

            dayEl.addEventListener('click', () => {
                document.querySelectorAll('.calendar-day.bg-blue-800').forEach(el => el.classList.remove('bg-blue-800'));
                dayEl.classList.add('bg-blue-800');
                renderCalendarNotes(notesOnDay, notesList);
            });
            grid.appendChild(dayEl);
        }
    }

    function renderCalendarNotes(notesOnDay, notesListEl) {
        notesListEl.innerHTML = '';
        if (notesOnDay.length === 0) {
            notesListEl.innerHTML = `<p class="text-gray-400 p-2">No notes for this day.</p>`;
            return;
        }
        notesOnDay.forEach(note => {
            const noteEl = document.createElement('div');
            noteEl.className = 'p-2 rounded cursor-pointer hover:bg-gray-700';
            noteEl.innerText = note.title;
            noteEl.addEventListener('click', () => {
                closeModal(DOMElements.calendarModal);
                openEditPane(note.id);
            });
            notesListEl.appendChild(noteEl);
        });
    }

    function toggleSelectMode() {
        state.selectModeActive = !state.selectModeActive;
        state.selectedNoteIds.clear();

        if (state.selectModeActive) {
            DOMElements.selectModeBtn.textContent = 'Done';
            DOMElements.notesGrid.classList.add('in-select-mode');
        } else {
            DOMElements.selectModeBtn.textContent = 'Select';
            DOMElements.notesGrid.classList.remove('in-select-mode');
            DOMElements.batchActionBar.classList.add('translate-y-full');
        }
        renderNotesGrid();
    }

    function toggleNoteSelection(noteId, cardElement) {
        if (state.selectedNoteIds.has(noteId)) {
            state.selectedNoteIds.delete(noteId);
            cardElement.classList.remove('selected');
        } else {
            state.selectedNoteIds.add(noteId);
            cardElement.classList.add('selected');
        }

        const count = state.selectedNoteIds.size;
        if (count > 0) {
            DOMElements.selectionCount.textContent = `${count} note${count > 1 ? 's' : ''} selected`;
            DOMElements.batchActionBar.classList.remove('translate-y-full');
        } else {
            DOMElements.batchActionBar.classList.add('translate-y-full');
        }
    }

    function handleBatchDelete() {
        if (state.selectedNoteIds.size === 0) return;
        const count = state.selectedNoteIds.size;
        DOMElements.batchDeleteMessage.textContent = `Are you sure you want to permanently delete these ${count} note${count > 1 ? 's' : ''}?`;
        openModal(DOMElements.batchDeleteConfirmModal);
    }

    async function executeBatchDelete() {
        state.notes = state.notes.filter(note => !state.selectedNoteIds.has(note.id));
        await saveData();
        showNotification(`${state.selectedNoteIds.size} notes deleted.`, 'error');
        closeModal(DOMElements.batchDeleteConfirmModal);
        toggleSelectMode();
    }

    async function handleBatchArchive() {
        if (state.selectedNoteIds.size === 0) return;
        state.notes.forEach(note => {
            if (state.selectedNoteIds.has(note.id)) {
                note.archived = true;
            }
        });
        await saveData();
        showNotification(`${state.selectedNoteIds.size} notes archived.`);
        toggleSelectMode();
    }

    async function handleBatchExport() {
        if (state.selectedNoteIds.size === 0) return;
        let password = state.settings.sessionPassword;
        if (!password) {
            password = prompt("Please set a password for this export:");
            if (!password) {
                showNotification("Password is required for export.", "error");
                return;
            }
        }

        const notesToExport = state.notes.filter(note => state.selectedNoteIds.has(note.id));
        const dataToEncrypt = JSON.stringify(notesToExport);

        try {
            const salt = window.crypto.getRandomValues(new Uint8Array(16));
            const keyMaterial = await window.crypto.subtle.importKey('raw', new TextEncoder().encode(password), {
                name: 'PBKDF2'
            }, false, ['deriveKey']);
            const key = await window.crypto.subtle.deriveKey({
                name: 'PBKDF2',
                salt,
                iterations: 100000,
                hash: 'SHA-256'
            }, keyMaterial, {
                name: 'AES-GCM',
                length: 256
            }, true, ['encrypt']);
            const iv = window.crypto.getRandomValues(new Uint8Array(12));
            const encodedData = new TextEncoder().encode(dataToEncrypt);
            const encryptedContent = await window.crypto.subtle.encrypt({
                name: 'AES-GCM',
                iv
            }, key, encodedData);
            const combinedData = new Uint8Array(salt.length + iv.length + encryptedContent.byteLength);
            combinedData.set(salt, 0);
            combinedData.set(iv, salt.length);
            combinedData.set(new Uint8Array(encryptedContent), salt.length + iv.length);
            const blob = new Blob([combinedData], {
                type: 'application/octet-stream'
            });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `Niilow-Batch-Export.nii`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            showNotification(`${notesToExport.length} notes exported successfully!`);
            toggleSelectMode();
        } catch (err) {
            console.error("Batch export failed:", err);
            showNotification('Export failed due to an encryption error.', 'error');
        }
    }

    // --- Video Wall Functions ---
    function handleSetVideoWall() {
        const url = DOMElements.videoWallUrlInput.value.trim();
        if (url) {
            updateSetting('videoWall', url);
            applyVideoWall();
            closeModal(DOMElements.videoWallModal);
        } else {
            showNotification('Please enter a valid video URL.', 'error');
        }
    }

    function handleRemoveVideoWall() {
        updateSetting('videoWall', '');
        applyVideoWall();
        DOMElements.videoWallUrlInput.value = '';
        closeModal(DOMElements.videoWallModal);
    }

    function applyVideoWall() {
        const url = state.settings.videoWall;
        const backdrop = DOMElements.videoWallBackdrop;
        backdrop.innerHTML = '';

        if (!url) return;

        let videoElement;
        if (url.includes('youtu.be') || url.includes('youtube.com')) {
            const videoIdMatch = url.match(/(?:v=|\/|embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
            const videoId = videoIdMatch ? videoIdMatch[1] : null;
            if (videoId) {
                const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1&iv_load_policy=3`;
                videoElement = document.createElement('iframe');
                videoElement.src = embedUrl;
                videoElement.frameborder = '0';
                videoElement.allow = 'autoplay; encrypted-media;';
            }
        } else {
            videoElement = document.createElement('video');
            videoElement.src = url;
            videoElement.autoplay = true;
            videoElement.muted = true;
            videoElement.loop = true;
            videoElement.playsInline = true;
        }

        if (videoElement) {
            backdrop.innerHTML = '<div class="overlay"></div>';
            backdrop.appendChild(videoElement);
        }
    }

    // --- Collaboration Logic (WebRTC with PeerJS) ---

    function generateCollabQrCode() {
        if (!state.roomId) return;
        const baseUrl = window.location.origin + window.location.pathname;
        let inviteLink = `${baseUrl}?channel=${state.roomId}`;
        if (state.isSecureSession) {
            inviteLink += '&secure=true';
        }

        DOMElements.collabInviteLinkDisplay.textContent = inviteLink;
        DOMElements.collabQrCodeContainer.innerHTML = '';
        const qr = qrcode(0, 'M');
        qr.addData(inviteLink);
        qr.make();
        DOMElements.collabQrCodeContainer.innerHTML = qr.createImgTag(5, 10);

        if (state.isChatLogOpen) {
            toggleChatLogPane();
            setTimeout(() => openModal(DOMElements.collabQrCodeModal), 400);
        } else {
            openModal(DOMElements.collabQrCodeModal);
        }
    }

    function initPeer() {
        if (state.peer) {
            state.peer.destroy();
        }

        const peerId = state.isHost ? state.roomId : undefined;

        state.peer = new Peer(peerId, {
            host: '0.peerjs.com',
            port: 443,
            path: '/',
            secure: true,
            debug: 2,
            config: {
              iceServers: [
                { urls: 'stun:stun.l.google.com:19302' },
                { urls: 'stun:stun1.l.google.com:19302' },
                { urls: 'stun:stun2.l.google.com:19302' },
              ]
            }
        });

        state.peer.on('open', (id) => {
            console.log('PeerJS open. My ID is:', id);
            DOMElements.loadingOverlay.classList.add('hidden');
            
            const myPeerId = id;
            state.peerInfo.set(myPeerId, {
                name: state.settings.userName,
                avatar: state.settings.userAvatar,
                color: `#${Math.floor(Math.random()*16777215).toString(16)}`
            });

            if (state.isHost) {
                state.roomId = id;
                renderSessionInfo();
                showNotification('Channel ready!', 'success');
                showView('collaboration');
                renderCollaborationNotesGrid();
                DOMElements.mainContent.style.paddingBottom = '60px';
                if (state.isSecureSession) {
                    generateCollabQrCode();
                }
                playSound('https://www.niilow.com/join.mp3');
            } else {
                if (state.roomId) {
                    const conn = state.peer.connect(state.roomId, {
                        metadata: {
                            userName: state.settings.userName,
                            peerId: myPeerId,
                            avatar: state.settings.userAvatar
                        },
                        reliable: true
                    });
                    setupConnection(conn);
                }
            }
        });

        state.peer.on('connection', (conn) => {
            console.log('Host received an incoming connection from', conn.peer);
            setupConnection(conn);
        });

        // The new, simpler error handler
        state.peer.on('error', (err) => {
            console.error('PeerJS error:', err);
            DOMElements.loadingOverlay.classList.add('hidden');
            
            let message = `A connection error occurred: ${err.type}`;
            if (err.type === 'peer-unavailable' || err.type === 'unavailable-id') {
                message = `Could not connect to channel "${state.roomId}". It may be unavailable.`;
            } else if (err.type === 'network') {
                message = 'Network error. Please check your connection.';
            } else if (err.type === 'disconnected') {
                // This can sometimes fire on session leave, so we can ignore it or handle cleanly
                console.log('Peer disconnected.');
                return; 
            }
            showNotification(message, 'error');
            leaveSession(); // Cleanly leave the session on critical errors
        });
    }

    function joinSession(roomIdFromUrl = null) {
        DOMElements.loadingOverlay.classList.remove('hidden');
        const roomId = roomIdFromUrl || DOMElements.customRoomIdInput.value.trim();
        if (!roomId) {
            showNotification("Please enter a room name.", "error");
            DOMElements.loadingOverlay.classList.add('hidden');
            return;
        };
        closeModal(DOMElements.collaborationStartModal);
        
        // This is a temporary peer to test the connection
        const tempPeer = new Peer(); 
        let connectionTimeout;
    
        const assumeHostRole = () => {
            clearTimeout(connectionTimeout);
            tempPeer.destroy();
            state.isHost = true;
            state.roomId = roomId;
            initPeer(); // Re-initialize as the actual host
        };
    
        tempPeer.on('open', () => {
            // Temporary peer is ready, now try to connect to the desired room
            const conn = tempPeer.connect(roomId, {
                metadata: {
                    userName: state.settings.userName,
                    peerId: tempPeer.id,
                    avatar: state.settings.userAvatar
                },
                reliable: true
            });
    
            conn.on('open', () => {
                // SUCCESS! The room exists and we connected.
                clearTimeout(connectionTimeout);
                console.log('Successfully connected to existing session.');
                state.peer = tempPeer; // Promote the temp peer to the main peer
                state.roomId = roomId;
                state.isHost = false;
                setupConnection(conn);
            });
    
            // Set a timeout. If we can't connect in 4 seconds, assume the room is empty.
            connectionTimeout = setTimeout(assumeHostRole, 4000);
        });
    
        tempPeer.on('error', (err) => {
            // If the peer is unavailable, we know for sure the room is empty.
            if (err.type === 'peer-unavailable') {
                assumeHostRole();
            }
        });
    }

    function leaveSession() {
        if (state.collaborationNotes.length > 0 && !state.isSecureSession) {
            openModal(DOMElements.saveCollabNotesModal);
        } else {
            _finishLeaveSession();
        }
    }

    async function handleSaveCollabNotes(shouldSave) {
        closeModal(DOMElements.saveCollabNotesModal);
        if (shouldSave) {
            const hostInfo = state.peerInfo.get(state.roomId) || {
                name: 'Session'
            };
            const collabTag = `Collab: ${hostInfo.name} (${new Date().toLocaleDateString()})`;
            let newNotesCount = 0;

            state.collaborationNotes.forEach(collabNote => {
                const existingNoteIndex = state.notes.findIndex(localNote => localNote.id === collabNote.id);
                if (existingNoteIndex === -1) {
                    const newLocalNote = { ...collabNote,
                        label: collabTag
                    };
                    state.notes.push(newLocalNote);
                    newNotesCount++;
                }
            });

            if (newNotesCount > 0) {
                await saveData();
                showNotification(`Saved ${newNotesCount} new note(s) from the session.`, 'success');
            } else {
                showNotification('No new notes to save from the session.', 'info');
            }
        }
        _finishLeaveSession();
    }

    function _finishLeaveSession() {
        if (state.whiteboard.isDrawing) {
            state.whiteboard.isDrawing = false;
        }
        if (state.peer) {
            state.peer.destroy();
        }
        state.peer = null;
        state.connections.clear();
        state.peerInfo.clear();
        state.roomId = null;
        state.isHost = false;
        state.isSecureSession = false;
        state.collaborationNotes = [];
        state.chatLog = [];

        showView('dashboard');
        DOMElements.mainContent.style.paddingBottom = '';
        DOMElements.collaborationNotesGrid.innerHTML = '';
        showNotification('You have left the session.', 'info');
        playSound('https://www.niilow.com/dismiss.mp3');
    }

    function setupConnection(conn) {
        conn.on('open', () => {
            conn.reliable = true;
            
            if (state.isHost && state.isSecureSession) {
                conn.send({ type: 'request_password' });
            } else {
                establishConnection(conn);
            }
        });

        conn.on('data', (data) => {
            console.log('Received data:', data, 'from', conn.peer);
            if (data.type === 'submit_password') {
                if (data.password === state.settings.sessionPassword) {
                    conn.send({ type: 'password_accepted' });
                    establishConnection(conn);
                } else {
                    conn.send({ type: 'password_rejected' });
                    setTimeout(() => conn.close(), 500);
                }
                return;
            }
            handleReceivedData(data, conn.peer);
        });

        conn.on('close', () => {
            const peerId = conn.peer;
            const peerInfo = state.peerInfo.get(peerId) || {
                name: 'A user'
            };
            showNotification(`${peerInfo.name} has left the session.`, 'error');
            state.connections.delete(peerId);
            state.peerInfo.delete(peerId);
            state.syncingPeers.delete(peerId);
            state.syncUpdateQueue.delete(peerId);

            const cursorEl = document.getElementById(`cursor-${peerId}`);
            if (cursorEl) {
                cursorEl.remove();
            }

            broadcastToAllPeers({
                type: 'peer_left',
                peerId
            });

            renderSessionInfo();
        });

        conn.on('error', (err) => {
            console.error('Connection error:', err);
        });
    }

    function establishConnection(conn) {
        const peerId = conn.peer;
        console.log('Connection established with', peerId);
        state.connections.set(peerId, conn);

        if (state.isHost) {
            const newPeerId = conn.metadata.peerId;
            state.syncingPeers.add(newPeerId);
            const newPeerInfo = { 
                name: conn.metadata.userName, 
                avatar: conn.metadata.avatar,
                color: `#${Math.floor(Math.random()*16777215).toString(16)}`
            };
            state.peerInfo.set(newPeerId, newPeerInfo);
            
            const initialSyncData = {
                chatLog: state.chatLog,
                peerInfo: Object.fromEntries(state.peerInfo),
                hostName: state.settings.userName,
                videoWall: state.settings.videoWall,
                totalNotes: state.collaborationNotes.length
            };

            conn.send({
                type: 'initial_sync',
                payload: initialSyncData
            });

            broadcastToAllPeers({ type: 'new_peer_announcement', peerId: newPeerId, info: newPeerInfo }, [newPeerId]);

            renderSessionInfo();
        }
        showNotification(`${conn.metadata.userName || 'A user'} has joined the session.`, 'success');
    }
    
    function promptForPassword(conn) {
        const existingModal = document.getElementById('password-prompt-modal');
        if (existingModal) existingModal.remove();

        const modal = document.createElement('div');
        modal.id = 'password-prompt-modal';
        modal.className = 'modal fixed inset-0 z-[10001] flex items-center justify-center p-4';
        modal.innerHTML = `
            <div class="bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6 text-center">
                <h2 class="text-2xl font-bold mb-4 text-white">Password Required</h2>
                <p class="text-white mb-6">This session is protected. Please enter the password.</p>
                <input type="password" id="session-password-input" class="text-input-field w-full p-2 rounded mb-6 text-center bg-gray-700 text-white">
                <div class="flex justify-end gap-4">
                    <button id="cancel-password-prompt" class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
                    <button id="submit-password-prompt" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Join</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        openModal(modal);

        const passwordInput = modal.querySelector('#session-password-input');
        const submitBtn = modal.querySelector('#submit-password-prompt');
        const cancelBtn = modal.querySelector('#cancel-password-prompt');

        const handleSubmit = () => {
            conn.send({ type: 'submit_password', password: passwordInput.value });
            closeModal(modal);
            setTimeout(() => modal.remove(), 500);
        };

        submitBtn.addEventListener('click', handleSubmit);
        passwordInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') handleSubmit();
        });
        cancelBtn.addEventListener('click', () => {
            conn.close();
            closeModal(modal);
            setTimeout(() => modal.remove(), 500);
        });
    }

    function handleHostAction(data, fromPeerId) {
        let broadcastPayload = null;
        let isNoteAction = false;

        switch (data.type) {
            case 'request_add_note': {
                if (!state.collaborationNotes.some(n => n.id === data.note.id)) {
                    state.collaborationNotes.push(data.note);
                    renderCollaborationNotesGrid();
                }
                broadcastPayload = { type: 'add_note', note: data.note };
                isNoteAction = true;
                break;
            }
            case 'request_update_note': {
                const noteIndex = state.collaborationNotes.findIndex(n => n.id === data.note.id);
                if (noteIndex > -1) {
                    state.collaborationNotes[noteIndex] = data.note;
                    renderCollaborationNotesGrid();
                }
                broadcastPayload = { type: 'update_note', note: data.note };
                isNoteAction = true;
                break;
            }
            case 'request_delete_note': {
                state.collaborationNotes = state.collaborationNotes.filter(n => n.id !== data.noteId);
                renderCollaborationNotesGrid();
                broadcastPayload = { type: 'delete_note', noteId: data.noteId };
                isNoteAction = true;
                break;
            }
            case 'request_send_chat': {
                broadcastPayload = { type: 'chat_message', ...data.payload };
                break;
            }
            case 'request_whiteboard_draw': {
                broadcastPayload = { type: 'whiteboard_draw', data: data.data };
                break;
            }
            case 'request_whiteboard_clear': {
                broadcastPayload = { type: 'whiteboard_clear' };
                break;
            }
            case 'request_youtube_state_change': {
                broadcastPayload = { type: 'youtube_state_change', ...data.payload };
                break;
            }
            case 'request_whiteboard_history': {
                const conn = state.connections.get(fromPeerId);
                if (conn && conn.open) {
                    conn.send({ type: 'whiteboard_history_sync', history: state.whiteboard.history });
                }
                break;
            }
            case 'request_cursor_update': {
                broadcastPayload = { 
                    type: 'cursor_update', 
                    from: fromPeerId,
                    noteId: data.noteId,
                    selection: data.selection
                };
                break;
            }
        }
        
        if (broadcastPayload) {
            broadcastPayload.from = state.peer.id;
            for (const [peerId, conn] of state.connections.entries()) {
                if (conn && conn.open) {
                    if (isNoteAction && state.syncingPeers.has(peerId)) {
                        if (!state.syncUpdateQueue.has(peerId)) {
                            state.syncUpdateQueue.set(peerId, []);
                        }
                        state.syncUpdateQueue.get(peerId).push(broadcastPayload);
                    } else {
                        conn.send(broadcastPayload);
                    }
                }
            }
            
            if (broadcastPayload.type === 'whiteboard_draw') {
                 state.whiteboard.history.push(broadcastPayload.data);
            } else if (broadcastPayload.type === 'whiteboard_clear') {
                state.whiteboard.history = [];
            }
        }
    }

    function handleReceivedData(data, fromPeerId) {
        const hostActions = [
            'request_add_note', 
            'request_update_note', 
            'request_delete_note',
            'request_send_chat',
            'request_whiteboard_draw',
            'request_whiteboard_clear',
            'request_youtube_state_change',
            'request_whiteboard_history',
            'request_cursor_update',
            'request_notes'
        ];

        if (state.isHost && hostActions.includes(data.type)) {
            handleHostAction(data, fromPeerId);
            return;
        }

        switch (data.type) {
            case 'request_password':
                promptForPassword(state.connections.get(state.roomId));
                break;
            case 'password_rejected':
                showNotification('Incorrect password.', 'error');
                _finishLeaveSession();
                break;
            case 'password_accepted':
                showNotification('Password accepted!', 'success');
                break;
            case 'initial_sync': {
                const syncData = data.payload;
                state.chatLog = syncData.chatLog || [];
                state.peerInfo = new Map(Object.entries(syncData.peerInfo || {}));
                if (syncData.videoWall) {
                    state.settings.videoWall = syncData.videoWall;
                    applyVideoWall();
                }
                renderChatLog();
                renderSessionInfo();
                showView('collaboration');
                DOMElements.loadingOverlay.classList.add('hidden');
                DOMElements.mainContent.style.paddingBottom = '60px';
                showNotification(`Joined session hosted by ${syncData.hostName || 'Host'}! Syncing notes...`, 'success');
                playSound('https://www.niilow.com/join.mp3');

                if (syncData.totalNotes > 0) {
                    const hostConn = state.connections.get(state.roomId);
                    if (hostConn && hostConn.open) {
                        hostConn.send({ type: 'request_notes' });
                    }
                }
                break;
            }
            case 'sync_note': {
                if (!state.collaborationNotes.some(n => n.id === data.note.id)) {
                    state.collaborationNotes.push(data.note);
                }
                renderCollaborationNotesGrid();
                break;
            }
            case 'sync_complete': {
                showNotification('All notes have been synced!', 'success');
                break;
            }
            case 'new_peer_announcement':
                state.peerInfo.set(data.peerId, data.info);
                renderSessionInfo();
                break;
            case 'add_note':
                if (!state.collaborationNotes.some(n => n.id === data.note.id)) {
                    state.collaborationNotes.push(data.note);
                    renderCollaborationNotesGrid();
                    showNotification(`Note "${data.note.title}" was added to the session.`, 'info');
                }
                break;
            case 'update_note':
                const noteIndex = state.collaborationNotes.findIndex(n => n.id === data.note.id);
                if (noteIndex > -1) {
                    state.collaborationNotes[noteIndex] = data.note;
                }
                renderCollaborationNotesGrid();
                break;
            case 'delete_note':
                state.collaborationNotes = state.collaborationNotes.filter(n => n.id !== data.noteId);
                renderCollaborationNotesGrid();
                break;
            case 'peer_left':
                const cursorEl = document.getElementById(`cursor-${data.peerId}`);
                if (cursorEl) cursorEl.remove();
                
                state.connections.delete(data.peerId);
                state.peerInfo.delete(data.peerId);
                renderSessionInfo();
                break;
            case 'chat_message':
                if (!state.chatLog.some(msg => msg.id === data.id)) {
                    state.chatLog.push(data);
                    renderChatLog();
                    displayChatBubble(data);
                    if (!state.isChatLogOpen) {
                        DOMElements.fabChatLogBtn.classList.add('has-unread');
                    }
                    if(data.from !== state.peer.id) {
                         playSound('https://www.niilow.com/chat.mp3');
                    }
                }
                break;
            case 'video_wall_update':
                state.settings.videoWall = data.url;
                applyVideoWall();
                break;
            case 'whiteboard_draw':
                if(data.from !== state.peer.id) {
                    drawOnCanvas(data.data);
                }
                break;
            case 'whiteboard_clear':
                if(state.whiteboard.ctx) {
                    state.whiteboard.ctx.clearRect(0, 0, DOMElements.whiteboardCanvas.width, DOMElements.whiteboardCanvas.height);
                }
                break;
            case 'whiteboard_status':
                if (data.status === 'open') {
                    state.whiteboard.activeUsers.add(data.from);
                } else {
                    state.whiteboard.activeUsers.delete(data.from);
                }
                updateWhiteboardIndicator();
                break;
            case 'youtube_state_change':
                if (data.from !== state.peer.id) {
                    const player = state.youtubePlayers.get(data.noteId);
                    if (player) {
                        handleYoutubeStateSync(player, data.newState, data.time);
                    }
                }
                break;
            case 'whiteboard_history_sync':
                data.history.forEach(drawData => drawOnCanvas(drawData));
                state.whiteboard.history = data.history;
                break;
            case 'cursor_update':
                if (data.from !== state.peer.id) {
                    renderRemoteCursor(data.from, data.noteId, data.selection);
                }
                break;
        }
    }

    function broadcastToAllPeers(data, exclude = []) {
        console.log('Broadcasting data to all peers:', data);
        data.from = state.peer.id;
        for (const [peerId, conn] of state.connections.entries()) {
            if (conn && conn.open && !exclude.includes(peerId)) {
                conn.send(data);
            }
        }
    }

    function renderCollaborationNotesGrid() {
        if (DOMElements.collaborationNotesGrid) {
            DOMElements.collaborationNotesGrid.innerHTML = '';
            state.collaborationNotes.forEach(note => {
                const card = createNoteCard(note, openEditPane);
                DOMElements.collaborationNotesGrid.appendChild(card);
                if (note.type === 'youtube-sync' && note.videoId) {
                    createYouTubePlayer(note.id, note.videoId);
                }
            });
        }
    }

    function renderSessionInfo() {
        if (!state.peer) return;
        const hub = DOMElements.sessionInfoHub;
        hub.innerHTML = `
                <details>
                    <summary class="cursor-pointer font-semibold p-2 rounded hover:bg-gray-700 flex justify-between items-center">
                        <span>Session Info (${state.peerInfo.size})</span>
                        <svg class="w-5 h-5 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                    </summary>
                    <div class="p-2 space-y-3">
                        <div id="hub-peer-list" class="space-y-1"></div>
                        <div class="flex items-center text-sm">
                            <span class="mr-2">Room:</span>
                            <span class="font-mono p-1 bg-gray-700 rounded">${state.roomId || '...'}</span>
                            <button id="hub-invite-btn" class="ml-2 p-1 rounded hover:bg-gray-600" title="Get Invite Link/QR Code">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                            </button>
                        </div>
                        <button id="hub-leave-btn" class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Leave Session</button>
                    </div>
                </details>
            `;

        const peerListContainer = hub.querySelector('#hub-peer-list');
        for (const [peerId, info] of state.peerInfo.entries()) {
            const isSelf = peerId === state.peer.id;
            const peerName = isSelf ? `${info.name} (You)` : info.name;
            const hubPeerEl = document.createElement('div');
            hubPeerEl.className = 'flex items-center gap-2';
            hubPeerEl.innerHTML = `<img src="${info.avatar || 'https://www.niilow.com/logo.png'}" class="w-6 h-6 rounded-full"><span>${peerName}</span>`;
            peerListContainer.appendChild(hubPeerEl);
        }

        hub.querySelector('#hub-invite-btn').addEventListener('click', generateCollabQrCode);
        hub.querySelector('#hub-leave-btn').addEventListener('click', leaveSession);
    }

    function sendChatMessage(message, inputElement) {
        const trimmedMessage = message.trim();
        if (!trimmedMessage || !state.peer) return;    

        const messageId = state.peer.id + '-' + Date.now();
        const senderInfo = {
            name: state.settings.userName,
            avatar: state.settings.userAvatar
        };
    
        const chatPayload = {
            id: messageId,
            from: state.peer.id,
            message: trimmedMessage,
            senderInfo: senderInfo,
            timestamp: Date.now()
        };

        const request = {
            type: 'request_send_chat',
            payload: chatPayload
        };

        if (state.isHost) {
            handleHostAction(request, state.peer.id);
        } else {
            const hostConn = state.connections.get(state.roomId);
            if (hostConn && hostConn.open) {
                hostConn.send(request);
            }
            if (!state.chatLog.some(msg => msg.id === chatPayload.id)) {
                state.chatLog.push(chatPayload);
                renderChatLog();
                displayChatBubble(chatPayload);
            }
        }
        
        if (inputElement) {
            inputElement.value = '';
        }
        playSound('https://www.niilow.com/chat.mp3');
    }


    function displayChatBubble({
        from,
        message,
        senderInfo
    }) {
        const info = senderInfo || state.peerInfo.get(from) || {
            name: 'Unknown',
            avatar: 'https://www.niilow.com/logo.png'
        };

        const container = document.createElement('div');
        container.className = 'floating-chat-bubble-container';

        const avatarImg = document.createElement('img');
        avatarImg.src = info.avatar || 'https://www.niilow.com/logo.png';

        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.innerHTML = `<strong>${info.name}</strong><span>${message}</span>`;

        container.appendChild(avatarImg);
        container.appendChild(bubble);

        DOMElements.chatContainer.appendChild(container);

        setTimeout(() => {
            container.remove();
        }, 8000);
    }

    function renderChatLog() {
        DOMElements.chatLogMessages.innerHTML = '';
        state.chatLog.forEach(msg => {
            const senderInfo = msg.senderInfo || state.peerInfo.get(msg.from) || {
                name: 'Unknown',
                avatar: 'https://www.niilow.com/logo.png'
            };
            const isSelf = msg.from === state.peer.id;

            const line = document.createElement('div');
            line.className = `chat-log-line ${isSelf ? 'is-self' : ''}`;

            const avatar = document.createElement('img');
            avatar.src = senderInfo.avatar || 'https://www.niilow.com/logo.png';

            const bubble = document.createElement('div');
            bubble.className = 'chat-log-bubble';
            bubble.innerHTML = `<strong>${senderInfo.name}</strong><span>${msg.message}</span>`;

            line.appendChild(avatar);
            line.appendChild(bubble);
            DOMElements.chatLogMessages.appendChild(line);
        });
        DOMElements.chatLogMessages.scrollTop = DOMElements.chatLogMessages.scrollHeight;
    }
    
    function renderRemoteCursor(peerId, noteId, selection) {
        if (noteId !== state.currentNoteId || !DOMElements.editNotePane.classList.contains('is-open')) {
             const cursorEl = document.getElementById(`cursor-${peerId}`);
             if(cursorEl) cursorEl.style.display = 'none';
             return;
        }

        const editor = DOMElements.editNoteEditor;
        let cursorEl = document.getElementById(`cursor-${peerId}`);
        const peerInfo = state.peerInfo.get(peerId) || { name: 'User', color: '#f56565' };
        
        if (!cursorEl) {
            cursorEl = document.createElement('div');
            cursorEl.id = `cursor-${peerId}`;
            cursorEl.className = 'remote-cursor';
            cursorEl.dataset.name = peerInfo.name;
            cursorEl.style.backgroundColor = peerInfo.color;
            cursorEl.style.setProperty('--cursor-color', peerInfo.color);
            editor.parentElement.appendChild(cursorEl);
        }
        
        cursorEl.style.display = 'block';

        function getPos(charOffset) {
            const range = document.createRange();
            let el = editor;
            let a = charOffset;
            let n, p = 0;
            while (el.childNodes.length > 0) {
                 n = el.firstChild;
                 p = n.textContent.length;
                 if (a < p) {
                      range.setStart(n, a);
                      return range.getBoundingClientRect();
                 }
                 a -= p;
                 el.removeChild(n);
            }
        }
        
        try {
            const textNodes = [];
            function getTextNodes(node) {
                if (node.nodeType === 3) {
                    textNodes.push(node);
                } else {
                    for (const child of node.childNodes) {
                        getTextNodes(child);
                    }
                }
            }
            getTextNodes(editor);
            
            let charCount = 0;
            let startNode, startOffset;

            for (const node of textNodes) {
                const nextCharCount = charCount + node.length;
                if (nextCharCount >= selection.start) {
                    startNode = node;
                    startOffset = selection.start - charCount;
                    break;
                }
                charCount = nextCharCount;
            }

            if (startNode) {
                const range = document.createRange();
                range.setStart(startNode, startOffset);
                const rect = range.getBoundingClientRect();
                const editorRect = editor.getBoundingClientRect();
                
                cursorEl.style.left = `${rect.left - editorRect.left}px`;
                cursorEl.style.top = `${rect.top - editorRect.top + editor.scrollTop}px`;
            }
        } catch(e) {
            console.warn("Could not render remote cursor:", e);
        }
    }


    // --- YouTube Sync Functions ---
    function getYouTubeVideoId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }

    function handleAddYouTubeNote() {
        const url = DOMElements.youtubeUrlInput.value.trim();
        const videoId = getYouTubeVideoId(url);

        if (!videoId) {
            showNotification("Invalid YouTube URL. Please try again.", "error");
            return;
        }

        const now = new Date().toISOString();
        const newNote = {
            id: Date.now().toString(),
            title: "YouTube Sync",
            content: `<div id="player-${Date.now()}" class="youtube-player-container"></div>`,
            createdAt: now,
            updatedAt: now,
            archived: false,
            label: "YouTube",
            color: '#c4302b',
            type: 'youtube-sync',
            videoId: videoId
        };

        const action = { type: 'request_add_note', note: newNote };
        if (state.isHost) {
            handleHostAction(action, state.peer.id);
        } else {
            const hostConn = state.connections.get(state.roomId);
            if (hostConn && hostConn.open) hostConn.send(action);
        }

        DOMElements.youtubeUrlInput.value = '';
        closeModal(DOMElements.youtubeModal);
    }

    function onYouTubePlayerStateChange(event, noteId) {
        if (state.isYTPlayerSyncing) return;

        const payload = {
            noteId: noteId,
            newState: event.data,
            time: event.target.getCurrentTime(),
        };
        
        const request = { type: 'request_youtube_state_change', payload: payload };

        if(state.isHost) {
            handleHostAction(request, state.peer.id);
        } else {
            const hostConn = state.connections.get(state.roomId);
            if (hostConn && hostConn.open) hostConn.send(request);
        }
    }
    
    function handleYoutubeStateSync(player, newState, time) {
        state.isYTPlayerSyncing = true;
        const currentTime = player.getCurrentTime();
        if (Math.abs(currentTime - time) > 1.5) {
            player.seekTo(time, true);
        }

        if (newState === YT.PlayerState.PLAYING && player.getPlayerState() !== YT.PlayerState.PLAYING) {
            player.playVideo();
        } else if (newState === YT.PlayerState.PAUSED && player.getPlayerState() !== YT.PlayerState.PAUSED) {
            player.pauseVideo();
        }

        setTimeout(() => { state.isYTPlayerSyncing = false; }, 200);
    }

    function createYouTubePlayer(noteId, videoId) {
        const playerId = `player-${noteId}`;
        const playerContainer = document.getElementById(playerId);
        if (!playerContainer || state.youtubePlayers.has(noteId)) return;

        const player = new YT.Player(playerId, {
            height: '100%', width: '100%', videoId: videoId,
            events: { 'onStateChange': (e) => onYouTubePlayerStateChange(e, noteId) }
        });
        state.youtubePlayers.set(noteId, player);
    }


    // --- Whiteboard Functions ---
    function updateWhiteboardIndicator() {
        const live = state.whiteboard.activeUsers.size > 0;
        DOMElements.whiteboardBtn.classList.toggle('is-live', live);
    }

    function redrawWhiteboard() {
        if (!state.whiteboard.ctx) return;
        const canvas = DOMElements.whiteboardCanvas;
        
        const parent = canvas.parentElement;
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;

        state.whiteboard.history.forEach(data => drawOnCanvas(data));
    }
    
    function initWhiteboard() {
        const canvas = DOMElements.whiteboardCanvas;
        const ctx = canvas.getContext('2d');
        state.whiteboard.ctx = ctx;

        const getCoords = (e) => {
            const rect = canvas.getBoundingClientRect();
            const touch = e.touches ? e.touches[0] : e;
            return {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
            };
        };

        const startDrawing = (e) => {
            e.preventDefault();
            state.whiteboard.isDrawing = true;
            const coords = getCoords(e);
            [state.whiteboard.lastX, state.whiteboard.lastY] = [coords.x, coords.y];
        };

        const stopDrawing = () => {
            state.whiteboard.isDrawing = false;
        };

        const draw = (e) => {
            if (!state.whiteboard.isDrawing) return;
            e.preventDefault();
            const coords = getCoords(e);
            const drawData = {
                x0: state.whiteboard.lastX,
                y0: state.whiteboard.lastY,
                x1: coords.x,
                y1: coords.y,
                color: DOMElements.wbColorPicker.value,
                size: DOMElements.wbBrushSize.value,
            };
            drawOnCanvas(drawData);
            const request = { type: 'request_whiteboard_draw', data: drawData };
            if (state.isHost) {
                handleHostAction(request, state.peer.id);
            } else {
                const hostConn = state.connections.get(state.roomId);
                if (hostConn && hostConn.open) hostConn.send(request);
            }
            [state.whiteboard.lastX, state.whiteboard.lastY] = [coords.x, coords.y];
        };

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);
        canvas.addEventListener('touchstart', startDrawing, { passive: false });
        canvas.addEventListener('touchmove', draw, { passive: false });
        canvas.addEventListener('touchend', stopDrawing);
    }

    function drawOnCanvas({ x0, y0, x1, y1, color, size }) {
        const ctx = state.whiteboard.ctx;
        if (!ctx) return;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = color;
        ctx.lineWidth = size;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
    }

    function broadcastClear() {
        if(state.whiteboard.ctx) {
            state.whiteboard.ctx.clearRect(0, 0, DOMElements.whiteboardCanvas.width, DOMElements.whiteboardCanvas.height);
            const request = { type: 'request_whiteboard_clear' };
            if (state.isHost) {
                handleHostAction(request, state.peer.id);
            } else {
                const hostConn = state.connections.get(state.roomId);
                if (hostConn && hostConn.open) hostConn.send(request);
            }
        }
    }
    
    // --- Session Injector Functions ---
    function openImportLocalNoteModal() {
        renderLocalNotePickerList();
        DOMElements.importNoteSearch.value = '';
        openModal(DOMElements.importLocalNoteModal);
    }
    
    function renderLocalNotePickerList() {
        const listEl = DOMElements.importNoteList;
        const filterText = DOMElements.importNoteSearch.value.toLowerCase();
        
        const notesToRender = state.notes.filter(note => {
            return !note.archived && (note.title.toLowerCase().includes(filterText) || note.content.toLowerCase().includes(filterText));
        });

        if (notesToRender.length === 0) {
            listEl.innerHTML = `<p class="text-gray-400 text-center p-4">No matching local notes found.</p>`;
            return;
        }

        listEl.innerHTML = notesToRender.map(note => `
            <div class="flex items-center p-2 rounded hover:bg-gray-700">
                <input type="checkbox" data-note-id="${note.id}" class="mr-4 h-5 w-5 rounded">
                <div class="flex-grow">
                    <p class="font-semibold">${note.title}</p>
                    <p class="text-sm text-gray-400 truncate">${note.content.replace(/<[^>]+>/g, '')}</p>
                </div>
            </div>
        `).join('');
    }

    function handleConfirmImportLocalNotes() {
        const selectedCheckboxes = DOMElements.importNoteList.querySelectorAll('input[type="checkbox"]:checked');
        if (selectedCheckboxes.length === 0) {
            showNotification('No notes selected to import.', 'error');
            return;
        }

        selectedCheckboxes.forEach(checkbox => {
            const noteId = checkbox.dataset.noteId;
            const noteToImport = state.notes.find(n => n.id === noteId);

            if (noteToImport && !state.collaborationNotes.some(cn => cn.id === noteToImport.id)) {
                const action = { type: 'request_add_note', note: { ...noteToImport } };
                if (state.isHost) {
                    handleHostAction(action, state.peer.id);
                } else {
                    const hostConn = state.connections.get(state.roomId);
                    if (hostConn && hostConn.open) {
                        hostConn.send(action);
                    }
                }
            }
        });

        showNotification(`${selectedCheckboxes.length} note(s) sent to session.`, 'success');
        closeModal(DOMElements.importLocalNoteModal);
    }
    
    function showImageContextMenu(imageElement, x, y) {
        const existingMenu = document.getElementById('image-context-menu');
        if (existingMenu) {
            existingMenu.remove();
        }

        const menu = document.createElement('div');
        menu.id = 'image-context-menu';
        menu.style.left = `${x}px`;
        menu.style.top = `${y}px`;

        const downloadBtn = document.createElement('button');
        downloadBtn.textContent = 'Download Image';
        
        downloadBtn.addEventListener('click', () => {
            const a = document.createElement('a');
            a.href = imageElement.src;
            a.download = `Niilow-Image-${Date.now()}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            menu.remove();
        });

        menu.appendChild(downloadBtn);
        document.body.appendChild(menu);
    }

    // --- Main Event Listener Setup ---
    function addEventListeners() {
        DOMElements.mobileMenuBtn.addEventListener('click', () => {
            DOMElements.sidebar.classList.toggle('-translate-x-full');
            DOMElements.modalOverlay.classList.toggle('hidden');
            DOMElements.modalOverlay.classList.toggle('opacity-0');
        });

        DOMElements.closeWelcomeModalBtn.addEventListener('click', () => closeModal(DOMElements.welcomeModal));
        DOMElements.closeCollabQrCodeModalBtn.addEventListener('click', () => closeModal(DOMElements.collabQrCodeModal));
        DOMElements.copyLinkFromModalBtn.addEventListener('click', () => {
            const linkText = DOMElements.collabInviteLinkDisplay.textContent;
            navigator.clipboard.writeText(linkText).then(() => {
                showNotification('Invite link copied to clipboard!', 'success');
            });
        });
        
        DOMElements.shareNoteBtn.addEventListener('click', handleShareNoteAsCollab);

        DOMElements.selectModeBtn.addEventListener('click', toggleSelectMode);
        DOMElements.batchExportBtn.addEventListener('click', handleBatchExport);
        DOMElements.batchArchiveBtn.addEventListener('click', handleBatchArchive);
        DOMElements.batchDeleteBtn.addEventListener('click', handleBatchDelete);
        DOMElements.cancelBatchDeleteBtn.addEventListener('click', () => closeModal(DOMElements.batchDeleteConfirmModal));
        DOMElements.confirmBatchDeleteActionBtn.addEventListener('click', executeBatchDelete);


        DOMElements.fabAddNoteBtn.addEventListener('click', openNewNotePane);
        DOMElements.cancelNewNoteBtn.addEventListener('click', closeNewNotePane);
        DOMElements.saveNewNoteBtn.addEventListener('click', handleSaveNewNote);

        DOMElements.cancelEditNoteBtn.addEventListener('click', closeEditPane);
        DOMElements.saveEditNoteBtn.addEventListener('click', () => handleSaveEdit(false));
        DOMElements.deleteNoteBtn.addEventListener('click', handleDeleteNote);
        DOMElements.archiveNoteBtn.addEventListener('click', handleArchiveNote);
        
        const editEditor = DOMElements.editNoteEditor;
        const broadcastSelection = () => {
            if (!state.peer || !state.currentNoteId || document.activeElement !== editEditor) return;

            const selection = window.getSelection();
            if (selection.rangeCount === 0) return;

            const range = selection.getRangeAt(0);
            
            const preSelectionRange = document.createRange();
            preSelectionRange.selectNodeContents(editEditor);
            preSelectionRange.setEnd(range.startContainer, range.startOffset);
            const start = preSelectionRange.toString().length;
            
            const payload = {
                type: 'request_cursor_update',
                noteId: state.currentNoteId,
                selection: { start: start, end: start + range.toString().length }
            };

            if (state.isHost) {
                handleHostAction(payload, state.peer.id);
            } else {
                const hostConn = state.connections.get(state.roomId);
                if (hostConn && hostConn.open) hostConn.send(payload);
            }
        };
        editEditor.addEventListener('keyup', broadcastSelection);
        document.addEventListener('selectionchange', broadcastSelection);
        
        const autoSaveHandler = () => {
            clearTimeout(autoSaveTimeout);
            if (DOMElements.editNotePane.classList.contains('is-open')) {
                autoSaveTimeout = setTimeout(() => handleSaveEdit(true), 2000);
            }
        };
        DOMElements.editNoteTitleInput.addEventListener('input', autoSaveHandler);
        DOMElements.editNoteEditor.addEventListener('input', autoSaveHandler);


        let searchDebounceTimeout;
        DOMElements.filterInput.addEventListener('input', () => {
            clearTimeout(searchDebounceTimeout);
            searchDebounceTimeout = setTimeout(() => {
                const filterText = DOMElements.filterInput.value;
                if (filterText.length > 0 && DOMElements.dashboardView.classList.contains('hidden')) {
                    renderNoteLists();
                    renderNotesGrid();
                } else if (filterText.length > 0) {
                    DOMElements.dashboardView.classList.add('hidden');
                    DOMElements.notesView.classList.remove('hidden');
                    renderNoteLists();
                    renderNotesGrid();
                } else {
                    renderNoteLists();
                    renderNotesGrid();
                }
            }, 400);
        });
        
        DOMElements.modalOverlay.addEventListener('click', (e) => {
            if (e.target === DOMElements.modalOverlay) {
                closeAllPopups();
                closeSidebarMobile();
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!DOMElements.collabActionsMenu.classList.contains('hidden') && 
                !DOMElements.collabActionsMenu.contains(e.target) && 
                !DOMElements.collabActionsBtn.contains(e.target)) {
                DOMElements.collabActionsMenu.classList.add('hidden');
            }
            const existingMenu = document.getElementById('image-context-menu');
            if (existingMenu) {
                existingMenu.remove();
            }
        });


        DOMElements.dashboardLink.addEventListener('click', (e) => {
            e.preventDefault();
            showView('dashboard');
            closeSidebarMobile();
        });
        DOMElements.allNotesLink.addEventListener('click', (e) => {
            e.preventDefault();
            state.showArchived = false;
            DOMElements.archiveToggle.checked = false;
            showView('notes');
            renderNotesGrid();
            closeSidebarMobile();
        });

        DOMElements.collaborationLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (state.peer) {
                const inCollabView = !DOMElements.collaborationView.classList.contains('hidden');
                if (inCollabView) {
                    openSessionManagementModal();
                } else {
                    showView('collaboration');
                }
            } else {
                openModal(DOMElements.collaborationStartModal);
            }
            closeSidebarMobile();
        });

        DOMElements.archiveToggle.addEventListener('change', e => {
            state.showArchived = e.target.checked;
            renderNotesGrid();
        });

        DOMElements.calendarBtn.addEventListener('click', () => {
            renderCalendar();
            openModal(DOMElements.calendarModal);
        });
        DOMElements.settingsBtn.addEventListener('click', () => {
            applySettings();
            openModal(DOMElements.settingsModal);
        });

        DOMElements.saveEmbedBtn.addEventListener('click', handleSaveEmbed);
        DOMElements.cancelEmbedBtn.addEventListener('click', () => closeModal(DOMElements.embedModal));
        DOMElements.iframeHelperBtn.addEventListener('click', () => openModal(DOMElements.iframeHelperModal));
        DOMElements.addIframeBtn.addEventListener('click', handleAddIframe);
        DOMElements.cancelIframeHelperBtn.addEventListener('click', () => closeModal(DOMElements.iframeHelperModal));
        DOMElements.videoHelperBtn.addEventListener('click', () => openModal(DOMElements.videoHelperModal));
        DOMElements.addVideoBtn.addEventListener('click', handleAddVideo);
        DOMElements.cancelVideoHelperBtn.addEventListener('click', () => closeModal(DOMElements.videoHelperModal));
        
        DOMElements.importLocalNoteBtn.addEventListener('click', () => {
            openImportLocalNoteModal();
            DOMElements.collabActionsMenu.classList.add('hidden');
        });
        DOMElements.cancelImportLocalNoteBtn.addEventListener('click', () => closeModal(DOMElements.importLocalNoteModal));
        DOMElements.confirmImportLocalNoteBtn.addEventListener('click', handleConfirmImportLocalNotes);
        DOMElements.importNoteSearch.addEventListener('input', renderLocalNotePickerList);
        
        DOMElements.collabActionsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            DOMElements.collabActionsMenu.classList.toggle('hidden');
        });
        
        DOMElements.videoWallBtn.addEventListener('click', () => {
            openModal(DOMElements.videoWallModal);
            DOMElements.collabActionsMenu.classList.add('hidden');
        });
        DOMElements.cancelVideoWallBtn.addEventListener('click', () => closeModal(DOMElements.videoWallModal));
        DOMElements.saveVideoWallBtn.addEventListener('click', handleSetVideoWall);
        DOMElements.removeVideoWallBtn.addEventListener('click', handleRemoveVideoWall);

        DOMElements.addGameBtn.addEventListener('click', () => {
            openModal(DOMElements.addGameModal);
            DOMElements.collabActionsMenu.classList.add('hidden');
        });
        
        DOMElements.whiteboardBtn.addEventListener('click', () => {
            redrawWhiteboard();
            openModal(DOMElements.whiteboardModal);
            DOMElements.collabActionsMenu.classList.add('hidden');
        });

        DOMElements.addYoutubeBtn.addEventListener('click', () => {
            openModal(DOMElements.youtubeModal);
            DOMElements.collabActionsMenu.classList.add('hidden');
        });

        DOMElements.cancelAddGameBtn.addEventListener('click', () => closeModal(DOMElements.addGameModal));
        document.getElementById('add-game-connectfour').addEventListener('click', () => handleAddGameNote('https://www.niilow.com/connectfour.html', 'Connect 4'));
        document.getElementById('add-game-tcycle').addEventListener('click', () => handleAddGameNote('https://www.niilow.com/tcycle.html', 'Tron'));
        document.getElementById('add-game-pong').addEventListener('click', () => handleAddGameNote('https://www.niilow.com/pong.html', 'Pong'));
        
        DOMElements.cancelYoutubeAddBtn.addEventListener('click', () => closeModal(DOMElements.youtubeModal));
        DOMElements.confirmYoutubeAddBtn.addEventListener('click', handleAddYouTubeNote);

        const body = DOMElements.body;
        body.addEventListener('dragenter', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const items = e.dataTransfer.items;
            if (items && items.length > 0 && !items[0].type.startsWith('image/')) {
                DOMElements.globalDropZone.classList.remove('hidden');
            }
        });
        body.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
        body.addEventListener('dragleave', (e) => {
            if (!body.contains(e.relatedTarget)) {
                DOMElements.globalDropZone.classList.add('hidden');
            }
        });
        body.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            DOMElements.globalDropZone.classList.add('hidden');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const niiFile = Array.from(files).find(file => file.name.endsWith('.nii'));
                if (niiFile) {
                    processNiiFile(niiFile);
                }
            }
        });


        if (DOMElements.settingsModal) {
            DOMElements.settingsModal.querySelector('#close-settings').addEventListener('click', () => closeModal(DOMElements.settingsModal));
            DOMElements.settingsModal.querySelector('#import-btn').addEventListener('click', () => DOMElements.importFileInput.click());
            DOMElements.settingsModal.querySelector('#export-btn').addEventListener('click', handleExport);
            DOMElements.clearStorageBtn.addEventListener('click', handleClearLocalStorage);
            DOMElements.avatarUploadBtn.addEventListener('click', () => DOMElements.avatarUploadInput.click());
            DOMElements.avatarUploadInput.addEventListener('change', handleAvatarUpload);
            const settingsInputs = [{
                el: DOMElements.settingsModal.querySelector('#user-name-setting'),
                key: 'userName'
            }, {
                el: DOMElements.settingsModal.querySelector('#title-setting'),
                key: 'title'
            }, {
                el: DOMElements.settingsModal.querySelector('#footer-text-setting'),
                key: 'footerText'
            }, {
                el: DOMElements.settingsModal.querySelector('#session-password-setting'),
                key: 'sessionPassword'
            }, {
                el: DOMElements.settingsModal.querySelector('#bg-color-setting'),
                key: 'bgColor'
            }, {
                el: DOMElements.settingsModal.querySelector('#sidebar-color-setting'),
                key: 'sidebarColor'
            }, {
                el: DOMElements.settingsModal.querySelector('#font-color-setting'),
                key: 'fontColor'
            }, {
                el: DOMElements.settingsModal.querySelector('#fab-color-setting'),
                key: 'fabColor'
            }, {
                el: DOMElements.settingsModal.querySelector('#note-card-color-setting'),
                key: 'noteCardColor'
            }, {
                el: DOMElements.settingsModal.querySelector('#note-card-opacity-setting'),
                key: 'noteCardOpacity'
            }, {
                el: DOMElements.settingsModal.querySelector('#modal-bg-color-setting'),
                key: 'modalBgColor'
            }, {
                el: DOMElements.settingsModal.querySelector('#modal-opacity-setting'),
                key: 'modalOpacity'
            }, {
                el: DOMElements.settingsModal.querySelector('#text-input-bg-color-setting'),
                key: 'textInputBgColor'
            }, {
                el: DOMElements.settingsModal.querySelector('#text-input-font-color-setting'),
                key: 'textInputFontColor'
            },
            { el: DOMElements.settingsModal.querySelector('#video-wall-url-setting'), key: 'videoWall' }
        ];
            settingsInputs.forEach(({
                el,
                key
            }) => {
                if (el) el.addEventListener('input', (e) => updateSetting(key, e.target.value))
            });
        }
        if (DOMElements.calendarModal) {
            DOMElements.calendarModal.querySelector('#prev-month').addEventListener('click', () => {
                state.currentDate.setMonth(state.currentDate.getMonth() - 1);
                renderCalendar();
            });
            DOMElements.calendarModal.querySelector('#next-month').addEventListener('click', () => {
                state.currentDate.setMonth(state.currentDate.getMonth() + 1);
                renderCalendar();
            });
        }
        if (DOMElements.confirmClearModal) {
            DOMElements.deleteConfirmationInput.addEventListener('input', () => {
                if (DOMElements.deleteConfirmationInput.value === 'DELETE') {
                    DOMElements.confirmClearActionBtn.disabled = false;
                    DOMElements.confirmClearActionBtn.classList.remove('cursor-not-allowed', 'bg-gray-500');
                    DOMElements.confirmClearActionBtn.classList.add('bg-red-600', 'hover:bg-red-700');
                } else {
                    DOMElements.confirmClearActionBtn.disabled = true;
                    DOMElements.confirmClearActionBtn.classList.add('cursor-not-allowed', 'bg-gray-500');
                    DOMElements.confirmClearActionBtn.classList.remove('bg-red-600', 'hover:bg-red-700');
                }
            });
            DOMElements.confirmClearActionBtn.addEventListener('click', async () => {
                if (DOMElements.deleteConfirmationInput.value === 'DELETE') {
                    await db.clear('notes');
                    await db.clear('settings');
                    localStorage.clear();
                    showNotification("All data has been cleared. The app will now reload.", "success");
                    setTimeout(() => window.location.reload(), 1500);
                }
            });
            DOMElements.cancelClearBtn.addEventListener('click', () => closeModal(DOMElements.confirmClearModal));
        }
        makeResizable(DOMElements.sidebar, DOMElements.sidebarResizeHandle, 'horizontal');
        makeResizable(DOMElements.editNotePane, DOMElements.sidePaneResizeHandle, 'horizontal');
        makeResizable(DOMElements.newNotePane, DOMElements.bottomResizeHandle, 'vertical');
        DOMElements.imageUploadInput.addEventListener('change', handleImageUpload);
        DOMElements.importFileInput.addEventListener('change', handleImport);

        [DOMElements.editNoteEditor, DOMElements.newNoteEditor].forEach(editor => {
            const container = editor.closest('.editor-container');
            container.addEventListener('dragenter', e => {
                e.stopPropagation();
                e.preventDefault();
                const items = e.dataTransfer.items;
                if (items && items.length > 0 && items[0].type.startsWith('image/')) {
                    DOMElements.globalDropZone.classList.add('hidden');
                    container.classList.add('drop-zone-active');
                }
            });
            container.addEventListener('dragover', e => {
                e.preventDefault();
                e.stopPropagation();
            });
            container.addEventListener('dragleave', e => {
                e.stopPropagation();
                e.preventDefault();
                if (!container.contains(e.relatedTarget)) {
                    container.classList.remove('drop-zone-active');
                }
            });
            container.addEventListener('drop', e => {
                e.stopPropagation();
                e.preventDefault();
                DOMElements.globalDropZone.classList.add('hidden');
                container.classList.remove('drop-zone-active');
                handleImageDrop(e.dataTransfer.files, editor);
            });
        });

        [DOMElements.editNoteEditor, DOMElements.newNoteEditor].forEach(editor => {
            editor.addEventListener('click', e => {
                const listItem = e.target.closest('li.task-item');
                if (listItem) {
                    e.preventDefault();
                    listItem.classList.toggle('checked');
                    if (editor.id === 'edit-note-editor') {
                        handleSaveEdit(true);
                    }
                }
            });

            editor.addEventListener('contextmenu', (e) => {
                if (e.target.tagName === 'IMG') {
                    e.preventDefault();
                    showImageContextMenu(e.target, e.clientX, e.clientY);
                }
            });
            editor.addEventListener('touchstart', (e) => {
                if (e.target.tagName === 'IMG') {
                    touchTimer = setTimeout(() => {
                        showImageContextMenu(e.target, e.touches[0].clientX, e.touches[0].clientY);
                    }, 500);
                }
            });
            editor.addEventListener('touchend', () => {
                clearTimeout(touchTimer);
            });
            editor.addEventListener('touchmove', () => {
                clearTimeout(touchTimer);
            });
        });

        DOMElements.joinSessionBtn.addEventListener('click', () => joinSession());
        DOMElements.cancelCollaborationStartBtn.addEventListener('click', () => closeModal(DOMElements.collaborationStartModal));

        DOMElements.sendChatBtn.addEventListener('click', () => sendChatMessage(DOMElements.chatInput.value, DOMElements.chatInput));
        DOMElements.chatInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') sendChatMessage(DOMElements.chatInput.value, DOMElements.chatInput);
        });

        DOMElements.fabChatLogBtn.addEventListener('click', () => {
            if (DOMElements.collaborationView.classList.contains('hidden')) {
                showView('collaboration');
            }
            toggleChatLogPane();
        });
        DOMElements.closeChatLogBtn.addEventListener('click', toggleChatLogPane);
        DOMElements.sendChatLogBtn.addEventListener('click', () => sendChatMessage(DOMElements.chatLogInput.value, DOMElements.chatLogInput));
        DOMElements.chatLogInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') sendChatMessage(DOMElements.chatLogInput.value, DOMElements.chatLogInput);
        });

        DOMElements.wbCloseBtn.addEventListener('click', () => {
            broadcastToAllPeers({ type: 'whiteboard_status', status: 'closed' });
            state.whiteboard.activeUsers.delete(state.peer.id);
            updateWhiteboardIndicator();
            closeModal(DOMElements.whiteboardModal);
        });
        DOMElements.wbClearBtn.addEventListener('click', broadcastClear);
        DOMElements.wbBrushSize.addEventListener('input', (e) => {
            const size = e.target.value;
            DOMElements.wbBrushPreview.style.width = `${size}px`;
            DOMElements.wbBrushPreview.style.height = `${size}px`;
        });
        
        DOMElements.wbColorPicker.addEventListener('input', (e) => {
            DOMElements.wbBrushPreview.style.backgroundColor = e.target.value;
        });
        
        DOMElements.whiteboardModal.addEventListener('transitionend', () => {
             if (DOMElements.whiteboardModal.classList.contains('hidden')) return;
             broadcastToAllPeers({ type: 'whiteboard_status', status: 'open' });
        });


        DOMElements.confirmSaveCollabBtn.addEventListener('click', () => handleSaveCollabNotes(true));
        DOMElements.declineSaveCollabBtn.addEventListener('click', () => handleSaveCollabNotes(false));

        DOMElements.sessionModalCloseBtn.addEventListener('click', () => closeModal(DOMElements.sessionManagementModal));
        DOMElements.sessionModalLeaveBtn.addEventListener('click', () => {
            closeModal(DOMElements.sessionManagementModal);
            leaveSession();
        });
        DOMElements.sessionModalCopyBtn.addEventListener('click', () => {
            const baseUrl = window.location.origin + window.location.pathname;
            const inviteLink = `${baseUrl}?channel=${state.roomId}`;
            navigator.clipboard.writeText(inviteLink)
                .then(() => showNotification('Invite link copied to clipboard!', 'success'));
        });
        DOMElements.sessionModalQrBtn.addEventListener('click', () => {
            closeModal(DOMElements.sessionManagementModal);
            generateCollabQrCode();
        });
    }

    async function init() {
        await db.init('NiilowDB', 1, (e) => {
            const dbInstance = e.target.result;
            if (!dbInstance.objectStoreNames.contains('notes')) {
                dbInstance.createObjectStore('notes', {
                    keyPath: 'id'
                });
            }
            if (!dbInstance.objectStoreNames.contains('settings')) {
                dbInstance.createObjectStore('settings');
            }
        });
        await loadFromDB();

        const currentUrl = new URL(window.location.href);
        const dataFromUrl = currentUrl.searchParams.get('data');
        const channelRoomId = currentUrl.searchParams.get('channel');
        
        history.replaceState({}, document.title, window.location.pathname);

        if (channelRoomId) {
            showNotification(`Attempting to join channel: ${channelRoomId}`, 'info');
            joinSession(channelRoomId);
        } else if (dataFromUrl) {
            let password = prompt("This note link is from an older version. Please enter the password to import it:");
            if (password) {
                 await handleUrlDataImport(dataFromUrl, password);
            }
        }


        applySettings();
        applyVideoWall();
        renderAll();
        addEventListeners();
        initWhiteboard();
        setupToolbar(DOMElements.newNoteToolbar, DOMElements.newNoteEditor);
        setupToolbar(DOMElements.editToolbar, DOMElements.editNoteEditor);
        setInterval(updateTime, 1000);
        updateTime();

        const firstVisit = await db.get('settings', 'firstVisit');
        if (firstVisit === undefined) {
            openModal(DOMElements.welcomeModal);
            db.put('settings', false, 'firstVisit');
        }
    }
    
    window.onYouTubeIframeAPIReady = function() {
    };

    init();

})();
