import nifty_img from '../images/nifty_img.png';
import gold_img from '../images/gold_img.png';
import bitcoin_img from '../images/bitcoin_img.png';

const cardData = [
  {
    title: 'Nifty',
    imgSrc: nifty_img,
    price: '45000',
    change: '+1.2%',
    color: 'green',
  },
  {
    title: 'Gold',
    imgSrc: gold_img,
    price: '1300',
    change: '-0.8%',
    color: 'red',
  },
  {
    title: 'Bitcoin',
    imgSrc: bitcoin_img,
    price: '38000',
    change: '+2.5%',
    color: 'green',
  },
  // Add more card data as needed
];

export default cardData;
