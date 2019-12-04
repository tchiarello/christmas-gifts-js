function addGiftPicture(src, containerId) {
    let picture = document.createElement('img');
    picture.src = src;

    let container = document.getElementById(containerId);
    container.innerHTML = '';
    container.appendChild(picture);
}

let selectCity = document.getElementById('city');
let hiddenCity = document.getElementById('cityContainer');
hiddenCity.style.display = 'none';
let selectCountry = document.getElementById('country');
let imgContainer = document.getElementById('giftImage');

selectCountry.addEventListener('change', function() {
    let getCountryOption = selectCountry.value;
    let showCountryMgs = document.getElementById('message');

    // if (getCountryOption === 'brasil') {
    //     hiddenCity.style.display = 'block';
    // } else {
    //     hiddenCity.style.display = 'none';
    // }

    hiddenCity.style.display = getCountryOption === 'brazil' ? 'block' : 'none';

    switch (getCountryOption) {
        case 'brazil':
            showCountryMgs.innerHTML = '';
            imgContainer.innerHTML = '';
            break;

        case 'australia':
            showCountryMgs.innerText = 'This friend will get a green t-shirt';
            addGiftPicture('images/green.png', 'giftImage');
            break;

        case 'usa':
            showCountryMgs.innerText = 'This friend will get a purple t-shirt';
            addGiftPicture('images/purple.jpg', 'giftImage');
            break;

        case 'london':
            showCountryMgs.innerText = 'This friend will get a black t-shirt';
            addGiftPicture('images/black.jpg', 'giftImage');
            break;

        default:
            showCountryMgs.innerText = '';
            imgContainer.innerHTML = '';
    }
})

selectCity.addEventListener('change', function() {
    let getCityOption = selectCity.value;
    let showCityMsg = document.getElementById('message');

    switch (getCityOption) {
        case 'rj':
            showCityMsg.innerText = 'This friend will get a white t-shirt';
            addGiftPicture('images/white.jpg', 'giftImage');
            break;
        
        case 'salvador':
            showCityMsg.innerText = 'This friend will get a blue t-shirt';
            addGiftPicture('images/blue.jpg', 'giftImage');
            break;

        case 'spaulo':
            showCityMsg.innerText = 'This friend will get a yellow t-shirt';
            addGiftPicture('images/yellow.jpg', 'giftImage');
            break;
        
        default:
            showCityMsg.innerText = '';
            imgContainer.innerHTML = '';
    }
})