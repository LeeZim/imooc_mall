import './product.css'
import setData from 'utils/setData.js'
import { apiUrl, LAYOUT_ID } from './config'
import render from './product.art'

setData(apiUrl, LAYOUT_ID, render)