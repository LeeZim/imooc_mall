import './nav.css'
import setData from 'utils/setData'
import { apiUrl, LAYOUT_ID } from './config'
import render from './nav.art'

setData(apiUrl, LAYOUT_ID, render)