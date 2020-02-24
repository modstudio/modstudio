var slider = tns({
  container: '.clients-gallery',
  items: 2,
  nav: false,
  controlsText: ['<img src="assets/images/to-left.svg" alt="">', '<img src="assets/images/to-right.svg" alt="">'],
  responsive: {
    861: {
      items: 3
    },
    1071: {
      items: 4
    }
  }
});
