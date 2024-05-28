// HeaderJS.js
import $ from 'jquery';

export function myFunction(event) {
    event.preventDefault();  
    setTimeout(() => {
        $('header').removeClass('MobileShowOff');
    }, 250);
}

export function NavToggle(){
    $('header').toggleClass('MobileShowOff');
}