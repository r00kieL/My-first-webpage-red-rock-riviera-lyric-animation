import state from '../data/state.js'

import {
    disableButtons,
    enableButtons,
} from '../utils/general-utils.js';
import {
    getLineFloatDelay,
    getGlowBeginTime,
    getGlowDurationTime,
    getLyricResetDelay,

    resetLyricLines,
    TriggerlineAnimation,
    addHighLight,
    resetLyricLine,
} from '../utils/lyric-utils.js';


/**
 * 设置主页模式下的歌词动画
 * @description 按照固定时间逐行显示歌词，并在每行歌词中添加发光效果
 */
function setupLyricAnimationButton() {
    let clickCount = 0;
    let isPlaying = false;

    state.lyricAnimationButton.addEventListener("click", () => {
        if (isPlaying) return;

        isPlaying = true;
        clickCount++;

        const lyricControlButtons = [
            { button: state.lyricAnimationButton, text: "播放歌词动画" },
            { button: state.videoButton }
        ];

        disableButtons(lyricControlButtons);

        resetLyricLines(0.1);

        // 逐行触发歌词动画
        state.lines.forEach((line, index) => {
            setTimeout(() => {
                TriggerlineAnimation(line)
            }, getLineFloatDelay(index, clickCount));

            setTimeout(() => {
                addHighLight(line);
            }, getGlowBeginTime(index, clickCount));

            setTimeout(() => {
                resetLyricLine(line);
            }, getGlowDurationTime(index, clickCount));
        });

        setTimeout(() => {
            isPlaying = false;

            enableButtons(lyricControlButtons)
        }, getLyricResetDelay(clickCount));
    });
}

export {
    setupLyricAnimationButton,
}