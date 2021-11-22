import BackTop from 'components/backtop'

const CHANGED_CLASS_NAME = 'backtop-hidden';

const scrollContainer = document.getElementById('destination-page')
const backtopEl = scrollContainer.querySelector('.backtop')

new BackTop(backtopEl, window.innerHeight, scrollContainer, CHANGED_CLASS_NAME)