import './backtop.css'
import 'icons/iconfont.css'
import Scroll from 'utils/scroll'

class BackTop extends Scroll {
    constructor(el, critical_point, scrollContainer, CHANGED_CLASS_NAME, eventEl = scrollContainer) {
        super(el, critical_point, scrollContainer, CHANGED_CLASS_NAME, eventEl = scrollContainer)
    }

    bindEvent() {
        super.bindEvent()
        this.eventEl.addEventListener('click', () => {
            this.scrollTo()
        })
    }

    scrollTo(top = 0, left = 0) {
        this.scrollContainer.scrollTo({ top, left , behavior: 'smooth'})
    }

    change() {
        this.el.classList.remove(CHANGED_CLASS_NAME)
    }

    reset() {
        this.el.classList.add(CHANGED_CLASS_NAME)
    }
}

export default BackTop