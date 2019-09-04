export default class API {
    static fetchData = (url, type) => new Promise ( ( resolve, reject ) => {
        fetch(url, {
            method: type
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