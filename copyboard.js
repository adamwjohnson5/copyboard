/* Copyboard
Easy JS copy to clipboard.
https://github.com/adamwjohnson5/copyboard
By Adam Johnson
MIT License 2019 */
"use strict";

class Copyboard {
    constructor(string) {
        this.string = string;
    }
    copy() {
        // Create input
        let i = document.createElement('input');
        i.setAttribute('id', 'copyToClipboard');
        document.body.appendChild(i);
        // Get input and add value
        let j = document.querySelector('input#copyToClipboard');
        j.style.opacity = 0;
        j.value = this.string;
        j.select();
        // Copy and remove
        document.execCommand('copy');
        j.remove();
    }
}