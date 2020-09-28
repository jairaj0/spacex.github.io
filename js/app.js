(function() {
    let socials = document.querySelectorAll('.social div')

    socials.forEach(function(social, index) {
        social.style.animation = `moveIn .6s cubic-bezier(.51,.92,.24,1.15) forwards ${index/7 + 0.2}s`
    })

    let rocketPiceces = document.querySelectorAll('.rocket-body span');

    let rocket = document.querySelector('.rocket');

    let triggarStart = window.innerHeight / 10;

    let rocketOffsetTop = rocket.offsetTop;

    let thirdOffsetTop = rocketPiceces[2].offsetTop;

    document.addEventListener('scroll',(e) => {
        if(window.scrollY > (rocketOffsetTop - triggarStart)) {
            rocketPiceces[0].classList.add('active');
            rocketPiceces[1].classList.add('active');

        }else {
            rocketPiceces[0].classList.remove('active');
            rocketPiceces[1].classList.remove('active');
        }

        if(window.scrollY > (thirdOffsetTop - triggarStart)) {
            rocketPiceces[2].classList.add('active');
        } else {
            rocketPiceces[2].classList.remove('active');
        }
    })

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.side-menu-bar');

    hamberger.addEventListener('click', function(){
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });


}())