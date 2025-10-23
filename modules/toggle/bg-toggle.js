import state from '../data/state.js';

import {
    TRANSITION_DURATION,
    TOTAL_LOCK_DURATION,
    bgImage,
} from '../data/bg-images.js';
import {
    disableButton,
    enableButton
} from '../utils/general-utils.js';
import {
    initBackground,
    getNextIndex,
    switchBgi,
    setBgi,
    PreloadedImage,
} from '../utils/bg-utils.js';

/**
 * 设置背景切换按钮
 * @description 点击按钮切换背景图片
 */
function setupBgToggle() {

    let currentIndex = initBackground(0);
    let nextIndex = getNextIndex(currentIndex);
    let isSwitching = false; // 添加动画锁

    state.bgButton.addEventListener("click", () => {
        // 判断是否在切换，是的话忽略点击
        if (isSwitching) return;

        isSwitching = true;

        disableButton(state.bgButton, "切换中...")

        // 获取下一张图的索引
        nextIndex = getNextIndex(currentIndex);
        // 获取下一张url图
        let nextImage = bgImage[nextIndex];

        const img = PreloadedImage(nextImage);

        img.onload = () => {
            switchBgi(nextImage);

            setTimeout(() => {
                setBgi(nextImage);
                currentIndex = nextIndex;
            }, TRANSITION_DURATION);

            setTimeout(() => {
                enableButton(state.bgButton, "切换背景")

                isSwitching = false;
            }, TOTAL_LOCK_DURATION);
        };
    });
}

export {
    setupBgToggle,
}