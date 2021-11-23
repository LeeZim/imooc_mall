import BackTop from 'components/backtop'

const CHANGED_CLASS_NAME = 'backtop-hidden';

const scrollContainer = document.getElementById('index-page')
const backtopEl = scrollContainer.querySelector('.backtop')

const backtop = new BackTop(backtopEl, window.innerHeight, scrollContainer, CHANGED_CLASS_NAME)