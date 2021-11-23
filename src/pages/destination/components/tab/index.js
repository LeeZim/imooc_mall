import './tab.css'
import setData from 'utils/setData'
import { apiUrl, LAYOUT_ID } from './config'
import render from '../content/content.art'

const TAB_ITEM_CLASS = '.tab-item'
const TAB_ITEM_ACTIVE_CLASS = 'tab-item-active'

class Tab {
    constructor(el) {
        this.itemEls = el.querySelectorAll(TAB_ITEM_CLASS)
        this.el = el
        this.bindEvent()
        this.setActiveItem(0)
    }

    bindEvent() {
        this.el.addEventListener('click', (e) => {
            if (e.target.tagName.toLowerCase() === 'li') {
                this.setActiveItem(e.target.dataset.id)
            }
        })
    }

    setActiveItem(index) {
        for (const item of this.itemEls) {
            item.classList.remove(TAB_ITEM_ACTIVE_CLASS)
        }
        this.itemEls[index].classList.add(TAB_ITEM_ACTIVE_CLASS)
        this.toIndex(index)
    }

    toIndex(index) {
        setData(`${apiUrl}${Number(index)+1}`, LAYOUT_ID, render)
    }
}

export default Tab

const tab = document.querySelector('.tab')
new Tab(tab)