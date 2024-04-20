const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.burger-btn')
const footerYear = document.querySelector('.footer__year')


const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
}

navBtn.addEventListener('click', handleNav)

const handleNavItems = () => {
	navMobile.classList.remove('nav-mobile--active')
	navBtn.classList.remove('is-active')
}

navMobile.addEventListener('click', handleNavItems)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

// ////
