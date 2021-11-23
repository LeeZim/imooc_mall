import './backtop.css'
import 'icons/iconfont.css'
import Scroll from 'utils/scroll'

class BackTop extends Scroll {
    constructor(el, critical_point, scrollContainer, CHANGED_CLASS_NAME, eventEl = scrollContainer) {
        super(el, critical_point, scrollContainer, CHANGED_CLASS_NAME, eventEl)
        console.log(this.el)
    }

    bindEvent() {
        super.bindEvent()
        this.el.addEventListener('click', () => {
            this.scrollTo()
        })
    }

    change() {
        this.el.classList.remove(this.CHANGED_CLASS_NAME)
    }

    reset() {
        this.el.classList.add(this.CHANGED_CLASS_NAME)
    }
}

export default BackTop