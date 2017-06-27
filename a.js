// 自动滚屏
var a = setInterval('scrollBy(0,1)', 100)
clearInterval(a)
// 点击所有
for (v of (document.getElementsByClassName('follow-text'))) {
    console.log(v);
    v.click()
}
// 组合滚动点击
function foo() {
    scrollBy(0,1000);
    for (v of (document.getElementsByClassName('follow-text'))) {
        // console.log(v);
        v.click();
    }
        console.log('clicked');
}
var a=setInterval(foo,3000)