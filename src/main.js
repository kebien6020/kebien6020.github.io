import './main.scss'
import smoothScroll from 'smoothscroll-polyfill'
smoothScroll.polyfill()

// # Smooth scrolling

export const $navlinks = document.querySelectorAll('.navlinks a')

export const getHash = url => url.match(/#(.*)$/)[1]

export const scrollTo = id => {
  document.getElementById(id).scrollIntoView({behavior: 'smooth'})
}

export const updateHash = hash => {
  window.location.hash = '#' + hash
}

export const handleNavlinkClick = event => {
  const $navlink = event.target
  // Prevent the default instant scroll
  event.preventDefault()
  const targetId = getHash($navlink.href)
  // Scroll smoothly to target
  scrollTo(targetId)
  // Update the hash like the default action
  updateHash(targetId)
}

export const scrollToHash = () => {
  if (location.hash !== '') {
    const targetId = getHash(location.hash)
    scrollTo(targetId)
  }
}

export const init = () => {
  // The page has just loaded, go to the according section
  // as per the hash after a second
  setTimeout(scrollToHash, 1000)

  // Override the onclick for each navlink
  $navlinks.forEach($navlink => {
    $navlink.addEventListener('click', handleNavlinkClick)
  })
}

init()
