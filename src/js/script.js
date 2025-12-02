// ========================================
// DOM Element Selection
// ========================================
const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('navMenu')
const navLinks = document.querySelectorAll('.nav-link')
const heroCTA = document.getElementById('heroButton')
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
        const navbarHeight = document.getElementById('navBar').offsetHeight
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
    modal.classList.remove('hidden')
    document.body.style.overflow = 'hidden' // Prevent background scrolling
}

function closeModalHandler() {
    modal.classList.add('hidden')
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
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModalHandler()
    }
})

// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const email = document.getElementById('emailInput').value.trim()

//     if (!email) {
//         alert("Please enter a valid email address.")
//         return
//     }

//     alert("Thank you! Your 30% off code is on the way!");

//     closeModalHandler()
// })


signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = emailInput.value.trim()

    if (email) {
        // Simulate form submission
        showSuccessMessage(email)

        // Close modal after a short delay
        setTimeout(() => {
            closeModalHandler()
        }, 2500)
    }
})

function showSuccessMessage(email) {
    // Create success message element
    const successDiv = document.createElement('div')
    successDiv.className = 'success-message'
    successDiv.innerHTML = `
        <p style="font-size: 1.5rem margin-bottom: 0.5rem"><img src="./images/dance.gif" alt="celey"> Thanks for signing up!</p>
        <p>Your 30% discount code has been sent to:</p>
        <p><strong>${email}</strong></p>
        <p style="margin-top: 1rem font-size: 0.875rem color: #718096">Check your inbox for your exclusive Tacky Town discount!</p>
    `

    // Style the success message
    successDiv.style.cssText = `
        background: linear-gradient(135deg, #7ED957, #6EC845)
        color: #2d3748
        padding: 2rem
        border-radius: 8px
        margin-top: 1rem
        text-align: center
        animation: slideUp 0.3s ease
    `

    // Replace form with success message
    const form = document.querySelector('#signupForm')
    form.replaceWith(successDiv)

    // Restore form after modal closes
    setTimeout(() => {
        successDiv.replaceWith(form)
    }, 3000)
}