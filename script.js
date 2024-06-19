
document.addEventListener('DOMContentLoaded', function() {
    console.log('The page has loaded');
    
});


function showButton() {
    var button = document.getElementById('yuzuButton');
    button.classList.remove('hidden');
}

let pcsx2Clicked = false;

function togglePage(pageId) {
    let page = document.getElementById(pageId);
    if (pageId === 'pcsx2') {
        if (pcsx2Clicked) {
            page.classList.remove('active');
            pcsx2Clicked = false;
        } else {
            page.classList.add('active');
            pcsx2Clicked = true;
        }
    } else {
        let pages = document.getElementsByClassName('page');
        for (let i = 0; i < pages.length; i++) {
            if (pages[i].id !== pageId) {
                pages[i].classList.remove('active');
            }
        }
        if (page.classList.contains('active')) {
            page.classList.remove('active');
        } else {
            page.classList.add('active');
        }
    }
}
    let aetherSX2Clicked = false;

function togglePage(pageId) {
    let page = document.getElementById(pageId);
    if (pageId === 'aetherSX2') {
        if (aetherSX2Clicked) {
            page.classList.remove('active');
            aetherSX2Clicked = false;
        } else {
            page.classList.add('active');
            aetherSX2Clicked = true;
        }
    } else {
        let pages = document.getElementsByClassName('page');
        for (let i = 0; i < pages.length; i++) {
            if (pages[i].id !== pageId) {
                pages[i].classList.remove('active');
            }
        }
        if (page.classList.contains('active')) {
            page.classList.remove('active');
        } else {
            page.classList.add('active');
        }
    }
}

let yuzuClicked = false;

function togglePage(pageId) {
    let page = document.getElementById(pageId);
    if (pageId === 'yuzu') {
        if (yuzuClicked) {
            page.classList.remove('active');
            yuzuClicked = false;
        } else {
            page.classList.add('active');
            yuzuClicked = true;
        }
    } else {
        let pages = document.getElementsByClassName('page');
        for (let i = 0; i < pages.length; i++) {
            if (pages[i].id !== pageId) {
                pages[i].classList.remove('active');
            }
        }
        if (page.classList.contains('active')) {
            page.classList.remove('active');
        } else {
            page.classList.add('active');
        }
    }
}

let slideIndex = 2; // Set to 2 to display the second image initially
    document.addEventListener("DOMContentLoaded", function() {
        showDivs(slideIndex); // Ensure the function runs after the DOM is fully loaded
    });

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        let i;
        let x = document.getElementsByClassName("mySlides");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        x[slideIndex-1].style.display = "block";  
    }
    
    function navigateToSocial(platform) {
    let url;
    switch (platform) {
        case 'facebook':
            url = 'https://www.facebook.com/yourpage';
            break;
        case 'twitter':
            url = 'https://twitter.com/yourpage';
            break;
        case 'instagram':
            url = 'https://www.instagram.com/yourpage';
            break;
        case 'linkedin':
            url = 'https://www.linkedin.com/company/yourpage';
            break;
        default:
            url = '#'; // Tautan default jika platform tidak ditemukan
            break;
    }
    window.open(url, '_blank'); // Membuka tautan di tab baru
}