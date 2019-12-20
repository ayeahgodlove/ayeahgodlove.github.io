// nav-bar code
const navBar = () => {
    let navBarId = document.querySelector('#nav-bar');
    if(navBarId.className === 'nav-bar') {
        navBarId.className += " responsive";
    }
    else {
        navBarId.className = "nav-bar";
    }
}

let icon = document.querySelector('.icon');
icon.addEventListener('click', navBar);

// navBar();