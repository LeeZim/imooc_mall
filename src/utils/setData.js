import axios from "axios";

const setData = (apiUrl, layout_id, render, callback = () => {}, config = {}) => {
    axios.get(apiUrl).then(res => {
        const { data } = res.data
        const container = document.getElementById(layout_id)
        container.innerHTML = render({
            data,
            config
        })
        callback()
    })
}

export default setData