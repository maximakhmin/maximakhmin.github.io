var im = 1;
var max = 2;
var slider;

function left() {
    im--;
    if (im==0) im=max;
    slider.style.transform = 'translateX('+(-(im-1)*100)+'%)';
    clearInterval(timer);
    timer = setInterval(right, 5000);

}
function right() {
    im++;
    if (im==(max+1)) im=1;
    slider.style.transform = 'translateX('+(-(im-1)*100)+'%)';
    clearInterval(timer);
    timer = setInterval(right, 5000);
}

var timer = setInterval(right, 5000);

function loadPageAbout() {
    let url = new URL(document.URL);
    let params = new URLSearchParams(url.search);
    let name = params.get('name');

    let about;
    for (let item of allItems) {
        if (item.name === name) {
            about = item;
        }
    }
    let elem = document.getElementById('slider');
    elem.innerHTML = '';
    for (let i = 0; i < about.image.length; i++) {
        elem.insertAdjacentHTML('beforeend','<img src="pictures/photos/'+about.image[i]+'" class="slider-im">');
    }
    max = about.image.length;
    slider = document.getElementById('slider');

    elem = document.getElementById('article');
     elem.insertAdjacentHTML('afterbegin', '<p style="font-size: 22px; color: #dbdbdb; text-align: center; padding: 20px; margin: 0;">'+about.name+'</p>');
    elem.insertAdjacentHTML('beforeend', '<p align="justify" style="color: #dbdbdb; width: 90%; margin-left: auto; margin-right: auto;">'+about.about+'</p><br>');

    loadNews();
}


