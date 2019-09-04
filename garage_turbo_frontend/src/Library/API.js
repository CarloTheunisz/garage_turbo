export default class API {
    static fetchData = (url) => new Promise ( ( resolve, reject ) => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error)
        });
    });

    static postData = (url) => new Promise ( ( resolve, reject ) => {
        fetch(url, {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error)
        });
    });

    static deleteData = (url) => new Promise ( ( resolve, reject ) => {
        fetch(url, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error)
        });
    });
}