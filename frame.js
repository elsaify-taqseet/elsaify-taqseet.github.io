(function () {
  var page = document.documentElement.getAttribute('data-page'); // app | account
  var url = String(window.APP_URL || '');
  if (!/^https:\/\/script\.google\.com\/.+\/exec$/.test(url)) {
    document.body.innerHTML = '<div class="msg"><b>الموقع لسه محتاج إعداد.</b><br>افتح ملف <code>config.js</code> في GitHub والصق رابط الـ Web App (اللي آخره <code>/exec</code>) مكان <code>PASTE_YOUR_EXEC_URL_HERE</code>.</div>';
    return;
  }
  var src = url;
  if (page === 'account') {
    var t = (new URLSearchParams(location.search).get('t') || '').replace(/[^a-fA-F0-9]/g, '');
    src = url + '?p=account' + (t ? '&t=' + t : '');
    document.title = 'حسابي - ' + (window.STORE_NAME || '');
  } else {
    document.title = window.STORE_NAME || 'نظام التقسيط';
  }
  var f = document.createElement('iframe');
  f.src = src;
  f.title = document.title;
  f.setAttribute('allow', 'clipboard-write');
  f.setAttribute('referrerpolicy', 'no-referrer');
  f.onload = function () { var l = document.querySelector('.loading'); if (l) l.remove(); };
  document.body.appendChild(f);
})();
