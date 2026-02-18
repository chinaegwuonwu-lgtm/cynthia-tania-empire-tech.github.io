// 1. Locate the button in the HTML using its ID
const empireButton = document.getElementById('launchBtn');

// 2. Add an "Event Listener" to detect a tap/click
empireButton.addEventListener('click', function() {
    
    // 3. Trigger a sophisticated alert message
    alert("Cee Tania Empire Tech: System Initialized. Welcome, CEO Cynthia Tania.");
    
    // 4. Change the design live using JavaScript
    empireButton.innerText = "ACCESS GRANTED";
    empireButton.style.backgroundColor = "#ffffff"; // Turn white
    empireButton.style.color = "#000000"; // Black text
    
    // 5. Log it to the "Console" (The CEO's secret log)
    console.log("Empire successfully launched at: " + new Date());
});
