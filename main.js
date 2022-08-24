window.onload = () => {
    const popup_btns = document.querySelectorAll('.popup-button');

    popup_btns.forEach(button => {
        button.addEventListener('click', element => {
            const target1 = element.target.dataset.popup;

            const popup_el = document.querySelector(target1);
            if (popup_el != null) {
                popup_el.classList.toggle('is-active');
            }
            console.log(element);
        });
    });
}