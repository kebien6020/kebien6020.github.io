import './main.scss'

// Smooth scrolling
const $anchors = [
  document.getElementById('projects'),
  document.getElementById('about'),
  document.getElementById('contact')
]

$anchors.forEach($anchor => {
  $anchor.scrollIntoView({
    behavior: 'smooth'
  })
})
