(function (doc, win) {
  var docEl = doc.documentElement, //获取document的根元素，即html
    resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize', //获取移动端屏幕是否翻转（手机重力感应等引起屏幕长宽变化之类的）
    //   判断在window对象中是否有orientationchange属性，因为orientationchange会遇到兼容性问题，有的浏览器不支持，所以这边做了判断来决定是用orientationchange还是resize（思路就是用resizeEvt这个变量来控制用哪个，后面只要用resizeEvt这个变量来监听屏幕是否被调整）
    recalc = function () {
      var clientWidth = docEl.clientWidth; //获取html可视区的宽度
      if (clientWidth === undefined) return;
      docEl.style.fontSize = 20 * (clientWidth / 750) + 'px'; //根据屏幕宽度，来动态计算html的font-size的大小 这个值可以自己来定
    };
  if (doc.addEventListener === undefined) return;
  win.addEventListener(resizeEvt, recalc, false); //false传入undefined的位置
  doc.addEventListener('DOMContentLoaded', recalc, false);
  /**
   * 解析 url 参数
   * @param {String}  url : '传入的 url 地址':'获得当前的 url 地址'
   * @param {String}  key : 'val值':'obj'
   * @returns {val||obj}
   */
  function getQuery(url, key) {
    let query = url ? url.split('?')[1] : window.location.search.substring(1);
    if (query === '') return {};
    // decodeURIComponent()  URl解码
    query = decodeURIComponent(query);
    query = query.split('&');
    let result = {};
    for (let i = 0; i < query.length; i++) {
      let arr = query[i].split('=');
      result[arr[0]] = arr[1];
    }
    return key ? result[key] : result;
  }
  /**
   * 消息提醒弹出窗
   * @param {String}    title
   * @param {String}  iconfont
   * @param {Number}    time
   */
  function toast({ title, iconfont, time, success }) {
    if (!title) return console.error('title is not Undefined');
    time = time ? time : 1500;
    let body = document.body;
    let mask = document.createElement('div');
    mask.setAttribute('class', 'mask');
    mask.innerHTML = iconfont
      ? '<div class="toast"><div class="icon ' +
        iconfont +
        '"></div><div class="title">' +
        title +
        '</div></div>'
      : '<div class="toast"><div class="title">' + title + '</div></div>';
    body.appendChild(mask);
    setTimeout(() => {
      body.removeChild(mask);
      if (success && typeof success === 'function') {
        success();
      }
    }, time);
  }
  win.toast = toast;
  win.getQuery = getQuery;
})(document, window);
