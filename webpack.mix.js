// webpack.mix.js

let mix = require('laravel-mix');

mix.sass('src/app.scss', 'dist/').js('src/app.js', 'dist').setPublicPath('dist');
