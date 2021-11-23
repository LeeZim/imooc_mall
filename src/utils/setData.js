import axios from "axios";
import loading from 'components/loading/loading.art'

const setData = (apiUrl, layout_id, render, callback = () => {}, config = {}) => {
    const controller = new AbortController()
    const container = document.getElementById(layout_id)
    container.innerHTML = loading({})
    axios.get(apiUrl, { signal: controller.signal }).then(res => {
        // console.log(res)
        const { data } = res.data
        container.innerHTML = render({
            data,
            config
        })
        callback()
    }).catch(err => {
        const { message } = err
        if (message == 'canceled') return
        throw new Error(err)
    })
    return controller
}

export default setData