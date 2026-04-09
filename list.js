window["document"]['getElementById']("bsj")['addEventListener']("click", function () {
    window['open'](atob("1111"), '_blank')
});
window["document"]['getElementById']("st")['addEventListener']("click", function () {
    window['open'](atob("1111"), '_blank')
});
window["document"]['getElementById']("cf")['addEventListener']("click", function () {
    window['open'](atob("1111"), '_blank')
});
window["document"]['getElementById']("wd")['addEventListener']("click", function () {
    window['open'](atob("1111"), '_blank')
});
window["document"]['getElementById']("xy")['addEventListener']("click", function () {
    window['open'](atob("1111"), '_blank')
});
window["document"]['getElementById']("gjr")['addEventListener']("click", function () {
    window['open'](atob("1111"), '_blank')
});
window["document"]['getElementById']("jl")['addEventListener']("click", function () {
    window['open'](atob("1111"), '_blank')
});
window["document"]['getElementById']("sj")['addEventListener']("click", function () {
    window['open'](atob("1111"), '_blank')
});
window["document"]['getElementById']("xsd")['addEventListener']("click", function () {
    window['open'](atob("1111"), '_blank')
});
window["document"]['getElementById']("df")['addEventListener']("click", function () {
    window['open'](atob("1111"), '_blank')
});
window["document"]['getElementById']("bsjn")['innerHTML'] = ("保时捷");
window["document"]['getElementById']("stn")['innerHTML'] = ("胜天国际");
window["document"]['getElementById']("cfn")['innerHTML'] = ("超凡国际");
window["document"]['getElementById']("wdn")['innerHTML'] = ("问鼎娱乐");
window["document"]['getElementById']("xyn")['innerHTML'] = ("星耀国际");
window["document"]['getElementById']("gjrn")['innerHTML'] = ("国际人");
window["document"]['getElementById']("jln")['innerHTML'] = ("超凡国际");
window["document"]['getElementById']("sjn")['innerHTML'] = ("赏金国际");
window["document"]['getElementById']("xsdn")['innerHTML'] = ("新时代");
window["document"]['getElementById']("dfn")['innerHTML'] = ("巅峰国际");

window["document"]['getElementById']("3")['innerHTML'] = ("FIFA World Cup 2026™<br>官方合作广告商");
window["document"]['getElementById']("2")['innerHTML'] = ("🔥十年信誉平台<br>⚽世界杯官方投注平台");
window["document"]['getElementById']("1")['innerHTML'] = "MF33.MY";


function showPopupOnce(popupId = 'sw_loaded') {
  const key = `popup_${popupId}_shown`;
  
  if (localStorage.getItem(key)) {
    return; 
  }
  alert('欢迎访问MF33！');
  localStorage.setItem(key, Date.now().toString());
}
window.addEventListener('load', function() {
  showPopupOnce();
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('SW registered');
    });
}