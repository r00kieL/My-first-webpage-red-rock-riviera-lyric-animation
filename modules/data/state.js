// DOM元素按钮
const glassBox = document.querySelector(".glass-box");
const lyricAnimationButton = document.querySelector("#toggle-lyric");
const videoButton = document.querySelector("#toggle-mv");
const skipPreludeButton = document.querySelector("#toggle-skipPrelude");
const bgButton = document.querySelector("#toggle-bg");
const bgmButton = document.querySelector("#toggle-bgm");


/**
 * 状态数组
 * 
 * 包括：
 * 
 * 状态变量
 * - MV模式状态变量
 * - 音乐模式状态变量
 * - 监视器歌词动画状态变量
 * - 所有歌词动画播放完毕变量
 * 
 * 歌词组件引用
 * - 所有歌词行
 * - 视频组件
 * - 音乐组件
 * 
 * DOM操作对象
 * - 单个DOM元素属性
 * - DOM元素数组
 */
const state = {
    isMVMode: false,
    isMusicMode: false,
    isMonitoringLyrics: false,
    allLyricLinesAnimationFinish: false,

    lines: document.querySelectorAll(".lyric-line"),
    video: document.querySelector("#my-video"),
    bgm: document.querySelector("#bgm"),
    body: document.body,

    glassBox,
    lyricAnimationButton,
    videoButton,
    skipPreludeButton,
    bgButton,
    bgmButton,

    uiButtons: {
        glassBox,
        lyricAnimationButton,
        videoButton,
        skipPreludeButton,
        bgButton,
        bgmButton,
    },
};

export default state;