
function hamburger() {

    const menu = document.getElementById("menubar");
    menu.classList.toggle("active");
    const menus = document.getElementById("barmenu");
    menus.classList.toggle("active");

}
// =====================================================

let slidernumber = 1;
slidermovedata(slidernumber);

function nextandprevious(n) {
    slidermovedata(slidernumber += n);
}

function slidermovedata(n) {
    let sliderdata = document.getElementsByClassName("main");
    if (n > sliderdata.length) {
        slidernumber = 1
    }
    let i;
    for (i = 0; i < sliderdata.length; i++) {
        sliderdata[i].style.display = "none";
    }
    sliderdata[slidernumber - 1].style.display = "flex";
}

// ===============================================================================

  const track = document.getElementById('clintcards');
  const items = document.querySelectorAll('.card');
  const carousel = document.getElementById('clientreview');
  let currentIndex = 0;
  let itemWidth;
  let visibleItems = 3;
  let autoplayInterval;
  function updateVisibleItems() {
    const width = window.innerWidth;
    if (width < 576) {
      visibleItems = 1;
    } else if (width < 951) {
      visibleItems = 2;
    } else {
      visibleItems = 3;
    }
    itemWidth = carousel.offsetWidth / visibleItems;
    items.forEach(item => {
      item.style.width = `${itemWidth}px`;
    });
  }
  function moveNext() {
    currentIndex++;
    if (currentIndex > items.length - visibleItems) {
      currentIndex = 0;
    }
    updateTransform();
  }
  function updateTransform() {
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
  function startAutoplay() {
    autoplayInterval = setInterval(moveNext, 2000);
  }
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }
  updateVisibleItems();
  window.addEventListener('resize', () => {
    updateVisibleItems();
    updateTransform();
  });
  startAutoplay();
  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);

// ======================================================================
