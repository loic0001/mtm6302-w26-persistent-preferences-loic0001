const themeSelect = document.getElementById('theme-select');
const styleSelect = document.getElementById('style-select');
const listContainer = document.getElementById('dynamic-list');

const items = ['Red', 'Blue', 'Green', 'Orange', 'Purple'];

const createList = () => {
    listContainer.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listContainer.appendChild(li);
    });
};

const updatePage = (theme, listStyle) => {
    document.body.setAttribute('data-theme', theme);
    listContainer.className = `list-${listStyle}`;
    
    const settings = { theme, listStyle };
    localStorage.setItem('userSettings', JSON.stringify(settings));
};

themeSelect.addEventListener('change', () => {
    updatePage(themeSelect.value, styleSelect.value);
});

styleSelect.addEventListener('change', () => {
    updatePage(themeSelect.value, styleSelect.value);
});

const init = () => {
    createList();

    const savedData = localStorage.getItem('userSettings');
    
    if (savedData) {
        const { theme, listStyle } = JSON.parse(savedData);
        themeSelect.value = theme;
        styleSelect.value = listStyle;
        updatePage(theme, listStyle);
    } else {
        updatePage('light', 'standard');
    }
};

init();