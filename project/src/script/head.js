! function () {
    const headlist = document.querySelector('.meizu-header-inner-ul-blank');
    const phpurl = ' http://10.31.155.10/two/project/php/';

    $.ajax({
        type: 'get',
        url: phpurl + 'head.php',
        dataType: 'json'
    }).done(function (arrdata) {
        // console.log(arrdata);
        // console.log(arrdata[0].url);                          
        let strhtml='<ul>';
        for(let value of arrdata){
            strhtml+=`
            <li>
                <a href="details.html?sid=${value.sid}" target="_blank">
                    <img class="lazy" data-original="${value.url}">
                    <h4>${value.title}</h4>
                    <p>￥${value.price}</p>
                </a>
            </li>
            `;
        }
        strhtml+='</ul>';
        headlist.innerHTML=strhtml;
        $(".lazy").lazyload({
            effect: "fadeIn"
        });
    });

}();
/////////////////////////////////导航下拉渲染///////////////////////////////

! function () {
    const centerlist = document.querySelector('.meizu-index-container-center');
    const phpurl = ' http://10.31.155.10/two/project/php/';

    $.ajax({
        type: 'get',
        url: phpurl + 'center.php',
        dataType: 'json'
    }).done(function (arrdata) {                          
        let strhtml='<ul>';
        for(let value of arrdata){
            strhtml+=`
            <li>
                <a href="details.html?sid=${value.sid}" target="_blank">
                    <img class="lazy" data-original="${value.url}">
                    <h4>${value.title}</h4>
                </a>
            </li>
            `;
        }
        strhtml+='</ul>';
        centerlist.innerHTML=strhtml;
        $(".lazy").lazyload({
            effect: "fadeIn"
        });
    });

}();
///////////////////////////////////中部商品渲染////////////////////////////////

! function () {
    const phonelist = document.querySelector('.phone-box-center-wrap');
    const phpurl = ' http://10.31.155.10/two/project/php/';

    $.ajax({
        type: 'get',
        url: phpurl + 'phone.php',
        dataType: 'json'
    }).done(function (arrdata) {                         
        let strhtml='<ul>';
        for(let value of arrdata){
            strhtml+=`
            <li>
                <a href="details.html?sid=${value.sid}" target="_blank">
                    <h4>${value.title}</h4>
                    <p>${value.miaoshu}</p>
                    <h3>￥${value.price}</h3>
                    <img class="lazy" data-original="${value.url}">
                    
                </a>
            </li>
            `;
        }
        strhtml+='</ul>';
        phonelist.innerHTML=strhtml;
        $(".lazy").lazyload({
            effect: "fadeIn"
        });
    });

}();
////////////////////////////////手机模块商品渲染/////////////////////////////////

! function () {
    const voicelist = document.querySelector('.voice-box-center-wrap');
    const phpurl = ' http://10.31.155.10/two/project/php/';

    $.ajax({
        type: 'get',
        url: phpurl + 'voice.php',
        dataType: 'json'
    }).done(function (arrdata) {
        console.log(arrdata);
        // console.log(arrdata[0].url);                          
        let strhtml='<ul>';
        for(let value of arrdata){
            strhtml+=`
            <li>
                <a href="details.html?sid=${value.sid}" target="_blank">
                    <img class="lazy" data-original="${value.url}">
                    <span>
                    <h4>${value.title}</h4>
                    <p>${value.miaoshu}</p>
                    <h3>￥${value.price}</h3><s>￥${value.oprice}</s>
                    </span>
                </a>
            </li>
            `;
        }
        strhtml+='</ul>';
        voicelist.innerHTML=strhtml;
        $(".lazy").lazyload({
            effect: "fadeIn"
        });
    });

}();

////////////////////////////////魅声模块商品渲染/////////////////////////////////

! function () {
    const peijianlist = document.querySelector('.peijian-box-center-wrap');
    const phpurl = ' http://10.31.155.10/two/project/php/';

    $.ajax({
        type: 'get',
        url: phpurl + 'peijian.php',
        dataType: 'json'
    }).done(function (arrdata) {
        console.log(arrdata);
        // console.log(arrdata[0].url);                          
        let strhtml='<ul>';
        for(let value of arrdata){
            strhtml+=`
            <li>
                <a href="details.html?sid=${value.sid}" target="_blank">
                    <img class="lazy" data-original="${value.url}">
                    <span>
                    <h4>${value.title}</h4>
                    <p>${value.miaoshu}</p>
                    <h3>￥${value.price}</h3><s>￥${value.oprice}</s>
                    </span>
                </a>
            </li>
            `;
        }
        strhtml+='</ul>';
        peijianlist.innerHTML=strhtml;
        $(".lazy").lazyload({
            effect: "fadeIn"
        });
    });

}();