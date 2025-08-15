# MV歌词动画展示项目（Lite版）

本项目是一个用于展示 MV 歌词浮现动画的前端项目，使用原生 HTML / CSS / JavaScript 编写，结构清晰、动画平滑，支持：

- 背景图渐变切换
- 歌词逐行浮现 + 发光动画
- 跳过前奏功能
- MV 模式 / 普通模式切换

## 目录结构

- `index.html`：主页面入口
- `index.js`：主逻辑入口，绑定初始化事件
- `css/`：页面样式（按功能模块划分）
- `modules/data/`：数据与状态定义
- `modules/utils/`：通用工具函数
- `modules/toggle/`：功能绑定入口（按钮点击等）
- `modules/mv/`：歌词动画主逻辑

## 使用方式

1. 将项目上传到静态托管平台（如 GitHub Pages / Netlify / Vercel）
2. 确保入口为 `index.html`
3. 若需添加图片/MV资源，请放入 `public` 或同级目录，并确保路径正确

开始于2025年 6 月，重构完成于 2025 年 8 月。