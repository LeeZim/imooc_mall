import BackTop from 'components/backtop'

const CHANGED_CLASS_NAME = 'backtop-hidden';

const scrollContainer = document.getElementById('destination-content')
const backtopEl = document.querySelector('.backtop')

const backtop = new BackTop(backtopEl, window.innerHeight, scrollContainer, CHANGED_CLASS_NAME)