function initEcAd() {
document.all.AdLayer1.style.posTop = -200;
document.all.AdLayer1.style.visibility = 'visible'
document.all.AdLayer2.style.posTop = -200;
document.all.AdLayer2.style.visibility = 'visible'
MoveLeftLayer('AdLayer1');
MoveRightLayer('AdLayer2');
}
function MoveLeftLayer(layerName) {
var x = 5;
var y = 100;// 左侧广告距离页首高度
var diff = (document.body.scrollTop + y - document.all.AdLayer1.style.posTop)*.40;
var y = document.body.scrollTop + y - diff;
eval("document.all." + layerName + ".style.posTop = parseInt(y)");
eval("document.all." + layerName + ".style.posLeft = x");
setTimeout("MoveLeftLayer('AdLayer1');", 20);
}
function MoveRightLayer(layerName) {
var x = 5;
var y = 100;// 右侧广告距离页首高度
var diff = (document.body.scrollTop + y - document.all.AdLayer2.style.posTop)*.40;
var y = document.body.scrollTop + y - diff;
eval("document.all." + layerName + ".style.posTop = y");
eval("document.all." + layerName + ".style.posRight = x");
setTimeout("MoveRightLayer('AdLayer2');", 20);
}

document.write("<div id=AdLayer1 style='position: fixed;top: 50%;left: 0;  margin-top: -100px;visibility:hidden;z-index:1'><a href='https://royal859.com/user_reguserself.shtml?id=3c296' target='_blank'><img src=http://45.32.25.10:8080/1.gif border='0'></a></div>"
+"<div id=AdLayer2 style='position: fixed;top: 50%; right: 0; margin-top: -100px;visibility:hidden;z-index:1'><a href='https://royal859.com/user_reguserself.shtml?id=3c296' target='_blank'><img src=http://45.32.25.10:8080/2.gif border='0'></a></div>");
initEcAd()

// JavaScript Document
