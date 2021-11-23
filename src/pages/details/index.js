import 'styles/reset.css'
import 'styles/base.css'
import 'styles/layout.css'
import './details.css'

import './components'
import 'components/details'


import axios from 'axios'
import render from './components/main/main.art'
import setData from 'utils/setData'


let idStr = window.location.search
const reg = /(?<=\?id=)/
const id = idStr.slice(idStr.search(reg), idStr.search(reg)+1)
const apiUrl = `https://www.imooc.com/api/mall-wepApp/details/${id}`

const LAYOUT_ID = 'main-layout'

setData(apiUrl, LAYOUT_ID, render)