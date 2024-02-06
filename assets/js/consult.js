const BASE_URL = 'https://pro-api.coinmarketcap.com';

const api_url = '/v1/cryptocurrency/listings/latest';
const api_detail = '/v1/cryptocurrency/map';

const api_metaData = '/v2/cryptocurrency/info?id=1';

const headers = {
    Accept: 'application/json',
    'X-CMC_PRO_API_KEY': 'API-KEY-HERE',
};

const fetchData = (url) => {
    var newUrl = BASE_URL + url;
    return new Promise((resolve, reject) => {
        $.ajax({
            url: newUrl,
            type: 'GET',
            headers: headers,
            success: function (data) {
                resolve(data);
            },
            error: function (xhr, status, error) {
                reject(error);
            },
        });
    });
};

$(document).ready(function () {
    // fetchData(api_url)
    //     .then((data) => {
    //         console.log('data currency', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });
    // fetchData(api_detail)
    //     .then((data) => {
    //         console.log('data currency', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });
    // fetchData(api_metaData)
    //     .then((data) => {
    //         console.log('data metadata', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });
});
