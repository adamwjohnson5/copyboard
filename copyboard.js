/* Copyboard v1.0
Easy JS copy to clipboard.
https://github.com/adamwjohnson5/copyboard
By Adam Johnson
MIT License 2019 */
"use strict";

class Copyboard {
    static copy(string) {
        // Create input
        let i = document.createElement('input');
        i.setAttribute('id', 'copyToClipboard');
        document.body.appendChild(i);
        // Get input and add value
        let j = document.querySelector('input#copyToClipboard');
        j.style.opacity = 0;
        j.value = string;
        j.select();
        // Copy and remove
        document.execCommand('copy');
        j.remove();
    }
}