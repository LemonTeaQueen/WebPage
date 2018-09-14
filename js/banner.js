var btn_left = document.getElementById('btn_left');
var btn_right = document.getElementById('btn_right');
var bn_bg = document.getElementById('bn_bg');
var dot = document.getElementById('dot');
var lis = dot.children;
var banner = document.getElementById('banner');
var count = 0;
var lock = true;
btn_right.onclick = function () {
    if (lock) {
        lock = false;
        count++;
        var targetValue = count * -1349;
        var temp = count;

        animate(bn_bg, targetValue, function () {
            if (count == 5) {
                bn_bg.style.left = 0;
                count = 0;
            };
            lock = true;
        });
        if (temp == 5) {
            temp = 0;
        }
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        lis[temp].className = 'active';
    }
};
btn_left.onclick = function () {
    if (lock) {
        lock = false;
        count--;
        if (count < 0) {
            bn_bg.style.left = '6745px';
            count = 4;
        }
        var targetValue = count * -1349;
        var temp = count;
        animate(bn_bg, targetValue, function () {
            lock = true;
        });
        if (temp == 0) {
            temp = 5;
        }
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        lis[temp].className = 'active';
    }
};
for (var j = 0; j < lis.length; j++) {
    lis[j].weizhi = j;
}
dot.onclick = function (e) {
    var _e = window.event || e;
    var _t = _e.target || _e.srcElement;
    if (_t.tagName == 'LI') {
        count = _t.weizhi;
        var temp = count;
        var targetValue = count * -1366;
        animate(bn_bg, targetValue);
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        lis[temp].className = 'active';
    }
};
var flag1;
function autoplay() {
    flag1 = setInterval(function () {
        btn_right.onclick();
    }, 4000);
}
autoplay();
banner.onmouseenter = function () {
    clearInterval(flag1);
};
banner.onmouseleave = function () {
    autoplay();
};



