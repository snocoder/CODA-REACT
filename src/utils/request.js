export default class Request {
    static postApi(url, data) {
        return fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify(data)
        })
    }

    static getApi(url) {
        return fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'get',
        })
    }
}
