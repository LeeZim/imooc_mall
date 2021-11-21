import 'swiper/swiper-bundle.min.css'
import './slider.css'
import Swiper from 'swiper/swiper-bundle.min'
import axios from 'axios'

import config, { SWIPER_CONTAINER_CLASS, sliderApi, LAYOUT_ID } from './config'
import render from './slider.art'

axios.get(sliderApi).then(res => {
    document.getElementById(LAYOUT_ID).innerHTML = render({data: res.data.data, config})
    const swiper = new Swiper(SWIPER_CONTAINER_CLASS, config)
})

