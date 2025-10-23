// 图片切换时间
const TRANSITION_DURATION = 1000;
// 总切换时间（图片切换时间+缓冲时间）
const TOTAL_LOCK_DURATION = TRANSITION_DURATION + 300;

// 图片路径
const IMG = (imgName) => `url("../../image/${imgName}")`;
const bgImage = [
    IMG("disco-church-wallpaper-4k.png"),
    IMG("disco-conquest-wallpaper-4k.png"),
    IMG("disco-seafort-wallpaper-4k.png"),
    IMG("disco-skyline-wallpaper-4k.png"),
    IMG("aleksander-rostov-archetypes-laid-out.jpg"),
    IMG("disco-thoughtcabinet-wallpaper-4k.png"),
];

export {
    TRANSITION_DURATION,
    TOTAL_LOCK_DURATION,
    bgImage,
};