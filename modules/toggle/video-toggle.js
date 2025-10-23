import state from '../data/state.js';

import { enterMVMode, exitMVMode } from '../utils/mv-mode-utils.js';


/**
 * 设置视频播放按钮
 * @description 点击按钮切换mv的播放和暂停状态
 */
function setupVideoToggle() {
    state.videoButton.addEventListener("click", () => {
        if (!state.isMVMode) {
            enterMVMode();
        } else {
            exitMVMode();
        }
    });
}

export {
    setupVideoToggle
}