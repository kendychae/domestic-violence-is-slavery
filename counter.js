/**
 * Statistics Counter
 * Dynamic counter showing estimated lives lost to domestic violence in 2026
 * Based on CDC data: approximately 1,500-2,000 intimate partner homicides annually
 * Plus children exposed to intimate partner violence
 */

(function() {
    'use strict';
    
    // Only run on stats page
    if (!document.getElementById('womenCounter')) return;
    
    // ========== Counter Configuration ==========
    // Based on CDC data: approximately 1,500-2,000 intimate partner homicides per year
    // Conservative estimate: ~1,600 total deaths per year
    // Gender breakdown based on research: ~75% women, ~25% men
    // Children exposed to IPV: ~15.5 million annually (CDC)
    
    const TOTAL_ANNUAL_DEATHS = 1600; // Conservative CDC estimate
    const WOMEN_PERCENTAGE = 0.75;
    const MEN_PERCENTAGE = 0.25;
    const CHILDREN_EXPOSED_ANNUALLY = 15500000; // 15.5 million children exposed annually
    
    // Calculate per year, day, hour, minute, second
    const WOMEN_PER_YEAR = TOTAL_ANNUAL_DEATHS * WOMEN_PERCENTAGE;  // ~1,200
    const MEN_PER_YEAR = TOTAL_ANNUAL_DEATHS * MEN_PERCENTAGE;      // ~400
    
    const WOMEN_PER_DAY = WOMEN_PER_YEAR / 365;    // ~3.29
    const MEN_PER_DAY = MEN_PER_YEAR / 365;        // ~1.10
    const CHILDREN_PER_DAY = CHILDREN_EXPOSED_ANNUALLY / 365; // ~42,466
    
    const WOMEN_PER_SECOND = WOMEN_PER_YEAR / (365 * 24 * 60 * 60);  // ~0.000038
    const MEN_PER_SECOND = MEN_PER_YEAR / (365 * 24 * 60 * 60);      // ~0.000013
    const CHILDREN_PER_SECOND = CHILDREN_EXPOSED_ANNUALLY / (365 * 24 * 60 * 60); // ~0.491
    
    // ========== Calculate Time Since January 1, 2026 ==========
    function getSecondsSinceYearStart() {
        const now = new Date();
        const yearStart = new Date(now.getFullYear(), 0, 1); // January 1 of current year
        const diffInMs = now - yearStart;
        return Math.floor(diffInMs / 1000);
    }
    
    // ========== Calculate Current Counts ==========
    function calculateCounts() {
        const secondsSinceYearStart = getSecondsSinceYearStart();
        
        const womenCount = Math.floor(WOMEN_PER_SECOND * secondsSinceYearStart);
        const menCount = Math.floor(MEN_PER_SECOND * secondsSinceYearStart);
        const childrenCount = Math.floor(CHILDREN_PER_SECOND * secondsSinceYearStart);
        const totalCount = womenCount + menCount;
        
        return {
            women: womenCount,
            men: menCount,
            children: childrenCount,
            total: totalCount
        };
    }
    
    // ========== Format Numbers with Commas ==========
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    // ========== Animate Counter ==========
    function animateCounter(element, startValue, endValue, duration = 500) {
        const start = Date.now();
        const range = endValue - startValue;
        
        function update() {
            const now = Date.now();
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(startValue + (range * easeOut));
            
            element.textContent = formatNumber(currentValue);
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }
    
    // ========== Update Display ==========
    const womenCounter = document.getElementById('womenCounter');
    const menCounter = document.getElementById('menCounter');
    const childrenCounter = document.getElementById('childrenCounter');
    const totalCounter = document.getElementById('totalCounter');
    
    let previousCounts = {
        women: 0,
        men: 0,
        children: 0,
        total: 0
    };
    
    function updateCounters() {
        const counts = calculateCounts();
        
        // Animate if values changed
        if (counts.women !== previousCounts.women) {
            animateCounter(womenCounter, previousCounts.women, counts.women, 300);
        }
        if (counts.men !== previousCounts.men) {
            animateCounter(menCounter, previousCounts.men, counts.men, 300);
        }
        if (childrenCounter && counts.children !== previousCounts.children) {
            animateCounter(childrenCounter, previousCounts.children, counts.children, 300);
        }
        if (counts.total !== previousCounts.total) {
            animateCounter(totalCounter, previousCounts.total, counts.total, 300);
        }
        
        previousCounts = counts;
    }
    
    // ========== Initial Display ==========
    const initialCounts = calculateCounts();
    womenCounter.textContent = formatNumber(initialCounts.women);
    menCounter.textContent = formatNumber(initialCounts.men);
    if (childrenCounter) childrenCounter.textContent = formatNumber(initialCounts.children);
    totalCounter.textContent = formatNumber(initialCounts.total);
    previousCounts = initialCounts;
    
    // ========== Update Interval ==========
    // Update every 30 seconds (reasonable for these rates)
    setInterval(updateCounters, 30000);
    
    // Also update every minute for precision
    setInterval(updateCounters, 60000);
    
    // ========== Visibility Change Handler ==========
    // Update when user returns to tab
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            updateCounters();
        }
    });
    
    // ========== Note about Methodology ==========
    console.log('%cDomestic Violence Statistics Counter', 'font-weight: bold; font-size: 14px; color: #C41E3A;');
    console.log('Methodology:');
    console.log(`- Total annual intimate partner homicides: ~${TOTAL_ANNUAL_DEATHS} (CDC estimate)`);
    console.log(`- Women: ${(WOMEN_PERCENTAGE * 100).toFixed(0)}% (~${Math.floor(WOMEN_PER_YEAR)} per year, ~${WOMEN_PER_DAY.toFixed(1)} per day)`);
    console.log(`- Men: ${(MEN_PERCENTAGE * 100).toFixed(0)}% (~${Math.floor(MEN_PER_YEAR)} per year, ~${MEN_PER_DAY.toFixed(1)} per day)`);
    console.log(`- Children exposed annually: ~${CHILDREN_EXPOSED_ANNUALLY.toLocaleString()} (CDC)`);
    console.log('Sources: CDC National Violent Death Reporting System, National Coalition Against Domestic Violence');
    console.log('Note: These are estimates based on historical data. Actual numbers may vary.');
    
    // ========== Tooltip Information (optional enhancement) ==========
    function addTooltips() {
        const counters = [
            { element: womenCounter, text: `Approximately ${WOMEN_PER_DAY.toFixed(1)} women are killed by intimate partners each day` },
            { element: menCounter, text: `Approximately ${MEN_PER_DAY.toFixed(1)} men are killed by intimate partners each day` },
            { element: totalCounter, text: `Approximately ${(WOMEN_PER_DAY + MEN_PER_DAY).toFixed(1)} people are killed by intimate partners each day` }
        ];
        
        if (childrenCounter) {
            counters.push({ element: childrenCounter, text: `Approximately ${CHILDREN_PER_DAY.toLocaleString()} children exposed to intimate partner violence each day` });
        }
        
        counters.forEach(function(counter) {
            counter.element.setAttribute('title', counter.text);
            counter.element.style.cursor = 'help';
        });
    }
    
    addTooltips();
    
    // ========== Export for Testing ==========
    window.DomesticViolenceCounter = {
        getCounts: calculateCounts,
        getSecondsSinceYearStart: getSecondsSinceYearStart,
        constants: {
            TOTAL_ANNUAL_DEATHS,
            WOMEN_PER_YEAR,
            MEN_PER_YEAR,
            CHILDREN_EXPOSED_ANNUALLY,
            WOMEN_PER_DAY,
            MEN_PER_DAY,
            CHILDREN_PER_DAY
        }
    };
    
})();
