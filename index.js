import { setupLyricAnimationButton } from './modules/toggle/lyric-animation-toggle.js';

import { setupVideoToggle } from './modules/toggle/video-toggle.js';
import { setupSkipPreludeToggle } from './modules/toggle/skip-toggle.js';

import { setupBgToggle } from './modules/toggle/bg-toggle.js';

import { setupBgmToggle } from './modules/toggle/bgm-toggle.js';


document.addEventListener("DOMContentLoaded", () => {
  // 设置歌词按钮动画
  setupLyricAnimationButton();

  // 设置视频播放按钮
  setupVideoToggle();
  // 设置跳过前奏按钮
  setupSkipPreludeToggle();

  // 设置背景切换按钮
  setupBgToggle();

  // 设置背景音乐播放按钮
  setupBgmToggle();
});