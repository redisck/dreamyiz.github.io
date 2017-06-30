// marquee start
var scrl = " 关爱贫困山区的失学儿童 ";

function scrlsts() {
  scrl = scrl.substring(1, scrl.length) + scrl.substring(0, 1);
  document.title = scrl;
  setTimeout("scrlsts()", 614);
}
scrlsts();
// marquee end


// type start
document.addEventListener('DOMContentLoaded', function(){

    var typed = new Typed("#typed", {
      stringsElement: '#typed-strings',
      typeSpeed: 80,
      backSpeed: 120,
      backDelay: 500,
      startDelay: 250,
      loop: false,
      shuffle: false,
      fadeOut: false,
      contentType: 'html', // or text
      // defaults to null for infinite loop
      loopCount: Infinity,
      onComplete: function(){ foo(); },
      resetCallback: function() { newTyped(); },
      onTypingPaused: function() { },
      onTypingResumed: function() { }
    });

    // document.querySelector('.toggle').addEventListener('click', function() {
    //   typed.toggle();
    // });
    // document.querySelector('.stop').addEventListener('click', function() {
    //   typed.stop();
    // });
    // document.querySelector('.start').addEventListener('click', function() {
    //   typed.start();
    // });
    // document.querySelector('.reset').addEventListener('click', function() {
    //   typed.reset();
    // });
    // document.querySelector('.destroy').addEventListener('click', function() {
    //   typed.destroy();
    // });


  });

  function newTyped(){ /* A new typed object */ }

  function foo(){ console.log('Callback'); }

//   type end


// change main background start
$(document).ready(function(){
var header = $('main');

var backgrounds = new Array(
    'url(image/lovemain.jpg)'
  , 'url(image/lovemainb.jpg)'
  , 'url(image/lovemainc.jpg)'
  , 'url(image/lovemaind.jpeg)'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 6000);

header.css('background-image', backgrounds[0]);
});
// change main background end
