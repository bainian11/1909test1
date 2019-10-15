! function () {
    function Lunbo() {
        this.banner = $('.meizu-banner');
        this.btns = $('.banner-btn span');
        this.imgs = $('.meizu-banner li');
        this.previndex = 0; //前一个索引
        this.index = 0; //当前索引
        this.timer = null;
    }

    Lunbo.prototype.init = function () {
        let _this = this;
        this.btns.on('click', function (ev) {
            // alert(1);
            _this.index = $(this).index() //当前点击的按钮的索引
            _this.tabswitch(ev);
            _this.previndex = _this.index; //将当前索引给前一个索引。
        });

        this.timer = setInterval(function () {//开定时器
            _this.index++;
            // console.log(_this.index);
            if (_this.index > _this.btns.length - 1) {
                _this.index = 0;
                _this.previndex = 5;
            }
            _this.btns.eq(_this.index).addClass('hover').siblings('span').removeClass('hover');
            _this.leftswich();
            _this.previndex = _this.index;
        }, 3000)

        this.imgs.on('mouseover', function () {//关闭定时器
            clearInterval(_this.timer);
            // alert(1);
        });

        this.imgs.on('mouseout', function () {
            _this.timer = setInterval(function () {//开定时器
                _this.index++;
                // console.log(_this.index);
                if (_this.index > _this.btns.length - 1) {
                    _this.index = 0;
                    _this.previndex = 5;
                }
                _this.btns.eq(_this.index).addClass('hover').siblings('span').removeClass('hover');
                _this.leftswich();
                _this.previndex = _this.index;
            }, 3000);
        });

    };

    //图片切换
    Lunbo.prototype.tabswitch = function (ev) {
        this.btns.eq(this.index).addClass('hover').siblings('span').removeClass('hover');
        if (this.index === 0 && this.previndex === 5) {
            if (ev.target.tagName === 'SPAN') {
                this.rightswich();
            } else {
                this.leftswich();
            }

        } else if (this.index === 5 && this.previndex === 0) {
            if (ev.target.tagNacme === 'SPAN') {
                this.leftswich();
            } else {
                this.rightswich();
            }

        } else if (this.index > this.previndex) {
            this.leftswich();
        } else if (this.index < this.previndex) {
            this.rightswich();
        }

    };


    Lunbo.prototype.rightswich = function () {//往右移动
        this.imgs.eq(this.previndex).animate({
            left: 1903
        });
        this.imgs.eq(this.index).css('left', '-1903px').animate({
            left: 0
        });
    }

    Lunbo.prototype.leftswich = function () {//往左移动
        this.imgs.eq(this.previndex).animate({
            left: -1903
        });
        this.imgs.eq(this.index).css('left', '1903px').animate({
            left: 0
        });
    }


    new Lunbo().init();
}();