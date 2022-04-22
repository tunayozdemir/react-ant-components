const iconfontMaker = require('iconfont-maker');

iconfontMaker({
    files: [
        'src/assets/icons/*.svg'
    ],
    types: [
        'ttf'
    ],
    order: ['ttf'],
    fontName: 'antdproject',
    dest: 'public/fonts',
    cssDest: 'src/assets/css/settings/icons-extend.scss',
    cssTemplate: 'src/tasks/iconTemp.hbs',
    cssFontsUrl: './../fonts/'
}, function (error) {
    if (error) {
        console.log('Fail!', error);
    } else {
        console.log('Done!');
    }
})
