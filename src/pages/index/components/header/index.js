import Scroll from 'utils/scroll';
import 'components/searchbox'

const CHANGED_CLASS_NAME = 'header-transition';

const scrollContainer = document.getElementById('index-page')
const headerEl = scrollContainer.querySelector('.header')

new Scroll(headerEl, 0, scrollContainer, CHANGED_CLASS_NAME)