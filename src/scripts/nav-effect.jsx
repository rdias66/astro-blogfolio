// navigation.js

// Toggle the active state of the navigation links
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    // Get all nav links and remove 'active' class
    const links = document.querySelectorAll('.nav-link')
    links.forEach((navLink) => {
      navLink.classList.remove('active')
    })

    // Add 'active' class to the clicked link
    link.classList.add('active')
  })
})

// Optional: Close the active link on outside click
document.addEventListener('click', (event) => {
  const linksContainer = document.querySelector('.nav-links')

  // Check if the clicked element is outside the navigation links
  if (!linksContainer.contains(event.target)) {
    // Remove active class from all links if clicking outside
    document.querySelectorAll('.nav-link').forEach((navLink) => {
      navLink.classList.remove('active')
    })
  }
})
