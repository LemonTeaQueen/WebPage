//初始化
$(document).ready(function (){


    $('.Yl-container').YlSlide({
        wrapper:'.Yl-wrapper',
        slideClass:'.Yl-slide',
        stylePrefix:'.Yl-',
        slideLength:3,
        pages:true,
        pagination:'.Yl-pagination',
        pagingSelect:'.Yl-pagination-bullet-active',
        autoplay:5000,
        imgTemplate:{
            0:['<div class="Yl-img0"></div>'],
            1:['<div class="Yl-img1"></div>'],
            2:['<div class="Yl-img2"></div>']
        },
        fontTemplate:{
            0:['<div class="Yl-font0">ALL ABOUT US</div>','<div class="Yl-font1">新奇的设计、舒适的家具</div>','<div class="Yl-font2">只为简单的小幸福</div>'],
            1:['<div class="Yl-font0">SHOP CHARACTERISTICS</div>','<div class="Yl-font1">绝妙的艺术、精彩的摄影、有趣的广告</div>','<div class="Yl-font2">只为生活添彩</div>'],
            2:['<div class="Yl-font0">UOR PURPOSE</div>','<div class="Yl-font1">一切创意 一切美好</div>','<div class="Yl-font2">只为好生活</div>']
        },
        fontAnimationMode:{
            0:['fadeInUp','fadeInUp','slideInLeft'],
            1:['fadeInUp','fadeInUp','slideInLeft'],
            2:['fadeInUp','fadeInUp','slideInLeft']
        },
        customTemplate:{
            0:['<div class="Yl-Button"><a href="../index.html">开启你的幸福之门</a></div>'],
            1:['<div class="Yl-Button"><a href="../index.html">探索你的精彩旅途</a></div>'],
            2:['<div class="Yl-Button"><a href="../index.html">进入你的美好生活</a></div>']
        },
        callback:function(e){

        },
        before: function(e) {

        },
        after: function(e) {

        }
    });


//第一块


    $(".demo5").animatext({speed: 150,
        effect: 'tada',
        random: true,
        infinite: true
    });


//第三块
    $(".demo3").animatext({speed: 150,
        mode: "words",
        effect: 'swing',
        infinite: true
    });



    $('#fullpage').fullpage({
        sectionsColor:['#fff','#48a6dc', '#ef674d', '#fadd67'],
        navigation:true,
        afterRender: function () {
            //playing the video
            $('video').get(0).play();
        }

    });


});
