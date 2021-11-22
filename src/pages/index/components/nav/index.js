import './nav.css'
import axios from 'axios'
import { navApi, LAYOUT_ID } from './config'
import render from './nav.art'

axios.get(navApi).then(res => {
    const { data } = res.data
    const nav = document.getElementById(LAYOUT_ID)
    nav.innerHTML = render({
        data
    })
})