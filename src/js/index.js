import 'babel-polyfill';
import _ from 'lodash';
import 'bootstrap';

import './../sass/styles.scss';


const laneScroll = document.querySelectorAll('.lane__item');
[...laneScroll].map(item => item.addEventListener('scroll', (e) => 
    item.querySelector('.lane__item-fixed').style.top = e.target.scrollTop + 'px'))

