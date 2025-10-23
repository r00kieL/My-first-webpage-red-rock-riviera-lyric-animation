import state from '../data/state.js';
const UI_HIDDEN_CLASS = "ui-hidden";

import { normalizeToElements } from './general-utils.js';


/**
 * 设置DOM元素隐藏
 * @param {HTMLElement} uiElement - 要隐藏的DOM元素 
 */
function setHide(uiElement) {
    uiElement.style.opacity = 0;
    uiElement.style.pointerEvents = "none";
}
/**
 * 设置DOM元素显示
 * @param {HTMLElement} uiElement - 要显示的被隐藏DOM元素 
 */
function setShow(uiElement) {
    if (uiElement.classList.contains(UI_HIDDEN_CLASS)) {
        uiElement.classList.remove(UI_HIDDEN_CLASS);
        return;
    }

    uiElement.style.opacity = "";
    uiElement.style.pointerEvents = "";
}

/**
 * 隐藏所有 UI 元素，除指定排除项外。
 * 
 * 可传入单个 DOM 元素、元素 ID 字符串，或它们组成的数组作为排除项。
 * 内部将统一标准化为元素数组。
 * 
 * @param {HTMLElement | string | Array<HTMLElement | string>} excludeItems - 要保留显示的 DOM 元素或其 ID
 */

function hideUIExclude(excludeItems = []) {
    const excludeItemsArr = normalizeToElements(excludeItems);
    const allElements = Object.values(state.uiButtons);

    allElements.forEach(
        element => {
            if (excludeItemsArr.includes(element)) {
                setShow(element);
            } else {
                setHide(element);
            }
        }
    );
}

/**
 * 要隐藏的单个DOM元素
 * @param {Array<HTMLElement>} hideItem - 要隐藏的单个DOM元素
 * @returns 
 */
function hideUI(hideItem) {
    if (!hideItem) return;

    const hideItemArr = normalizeToElements(hideItem);

    hideItemArr.forEach(
        element => {
            setHide(element);
        }
    );
}

/**
 * 显示所有UI
 */
function showAllUI() {
    Object.values(state.uiButtons).forEach(
        element => {
            setShow(element);
        }
    );
}

/**
 * 显示单个被隐藏的UI
 * @param {Array<HTMLElement>} hideItem - 要隐藏的单个UI
 * @returns 
 */
function showUI(showItems) {
    const showItemsArr = normalizeToElements(showItems);
    showItemsArr.forEach(
        element => {
            setShow(element);
        }
    );
}

export {
    hideUIExclude,
    hideUI,
    showAllUI,
    showUI,
};