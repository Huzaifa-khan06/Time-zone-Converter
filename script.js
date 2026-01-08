// Country data with flag codes for flag-icon-css
const countries = [
    { name: "Pakistan", timezone: "Asia/Karachi", flag: "pk" },
    { name: "United Kingdom", timezone: "Europe/London", flag: "gb" },
    { name: "United States (New York)", timezone: "America/New_York", flag: "us" },
    { name: "United States (Los Angeles)", timezone: "America/Los_Angeles", flag: "us" },
    { name: "United States (Chicago)", timezone: "America/Chicago", flag: "us" },
    { name: "United States (Denver)", timezone: "America/Denver", flag: "us" },
    { name: "India", timezone: "Asia/Kolkata", flag: "in" },
    { name: "Australia (Sydney)", timezone: "Australia/Sydney", flag: "au" },
    { name: "Australia (Melbourne)", timezone: "Australia/Melbourne", flag: "au" },
    { name: "Australia (Perth)", timezone: "Australia/Perth", flag: "au" },
    { name: "Germany", timezone: "Europe/Berlin", flag: "de" },
    { name: "France", timezone: "Europe/Paris", flag: "fr" },
    { name: "Japan", timezone: "Asia/Tokyo", flag: "jp" },
    { name: "China", timezone: "Asia/Shanghai", flag: "cn" },
    { name: "Saudi Arabia", timezone: "Asia/Riyadh", flag: "sa" },
    { name: "United Arab Emirates", timezone: "Asia/Dubai", flag: "ae" },
    { name: "Turkey", timezone: "Europe/Istanbul", flag: "tr" },
    { name: "South Korea", timezone: "Asia/Seoul", flag: "kr" },
    { name: "Singapore", timezone: "Asia/Singapore", flag: "sg" },
    { name: "Canada (Toronto)", timezone: "America/Toronto", flag: "ca" },
    { name: "Canada (Vancouver)", timezone: "America/Vancouver", flag: "ca" },
    { name: "Brazil (São Paulo)", timezone: "America/Sao_Paulo", flag: "br" },
    { name: "Mexico", timezone: "America/Mexico_City", flag: "mx" },
    { name: "Russia (Moscow)", timezone: "Europe/Moscow", flag: "ru" },
    { name: "Italy", timezone: "Europe/Rome", flag: "it" },
    { name: "Spain", timezone: "Europe/Madrid", flag: "es" },
    { name: "Portugal", timezone: "Europe/Lisbon", flag: "pt" },
    { name: "Netherlands", timezone: "Europe/Amsterdam", flag: "nl" },
    { name: "Switzerland", timezone: "Europe/Zurich", flag: "ch" },
    { name: "Sweden", timezone: "Europe/Stockholm", flag: "se" },
    { name: "Norway", timezone: "Europe/Oslo", flag: "no" },
    { name: "Denmark", timezone: "Europe/Copenhagen", flag: "dk" },
    { name: "Finland", timezone: "Europe/Helsinki", flag: "fi" },
    { name: "Poland", timezone: "Europe/Warsaw", flag: "pl" },
    { name: "Czech Republic", timezone: "Europe/Prague", flag: "cz" },
    { name: "Austria", timezone: "Europe/Vienna", flag: "at" },
    { name: "Greece", timezone: "Europe/Athens", flag: "gr" },
    { name: "Thailand", timezone: "Asia/Bangkok", flag: "th" },
    { name: "Vietnam", timezone: "Asia/Ho_Chi_Minh", flag: "vn" },
    { name: "Philippines", timezone: "Asia/Manila", flag: "ph" },
    { name: "Indonesia (Jakarta)", timezone: "Asia/Jakarta", flag: "id" },
    { name: "Malaysia", timezone: "Asia/Kuala_Lumpur", flag: "my" },
    { name: "New Zealand", timezone: "Pacific/Auckland", flag: "nz" },
    { name: "South Africa", timezone: "Africa/Johannesburg", flag: "za" },
    { name: "Egypt", timezone: "Africa/Cairo", flag: "eg" },
    { name: "Nigeria", timezone: "Africa/Lagos", flag: "ng" },
    { name: "Kenya", timezone: "Africa/Nairobi", flag: "ke" },
    { name: "Israel", timezone: "Asia/Jerusalem", flag: "il" },
    { name: "Qatar", timezone: "Asia/Qatar", flag: "qa" },
    { name: "Kuwait", timezone: "Asia/Kuwait", flag: "kw" },
    { name: "Oman", timezone: "Asia/Muscat", flag: "om" },
    { name: "Bahrain", timezone: "Asia/Bahrain", flag: "bh" },
    { name: "Bangladesh", timezone: "Asia/Dhaka", flag: "bd" },
    { name: "Sri Lanka", timezone: "Asia/Colombo", flag: "lk" },
    { name: "Nepal", timezone: "Asia/Kathmandu", flag: "np" },
    { name: "Afghanistan", timezone: "Asia/Kabul", flag: "af" },
    { name: "Iran", timezone: "Asia/Tehran", flag: "ir" },
    { name: "Iraq", timezone: "Asia/Baghdad", flag: "iq" },
    { name: "Argentina", timezone: "America/Argentina/Buenos_Aires", flag: "ar" },
    { name: "Chile", timezone: "America/Santiago", flag: "cl" },
    { name: "Colombia", timezone: "America/Bogota", flag: "co" },
    { name: "Peru", timezone: "America/Lima", flag: "pe" },
    { name: "Venezuela", timezone: "America/Caracas", flag: "ve" }
];

// Popular time zones for the popular section
const popularCountries = [
    { name: "United Kingdom", timezone: "Europe/London", flag: "gb" },
    { name: "United States (New York)", timezone: "America/New_York", flag: "us" },
    { name: "Saudi Arabia", timezone: "Asia/Riyadh", flag: "sa" },
    { name: "United Arab Emirates", timezone: "Asia/Dubai", flag: "ae" },
    { name: "Australia (Sydney)", timezone: "Australia/Sydney", flag: "au" },
    { name: "Japan", timezone: "Asia/Tokyo", flag: "jp" }
];

// ... rest of the JavaScript remains the same, just use the updated functions above

// DOM Elements - NO CHANGES NEEDED HERE
const sourceDropdown = document.getElementById('source-dropdown');
const targetDropdown = document.getElementById('target-dropdown');
const sourceOptions = document.getElementById('source-options');
const targetOptions = document.getElementById('target-options');
const sourceSearch = document.getElementById('source-search');
const targetSearch = document.getElementById('target-search');
const sourceHours = document.getElementById('source-hours');
const sourceMinutes = document.getElementById('source-minutes');
const sourceAmPm = document.getElementById('source-am-pm');
const targetTimeDisplay = document.getElementById('target-time-display');
const differenceValue = document.getElementById('difference-value');
const dateStatus = document.getElementById('date-status');
const dayNight = document.getElementById('day-night');
const sourceCurrentTime = document.getElementById('source-current-time');
const targetCurrentTime = document.getElementById('target-current-time');
const swapButton = document.getElementById('swap-button');
const popularGrid = document.getElementById('popular-grid');

// Current selections
let selectedSource = countries[0]; // Pakistan
let selectedTarget = countries[1]; // UK

// Initialize application - NO CHANGES NEEDED HERE
function init() {
    populateTimeSelects();
    populateCountryOptions();
    setupEventListeners();
    updateCurrentTimes();
    updateConversion();
    updatePopularTimes();
    
    // Update times every minute
    setInterval(() => {
        updateCurrentTimes();
        updateConversion();
        updatePopularTimes();
    }, 60000);
}

// Populate time select inputs - NO CHANGES NEEDED HERE
function populateTimeSelects() {
    // Populate hours (1-12)
    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i.toString().padStart(2, '0');
        sourceHours.appendChild(option);
    }
    
    // Set current hour
    const now = new Date();
    let hour = now.getHours();
    hour = hour % 12 || 12;
    sourceHours.value = hour;
    
    // Populate minutes (00-59)
    for (let i = 0; i < 60; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i.toString().padStart(2, '0');
        sourceMinutes.appendChild(option);
    }
    
    sourceMinutes.value = now.getMinutes();
    sourceAmPm.value = now.getHours() >= 12 ? 'PM' : 'AM';
}

// Populate country dropdowns - NO CHANGES NEEDED HERE
function populateCountryOptions() {
    // Source dropdown
    sourceOptions.innerHTML = '';
    countries.forEach(country => {
        const option = createOptionElement(country, 'source');
        sourceOptions.appendChild(option);
    });
    
    // Target dropdown
    targetOptions.innerHTML = '';
    countries.forEach(country => {
        const option = createOptionElement(country, 'target');
        targetOptions.appendChild(option);
    });
    
    updateDropdownDisplay();
}

function createOptionElement(country, type) {
    const div = document.createElement('div');
    div.className = 'option-item';
    div.innerHTML = `
        <span class="flag-icon flag-icon-${country.flag} flag-icon-css"></span>
        <span class="country-name">${country.name}</span>
    `;
    
    div.addEventListener('click', () => {
        if (type === 'source') {
            selectedSource = country;
        } else {
            selectedTarget = country;
        }
        updateDropdownDisplay();
        closeDropdowns();
        updateCurrentTimes();
        updateConversion();
        updatePopularTimes();
    });
    
    return div;
}

function updateDropdownDisplay() {
    const sourceSelected = sourceDropdown.querySelector('.dropdown-selected');
    const targetSelected = targetDropdown.querySelector('.dropdown-selected');
    
    // Clear previous flag
    sourceSelected.querySelector('.flag').innerHTML = `<span class="flag-icon flag-icon-${selectedSource.flag} flag-icon-css"></span>`;
    sourceSelected.querySelector('.country-name').textContent = selectedSource.name;
    
    targetSelected.querySelector('.flag').innerHTML = `<span class="flag-icon flag-icon-${selectedTarget.flag} flag-icon-css"></span>`;
    targetSelected.querySelector('.country-name').textContent = selectedTarget.name;
}

// Setup event listeners - NO CHANGES NEEDED HERE
function setupEventListeners() {
    // Dropdown toggle
    sourceDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        sourceDropdown.classList.toggle('active');
        targetDropdown.classList.remove('active');
        
        if (sourceDropdown.classList.contains('active')) {
            setTimeout(() => sourceSearch.focus(), 100);
        }
    });
    
    targetDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        targetDropdown.classList.toggle('active');
        sourceDropdown.classList.remove('active');
        
        if (targetDropdown.classList.contains('active')) {
            setTimeout(() => targetSearch.focus(), 100);
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', closeDropdowns);
    
    // Search functionality
    sourceSearch.addEventListener('input', filterSourceCountries);
    targetSearch.addEventListener('input', filterTargetCountries);
    
    // Time inputs
    sourceHours.addEventListener('change', updateConversion);
    sourceMinutes.addEventListener('change', updateConversion);
    sourceAmPm.addEventListener('change', updateConversion);
    
    // Swap button
    swapButton.addEventListener('click', swapCountries);
}

// Close all dropdowns - NO CHANGES NEEDED HERE
function closeDropdowns() {
    sourceDropdown.classList.remove('active');
    targetDropdown.classList.remove('active');
}

// Filter countries in dropdown - NO CHANGES NEEDED HERE
function filterSourceCountries() {
    const searchTerm = sourceSearch.value.toLowerCase();
    const options = sourceOptions.querySelectorAll('.option-item');
    
    options.forEach(option => {
        const name = option.querySelector('.country-name').textContent.toLowerCase();
        option.style.display = name.includes(searchTerm) ? 'flex' : 'none';
    });
}

function filterTargetCountries() {
    const searchTerm = targetSearch.value.toLowerCase();
    const options = targetOptions.querySelectorAll('.option-item');
    
    options.forEach(option => {
        const name = option.querySelector('.country-name').textContent.toLowerCase();
        option.style.display = name.includes(searchTerm) ? 'flex' : 'none';
    });
}

// Update current time displays - NO CHANGES NEEDED HERE
function updateCurrentTimes() {
    sourceCurrentTime.textContent = getCurrentTimeForTimezone(selectedSource.timezone);
    targetCurrentTime.textContent = getCurrentTimeForTimezone(selectedTarget.timezone);
}

// Get current time for a timezone - NO CHANGES NEEDED HERE
function getCurrentTimeForTimezone(timezone) {
    try {
        return new Date().toLocaleTimeString('en-US', {
            timeZone: timezone,
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    } catch (e) {
        return '--:--:-- --';
    }
}

// Main conversion function - NO CHANGES NEEDED HERE
function updateConversion() {
    // Get source time
    let hour = parseInt(sourceHours.value);
    const minute = parseInt(sourceMinutes.value);
    const ampm = sourceAmPm.value;
    
    // Convert to 24-hour format
    if (ampm === 'PM' && hour !== 12) {
        hour += 12;
    } else if (ampm === 'AM' && hour === 12) {
        hour = 0;
    }
    
    // Create date object with source time
    const now = new Date();
    const sourceDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hour,
        minute
    );
    
    // Convert to target timezone
    const targetDate = convertTimeBetweenTimezones(sourceDate, selectedSource.timezone, selectedTarget.timezone);
    
    // Update display
    targetTimeDisplay.textContent = formatTimeForDisplay(targetDate);
    
    // Calculate and display time difference
    const difference = calculateTimeDifference(selectedSource.timezone, selectedTarget.timezone);
    differenceValue.textContent = difference;
    
    // Update additional info
    updateAdditionalInfo(sourceDate, targetDate);
}

// Convert time between timezones - NO CHANGES NEEDED HERE
function convertTimeBetweenTimezones(date, sourceTimezone, targetTimezone) {
    try {
        // Get the time in target timezone
        const targetTimeStr = date.toLocaleString('en-US', {
            timeZone: targetTimezone,
            hour12: false,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        // Parse the target time string
        const [dateStr, timeStr] = targetTimeStr.split(', ');
        const [month, day, year] = dateStr.split('/');
        const [hour, minute, second] = timeStr.split(':');
        
        return new Date(year, month - 1, day, hour, minute, second);
    } catch (e) {
        console.error('Timezone conversion error:', e);
        return new Date();
    }
}

// Calculate time difference between timezones - NO CHANGES NEEDED HERE
function calculateTimeDifference(sourceTimezone, targetTimezone) {
    try {
        const now = new Date();
        
        // Get current UTC time
        const utc = Date.UTC(
            now.getUTCFullYear(),
            now.getUTCMonth(),
            now.getUTCDate(),
            now.getUTCHours(),
            now.getUTCMinutes()
        );
        
        // Get offsets
        const sourceOffset = getTimezoneOffset(sourceTimezone);
        const targetOffset = getTimezoneOffset(targetTimezone);
        
        // Calculate difference
        const diffMinutes = targetOffset - sourceOffset;
        const diffHours = Math.floor(Math.abs(diffMinutes) / 60);
        const diffRemainingMinutes = Math.abs(diffMinutes) % 60;
        
        // Format
        const sign = diffMinutes >= 0 ? '+' : '-';
        return `${sign}${diffHours.toString().padStart(2, '0')}:${diffRemainingMinutes.toString().padStart(2, '0')}`;
    } catch (e) {
        return '+00:00';
    }
}

// Get timezone offset in minutes - NO CHANGES NEEDED HERE
function getTimezoneOffset(timezone) {
    try {
        const date = new Date();
        const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
        const tzDate = new Date(date.toLocaleString('en-US', { timeZone: timezone }));
        return (tzDate.getTime() - utcDate.getTime()) / 60000;
    } catch (e) {
        return 0;
    }
}

// Format time for display - NO CHANGES NEEDED HERE
function formatTimeForDisplay(date) {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}

// Update additional information - NO CHANGES NEEDED HERE
function updateAdditionalInfo(sourceDate, targetDate) {
    // Date status
    if (sourceDate.toDateString() === targetDate.toDateString()) {
        dateStatus.textContent = 'Same day';
    } else if (targetDate > sourceDate) {
        dateStatus.textContent = 'Next day';
    } else {
        dateStatus.textContent = 'Previous day';
    }
    
    // Day/night
    const hour = targetDate.getHours();
    if (hour >= 6 && hour < 18) {
        dayNight.textContent = 'Daytime';
    } else {
        dayNight.textContent = 'Nighttime';
    }
}

// Swap countries - NO CHANGES NEEDED HERE
function swapCountries() {
    [selectedSource, selectedTarget] = [selectedTarget, selectedSource];
    updateDropdownDisplay();
    updateCurrentTimes();
    updateConversion();
    updatePopularTimes();
}

function updatePopularTimes() {
    popularGrid.innerHTML = '';
    
    popularCountries.forEach(country => {
        const now = new Date();
        const currentTime = getCurrentTimeForTimezone(country.timezone);
        const timeOnly = currentTime.split(' ')[0];
        const ampm = currentTime.split(' ')[1];
        
        // Convert to Pakistan time
        const hour = parseInt(timeOnly.split(':')[0]);
        const minute = parseInt(timeOnly.split(':')[1]);
        const adjustedHour = ampm === 'PM' && hour !== 12 ? hour + 12 : 
                           ampm === 'AM' && hour === 12 ? 0 : hour;
        
        const sourceDate = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            adjustedHour,
            minute
        );
        
        const pakistanDate = convertTimeBetweenTimezones(sourceDate, country.timezone, 'Asia/Karachi');
        const pakistanTime = formatTimeForDisplay(pakistanDate);
        
        const item = document.createElement('div');
        item.className = 'popular-item';
        item.innerHTML = `
            <div class="popular-header">
                <div class="popular-flag">
                    <span class="flag-icon flag-icon-${country.flag} flag-icon-css"></span>
                </div>
                <div class="popular-country">
                    <h4>${country.name}</h4>
                    <p>Current Local Time</p>
                </div>
            </div>
            <div class="popular-time">${currentTime}</div>
          
            </div>
        `;
        
        popularGrid.appendChild(item);
    });
}

// Initialize the application - NO CHANGES NEEDED HERE
document.addEventListener('DOMContentLoaded', init);
