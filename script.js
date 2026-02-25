/**
 * Main JavaScript for Domestic Violence Resources Website
 * Handles navigation, quick exit, and general interactivity
 */

// ========== Safety Modal ==========
document.addEventListener('DOMContentLoaded', function() {
    const safetyModal = document.getElementById('safetyModal');
    const dismissButton = document.getElementById('dismissSafetyModal');
    
    if (safetyModal && dismissButton) {
        // Check if user has dismissed the modal in this session
        const modalDismissed = sessionStorage.getItem('safetyModalDismissed');
        
        if (!modalDismissed) {
            // Show modal after a brief delay
            setTimeout(function() {
                safetyModal.classList.add('active');
            }, 500);
        }
        
        // Close modal on button click
        dismissButton.addEventListener('click', function() {
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
// ========== Roulette Animation for Cards ==========
document.addEventListener('DOMContentLoaded', function() {
    // Select all cards that should have roulette animation
    const cardSelectors = [
        '.abuse-type-card',
        '.red-flag-card',
        '.resource-card',
        '.stat-card',
        '.wheel-image-card'
    ];
    
    const cards = document.querySelectorAll(cardSelectors.join(', '));
    
    if (cards.length === 0) return;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // If reduced motion is preferred, keep cards visible
        return;
    }
    
    // Add class to body to enable roulette styling
    document.body.classList.add('js-roulette-enabled');
    
    // Use Intersection Observer for performance
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Add animation class when element comes into view
                entry.target.classList.add('roulette-animate');
                
                // Stop observing this element
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards
    cards.forEach(function(card) {
        observer.observe(card);
    });
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
        // Use current date as the last updated date
        const lastUpdateDate = new Date();
        const formattedDate = lastUpdateDate.toLocaleDateString('en-US', {
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
    
    // Emergency keyboard shortcut: Escape key 2 times quickly
    let escapeCount = 0;
    let escapeTimer;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' || e.key === 'Esc') {
            console.log('ESC pressed. Current count:', escapeCount);
            
            // Don't count escape if any modal is active
            const safetyModal = document.getElementById('safetyModal');
            const securityBanner = document.getElementById('securityBanner');
            const signsViewer = document.getElementById('signsViewer');
            const wheelViewer = document.getElementById('wheelViewer');
            
            if (safetyModal && safetyModal.classList.contains('active')) {
                console.log('Safety modal active - letting modal handle ESC');
                return;
            }
            
            if (signsViewer && signsViewer.classList.contains('active')) {
                console.log('Signs viewer active - letting modal handle ESC');
                return;
            }
            
            if (wheelViewer && wheelViewer.classList.contains('active')) {
                console.log('Wheel viewer active - letting modal handle ESC');
                return;
            }
            
            if (securityBanner && securityBanner.classList.contains('active')) {
                // First escape closes the banner
                if (escapeCount === 0) {
                    console.log('Closing security banner on first ESC');
                    securityBanner.classList.remove('active');
                    document.body.classList.remove('banner-active');
                    sessionStorage.setItem('securityBannerDismissed', 'true');
                    // Don't count this as an escape for Quick Exit
                    return;
                }
            }
            
            // Clear any existing timer
            if (escapeTimer) {
                clearTimeout(escapeTimer);
            }
            
            escapeCount++;
            console.log('Escape count incremented to:', escapeCount);
            
            if (escapeCount === 2) {
                console.log('ESC pressed 2 times - triggering Quick Exit!');
                quickExit();
                escapeCount = 0;
                return;
            }
            
            // Reset counter after 1 second if second ESC not pressed
            escapeTimer = setTimeout(function() {
                console.log('Timer expired - resetting escape count');
                escapeCount = 0;
            }, 1000);
            
            // Reset counter after 1 second
            clearTimeout(escapeTimer);
            escapeTimer = setTimeout(function() {
                console.log('Resetting escape count to 0');
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
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
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
                // Reset hamburger animation
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
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

// ========== Easter Egg - Heartbeat with Ripple Effect ==========
// Define functions in global scope for proper access
function triggerHeartbeat(color) {
    const easterEggEl = document.getElementById('easterEgg');
    if (!easterEggEl) return;
    
    // Add heartbeat animation class
    easterEggEl.classList.add('heartbeat-active');
    
    // Create ripple effects
    createRipple(color, 0);
    setTimeout(function() { createRipple(color, 0); }, 150);
    setTimeout(function() { createRipple(color, 0); }, 800);
    setTimeout(function() { createRipple(color, 0); }, 950);
    
    // Remove heartbeat class after animation
    setTimeout(function() {
        easterEggEl.classList.remove('heartbeat-active');
    }, 2000);
}

function createRipple(color, delay) {
    setTimeout(function() {
        const easterEggEl = document.getElementById('easterEgg');
        if (!easterEggEl) return;
        
        const rect = easterEggEl.getBoundingClientRect();
        
        const ripple = document.createElement('div');
        ripple.className = 'sonar-ripple';
        ripple.style.left = (rect.left + rect.width / 2) + 'px';
        ripple.style.top = (rect.top + rect.height / 2) + 'px';
        ripple.style.borderColor = color;
        
        document.body.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(function() {
            if (ripple && ripple.parentNode) {
                ripple.remove();
            }
        }, 2000);
    }, delay);
}

document.addEventListener('DOMContentLoaded', function() {
    const easterEgg = document.getElementById('easterEgg');
    
    if (easterEgg) {
        // Determine color based on current page
        const pathname = window.location.pathname;
        let page = 'index';
        
        if (pathname.indexOf('resources') !== -1) page = 'resources';
        else if (pathname.indexOf('signs') !== -1) page = 'signs';
        else if (pathname.indexOf('stats') !== -1) page = 'stats';
        else if (pathname.indexOf('idaho') !== -1) page = 'idaho';
        
        const colors = {
            'index': '#C41E3A',      // Primary red
            'resources': '#DC143C',  // Crimson
            'signs': '#B22222',      // Firebrick
            'stats': '#8B0000',      // Dark red
            'idaho': '#B22222'       // Firebrick
        };
        const heartColor = colors[page] || colors['index'];
        
        // Click handler
        easterEgg.addEventListener('click', function(e) {
            e.preventDefault();
            triggerHeartbeat(heartColor);
        });
        
        // Keyboard accessibility
        easterEgg.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                triggerHeartbeat(heartColor);
            }
        });
    }
});

// ========== Signs Viewer Modal with Carousel ==========
document.addEventListener('DOMContentLoaded', function() {
    const viewerModal = document.getElementById('signsViewer');
    const viewerCardContainer = document.getElementById('viewerCardContainer');
    const viewerCounter = document.getElementById('viewerCounter');
    const closeBtn = document.getElementById('closeViewer');
    const prevBtn = document.getElementById('viewerPrev');
    const nextBtn = document.getElementById('viewerNext');
    const abuseCards = document.querySelectorAll('.abuse-type-card');
    
    if (!viewerModal || abuseCards.length === 0) return;
    
    let currentIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    const MIN_SWIPE_DISTANCE = 50;
    
    // Store card contents
    const cardContents = Array.from(abuseCards).map(card => card.innerHTML);
    
    // Add click handlers to all abuse type cards
    abuseCards.forEach((card, index) => {
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Click to view ${card.querySelector('h3').textContent} details`);
        
        card.addEventListener('click', function() {
            openViewer(index);
        });
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openViewer(index);
            }
        });
    });
    
    function openViewer(index) {
        currentIndex = index;
        showCard(currentIndex);
        viewerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus management for accessibility
        setTimeout(() => {
            closeBtn.focus();
        }, 100);
    }
    
    function closeViewer() {
        viewerModal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Return focus to the card that was clicked
        if (abuseCards[currentIndex]) {
            abuseCards[currentIndex].focus();
        }
    }
    
    function showCard(index) {
        currentIndex = index;
        viewerCardContainer.innerHTML = cardContents[index];
        viewerCounter.textContent = `${index + 1} of ${cardContents.length}`;
        
        // Update button states
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === cardContents.length - 1;
        
        // Announce to screen readers
        viewerCardContainer.setAttribute('aria-live', 'polite');
    }
    
    function navigatePrev() {
        if (currentIndex > 0) {
            showCard(currentIndex - 1);
        }
    }
    
    function navigateNext() {
        if (currentIndex < cardContents.length - 1) {
            showCard(currentIndex + 1);
        }
    }
    
    // Close button handler
    closeBtn.addEventListener('click', closeViewer);
    
    // Navigation button handlers
    prevBtn.addEventListener('click', navigatePrev);
    nextBtn.addEventListener('click', navigateNext);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!viewerModal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeViewer();
        } else if (e.key === 'ArrowLeft') {
            navigatePrev();
        } else if (e.key === 'ArrowRight') {
            navigateNext();
        }
    });
    
    // Touch swipe detection
    viewerModal.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    viewerModal.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > MIN_SWIPE_DISTANCE) {
            if (swipeDistance > 0) {
                // Swiped right - go to previous
                navigatePrev();
            } else {
                // Swiped left - go to next
                navigateNext();
            }
        }
    }
    
    // Close modal when clicking outside content
    viewerModal.addEventListener('click', function(e) {
        if (e.target === viewerModal) {
            closeViewer();
        }
    });
    
    // Focus trap inside modal
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    viewerModal.addEventListener('keydown', function(e) {
        if (!viewerModal.classList.contains('active')) return;
        
        if (e.key === 'Tab') {
            const focusableContent = viewerModal.querySelectorAll(focusableElements);
            const firstFocusable = focusableContent[0];
            const lastFocusable = focusableContent[focusableContent.length - 1];
            
            if (e.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
});

// ========== Security Alert Banner ==========
document.addEventListener('DOMContentLoaded', function() {
    const securityBanner = document.getElementById('securityBanner');
    const closeBanner = document.getElementById('closeBanner');
    
    if (securityBanner && closeBanner) {
        // Show banner on every page load unless dismissed in this session
        const bannerDismissed = sessionStorage.getItem('securityBannerDismissed');
        
        if (!bannerDismissed) {
            // Show banner immediately (no delay for first-time visibility)
            setTimeout(function() {
                securityBanner.classList.add('active');
                document.body.classList.add('banner-active');
            }, 500);
        }
        
        // Close banner on button click
        closeBanner.addEventListener('click', function() {
            securityBanner.classList.remove('active');
            document.body.classList.remove('banner-active');
            sessionStorage.setItem('securityBannerDismissed', 'true');
        });
        
        // Close with keyboard
        closeBanner.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                securityBanner.classList.remove('active');
                document.body.classList.remove('banner-active');
                sessionStorage.setItem('securityBannerDismissed', 'true');
            }
        });
    }
});

// ========== Power Wheel Viewer Modal ==========
document.addEventListener('DOMContentLoaded', function() {
    const wheelModal = document.getElementById('wheelViewer');
    const wheelImageContainer = document.querySelector('.wheel-viewer-image-container');
    const wheelCounter = document.getElementById('wheelViewerCounter');
    const closeBtn = document.getElementById('closeWheelViewer');
    const prevBtn = document.getElementById('wheelViewerPrev');
    const nextBtn = document.getElementById('wheelViewerNext');
    const wheelCards = document.querySelectorAll('.wheel-image-card');
    
    if (!wheelModal || wheelCards.length === 0) return;
    
    let currentIndex = 0;
    
    // Store wheel image sources
    const wheelImages = Array.from(wheelCards).map(card => {
        const img = card.querySelector('.wheel-image');
        return img ? img.src : '';
    });
    
    // Add click and keyboard handlers to wheel cards
    wheelCards.forEach((card, index) => {
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Click to enlarge wheel image ${index + 1} of ${wheelCards.length}`);
        
        card.addEventListener('click', function() {
            openWheelViewer(index);
        });
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openWheelViewer(index);
            }
        });
    });
    
    function openWheelViewer(index) {
        currentIndex = index;
        showWheelImage(currentIndex);
        wheelModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus management
        setTimeout(() => {
            closeBtn.focus();
        }, 100);
    }
    
    function closeWheelViewer() {
        wheelModal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Return focus to clicked card
        if (wheelCards[currentIndex]) {
            wheelCards[currentIndex].focus();
        }
    }
    
    function showWheelImage(index) {
        // Create/update image element
        wheelImageContainer.innerHTML = `<img src="${wheelImages[index]}" alt="Power and Control Wheel ${index + 1}" class="wheel-viewer-image">`;
        
        // Update counter
        wheelCounter.textContent = `${index + 1} of ${wheelImages.length}`;
        
        // Update navigation buttons
        prevBtn.disabled = (index === 0);
        nextBtn.disabled = (index === wheelImages.length - 1);
    }
    
    function navigatePrev() {
        if (currentIndex > 0) {
            currentIndex--;
            showWheelImage(currentIndex);
        }
    }
    
    function navigateNext() {
        if (currentIndex < wheelImages.length - 1) {
            currentIndex++;
            showWheelImage(currentIndex);
        }
    }
    
    // Close button
    closeBtn.addEventListener('click', closeWheelViewer);
    closeBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            closeWheelViewer();
        }
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', navigatePrev);
    nextBtn.addEventListener('click', navigateNext);
    
    // Close on outside click
    wheelModal.addEventListener('click', function(e) {
        if (e.target === wheelModal) {
            closeWheelViewer();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!wheelModal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeWheelViewer();
        } else if (e.key === 'ArrowLeft') {
            navigatePrev();
        } else if (e.key === 'ArrowRight') {
            navigateNext();
        }
    });
});