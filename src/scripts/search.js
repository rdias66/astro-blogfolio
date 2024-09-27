document.querySelector('.search-button').addEventListener('click', () => {
  document.querySelector('.search-overlay').classList.toggle('active')
})

document.querySelector('.search-overlay').addEventListener('click', (event) => {
  const searchBox = document.querySelector('.search-box')
  // Check if the click was outside the search box
  if (!searchBox.contains(event.target)) {
    document.querySelector('.search-overlay').classList.remove('active')
  }
})
