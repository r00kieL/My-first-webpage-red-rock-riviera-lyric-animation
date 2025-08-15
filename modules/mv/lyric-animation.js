import {
    lyricTimings,
    skipToMs
} from '../data/mv-lyric-data.js';

import state from '../data/state.js';
import statusStore from '../data/mv-lyric-data.js';

import {
    showUI,
    hideUI,
} from '../utils/ui-utils.js';

import {
    resetLyricLines,
} from '../utils/lyric-utils.js';



/**
 * MV模式下的动画(逐帧触发，需要调用器)
 * @returns 只有在mv模式下才触发
 */
function monitorLyricAnimation() {
    if (!state.isMonitoringLyrics) return;

    const currentTime = state.video.currentTime * 1000;

    if (currentTime <= skipToMs) {
        showUI(state.skipPreludeButton);
    } else {
        hideUI(state.skipPreludeButton);
    }

    lyricTimings.forEach((timing, index) => {
        const currentLine = state.lines[index];
        const currentStrongs = currentLine.querySelectorAll("strong");
        const currentStatus = statusStore.lyricStatus[index];

        // 歌词行浮出
        if (currentTime >= timing.floatAt && !currentStatus.floatAt) {
            currentLine.style.opacity = 1;
            currentLine.style.transform = "translateY(0)";
            currentStatus.floatAt = true;
        }

        // 发光效果
        if (currentTime >= timing.glowAt && !currentStatus.glowAt) {
            currentStrongs.forEach((strong) => {
                strong.classList.add("highlight");
            });
            currentStatus.glowAt = true;
        }

        // 发光结束时间
        if (currentTime >= timing.glowEnd && !currentStatus.glowEnd) {
            currentStrongs.forEach((strong) => {
                strong.classList.remove("highlight");
                strong.classList.add("bold-only");
            });
            currentStatus.glowEnd = true;
        }
    });

    if (
        statusStore.lyricStatus[statusStore.lyricStatus.length - 1].glowEnd &&
        !state.allLyricLinesAnimationFinish
    ) {
        state.allLyricLinesAnimationFinish = true;
        setTimeout(() => {
            resetLyricLines(0);
            showUI(state.videoButton);
        }, 20800);
    }
}

/**
 * 调用MV模式下的动画函数的函数
 * @returns 只能在出于动画状态下触发
 */
function startMonitorLyricAnimation() {
    if (state.isMonitoringLyrics) return;

    state.isMonitoringLyrics = true;
    state.allLyricLinesAnimationFinish = false;

    function frameCallback() {
        monitorLyricAnimation(state.video);

        if (!state.allLyricLinesAnimationFinish) {
            requestAnimationFrame(frameCallback);
        } else {
            state.isMonitoringLyrics = false;
        }
    }

    requestAnimationFrame(frameCallback);
}

export {
    monitorLyricAnimation,
    startMonitorLyricAnimation
};