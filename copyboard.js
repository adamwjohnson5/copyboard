/* Ripley
Simple CSS animation via JavaScript.
https://github.com/adamwjohnson5/ripley
By Adam Johnson
MIT License 2019 */
"use strict";

class CopyClip {
    copy(string) {
        let i = document.createElement('input');
        i.setAttribute('id', 'copyToClipboard');
        document.body.appendChild(i);
        let j = document.querySelector('input#copyToClipboard')
        j.style.opacity = 0;
        j.value = string;
        j.select();
        document.execCommand('copy');
        j.remove();
    }
}