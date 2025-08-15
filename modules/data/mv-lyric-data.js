import state from './state.js';

// 每行开始执行上浮动画的时间
const LINE_DELAY = 1000;
// 发光开始时间
const TIME_BEFORE_GLOW = 600;
// 发光持续时间
const GLOW_DURATION = 900;
const LAST_INDEX = state.lines.length - 1;



// 存储每行歌词状态的数组
const statusStore = {
    lyricStatus: [
        // 第一句歌词状态
        { floatAt: false, glowAt: false, glowEnd: false },
        // 第二句歌词状态
        { floatAt: false, glowAt: false, glowEnd: false },
        // 第三句歌词状态
        { floatAt: false, glowAt: false, glowEnd: false },
        // 第四句歌词状态
        { floatAt: false, glowAt: false, glowEnd: false },
        // 第五句歌词状态
        { floatAt: false, glowAt: false, glowEnd: false },
        // 第六句歌词状态
        { floatAt: false, glowAt: false, glowEnd: false },
    ],
}

// 存储每行歌词的浮起时间，发光的开始和结束时间
const lyricTimings = [
    // 第一行歌词
    { floatAt: 275150 },
    // 第二行歌词(发光)
    { floatAt: 282000, glowAt: 283700, glowEnd: 284700 },
    // 第三行歌词
    { floatAt: 288500 },
    // 第四行歌词
    { floatAt: 295500 },
    // 第五行歌词
    { floatAt: 299700 },
    // 第六行歌词(发光)
    { floatAt: 304500, glowAt: 306000, glowEnd: 307000 },
];

// 设置跳转时间点：从第一行歌词上浮时间点（floatAt）提前 N 毫秒作为跳转目标。
// 例如：要提前 10 秒跳转，则设置 SKIP_OFFSET = 10000。
// 注意：最终跳转秒数将限制为不小于 0。
const SKIP_OFFSET = 10000;
const skipToMs = lyricTimings[0]?.floatAt - SKIP_OFFSET;
const skipToSeconds = Math.max(0, skipToMs / 1000);

export default statusStore;
export {
    LINE_DELAY,
    TIME_BEFORE_GLOW,
    GLOW_DURATION,
    LAST_INDEX,

    lyricTimings,
    skipToMs,
    skipToSeconds
};