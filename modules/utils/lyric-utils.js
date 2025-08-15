import state from '../data/state.js';
import {
    LINE_DELAY,
    TIME_BEFORE_GLOW,
    GLOW_DURATION,
    LAST_INDEX,
} from '../data/mv-lyric-data.js';


/**
 * 获取某一行歌词浮出动画的延迟时间（单位：毫秒）。
 * 
 * 第一次播放无额外延迟，第二次及之后播放会额外延迟 1000ms，以保证上一次动画完全重置。
 * 
 * @param {number} lineCount - 当前是第几行歌词（从 0 开始）
 * @param {number} clickCount - 当前播放按钮被点击的次数
 * @returns {number} 该行浮出动画的延迟时间
 */
function getLineFloatDelay(lineCount, clickCount) {
    const EXTRA_DELAY = clickCount >= 2 ? 1000 : 0;
    return lineCount * LINE_DELAY + EXTRA_DELAY;
}

/**
 * 获取某一行歌词发光动画的开始时间（单位：毫秒）。
 * 
 * @param {number} lineCount - 当前是第几行歌词（从 0 开始）
 * @param {number} clickCount - 当前播放按钮被点击的次数
 * @returns {number} 发光动画的延迟时间
 */
function getGlowBeginTime(lineCount, clickCount) {
    return getLineFloatDelay(lineCount, clickCount) + TIME_BEFORE_GLOW;
}

/**
 * 获取某一行歌词发光动画的结束时间（单位：毫秒）。
 * 
 * @param {number} lineCount - 当前是第几行歌词（从 0 开始）
 * @param {number} clickCount - 当前播放按钮被点击的次数
 * @returns {number} 发光动画结束的时间点
 */
function getGlowDurationTime(lineCount, clickCount) {
    return getGlowBeginTime(lineCount, clickCount) + GLOW_DURATION;
}

/**
 * 获取整段歌词动画重置所需的总时长（单位：毫秒）。
 * 
 * 用于在所有动画结束后恢复按钮状态。
 * 
 * @param {number} clickCount - 当前播放按钮被点击的次数
 * @returns {number} 总动画持续时间
 */
function getLyricResetDelay(clickCount) {
    const EXTRA_DELAY = clickCount >= 2 ? 1000 : 0;

    return (LAST_INDEX * LINE_DELAY) +
        (TIME_BEFORE_GLOW + GLOW_DURATION) +
        EXTRA_DELAY + 100;
}

/**
 * 重置所有歌词样式状态（包括透明度、位移、粗体样式）。
 * 
 * @param {number} [opacity=0.1] - 每行歌词重置时的不透明度，默认 0.1
 */
function resetLyricLines(opacity = 0.1) {
    state.lines.forEach((line) => {
        line.style.opacity = opacity;
        line.style.transform = "translateY(20px)";

        const strongs = line.querySelectorAll("strong");
        strongs.forEach((strong) => {
            strong.classList.remove("bold-only");
        });
    });
}

/**
 * 启动一行歌词的浮出动画（透明度与位置恢复）。
 * 
 * @param {HTMLElement} line - 歌词所在的 DOM 元素
 */
function TriggerlineAnimation(line) {
    line.style.opacity = 1;
    line.style.transform = "translateY(0)";
}

/**
 * 为一行歌词中的 `<strong>` 元素添加发光高亮效果。
 * 
 * @param {HTMLElement} line - 歌词所在的 DOM 元素
 */
function addHighLight(line) {
    const strongs = line.querySelectorAll("strong");
    strongs.forEach((strong) => {
        strong.classList.add("highlight");
    });
}

/**
 * 将一行歌词中的 `<strong>` 元素从发光状态恢复为加粗状态。
 * 
 * @param {HTMLElement} line - 歌词所在的 DOM 元素
 */
function resetLyricLine(line) {
    const strongs = line.querySelectorAll("strong");
    strongs.forEach((strong) => {
        strong.classList.remove("highlight");
        strong.classList.add("bold-only");
    });
}


export {
    getLineFloatDelay,
    getGlowBeginTime,
    getGlowDurationTime,
    getLyricResetDelay,

    resetLyricLines,
    TriggerlineAnimation,
    addHighLight,
    resetLyricLine,
}