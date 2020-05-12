import axios from './request';

export const getFictionBook = () => {
    return axios.get("rexxar/api/v2/subject_collection/book_fiction/items", {
        params: {
            'os': 'ios',
            // 'callback': 'jsonp1',
            'start': '0',
            'count': '8',
            'loc_id': '0',
            '_': Date.now()
        }
    })
}
//https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items?os=ios&callback=jsonp2&start=0&count=8&loc_id=0&_=1589265835659

export const getNofictionBook = () => {
    return axios.get("rexxar/api/v2/subject_collection/book_nonfiction/items", {
        params: {
            'os': 'ios',
            // 'callback': 'jsonp1',
            'start': '0',
            'count': '8',
            'loc_id': '0',
            '_': Date.now()
        }
    })
}