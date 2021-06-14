// // $('*[animation]').addClass('invisible animated');

// // $(window).scroll(function () {
// //   $('*[animation]').each(function () {
// //     //アニメーションをさせる要素の上の位置
// //     var imgPos = $(this).offset().top;
// //     //ウインドウ上部の位置
// //     var scroll = $(window).scrollTop();
// //     //アニメーションを発火させる位置
// //     var position = imgPos - window.innerHeight + window.innerHeight / 5;

// //     //animation属性に記載されたアニメーション名を取得
// //     if (this.hasAttribute('animation')) {
// //         var animation = this.getAttribute('animation');
// //     }
// //     //発火位置まで来たら要素を表示し、アニメーションをclass名に追加
// //     if (scroll > position) {
// //       $(this).removeClass('invisible').addClass(animation);
// //     }
// //     //ページのトップまでスクロールしたら要素を非表示（リセット）
// //     if (scroll < 10) {
// //       $(this).removeClass(animation).addClass('invisible');
// //     }
// //   });
// // });

// $(window).on('load scroll', function(){
  
//   $('.animated').css('opacity', '0');

//   //animatedのclassを持った要素をセレクタに指定
//   var elem = $('.animated');

//   elem.each(function () {

//     //data属性からアニメーション名を取得
//     var isAnimate = $(this).data('animate');
//     //animated要素に位置を取得
//     var elemOffset = $(this).offset().top;
//     //現在のスクロールポジションを取得
//     var scrollPos = $(window).scrollTop();
//     //ウィンドウの高さを取得
//     var wh = $(window).height();

//     //animated要素がウィンドウ内の中央位置にきたら処理
//     if(scrollPos > elemOffset - wh + (wh / 2)){
//       $(this).addClass(isAnimate);
//     }
//   });

// });


$(window).on('load scroll', function(){

  //animatedのclassを持った要素をセレクタに指定
  var elem = $('.animated');

  elem.each(function () {

    //data属性からアニメーション名を取得
    var isAnimate = $(this).data('animate');
    //animated要素に位置を取得
    var elemOffset = $(this).offset().top;
    //現在のスクロールポジションを取得
    var scrollPos = $(window).scrollTop();
    //ウィンドウの高さを取得
    var wh = $(window).height();

    //animated要素がウィンドウ内の中央位置にきたら処理
    if(scrollPos > elemOffset - wh + (wh / 5)){
      $(this).addClass(isAnimate);
    }
  });

});