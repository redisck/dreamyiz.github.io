var scrl = " 关爱贫困山区的失学儿童 ";

function scrlsts() {
  scrl = scrl.substring(1, scrl.length) + scrl.substring(0, 1);
  document.title = scrl;
  setTimeout("scrlsts()", 614);
}
scrlsts();
