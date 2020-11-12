let diffEnvUrlHandler = (url) => {
    let res = ''

    if(process.env.NODE_ENV == 'production') {
        res = url;
    } else {
        res = url + '.html'
    }

    return res
}

export default {
    diffEnvUrl(url, get={}) {
        let res = diffEnvUrlHandler(url);
        // let baseURL = ''
        if(process.env.NODE_ENV === 'development') {
            // 如果传入了get参数对象
            if(get && Object.keys(get).length > 0) {
                res += '?'
                let first = true

                for(let key in get) {
                    if(first) {
                        res += get[key]?(key+'='+get[key]):''
                        first = false
                    } else {
                        res += get[key]?('&'+key+'='+get[key]):''
                    }
                }
            }
        } else {
            Object.keys(get).forEach((key) => {
                res += '/' + get[key]
            })
        }

        return res;
    },

    getQueryString(name) { 
        console.log(name)
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return unescape(r[2]); 
        return null; 
    }
}

