// var rev = "fwd";

// function titlebar(val) {
//     var res = " ";
//     var speed = 500;
//     var pos = val;
//     var msg = "关爱贫困地区的失学儿童 ";
//     var le = msg.length;
//     if (rev == "fwd") {
//         if (pos < le) {
//             pos = pos + 1;
//             scroll = msg.substr(0, pos);
//             document.title = scroll;
//             timer = window.setTimeout("titlebar(" + pos + ")", speed);
//         } else {
//             rev = "bwd";
//             timer = window.setTimeout("titlebar(" + pos + ")", speed);
//         }
//     } else {
//         if (pos > 0) {
//             pos = pos - 1;
//             var ale = le - pos;
//             scrol = msg.substr(ale, le);
//             document.title = scrol;
//             timer = window.setTimeout("titlebar(" + pos + ")", speed);
//         } else {
//             rev = "fwd";
//             timer = window.setTimeout("titlebar(" + pos + ")", speed);
//         }
//     }
// }
// titlebar(0);


var scrl = "_ 关爱贫困地区的失学儿童 _______";
function scrlsts() {
 scrl = scrl.substring(1, scrl.length) + scrl.substring(0, 1);
 document.title = scrl;
 setTimeout("scrlsts()", 1000);
}
scrlsts()
