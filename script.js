// Interactive UI Mechanics & Data Handling Framework

function toggleDropdown() {
    document.getElementById('profileMenu').classList.toggle('show');
}

function toggleChat() {
    const sidebar = document.getElementById('chatSidebar');
    const toggleBtn = document.querySelector('.collapse-toggle');
    sidebar.classList.toggle('collapsed');
    toggleBtn.innerText = sidebar.classList.contains('collapsed') ? "▶" : "◀";
}

function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
}

function createCustomShelf() {
    const shelfName = prompt("Enter custom category name (e.g., On Hold, Completed):");
    if (shelfName) {
        const tabsContainer = document.querySelector('.tabs-container');
        const addBtn = document.querySelector('.add-custom-btn');
        
        const newTab = document.createElement('button');
        newTab.className = "tab-btn";
        newTab.innerText = shelfName;
        newTab.onclick = function() { switchTab(shelfName.toLowerCase().replace(/\s+/g, '-')); };
        
        tabsContainer.insertBefore(newTab, addBtn);
        
        document.querySelectorAll('.move-dropdown').forEach(select => {
            const newOption = document.createElement('option');
            newOption.value = shelfName.toLowerCase().replace(/\s+/g, '-');
            newOption.innerText = shelfName;
            select.appendChild(newOption);
        });
    }
}

function moveAnime(selectElement) {
    console.log(`Moved to shelf: ${selectElement.value}`);
}

// Global window event listener to shut menus cleanly on external view taps
window.onclick = function(event) {
    if (!event.target.matches('.avatar')) {
        document.querySelectorAll(".profile-dropdown").forEach(openDropdown => {
            if (openDropdown.classList.contains('show')) openDropdown.classList.remove('show');
        });
    }
                }
