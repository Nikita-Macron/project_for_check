const tabs = (headerTabsSelector, tabsSelector, tabsContentSelector, activeClass, display = 'block') => {
    const headerTabs = document.querySelector(headerTabsSelector),
        tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector);

    let hideTabContent = function () {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    };

    let showTabContent = function (i = 0) {
        tabsContent[i].style.display = display;

        tabs[i].classList.add(activeClass);
    };

    hideTabContent();
    showTabContent();

    headerTabs.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains(tabsSelector.replace(/\./, '')) ||
            (target.parentNode.classList.contains(tabsSelector.replace(/\./, '')))) {
            tabs.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;