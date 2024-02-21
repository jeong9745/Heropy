//페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', function () {
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500) {
    // Badge 요소 숨기기!
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 상단으로 이동 버튼 보이기!
    gsap.to(toTopEl, .6, {
      opacity: 1,
      x: 0
    });

  // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {
    // Badge 요소 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 상단으로 이동 버튼 숨기기!
    gsap.to(toTopEl, .6, {
      opacity: 0,
      x: 100
    });
  }
});
toTopEl.addEventListener('click', function () {
  gsap.to(window, .6, {
    scrollTo: 0
  });
});

//나타날 요소들 .fade-in 을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');

//요소들을 하나씩 반복해서 처리
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity:1
  });
});

new Swiper('.notice .swiper',{
  direction: 'vertical', //수직슬라이드
  autoplay: true, //자동재생 여부
  loop: true //반복 재생 여부
})

new Swiper('.promotion .swiper',{
  //direction: 'horizontal', //수평 슬라이드
  autoplay: true, //자동 재생 여부
  loop: true, //반복 재생 여부
  slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이두 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  pagination:{
    el: '.promotion .swiper-pagination', //페이지 번호 요소
    clickable: true //사용자의 페이지 번호 제어 여부
  },
  navigation: {
    prevEl:'.promotion .swiper-button-prev',
    nextEl:'.promotion .swiper-button-next'
  }
})

new Swiper('.awards .swiper',{
  autoplay: true,
  loop: true,
  apaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-button-prev',
    prevEl: '.awards .swiper-button-next'
  }
})

const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
//토글 버튼을 눌렀을 때...
promotionToggleBtn.addEventListener('click', function(){
  if(promotionEl.classList.contains('hide')){
    promotionEl.classList.remove('hide');
  }else{
    promotionEl.classList.add('hide');
  }
});

gsap.to('.floating1', 1.5, {
  delay: 1, //얼마나 늦게 애니메이션을 시작할 것인지?
  y: 15, //transform: translateY의 수치를 얼마나 움직일지
  repeat: -1, //몇번 반복할 것인지, -1은 무한반복이다.
  yoyo: true, //한번 재생한 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut //Easing함수 적용?
})

gsap.to('.floating2', 2, {
  delay: .5, //얼마나 늦게 애니메이션을 시작할 것인지?
  y: 15, //transform: translateY의 수치를 얼마나 움직일지
  repeat: -1, //몇번 반복할 것인지, -1은 무한반복이다.
  yoyo: true, //한번 재생한 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut //Easing함수 적용?
})

gsap.to('.floating3', 2.5, {
  delay: 1.5, //얼마나 늦게 애니메이션을 시작할 것인지?
  y: 20, //transform: translateY의 수치를 얼마나 움직일지
  repeat: -1, //몇번 반복할 것인지, -1은 무한반복이다.
  yoyo: true, //한번 재생한 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut //Easing함수 적용?
})

const spyEls = document.querySelectorAll('section.scroll-spy');
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});