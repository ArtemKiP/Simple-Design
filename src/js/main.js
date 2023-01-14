document.querySelectorAll('.accordion').forEach((el) => {
    el.addEventListener('click', () => {

        let content = el.nextElementSibling;


        if(content.style.maxHeight) {
document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null);
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
});


let orderBtn = document.querySelector('.order');
let order = document.querySelector('.my-order');
let orderExit = document.querySelector('.my-order-exit');

orderBtn.onclick = function () {
    order.style.display = 'flex'
};


orderExit.onclick = function () {
    order.style.display = 'none'
};

order.onclick = function (e) {
    if (e.target.classList.contains('my-order')){
        order.style.display = 'none'
    }
};
