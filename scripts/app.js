let navBtn = document.querySelector('.nav-mobile__icons__humberger');
let navMobile = document.querySelector('.nav-mobile-links');
let navMobileCover = document.querySelector('.cover');
let resumeListItems = document.querySelectorAll('.resume-list__item');

navBtn.addEventListener('click',()=>{
    navBtn.classList.toggle('nav-mobile__btn--avtive')
    if (navBtn.classList[1]) {
        navMobile.classList.add('nav-mobile__links--active');
        navMobileCover.classList.add('cover--active');
    } else {
        navMobile.classList.remove('nav-mobile__links--active');
        navMobileCover.classList.remove('cover--active');
    }
})

resumeListItems.forEach(resumeListItem => {
    resumeListItem.addEventListener('click',function (){
        document.querySelector('.resume-list__item--active').classList.remove('resume-list__item--active')
        document.querySelector('.resume-content--show').classList.remove('resume-content--show')
        this.classList.add('resume-list__item--active')
        let contentId = this.getAttribute('data-content-id')
        document.querySelector(contentId).classList.add('resume-content--show')
    })
})