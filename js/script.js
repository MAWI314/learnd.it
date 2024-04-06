const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year')


const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
}

navBtn.addEventListener('click', handleNav)

const handleNavItems = () => {
    navMobile.classList.remove('nav-mobile--active');
    navBtn.classList.remove('is-active');

}

navMobile.addEventListener('click', handleNavItems)


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;

}
handleCurrentYear();

// ////
document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navigation')
	const allNavItems = document.querySelectorAll(".nav-link")
	const navList = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	allNavItems.forEach(item => item.addEventListener('click', () => {
		navList.classList.remove('show')
	}))

    window.addEventListener('scroll', addShadow)
})



