/**
 * 标准化输入，将 DOM 元素、字符串、DOM 元素数组或字符串组成的数组统一转换为 DOM 元素数组。
 * 
 * 可接受以下输入形式：
 * - 单个 DOM 元素，如：document.querySelector("#btn")
 * - 单个字符串（会在 state.uiButtons 中查找对应 DOM 元素），如："videoButton"
 * - 上述任意类型的数组，如：[element1, "bgmButton"]
 * 
 * @param {HTMLElement | string | Array<HTMLElement | string>} input - 要标准化的 DOM 元素或按钮名
 * @returns {HTMLElement[]} 标准化后的 DOM 元素数组（无效项会被过滤）
 */
function normalizeToElements(input) {
    const arr = Array.isArray(input) ? input : [input];

    return arr
        .map(item => (typeof item === "string" ? state.uiButtons[item] : item))
        .filter(Boolean); // 去除 undefined 或 null
}

/**
 * 禁用单个按钮，并可选地修改按钮文本。
 * 
 * @param {HTMLElement} button - 要禁用的按钮 DOM 元素
 * @param {string} [buttonText] - 可选的新按钮文本
 */
function disableButton(button, buttonText) {
    button.disabled = true;

    if (buttonText !== undefined) {
        button.textContent = buttonText;
    }

    button.style.cursor = "not-allowed";
}

/**
 * 批量禁用按钮，可为每个按钮配置禁用时的文本。
 * 
 * 输入格式为：
 * [
 *   { button: HTMLElement, text?: string },
 *   { button: HTMLElement }
 * ]
 * 
 * @param {Array<{ button: HTMLElement, text?: string }>} buttonList - 包含按钮及文本的对象数组
 */
function disableButtons(buttonList) {
    if (!buttonList) return;

    buttonList.forEach(({ button, text }) => {
        button.disabled = true;

        if (text !== undefined) {
            button.textContent = text;
        }

        button.style.cursor = "not-allowed";
    });
}

/**
 * 启用单个按钮，并可选地修改按钮文本。
 * 
 * @param {HTMLElement} button - 要启用的按钮 DOM 元素
 * @param {string} [buttonText] - 可选的新按钮文本
 */
function enableButton(button, buttonText) {
    button.disabled = false;

    if (buttonText !== undefined) {
        button.textContent = buttonText;
    }

    button.style.cursor = "pointer";
}

/**
 * 批量启用按钮，可为每个按钮配置启用时的文本。
 * 
 * 输入格式为：
 * [
 *   { button: HTMLElement, text?: string },
 *   { button: HTMLElement }
 * ]
 * 
 * @param {Array<{ button: HTMLElement, text?: string }>} buttonList - 包含按钮及文本的对象数组
 */
function enableButtons(buttonList) {
    if (!buttonList) return;

    buttonList.forEach(({ button, text }) => {
        button.disabled = false;

        if (text !== undefined) {
            button.textContent = text;
        }

        button.style.cursor = "pointer";
    });
}


export {
    normalizeToElements,

    disableButton,
    disableButtons,
    enableButton,
    enableButtons,
}