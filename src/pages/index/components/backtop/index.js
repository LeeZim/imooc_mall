import BackTop from 'components/backtop'

const scrollContainer = document.getElementById('index-page')
const backtopEl = scrollContainer.querySelector('.backtop')

new BackTop(backtopEl, window.innerHeight, scrollContainer)