import './main.scss'
import smoothScroll from 'smoothscroll-polyfill'
smoothScroll.polyfill()

// # Smooth scrolling

const $navlinks = document.querySelectorAll('.navlinks a')
const getHash = url => url.match(/#(.*)$/)[1]
const scrollTo = id =>
  document.getElementById(id).scrollIntoView({behavior: 'smooth'})

// The page has just loaded, go to the according section
// as per the hash after a second
setTimeout(() => {
  if (location.hash !== '') {
    const targetId = getHash(location.hash)
    scrollTo(targetId)
  }
}, 1000)

// Override the onclick for each navlink
$navlinks.forEach($navlink => {
  $navlink.addEventListener('click', event => {
    // Prevent the default instant scroll
    event.preventDefault()
    const targetId = getHash($navlink.href)
    // Scroll smoothly to target
    scrollTo(targetId)
    // Update the hash like the default action
    location.hash = '#' + targetId
  })
})
