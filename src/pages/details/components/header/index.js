import './header.css'
import 'icons/iconfont.css'
import Scroll from 'utils/scroll'

const CHANGED_CLASS_NAME = 'header-transition';

const scrollContainer = document.getElementById('details-page')
const headerEl = scrollContainer.querySelector('.header')

new Scroll(headerEl, 0, scrollContainer, CHANGED_CLASS_NAME)