// ========================================
// DOM Element Selection
// ========================================
const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('navMenu')
const navLinks = document.querySelectorAll('.nav-link')
const heroCTA = document.getElementById('heroCTA')
const modal = document.getElementById('signupModal')
const closeModal = document.getElementById('closeModal')
const signupForm = document.getElementById('signupForm')
const emailInput = document.getElementById('emailInput')
const carousel = document.getElementById('carousel')
const filterButtons = document.querySelectorAll('.filter-button')


// ========================================
// Smooth Scrolling for Navigation Links
// ========================================
function smoothScroll(targetId) {
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
        const navbarHeight = document.getElementById('navbar').offsetHeight
        const targetPosition = targetElement.offsetTop - navbarHeight

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        })
    }
}

// Add smooth scrolling to all navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href')

        // Only apply smooth scroll to anchor links
        if (href.startsWith('#')) {
            e.preventDefault()
            smoothScroll(href)
        }
    })
})

// ========================================
// Modal Functionality
// ========================================
function openModal() {
    modal.classList.add('show')
    document.body.style.overflow = 'hidden' // Prevent background scrolling
}

function closeModalHandler() {
    modal.classList.remove('show')
    document.body.style.overflow = 'auto' // Restore scrolling

    // Reset form
    signupForm.reset()
}

// Open modal when CTA button is clicked
heroCTA.addEventListener('click', openModal)

// Close modal when X button is clicked
closeModal.addEventListener('click', closeModalHandler)

// Close modal when clicking outside the modal content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalHandler()
    }
})

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModalHandler()
    }
})
