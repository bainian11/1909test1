;
(function () {
    let sid = location.search.substring(1).split('=')[1];
    const spic = document.querySelector('.sm');
    const bpic = document.querySelector('.b-pic');
    const bf = document.querySelector('.bf');
    const sf = document.querySelector('.sf');
    const wrap = document.querySelector('.wrap');
    const small = document.querySelector('.s-pic')
    const ptitle = document.querySelector('.title');
    const price = document.querySelector('.money');
    const pmiaoshu = document.querySelector('.mod-info');
    const bptitle = document.querySelector('.b-title')
    const phpurl = ' http://10.31.155.10/two/project/php/';
    $.ajax({
        type: 'get',
        url: phpurl + 'detail.php',
        data: {
            id: sid
        },
        dataType: 'json'
    }).done(function (data) {
        // console.log(data);
        // console.log(data.url);
        // console.log(spic);
        // console.log(ptitle)
        // console.log(price);

        small.src = data.url;
        bpic.src = data.url;
        ptitle.innerHTML = data.title;
        bptitle.innerHTML = data.title;
        price.innerHTML = data.price;
        pmiaoshu.innerHTML = data.miaoshu;
    });
//////////////////////////渲染数据/////////////////////////


    spic.onmouseover = function () {
        sf.style.visibility = 'visible';
        bf.style.visibility = 'visible';
        sf.style.width = spic.offsetWidth * bf.offsetWidth / bpic.offsetWidth + 'px';
        sf.style.height = spic.offsetHeight * bf.offsetHeight / bpic.offsetHeight + 'px';
        var bili = bpic.offsetWidth / spic.offsetWidth;//大小图比例
        this.onmousemove = function (ev) {
            var ev = ev || window.event;
            let l = ev.clientX - wrap.offsetLeft -sf.offsetWidth/2;
            let t = ev.clientY - wrap.offsetTop -sf.offsetHeight/2;
            if (l <= 0) {
                l = 0;
            } 
            else if (l >= spic.offsetWidth - sf.offsetWidth) {
                l = spic.offsetWidth - sf.offsetWidth - 2;
            }

            if (t <= 0) {
                t = 0;
            } 
            else if (t >= spic.offsetHeight - sf.offsetHeight) {
                t = spic.offsetHeight - sf.offsetHeight - 2;
            }
            sf.style.left = l + 'px';
            sf.style.top = t + 'px';
            //小放大镜跟随鼠标
            bpic.style.left = -bili * l + 'px';
            bpic.style.top = -bili * t + 'px';
            //大图随放大镜移动
        }
    };

    spic.onmouseout = function () {
        sf.style.visibility = 'hidden';
        bf.style.visibility = 'hidden';
    };
///////////////////////////////放大镜///////////////////////////////

})();

