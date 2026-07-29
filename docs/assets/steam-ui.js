/* STEAM Project Hub — 공통 헤더/푸터 주입
   사용법: <body data-nav="home|db|models"> + <script defer src="assets/steam-ui.js"></script> */
(function(){
  function ready(fn){
    if(document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function(){
    var active = document.body.dataset.nav || '';

    var NAV = [
      { id:'home',   label:'홈',        href:'index.html' },
      { id:'db',     label:'데이터베이스', href:'database.html' },
      { id:'models', label:'모델',       href:'ml.html' }
    ];

    var links = NAV.map(function(n){
      return '<a href="' + n.href + '"' + (n.id === active ? ' class="active" aria-current="page"' : '') + '>' + n.label + '</a>';
    }).join('');

    var header =
      '<header class="site-header">' +
        '<div class="container inner">' +
          '<a class="brand" href="index.html">' +
            '<span class="mark" aria-hidden="true"></span>' +
            '<span>STEAM Project Hub<br><span class="sub">이차전지 데이터 &amp; 모델 플랫폼</span></span>' +
          '</a>' +
          '<nav class="site-nav" aria-label="주 메뉴">' + links + '</nav>' +
        '</div>' +
      '</header>';

    var footer =
      '<footer class="site-footer">' +
        '<div class="container inner">' +
          '<div><strong style="color:var(--muted)">STEAM Project Hub</strong> — 이차전지 데이터베이스 &amp; 머신러닝 모델 플랫폼</div>' +
          '<div>© ' + new Date().getFullYear() + ' STEAM Project</div>' +
        '</div>' +
      '</footer>';

    document.body.insertAdjacentHTML('afterbegin', header);
    document.body.insertAdjacentHTML('beforeend', footer);

    // 파비콘 (없을 때만 주입)
    if(!document.querySelector('link[rel="icon"]')){
      var svg = "data:image/svg+xml," + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' +
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#2563eb"/><stop offset="1" stop-color="#0d9488"/>' +
        '</linearGradient></defs>' +
        '<rect width="32" height="32" rx="8" fill="url(#g)"/>' +
        '<path d="M18 4 L8 19 h6 L13 28 L24 13 h-7 z" fill="#fff"/></svg>');
      var link = document.createElement('link');
      link.rel = 'icon'; link.type = 'image/svg+xml'; link.href = svg;
      document.head.appendChild(link);
    }
  });
})();
