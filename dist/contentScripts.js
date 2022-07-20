/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

const copycactusImg = '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';
const TIMER_INTERVAL = 800;
const googleSheetsCellSeperator = '	';
const mainPagePath = '/sales/search/people';
let currentUrl = location.href;
let copyButtonLoaded = false;
const copyButton = document.createElement('button');
copyButton.setAttribute('class', 'copycactusButton');
function copyToTheClipboard(textToCopy) {
    const el = document.createElement('textarea');
    el.value = textToCopy;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
function executeWhenPageMatches(path, fn) {
    if (location.href.includes(path)) {
        fn();
    }
}
function sendLidData(target) {
    const parentElement = target.parentElement;
    const lidData = parentElement.querySelector('a[data-control-name="view_lead_panel_via_search_lead_name"]');
    const lidFullname = lidData.innerText.replace(',', '').split(' ');
    const lidName = lidFullname.slice(0, 1);
    const lidSurname = lidFullname.splice(1, lidFullname.length - 1);
    const lidUrl = lidData.href;
    const lidPositionElement = parentElement.querySelector('div.artdeco-entity-lockup__subtitle>span');
    const lidPosition = lidPositionElement.innerText;
    const formattedMessage = `${lidName}${googleSheetsCellSeperator}${lidSurname.join(' ')}${googleSheetsCellSeperator}${lidUrl}${googleSheetsCellSeperator}${lidPosition}`;
    copyToTheClipboard(formattedMessage);
}
function appendCopybutton(elementList) {
    elementList.forEach((element, i) => {
        let copyButtonClone = copyButton.cloneNode(true);
        copyButtonClone.setAttribute('id', 'copycactus-button' + i);
        copyButtonClone.onclick = (e) => sendLidData(e.target);
        element.appendChild(copyButtonClone);
    });
}
function injectCopyButton() {
    //timer for list load checks
    let listLoadCheckTimer = setInterval(checkForListLoadFinish, TIMER_INTERVAL);
    //checking if the lid list has loaded and injecting the button
    function checkForListLoadFinish() {
        let lidList;
        try {
            lidList = Array.from(document.querySelectorAll("li.artdeco-list__item"));
            if (typeof lidList !== 'undefined' && lidList[0].querySelector('div.artdeco-entity-lockup') && !copyButtonLoaded) {
                clearInterval(listLoadCheckTimer);
                appendCopybutton(lidList);
                copyButtonLoaded = true;
            }
        }
        catch (error) { }
    }
}
//inject button on correct page loag
executeWhenPageMatches(mainPagePath, () => (window.addEventListener("load", injectCopyButton, false)));
//checking if url has changed and injecting the button
setInterval(() => {
    if (currentUrl !== location.href && location.href.includes('sessionId')) {
        copyButtonLoaded = false;
        currentUrl = location.href;
        executeWhenPageMatches(mainPagePath, injectCopyButton);
    }
}, 700);

/******/ })()
;