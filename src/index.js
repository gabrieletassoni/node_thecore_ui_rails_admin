import 'jquery';
import './styles/thecore.css';
import './styles/thecore.scss';
// Same images, even if with different filenames, are bundled just once (very clever).
// Different images are bundled separately, obviously.
import CustomerLogo from './images/customer_logo.png';
import Logo from './images/logo.png';

console.log($)

function printLogo(logo) {
    const myLogo = new Image();
    myLogo.src = logo;
    console.log(myLogo.src);
}

printLogo(CustomerLogo);
printLogo(Logo);