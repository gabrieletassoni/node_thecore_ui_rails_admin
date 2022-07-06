import 'jquery';
import './styles/thecore.css';
import './styles/thecore.scss';
import CustomerLogo from './images/customer_logo.png';
import Logo from './images/logo.png';

console.log($)

function printLogo(logo) {
    const myLogo = new Image();
    myLogo.src = logo;
    console.log(myLogo);
}

printLogo(CustomerLogo);
printLogo(Logo);