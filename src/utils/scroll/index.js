import { INIT_STATE,  CHANGED_STATE } from './constants'

class Scroll {
    constructor(el, critical_point, scrollContainer, CHANGED_CLASS_NAME, eventEl = scrollContainer) {
        this.el = el;
        this.critical_point = critical_point;
        this.scrollContainer = scrollContainer;
        this.eventEl = eventEl;
        this.CHANGED_CLASS_NAME = CHANGED_CLASS_NAME

        this.setState(INIT_STATE)

        this.bindEvent();
    }

    bindEvent() {
        this.eventEl.addEventListener('scroll', () => {
            if (this.needChange()) {
                this.setState(CHANGED_STATE)
                this.change()
            } else if (this.needReset()) {
                this.setState(INIT_STATE)
                this.reset()
            }
        })

        this.eventEl.addEventListener('click', () => {
            this.scrollTo()
        })
    }

    scrollTo(top = 0, left = 0) {
        this.scrollContainer.scrollTo({ top, left , behavior: 'smooth'})
    }

    change() {
        this.el.classList.add(this.CHANGED_CLASS_NAME)
    }

    reset() {
        this.el.classList.remove(this.CHANGED_CLASS_NAME)
    }

    needChange() {
        return this.state != CHANGED_STATE && this.scrollContainer.scrollTop > this.critical_point
    }

    needReset() {
        return this.state != INIT_STATE && this.scrollContainer.scrollTop <= this.critical_point 
    }

    setState(state) {
        this.state = state;
    }
}

export default Scroll