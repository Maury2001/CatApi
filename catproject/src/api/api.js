import axios from 'axios'

export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'https://api.thecatapi.com/v1/images/search?limit=10',
        'headers': {
            'content-type':'application/octet-stream',
            'x-rapidapi-host':'example.com',
            
        },
        'params': {
            'search':'parameter',
        },
    })
}