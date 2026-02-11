/**
 * Main JavaScript for Domestic Violence Resources Website
 * Handles navigation, quick exit, and general interactivity
 */

// ========== Safety Modal ==========
document.addEventListener('DOMContentLoaded', function() {
    const safetyModal = document.getElementById('safetyModal');
    const modalClose = document.getElementById('modalClose');
    
    if (safetyModal && modalClose) {
        // Check if user has dismissed the modal in this session
        const modalDismissed = sessionStorage.getItem('safetyModalDismissed');
        
        if (!modalDismissed) {
            // Show modal
            safetyModal.classList.add('active');
        }
        
        // Close modal on button click
        modalClose.addEventListener('click', function() {
            safetyModal.classList.remove('active');
            sessionStorage.setItem('safetyModalDismissed', 'true');
        });
        
        // Close modal when clicking outside the content
        safetyModal.addEventListener('click', function(e) {
            if (e.target === safetyModal) {
                safetyModal.classList.remove('active');
                sessionStorage.setItem('safetyModalDismissed', 'true');
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && safetyModal.classList.contains('active')) {
                safetyModal.classList.remove('active');
                sessionStorage.setItem('safetyModalDismissed', 'true');
            }
        });
    }
});

// ========== Scroll to Top Button ==========
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top on click
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ========== Last Updated Date ==========
document.addEventListener('DOMContentLoaded', function() {
    const lastUpdatedElements = document.querySelectorAll('#lastUpdated');
    
    if (lastUpdatedElements.length > 0) {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        lastUpdatedElements.forEach(function(element) {
            element.textContent = formattedDate;
        });
    }
});

// ========== Quick Exit Functionality ==========
function quickExit() {
    // Replace current page in history with Google to hide site visit
    window.location.replace('https://www.google.com');
}

// Attach quick exit handlers
document.addEventListener('DOMContentLoaded', function() {
    const quickExitBtn = document.getElementById('quickExit');
    const quickExitFooter = document.getElementById('quickExitFooter');
    
    if (quickExitBtn) {
        quickExitBtn.addEventListener('click', quickExit);
    }
    
    if (quickExitFooter) {
        quickExitFooter.addEventListener('click', quickExit);
    }
    
    // Emergency keyboard shortcut: Escape key 3 times quickly
    let escapeCount = 0;
    let escapeTimer;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            escapeCount++;
            
            if (escapeCount === 3) {
                quickExit();
            }
            
            // Reset counter after 1 second
            clearTimeout(escapeTimer);
            escapeTimer = setTimeout(function() {
                escapeCount = 0;
            }, 1000);
        }
    });
});

// ========== Mobile Navigation ==========
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            mobileToggle.setAttribute('aria-expanded', isExpanded);
            
            // Animate hamburger icon
            const spans = mobileToggle.querySelectorAll('span');
            if (isExpanded) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});

// ========== Smooth Scrolling for Anchor Links ==========
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update focus for accessibility
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();
            }
        });
    });
});

// ========== Form Validation (if forms are added later) ==========
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\(\)\+]+$/;
    return re.test(phone);
}

// ========== Lazy Loading Images (if images are added) ==========
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(function(img) {
            imageObserver.observe(img);
        });
    }
});

// ========== Utility Functions ==========
// Format phone numbers for display
function formatPhoneNumber(phone) {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phone;
}

// Copy text to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            console.log('Copied to clipboard');
        }).catch(function(err) {
            console.error('Failed to copy:', err);
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Failed to copy:', err);
        }
        document.body.removeChild(textArea);
    }
}

// ========== Privacy Warning on Page Load ==========
// Note: Safety modal now handles privacy warnings on first page load
// This function is kept for backward compatibility
document.addEventListener('DOMContentLoaded', function() {
    // Privacy warning is now handled by the safety modal
    // which displays on the home page only
});

// ========== Console Warning for Safety ==========
console.log('%cSAFETY WARNING', 'color: red; font-size: 20px; font-weight: bold;');
console.log('%cRemember to clear your browser history if you need to hide your visit to this site.', 'font-size: 14px;');
console.log('%cUse the Quick Exit button (top right) or press Escape 3 times quickly to leave immediately.', 'font-size: 14px;');

// ========== Service Worker Registration (for PWA, optional) ==========
// Uncomment if you want to make this a Progressive Web App
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
*/

// ========== Analytics (placeholder - use privacy-respecting analytics) ==========
// Note: DO NOT use tracking that could compromise user privacy/safety
// Only use if absolutely necessary and with proper privacy safeguards
function logPageView() {
    // Implement privacy-respecting analytics here
    // Consider not tracking at all for safety reasons
}

// ========== Easter Egg - Animated Hearts ==========
document.addEventListener('DOMContentLoaded', function() {
    const easterEgg = document.getElementById('easterEgg');
    
    if (easterEgg) {
        // Click handler
        easterEgg.addEventListener('click', createHeartBurst);
        
        // Keyboard accessibility
        easterEgg.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                createHeartBurst();
            }
        });
    }
    
    function createHeartBurst() {
        const numberOfHearts = 15; // Number of hearts to create
        
        for (let i = 0; i < numberOfHearts; i++) {
            setTimeout(function() {
                createFloatingHeart();
            }, i * 100); // Stagger the heart creation
        }
    }
    
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        
        // Random horizontal starting position near the easter egg
        const easterEggRect = document.getElementById('easterEgg').getBoundingClientRect();
        const startX = easterEggRect.left + (Math.random() - 0.5) * 100;
        const startY = easterEggRect.top;
        
        heart.style.left = startX + 'px';
        heart.style.top = startY + 'px';
        
        // Random animation duration for variety
        const duration = 2.5 + Math.random() * 1.5;
        heart.style.animationDuration = duration + 's';
        
        // Random horizontal drift
        const drift = (Math.random() - 0.5) * 200;
        heart.style.setProperty('--drift', drift + 'px');
        
        document.body.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(function() {
            heart.remove();
        }, duration * 1000);
    }
});

// ========== Export functions for testing ==========
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        validatePhone,
        formatPhoneNumber,
        copyToClipboard
    };
}
