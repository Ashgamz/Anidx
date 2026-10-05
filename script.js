function toggleDropdown() {
    document.getElementById('profileMenu').classList.toggle('show');
}
function toggleChat() {
    const sidebar = document.getElementById('chatSidebar');
    const toggleBtn = document.querySelector('.collapse-toggle');
    sidebar.classList.toggle('collapsed');
    toggleBtn.innerText = sidebar.classList.contains('collapsed') ? "▶" : "◀";
}
function dismissWelcome() {
    const welcomeScreen = document.getElementById('welcomePage');
    welcomeScreen.classList.add('fade-out');
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
    }, 400);
}
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
}
function createCustomShelf() {
    const shelfName = prompt("Enter custom category name:");
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
window.onclick = function(event) {
    if (!event.target.matches('.avatar')) {
        document.querySelectorAll(".profile-dropdown").forEach(openDropdown => {
            if (openDropdown.classList.contains('show')) openDropdown.classList.remove('show');
        });
    }
}
