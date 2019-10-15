class louti {
    constructor() {
        this.loutinav = $('.loutinav');
        this.loutili = $('.loutinav li').not('.last');
        this.louceng = $('.phone-box');
        this.last = $('.last');
    }

    init() {
        let _this = this;

        let $top = $(window).scrollTop();//获取当前的scrollTop值
        if ($top >= 700) {
            this.loutinav.show();
        } else {
            this.loutinav.hide();
        }
        //拖动滚动显示隐藏楼梯
        $(window).on('scroll', function () {
            let $top = $(this).scrollTop();
            if ($top >= 700) {
                _this.loutinav.show();
            } else {
                _this.loutinav.hide();
            }
            
            _this.louceng.each(function (index, element) {
                //每一个楼层的top值，固定的值。
                let $loucengtop = _this.louceng.eq(index).offset().top + $(element).height() / 2;
                if ($loucengtop > $top) {
                    _this.loutili.removeClass('active');
                    _this.loutili.eq(index).addClass('active');
                    return false;
                }
            });

        });

        //点击左侧的楼梯，显示右侧对应的图层
        this.loutili.on('click', function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            //获取每一个楼层的top值
            let $loucengtop = _this.louceng.eq($(this).index()).offset().top;
            //document.documentElement.scrollTop=100
            $('html,body').animate({
                scrollTop: $loucengtop
            });
        });

        //回到顶部
        this.last.on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            });
        });

    }
}
//////////////////////////////// 楼梯效果///////////////////////////////////

class nav {
    constructor() {
        this.oLI = $('.meizu-header-inner-ul .phone');
        this.Blank = $('.meizu-header-inner-ul-blank');
    }

    init() {
        let _this = this;
        this.oLI.on('mouseover', function () {
            _this.Blank.stop(true).animate({
                width: 1903,
                height: 265
            });
        })
        this.Blank.on('mouseout', function () {
            _this.Blank.stop(true).animate({
                width: 1903,
                height: 0
            });
        })
    }
}

//////////////////////////////////导航下拉框//////////////////////////////////

new louti().init()
new nav().init()