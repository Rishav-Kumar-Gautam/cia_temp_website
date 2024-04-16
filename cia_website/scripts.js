const galleryImages = [
    'cia_img1.jpg',
    'cia_img3.jpg',
    'cia_img2.jpg',
];



function loadGallery() {
    const galleryContainer = document.querySelector('.gallery-container');

    galleryImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = 'images/' + image; 
        imgElement.alt = 'Gallery Image';
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.appendChild(imgElement);
        galleryContainer.appendChild(galleryItem);
    });
}


window.onload = loadGallery;