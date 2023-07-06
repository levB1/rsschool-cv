const items = document.querySelectorAll('.slider-item');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
const navItem = document.querySelector('a.toggle-nav');
let navBtn = document.querySelectorAll('.nav_btn')
let sliders = document.querySelectorAll('.slider-item')
let count = 0;

function showNextItem() {
  toggleSlide(null, items)

  if (count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }
  items[count].classList.add('active');
}

function showPreviousItem() {
  toggleSlide(null, items)

  if (count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }
  items[count].classList.add('active');
}

function toggleNavigation() {
  this.nextElementSibling.classList.toggle('active');
}

function keyPress(e) {
  e = e || window.event;

  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);
navItem.addEventListener('click', toggleNavigation);



function toggleSlide(elem, arr) {
  arr.forEach(item => {
    item.classList.remove('active')
  })
  if (elem != null) {
    document.querySelector(elem).classList.add('active')
    document.querySelector('.nav_menu-items').classList.remove('active')
  }
}

navBtn.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    let id = item.getAttribute("href")
    toggleSlide(id, sliders)
  })
})