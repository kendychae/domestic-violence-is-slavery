/**
 * Accessibility Widget
 * Draggable widget with font size, contrast, and accessibility controls
 */

(function() {
    'use strict';
    
    // ========== Initialize Widget ==========
    const widget = document.getElementById('accessibilityWidget');
    if (!widget) return;
    
    const handle = widget.querySelector('.widget-handle');
    const increaseFontBtn = document.getElementById('increaseFontBtn');
    const decreaseFontBtn = document.getElementById('decreaseFontBtn');
    const toggleContrastBtn = document.getElementById('toggleContrastBtn');
    
    // ========== Load Saved Preferences ==========
    let fontSizeScale = parseFloat(localStorage.getItem('fontSizeScale')) || 1;
    let highContrast = localStorage.getItem('highContrast') === 'true';
    let widgetPosition = JSON.parse(localStorage.getItem('widgetPosition')) || null;
    
    // Apply saved preferences
    applyFontSize(fontSizeScale);
    if (highContrast) {
        document.body.classList.add('high-contrast');
    }
    if (widgetPosition) {
        widget.style.bottom = widgetPosition.bottom;
        widget.style.right = widgetPosition.right;
        widget.style.top = widgetPosition.top || 'auto';
        widget.style.left = widgetPosition.left || 'auto';
    }
    
    // ========== Draggable Functionality ==========
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    
    handle.addEventListener('mousedown', dragStart);
    handle.addEventListener('touchstart', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag);
    document.addEventListener('mouseup', dragEnd);
    document.addEventListener('touchend', dragEnd);
    
    function dragStart(e) {
        if (e.type === 'touchstart') {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }
        
        if (e.target === handle || handle.contains(e.target)) {
            isDragging = true;
            widget.style.cursor = 'grabbing';
        }
    }
    
    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            
            if (e.type === 'touchmove') {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }
            
            xOffset = currentX;
            yOffset = currentY;
            
            // Remove default positioning
            widget.style.bottom = 'auto';
            widget.style.right = 'auto';
            
            setTranslate(currentX, currentY, widget);
        }
    }
    
    function dragEnd(e) {
        if (isDragging) {
            initialX = currentX;
            initialY = currentY;
            isDragging = false;
            widget.style.cursor = 'move';
            
            // Save position
            saveWidgetPosition();
        }
    }
    
    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate(${xPos}px, ${yPos}px)`;
    }
    
    function saveWidgetPosition() {
        const rect = widget.getBoundingClientRect();
        const position = {
            top: rect.top + 'px',
            left: rect.left + 'px',
            bottom: (window.innerHeight - rect.bottom) + 'px',
            right: (window.innerWidth - rect.right) + 'px'
        };
        localStorage.setItem('widgetPosition', JSON.stringify(position));
    }
    
    // ========== Font Size Controls ==========
    increaseFontBtn.addEventListener('click', function() {
        if (fontSizeScale < 1.5) {
            fontSizeScale += 0.1;
            applyFontSize(fontSizeScale);
            saveFontSize();
            announceToScreenReader('Font size increased');
        } else {
            announceToScreenReader('Maximum font size reached');
        }
    });
    
    decreaseFontBtn.addEventListener('click', function() {
        if (fontSizeScale > 0.8) {
            fontSizeScale -= 0.1;
            applyFontSize(fontSizeScale);
            saveFontSize();
            announceToScreenReader('Font size decreased');
        } else {
            announceToScreenReader('Minimum font size reached');
        }
    });
    
    function applyFontSize(scale) {
        document.documentElement.style.setProperty('--font-size-scale', scale);
    }
    
    function saveFontSize() {
        localStorage.setItem('fontSizeScale', fontSizeScale);
    }
    
    // ========== Contrast Toggle ==========
    toggleContrastBtn.addEventListener('click', function() {
        highContrast = !highContrast;
        
        if (highContrast) {
            document.body.classList.add('high-contrast');
            announceToScreenReader('High contrast mode enabled');
        } else {
            document.body.classList.remove('high-contrast');
            announceToScreenReader('High contrast mode disabled');
        }
        
        localStorage.setItem('highContrast', highContrast);
    });
    
    // ========== Screen Reader Announcements ==========
    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        // Remove after announcement
        setTimeout(function() {
            document.body.removeChild(announcement);
        }, 1000);
    }
    
    // ========== Keyboard Accessibility for Widget ==========
    handle.addEventListener('keydown', function(e) {
        const step = 10;
        let moved = false;
        
        switch(e.key) {
            case 'ArrowUp':
                yOffset -= step;
                moved = true;
                break;
            case 'ArrowDown':
                yOffset += step;
                moved = true;
                break;
            case 'ArrowLeft':
                xOffset -= step;
                moved = true;
                break;
            case 'ArrowRight':
                xOffset += step;
                moved = true;
                break;
        }
        
        if (moved) {
            e.preventDefault();
            widget.style.bottom = 'auto';
            widget.style.right = 'auto';
            setTranslate(xOffset, yOffset, widget);
            saveWidgetPosition();
        }
    });
    
    // ========== Reset Button (optional - can be added to HTML) ==========
    function resetAccessibilitySettings() {
        fontSizeScale = 1;
        highContrast = false;
        applyFontSize(1);
        document.body.classList.remove('high-contrast');
        localStorage.removeItem('fontSizeScale');
        localStorage.removeItem('highContrast');
        localStorage.removeItem('widgetPosition');
        widget.style.transform = 'none';
        widget.style.bottom = '20px';
        widget.style.right = '20px';
        widget.style.top = 'auto';
        widget.style.left = 'auto';
        announceToScreenReader('Accessibility settings reset');
    }
    
    // ========== Additional Accessibility Features ==========
    
    // Add keyboard shortcut hints
    document.addEventListener('keydown', function(e) {
        // Ctrl + Plus: Increase font size
        if (e.ctrlKey && (e.key === '+' || e.key === '=')) {
            e.preventDefault();
            increaseFontBtn.click();
        }
        
        // Ctrl + Minus: Decrease font size
        if (e.ctrlKey && e.key === '-') {
            e.preventDefault();
            decreaseFontBtn.click();
        }
        
        // Ctrl + Alt + C: Toggle contrast
        if (e.ctrlKey && e.altKey && e.key === 'c') {
            e.preventDefault();
            toggleContrastBtn.click();
        }
    });
    
    // ========== Detect User Preferences ==========
    // Check for system dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('highContrast')) {
        // User prefers dark mode - could auto-enable high contrast
        // Uncomment if desired:
        // document.body.classList.add('high-contrast');
        // localStorage.setItem('highContrast', 'true');
    }
    
    // Check for reduced motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--transition-fast', '0s');
        document.documentElement.style.setProperty('--transition-normal', '0s');
        document.documentElement.style.setProperty('--transition-slow', '0s');
    }
    
    // ========== Widget Visibility Toggle ==========
    // Optional: Add ability to minimize/hide widget
    const minimizeBtn = document.createElement('button');
    minimizeBtn.textContent = '−';
    minimizeBtn.className = 'widget-minimize';
    minimizeBtn.setAttribute('aria-label', 'Minimize accessibility widget');
    minimizeBtn.style.cssText = 'position: absolute; top: 5px; right: 5px; background: transparent; border: none; color: white; font-size: 20px; cursor: pointer; padding: 0 5px;';
    
    handle.appendChild(minimizeBtn);
    
    let isMinimized = localStorage.getItem('widgetMinimized') === 'true';
    const widgetContent = widget.querySelector('.widget-content');
    
    if (isMinimized) {
        widgetContent.style.display = 'none';
        minimizeBtn.textContent = '+';
        widget.style.width = 'auto';
    }
    
    minimizeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        isMinimized = !isMinimized;
        
        if (isMinimized) {
            widgetContent.style.display = 'none';
            minimizeBtn.textContent = '+';
            minimizeBtn.setAttribute('aria-label', 'Expand accessibility widget');
            widget.style.width = 'auto';
        } else {
            widgetContent.style.display = 'block';
            minimizeBtn.textContent = '−';
            minimizeBtn.setAttribute('aria-label', 'Minimize accessibility widget');
            widget.style.width = '';
        }
        
        localStorage.setItem('widgetMinimized', isMinimized);
    });
    
    // ========== Export reset function for console use ==========
    window.resetAccessibility = resetAccessibilitySettings;
    
    // Log keyboard shortcuts to console
    console.log('%cAccessibility Keyboard Shortcuts:', 'font-weight: bold; font-size: 14px;');
    console.log('Ctrl + Plus: Increase font size');
    console.log('Ctrl + Minus: Decrease font size');
    console.log('Ctrl + Alt + C: Toggle high contrast');
    console.log('Arrow keys: Move widget (when widget handle is focused)');
    console.log('Type resetAccessibility() in console to reset all settings');
    
})();
