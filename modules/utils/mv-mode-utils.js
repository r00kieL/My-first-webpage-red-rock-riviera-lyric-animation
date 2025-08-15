import state from '../data/state.js';
import statusStore from '../data/mv-lyric-data.js';

import { resetLyricLines } from './lyric-utils.js';
import {
    hideUIExclude,
    hideUI,
    showAllUI,
    showUI,
} from './ui-utils.js';
import { startMonitorLyricAnimation } from '../mv/lyric-animation.js';


/**
 * 视频结束时的状态清理函数
 * 
 * 功能包括：
 * - 回到主页
 * - 重置状态数组
 */
function handleVideoEnded() {
    exitMVMode();

    statusStore.lyricStatus.forEach((s) => {
        s.floatAt = false;
        s.glowAt = false;
        s.glowEnd = false;
    });
}

/**
 * 进入MV模式。
 * 
 * 功能包括：
 * - 设置MV模式状态标记
 * - 取消静音，将音量调节至50%，随后开始播放视频
 * - 显示视频组件，并修改按钮文本为“暂停MV”
 * - 重置歌词状态
 * - 隐藏所有UI，仅保留MV播放按钮，并显示“跳过前奏”按钮
 * - 启动歌词动画的逐帧监听
 * - 注册视频结束时的状态清理函数
 */
function enterMVMode() {
    state.isMVMode = true;

    state.video.volume = 0.5;
    state.video.muted = false;
    state.video.play();

    state.video.style.opacity = 1;
    state.videoButton.textContent = "暂停MV";

    resetLyricLines(0);

    hideUIExclude(state.videoButton);
    showUI(state.skipPreludeButton);

    startMonitorLyricAnimation(state.video);

    state.video.addEventListener('ended', handleVideoEnded);
}

/**
 * 退出mv模式
 * 
 * 功能包括：
 * - 设置MV模式状态标记
 * - 暂停视频，并隐藏视频组件
 * - 修改按钮文本为“播放MV”
 * - 修改歌词动画监听比状态标记
 * - 重置歌词状态
 * - 显示所有UI，并隐藏“跳过前奏”按钮
 * - 移除频结束时的状态清理函数
 */
function exitMVMode() {
    state.isMVMode = false;

    state.video.pause();
    state.video.style.opacity = 0;

    state.videoButton.textContent = "播放MV";

    state.isMonitoringLyrics = false;

    resetLyricLines(0.1);

    showAllUI();
    hideUI(state.skipPreludeButton);

    state.video.removeEventListener('ended', handleVideoEnded);
}

export {
    enterMVMode,
    exitMVMode
}