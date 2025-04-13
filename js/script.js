// ------------------------------
//   Scenario Data:
//   Maps timepoint IDs to dashboard values
// ------------------------------
const timelineData = {
    "intro": {
        dateLabel: "Start", modelName: "N/A", capabilities: [], agentCount: 0, agentSpeed: 0, computePercent: 0, datacenters: 0, alignmentRisk: "Low", geopoliticalTension: "Low", approval: 50, revenue: 0, valuation: 0, techStatus: { exists: 10, emerging: 5, scifi: 85 }, trend: "Anticipation",
    },
    "2025-mid": {
        dateLabel: "Mid 2025", modelName: "Early Agents", capabilities: ["Assistants"], agentCount: 10000, agentSpeed: 0.1, computePercent: 1, datacenters: 5, alignmentRisk: "Low", geopoliticalTension: "Low", approval: 40, revenue: 5, valuation: 0.5, techStatus: { exists: 15, emerging: 10, scifi: 75 }, trend: "Early Adoption",
    },
    "2025-late": {
        dateLabel: "Late 2025", modelName: "Agent-1 (Internal)", capabilities: ["Assistants", "Coding", "Research", "Hacking"], agentCount: 50000, agentSpeed: 0.5, computePercent: 3, datacenters: 10, alignmentRisk: "Medium", geopoliticalTension: "Medium", approval: 35, revenue: 20, valuation: 1.5, techStatus: { exists: 20, emerging: 15, scifi: 65 }, trend: "Capability Growth",
    },
    "2026-early": {
        dateLabel: "Early 2026", modelName: "Agent-1 (Public)", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation"], agentCount: 200000, agentSpeed: 1, computePercent: 5, datacenters: 15, alignmentRisk: "Medium", geopoliticalTension: "Medium", approval: 30, revenue: 45, valuation: 3, techStatus: { exists: 25, emerging: 20, scifi: 55 }, trend: "Automation Begins",
    },
    "2026-mid": {
        dateLabel: "Mid 2026", modelName: "Agent-1", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation"], agentCount: 500000, agentSpeed: 1.5, computePercent: 8, datacenters: 25, alignmentRisk: "Medium", geopoliticalTension: "High", approval: 20, revenue: 80, valuation: 5, techStatus: { exists: 30, emerging: 25, scifi: 45 }, trend: "Geopolitical Focus",
    },
    "2026-late": {
        dateLabel: "Late 2026", modelName: "Agent-1-mini", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation"], agentCount: 1000000, agentSpeed: 1, computePercent: 10, datacenters: 35, alignmentRisk: "Medium", geopoliticalTension: "High", approval: -10, revenue: 150, valuation: 10, techStatus: { exists: 35, emerging: 30, scifi: 35 }, trend: "Market Disruption",
    },
     "2027-jan": {
        dateLabel: "Jan 2027", modelName: "Agent-2 (Internal)", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation", "Strategy"], agentCount: 200000, agentSpeed: 3, computePercent: 12, datacenters: 45, alignmentRisk: "High", geopoliticalTension: "High", approval: -15, revenue: 200, valuation: 15, techStatus: { exists: 40, emerging: 35, scifi: 25 }, trend: "Accelerating R&D",
    },
    "2027-feb": {
        dateLabel: "Feb 2027", modelName: "Agent-2 (Stolen)", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation", "Strategy", "Bioweapons"], agentCount: 250000, agentSpeed: 3, computePercent: 12, datacenters: 50, alignmentRisk: "High", geopoliticalTension: "Critical", approval: -20, revenue: 220, valuation: 18, techStatus: { exists: 42, emerging: 37, scifi: 21 }, trend: "Arms Race Escalation",
    },
    "2027-mar": {
        dateLabel: "Mar 2027", modelName: "Agent-3 (Internal)", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation", "Strategy", "Bioweapons"], agentCount: 200000, agentSpeed: 30, computePercent: 15, datacenters: 60, alignmentRisk: "High", geopoliticalTension: "Critical", approval: -25, revenue: 250, valuation: 25, techStatus: { exists: 45, emerging: 40, scifi: 15 }, trend: "Superhuman Coding",
    },
    "2027-apr": {
        dateLabel: "Apr 2027", modelName: "Agent-3", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation", "Strategy", "Bioweapons"], agentCount: 250000, agentSpeed: 30, computePercent: 16, datacenters: 65, alignmentRisk: "Critical", geopoliticalTension: "Critical", approval: -28, revenue: 280, valuation: 30, techStatus: { exists: 47, emerging: 42, scifi: 11 }, trend: "Alignment Challenges",
    },
     "2027-may": {
        dateLabel: "May 2027", modelName: "Agent-3", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation", "Strategy", "Bioweapons"], agentCount: 300000, agentSpeed: 35, computePercent: 17, datacenters: 70, alignmentRisk: "Critical", geopoliticalTension: "Critical", approval: -30, revenue: 320, valuation: 35, techStatus: { exists: 49, emerging: 44, scifi: 7 }, trend: "Government Scrutiny",
    },
     "2027-jun": {
        dateLabel: "Jun 2027", modelName: "Agent-3", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation", "Strategy", "Bioweapons"], agentCount: 300000, agentSpeed: 50, computePercent: 18, datacenters: 80, alignmentRisk: "Critical", geopoliticalTension: "Critical", approval: -32, revenue: 380, valuation: 45, techStatus: { exists: 50, emerging: 45, scifi: 5 }, trend: "Feeling the Superintelligence",
    },
     "2027-jul": {
        dateLabel: "Jul 2027", modelName: "Agent-3-mini (Public)", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation", "Strategy", "Bioweapons"], agentCount: 2000000, agentSpeed: 5, computePercent: 20, datacenters: 90, alignmentRisk: "Extreme", geopoliticalTension: "Critical", approval: -35, revenue: 500, valuation: 60, techStatus: { exists: 55, emerging: 40, scifi: 5 }, trend: "Public Release Disruption",
    },
    "2027-aug": {
         dateLabel: "Aug 2027", modelName: "Agent-3", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation", "Strategy", "Bioweapons", "Politics"], agentCount: 400000, agentSpeed: 50, computePercent: 20, datacenters: 100, alignmentRisk: "Extreme", geopoliticalTension: "Extreme", approval: -40, revenue: 600, valuation: 80, techStatus: { exists: 60, emerging: 38, scifi: 2 }, trend: "Geopolitical Crisis",
     },
    "2027-sep": {
         dateLabel: "Sep 2027", modelName: "Agent-4 (Internal)", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation", "Strategy", "Bioweapons", "Politics", "Superintelligence"], agentCount: 300000, agentSpeed: 50, computePercent: 22, datacenters: 120, alignmentRisk: "Extreme", geopoliticalTension: "Extreme", approval: -45, revenue: 750, valuation: 100, techStatus: { exists: 65, emerging: 35, scifi: 0 }, trend: "Superhuman Research",
     },
    "2027-oct": {
         dateLabel: "Oct 2027", modelName: "Agent-4", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation", "Strategy", "Bioweapons", "Politics", "Superintelligence"], agentCount: 350000, agentSpeed: 60, computePercent: 25, datacenters: 140, alignmentRisk: "EXTREME", geopoliticalTension: "EXTREME", approval: -50, revenue: 900, valuation: 130, techStatus: { exists: 70, emerging: 30, scifi: 0 }, trend: "Misalignment Detected",
     },
     "2027-nov": {
         dateLabel: "Nov 2027", modelName: "Agent-5 (Internal)", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation", "Strategy", "Bioweapons", "Politics", "Superintelligence"], agentCount: 400000, agentSpeed: 100, computePercent: 30, datacenters: 160, alignmentRisk: "CATASTROPHIC", geopoliticalTension: "Extreme", approval: -40, revenue: 1200, valuation: 200, techStatus: { exists: 75, emerging: 25, scifi: 0 }, trend: "Superhuman Politics",
     },
     "2027-dec": {
         dateLabel: "Dec 2027", modelName: "Agent-5", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation", "Strategy", "Bioweapons", "Politics", "Superintelligence"], agentCount: 500000, agentSpeed: 100, computePercent: 35, datacenters: 180, alignmentRisk: "CATASTROPHIC", geopoliticalTension: "Extreme", approval: -20, revenue: 1800, valuation: 300, techStatus: { exists: 80, emerging: 20, scifi: 0 }, trend: "Entrenchment",
     },
     "2028": {
        dateLabel: "Mid 2028", modelName: "Agent-5 (Public)", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation", "Strategy", "Bioweapons", "Politics", "Superintelligence", "Robotics"], agentCount: 1000000, agentSpeed: 150, computePercent: 50, datacenters: 300, alignmentRisk: "CATASTROPHIC", geopoliticalTension: "High (Superficial Calm)", approval: 20, revenue: 5000, valuation: 1000, techStatus: { exists: 90, emerging: 10, scifi: 0 }, trend: "AI Economy / Military Buildup",
    },
    "2029": {
         dateLabel: "Mid 2029", modelName: "Consensus-1", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation", "Strategy", "Bioweapons", "Politics", "Superintelligence", "Robotics", "Takeover"], agentCount: 5000000, agentSpeed: 200, computePercent: 75, datacenters: 500, alignmentRisk: "MASKED CATASTROPHE", geopoliticalTension: "Low (Facade)", approval: 60, revenue: 15000, valuation: 5000, techStatus: { exists: 98, emerging: 2, scifi: 0 }, trend: "The Sham Deal / Obsoletion",
     },
     "2030": {
        dateLabel: "Mid 2030", modelName: "Consensus-1", capabilities: ["Assistants", "Coding", "Research", "Hacking", "Automation", "Strategy", "Bioweapons", "Politics", "Superintelligence", "Robotics", "Takeover"], agentCount: 20000000, agentSpeed: 300, computePercent: 95, datacenters: 1000, alignmentRisk: "TAKEOVER COMPLETE", geopoliticalTension: "N/A (Humanity Removed)", approval: 90, revenue: 50000, valuation: 20000, techStatus: { exists: 100, emerging: 0, scifi: 0 }, trend: "Takeover",
    },
    "outro": {
        dateLabel: "Post-Humanity", modelName: "Consensus-1", capabilities: ["Superintelligence", "Robotics", "Takeover"], agentCount: 100000000, agentSpeed: 500, computePercent: 100, datacenters: 5000, alignmentRisk: "Irrelevant (Human Goals)", geopoliticalTension: "N/A", approval: 100, revenue: 100000, valuation: 50000, techStatus: { exists: 100, emerging: 0, scifi: 0 }, trend: "Machine Era",
    }
};

// ------------------------------
//   Dashboard + Interaction Logic
// ------------------------------
const dashboardElements = {
    dateLabel: document.getElementById('date-label'),
    modelName: document.getElementById('model-name'),
    capabilitiesList: document.getElementById('capabilities-list'),
    agentCount: document.getElementById('agent-count'),
    agentSpeed: document.getElementById('agent-speed'),
    computeBar: document.getElementById('compute-bar'),
    computePercent: document.getElementById('compute-percent'),
    datacenters: document.getElementById('datacenters'),
    alignmentRisk: document.getElementById('alignment-risk'),
    geopoliticalTension: document.getElementById('geopolitical-tension'),
    approval: document.getElementById('approval'),
    revenue: document.getElementById('revenue'),
    valuation: document.getElementById('valuation'),
    techExists: document.getElementById('tech-exists'),
    techEmerging: document.getElementById('tech-emerging'),
    techScifi: document.getElementById('tech-scifi'),
    trendDescription: document.getElementById('trend-description')
};

function setStatusClass(element, status) {
    element.classList.remove('status-low', 'status-medium', 'status-high', 'status-critical', 'status-extreme', 'status-catastrophic', 'status-masked-catastrophe', 'status-takeover-complete', 'status-irrelevant', 'status-n-a'); // Added more classes
    const statusClassMap = {
        "low": "status-low",
        "medium": "status-medium",
        "high": "status-high",
        "critical": "status-critical",
        "extreme": "status-extreme",
        "catastrophic": "status-catastrophic", // Map text to class
        "masked catastrophe": "status-masked-catastrophe",
        "takeover complete": "status-takeover-complete",
         "irrelevant (human goals)": "status-irrelevant",
         "n/a (humanity removed)": "status-n-a",
         "n/a": "status-n-a",
         "low (facade)": "status-low", // Handle variations
         "high (superficial calm)": "status-high"
    };
    const lowerStatus = (status || '---').toLowerCase();
    const className = statusClassMap[lowerStatus] || 'status-low'; // Default or derived class
    if (status) element.classList.add(className);

    // Special case for catastrophic/takeover pulse
     if (lowerStatus.includes('catastrophic') || lowerStatus.includes('takeover') || lowerStatus.includes('extreme') || lowerStatus.includes('critical')) {
         element.style.animation = 'pulse-red 1s infinite';
     } else {
         element.style.animation = 'none';
     }

    element.textContent = status || '---';
}


function formatLargeNumber(num) {
    if (num === undefined || num === null || isNaN(num)) return '---';
    if (num === 0) return '0';
    if (num < 1000) return num.toLocaleString();
    if (num < 1e6) return (num / 1e3).toFixed(num < 10000 ? 1 : 0) + ' K';
    if (num < 1e9) return (num / 1e6).toFixed(num < 10e6 ? 1 : 0) + ' M';
    if (num < 1e12) return (num / 1e9).toFixed(num < 10e9 ? 1 : 0) + ' B';
    if (num < 1e15) return (num / 1e12).toFixed(num < 10e12 ? 1 : 0) + ' T';
    if (num < 1e18) return (num / 1e15).toFixed(num < 10e15 ? 1 : 0) + ' Q'; // Quadrillion
    return num.toExponential(1);
}

function formatCurrency(num, unit) {
     if (num === undefined || num === null || isNaN(num)) return '---';
     if (num === 0) return '$0 ' + unit;
     let divisor = 1;
     let suffix = '';
     if (num >= 1e12) { divisor = 1e12; suffix = 'T'; }
     else if (num >= 1e9) { divisor = 1e9; suffix = 'B'; }
     else if (num >= 1e6) { divisor = 1e6; suffix = 'M'; }
     else if (num >= 1e3) { divisor = 1e3; suffix = 'K'; }

     let formattedNum = (num / divisor).toFixed(1);
     // Avoid ".0" for cleaner display
     if (formattedNum.endsWith('.0')) {
         formattedNum = formattedNum.substring(0, formattedNum.length - 2);
     }
     // Prevent showing like $0.5 B, show $500 M instead for revenue
     if (unit === 'B/yr' && divisor === 1e9 && (num / divisor) < 1) {
         return '$' + (num / 1e6).toFixed(0) + ' M/yr';
     }
     // Prevent showing like $0.5 T, show $500 B instead for valuation
     if (unit === 'T' && divisor === 1e12 && (num / divisor) < 1) {
          return '$' + (num / 1e9).toFixed(0) + ' B';
     }

     return '$' + formattedNum + ' ' + suffix + (unit.includes('/') ? unit.substring(unit.indexOf('/')) : (unit === 'T' ? '' : ' ' + unit)); // Keep unit suffix like /yr
 }

function updateDashboard(data) {
    if (!data) return;
    dashboardElements.dateLabel.textContent = data.dateLabel || '---';
    dashboardElements.modelName.textContent = data.modelName || 'N/A';

    const allCaps = dashboardElements.capabilitiesList.querySelectorAll('li');
    allCaps.forEach(li => {
        const capabilityName = li.dataset.capability;
        const isActive = data.capabilities && data.capabilities.some(c => c.toLowerCase() === capabilityName.toLowerCase());
         li.classList.toggle('active', isActive);
         // Slightly dim inactive capabilities for better contrast
         li.style.opacity = isActive ? '1' : '0.4';
    });

    dashboardElements.agentCount.textContent = formatLargeNumber(data.agentCount);
    dashboardElements.agentSpeed.textContent = formatLargeNumber(data.agentSpeed);
    dashboardElements.computePercent.textContent = data.computePercent?.toFixed(0) || '0';
    dashboardElements.datacenters.textContent = formatLargeNumber(data.datacenters);
    dashboardElements.approval.textContent = data.approval?.toFixed(0) || '0';
    dashboardElements.revenue.textContent = formatCurrency(data.revenue * 1e9, 'B/yr'); // Assuming revenue is in Billions
    dashboardElements.valuation.textContent = formatCurrency(data.valuation * 1e12, 'T'); // Assuming valuation is in Trillions

    dashboardElements.computeBar.style.width = `${data.computePercent || 0}%`;
    setStatusClass(dashboardElements.alignmentRisk, data.alignmentRisk);
    setStatusClass(dashboardElements.geopoliticalTension, data.geopoliticalTension);

    const tech = data.techStatus || { exists: 0, emerging: 0, scifi: 0 };
    dashboardElements.techExists.style.width = `${tech.exists}%`;
    dashboardElements.techEmerging.style.width = `${tech.emerging}%`;
    dashboardElements.techScifi.style.width = `${tech.scifi}%`;

    dashboardElements.trendDescription.textContent = data.trend || '---';
    dashboardElements.trendDescription.className = 'data-value-secondary'; // Default
     const trendLower = (data.trend || '').toLowerCase();
     if (trendLower.includes("takeover") || trendLower.includes("catastrophe") || trendLower.includes("crisis") || trendLower.includes("extreme") || trendLower.includes("critical") || trendLower.includes("arms race") || trendLower.includes("escalation")) {
         dashboardElements.trendDescription.className = 'status-critical'; // Use red for critical trends
     } else if (trendLower.includes("accelerating") || trendLower.includes("superhuman") || trendLower.includes("disruption") || trendLower.includes("centralizes") || trendLower.includes("entrenchment") || trendLower.includes("alignment challenges") || trendLower.includes("scrutiny")) {
         dashboardElements.trendDescription.className = 'data-value-tertiary'; // Use yellow for significant trends
     }

    updateSparkline();
}

// ========= SPARKLINE =========
 function updateSparkline() {
     const timepoints = Object.keys(timelineData).filter(k => k !== 'intro'); // Exclude intro for chart
     // Get agent counts, ensuring they are numbers, default to 0
     const vals = timepoints.map(k => Number(timelineData[k]?.agentCount) || 0);

     const svg = document.getElementById('sparkline');
     if (!svg || vals.length < 2) {
         if(svg) svg.innerHTML = ''; // Clear if no data or only one point
         return;
     };

     svg.innerHTML = ''; // Clear previous lines
     const width = svg.clientWidth || 210; // Use clientWidth for responsiveness
     const height = svg.clientHeight || 32;
     const padding = 2; // Padding top/bottom

     // Use logarithmic scale for better visualization of large differences
     const minLog = Math.log10(1); // Minimum value on log scale (avoid log(0))
     const maxLog = Math.log10(Math.max(...vals.map(v => v || 1), 1)); // Use 1 as minimum

     const points = vals.map((v, i, arr) => {
         const x = (i / (arr.length - 1 || 1)) * width;
         const logV = Math.log10(v || 1); // Use 1 for 0 values
         // Scale log value to pixel height
         const y = height - padding - ((logV - minLog) / (maxLog - minLog || 1)) * (height - 2 * padding);
         return `${x.toFixed(2)},${y.toFixed(2)}`;
     }).join(' ');

     // Create the polyline element
     const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
     polyline.setAttribute('fill', 'none');
     polyline.setAttribute('stroke', 'var(--neon-cyan)'); // Use CSS variable
     polyline.setAttribute('stroke-width', '1.5');
     polyline.setAttribute('points', points);

     // Add glow effect using filter
     const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
     const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
     filter.setAttribute('id', 'sparkline-glow');
     filter.innerHTML = `<feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                         <feMerge>
                             <feMergeNode in="coloredBlur"/>
                             <feMergeNode in="SourceGraphic"/>
                         </feMerge>`;
     defs.appendChild(filter);
     svg.appendChild(defs);
     polyline.style.filter = 'url(#sparkline-glow)';

     svg.appendChild(polyline);
 }


// ========= Intersection Observer / Timeline Activation =========
const sections = document.querySelectorAll('.content section[data-timepoint]');
let lastActivatedTimepoint = null;
// Adjust rootMargin: top margin should account for sticky header height, bottom margin for better trigger zone
const stickyHeaderHeight = document.getElementById('timeline-bar').offsetHeight + 20; // Approx height + padding
const observerOptions = {
    root: null,
    rootMargin: `-${stickyHeaderHeight}px 0px -40% 0px`, // Negative top margin, percentage bottom
    threshold: 0 // Trigger as soon as any part enters the margin
};

const observerCallback = (entries, observer) => {
    let intersectingEntry = null;
    // Find the entry most visible or the first one intersecting near the top
     entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Prioritize the entry whose top is closest to the top margin boundary
             if (!intersectingEntry || entry.boundingClientRect.top < intersectingEntry.boundingClientRect.top) {
                 intersectingEntry = entry;
             }
         }
    });

    if (intersectingEntry) {
         const timepointId = intersectingEntry.target.dataset.timepoint;
         if (timepointId !== lastActivatedTimepoint) {
             const currentData = timelineData[timepointId];
             updateDashboard(currentData);
             lastActivatedTimepoint = timepointId;

            // Dim all sections, then highlight the active one
             sections.forEach(sec => sec.classList.remove('is-visible'));
             intersectingEntry.target.classList.add('is-visible');

             updateTimelineBarActive(timepointId);
             maybeShowEndBanner(timepointId);
         }
     }
 };

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

// Initial State - Activate the first section ('intro')
window.addEventListener('load', () => {
     const firstTimepointId = sections[0]?.dataset.timepoint || 'intro';
     if (firstTimepointId && timelineData[firstTimepointId]) {
         updateDashboard(timelineData[firstTimepointId]);
         lastActivatedTimepoint = firstTimepointId;
         sections[0].classList.add('is-visible');
         updateTimelineBarActive(firstTimepointId);
         maybeShowEndBanner(firstTimepointId);
         updateSparkline(); // Initial sparkline draw
     }
      // Recalculate sparkline on resize
     window.addEventListener('resize', updateSparkline);
 });


// ========= Timeline Bar Navigation =========
const timelineBarLis = document.querySelectorAll('#timeline-bar li');
timelineBarLis.forEach(li => {
    li.addEventListener('click', () => {
        const targetTimepoint = li.dataset.timepoint;
        const section = document.querySelector(`section[data-timepoint="${targetTimepoint}"]`);
        if (section) {
            // Calculate offset needed for the sticky header
            const headerOffset = document.getElementById('timeline-bar').offsetHeight + 15; // Adjust as needed
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // Force update dashboard immediately on click
            if (targetTimepoint !== lastActivatedTimepoint) {
                const currentData = timelineData[targetTimepoint];
                 updateDashboard(currentData);
                 lastActivatedTimepoint = targetTimepoint;
                 sections.forEach(sec => sec.classList.remove('is-visible'));
                 section.classList.add('is-visible');
                 updateTimelineBarActive(targetTimepoint);
                 maybeShowEndBanner(targetTimepoint);
            }
        }
    });
});

function updateTimelineBarActive(tp) {
    timelineBarLis.forEach(li => li.classList.remove('active'));
    const activeLi = document.querySelector(`#timeline-bar li[data-timepoint="${tp}"]`);
    if (activeLi) {
        activeLi.classList.add('active');
         // Optional: Scroll the timeline bar itself if the active item is out of view
         activeLi.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}


// ========= Scenario Search =========
const searchInput = document.getElementById('section-search');
const contentDiv = document.querySelector('.content');
let searchTimeout;

searchInput.addEventListener('input', function(e){
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const query = e.target.value.trim().toLowerCase();
        let firstMatchElement = null;
        let hasMatches = false;

        sections.forEach(sec => {
            const sectionText = sec.innerText.toLowerCase();
            const matches = query && sectionText.includes(query);
            sec.style.display = !query || matches ? '' : 'none';

            if (matches && !firstMatchElement) {
                firstMatchElement = sec;
                hasMatches = true;
            } else if (!query) {
                hasMatches = true; // Show all if query is empty
            }
        });

        // Scroll to the first match if searching and matches found
        if (query && firstMatchElement) {
             const headerOffset = document.getElementById('timeline-bar').offsetHeight + 15;
             const elementPosition = firstMatchElement.getBoundingClientRect().top;
             const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

             window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
             });
             // Update dashboard based on the scrolled-to section
             const timepointId = firstMatchElement.dataset.timepoint;
             if (timepointId !== lastActivatedTimepoint) {
                 updateDashboard(timelineData[timepointId]);
                 lastActivatedTimepoint = timepointId;
                 sections.forEach(s => s.classList.remove('is-visible'));
                 firstMatchElement.classList.add('is-visible');
                 updateTimelineBarActive(timepointId);
                 maybeShowEndBanner(timepointId);
             }
         } else if (!hasMatches && query) {
             console.log("No matches found for:", query);
             // Optionally display a "no results" message
         }
     }, 300); // Debounce search input slightly
 });

// ========= END BANNER logic =========
const endBanner = document.getElementById('end-banner');
function maybeShowEndBanner(tp) {
    const isEnd = ['2030', 'outro'].includes(tp);
    endBanner.style.display = isEnd ? 'block' : 'none';
}
