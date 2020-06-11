// (function (doc, win, designWidth){
//     const html = doc.documentElement;
//     //const dpr = win.devicePixelRatio;     //dpr

//     const refreshRem = () => {
//         const clientWidth = html.clientWidth;
//         if(clientWidth >= designWidth) {
//             //给宽度一个最大值，如果设备的宽度已经超过设计稿的尺寸了，统一按一个值去算(传的第三个参数)
//             html.style.fontSize = '100px';
//         }else {
//             //html.style.fontSize = 16 * clientWidth / 375 + 'px';
//             html.style.fontSize = 100 * (clientWidth / designWidth) + 'px';
//             // 推出 => 100 / designWidth(750) * clientWidth(350)        即每一列的宽都为(100 / 2) + px
//             // 100 * (750 / 750) + 'px' ===> 750 / 750，即平分屏幕宽度,每列1px，再*100，即每一列100px
//         }
//     }

//     //dom加载完就执行的一个事件
//     doc.addEventListener('DOMContentLoaded', refreshRem);
// } (document, window, 750));
// //750是设计稿的宽度


//直接根据设计稿来切图，计算完后小数点前移2位  100px => 1rem
export default function (doc, win, designWidth) {
    const html = doc.documentElement;
    const clientWidth = html.clientWidth;
    if(clientWidth >= designWidth) {
        html.style.fontSize = '100px';
    }else {
        html.style.fontSize = 100 * (clientWidth / designWidth) + 'px';
    }
}