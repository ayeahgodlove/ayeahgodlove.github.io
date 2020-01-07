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

// Remove the class w-50 when the sceen size is less than 786px;
$(document).ready(function() {
    const alterClass = function() {
        let ww = document.body.clientWidth;
        if(ww <786) {
            $('.list-group').removeClass('w-50');
        }
        else if (ww >= 401) {
            $('.list-group').addClass('w-50');
        };
    };
    $(window).resize(function(){
        alterClass();
    });
      //Fire it when the page first loads:
      alterClass();
});