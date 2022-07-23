const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

//hàm hiển thị modal mua vé (thêm class open vào modal)

function showBuyTickets() {
  modal.classList.add('open')
}
//hàm ẩn modal mua vé (gỡ bỏ class open của modal))
function hidenBuyTickets() {
  modal.classList.remove('open')
}
// Lặp qua  từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click',showBuyTickets )
}
//Nghe hành vi click vào button close
modalClose.addEventListener('click', hidenBuyTickets)
modal.addEventListener('click', hidenBuyTickets)

modalContainer.addEventListener('click', function (event) {
  event.stopPropagation()
})

// HEADER MENU //

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

// Đóng/mở mobile menu
mobileMenu.onclick = function () {
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = 'auto';
  } else {
    header.style.height = null;
  }
}
// Tự đóng khi mở menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for(var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  console.log(menuItem)

  menuItem.onclick = function () {
    header.style.height = null;
  }
}
  
