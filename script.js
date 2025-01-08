const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', function() {
    const url = this.src || this.querySelector('source').src;
    window.open(url, '_blank');
  });
});
