import 'swiper/swiper-bundle.min.css'
import './slider.css'
import Swiper from 'swiper/swiper-bundle.min'
import setData from 'utils/setData'
import config, { SWIPER_CONTAINER_CLASS, apiUrl, LAYOUT_ID } from './config'
import render from './slider.art'


setData(apiUrl, LAYOUT_ID, render, () => {
    const swiper = new Swiper(SWIPER_CONTAINER_CLASS, config)
}, config)

