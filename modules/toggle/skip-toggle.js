import state from '../data/state.js';
import { skipToSeconds } from '../data/mv-lyric-data.js';
import { hideUI } from '../utils/ui-utils.js';


/**
 * 设置跳过前奏按钮
 */
function setupSkipPreludeToggle() {
    state.skipPreludeButton.addEventListener("click", () => {
        state.video.currentTime = skipToSeconds;

        hideUI(state.videoButton);
        hideUI(state.skipPreludeButton);
    });
}

export {
    setupSkipPreludeToggle,
}