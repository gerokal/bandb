window.addEventListener('load', function () {
    console.log("ok");

    var images = [];

    images[0] = 'img/double1.jpg';
    images[1] = 'img/double2.jpg';
    images[2] = 'img/single1.jpg';
    images[3] = 'img/single2.jpg';
    images[4] = 'img/entrance.jpg';
    images[5] = 'img/garden.jpg';
    images[6] = 'img/garden2.jpg';
    images[7] = 'img/living.jpg';
    images[8] = 'img/bathroom.jpg';

    var imagesIndex = 0;

    var time = 2000;

    function changeImages() {
        
        document.slider.src = images[imagesIndex];

        if (imagesIndex < 8 ) {
            imagesIndex++;
        } else {
            imagesIndex = 0;

        }

    }
    
    setInterval(changeImages, time);
});