const concat = require('concat');

(async function build() {
    const files = [
        './dist/01-angular-element/polyfills.js',
        './dist/01-angular-element/runtime.js',
        './dist/01-angular-element/main.js',
    ];

    await concat(files, './dist/angular-element.js')
})()