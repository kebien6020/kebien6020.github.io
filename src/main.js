import './main.scss'
import smoothScroll from 'smoothscroll-polyfill'
smoothScroll.polyfill()

// # Smooth scrolling

const $navlinks = document.querySelectorAll('.navlinks a')
const getHash = url => url.match(/#(.*)$/)[1]

// Override the onclick for each navlink
$navlinks.forEach($navlink => {
  $navlink.addEventListener('click', event => {
    // Prevent the default instant scroll
    event.preventDefault()
    const targetId = getHash($navlink.href)
    // Get the intended target
    const $target = document.getElementById(targetId)
    // Scroll smoothly
    $target.scrollIntoView({ behavior: 'smooth' })
  })
})
