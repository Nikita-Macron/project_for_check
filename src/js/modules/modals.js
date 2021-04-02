const modals = () => {
    function openModal(modalSel) {
        modalSel.style.display = 'block';
    }

    function closeModal(modalSel) {
        modalSel.style.display = 'none';
    }

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');


        trigger.forEach(item => {
            item.addEventListener('click', () => {
                openModal(modal);
                clearTimeout(timerId);
            });
        });

        close.addEventListener('click', () => {
            closeModal(modal);
            windows.forEach(item => {
                item.style.display = 'none';
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal && closeClickOverlay) {
                closeModal(modal);
                windows.forEach(item => {
                    item.style.display = 'none';
                });
            }
        });
    }

    const timerId = setTimeout(function () {
        openModal(document.querySelector('.popup'));
    }, 600000000);

    bindModal('.header_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
};

export default modals;