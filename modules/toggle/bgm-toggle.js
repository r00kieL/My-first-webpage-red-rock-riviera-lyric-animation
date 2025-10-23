import state from '../data/state.js';


/**
 * 设置背景音乐播放按钮
 * @description 点击按钮切换背景音乐的播放和暂停状态
 */
function setupBgmToggle() {
    // 获取音频组件，和播放按钮
    let isPlaying = false; // 设置音乐播放状态，默认不播放
    state.bgm.volume = 0.5; // 设置音量为0.5

    // 按钮逻辑：点击切换播放/暂停音乐
    state.bgmButton.addEventListener("click", () => {
        if (state.isMusicMode) {
            state.bgm.pause();
            state.bgmButton.textContent = "播放音乐";
        } else {
            state.bgm.play();
            state.bgmButton.textContent = "暂停音乐";
        }

        state.isMusicMode = !state.isMusicMode;
    });
}

export {
    setupBgmToggle,
}