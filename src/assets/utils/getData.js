const mockdata = require('../../../server/mockdata');

export function getData(id) {
    return new Promise((resolve, reject) => {   // 模拟异步获取数据
        setTimeout(()=> {
            mockdata.forEach((item) => {
                if(item.id === id) {
                    resolve({
                        msg: item.column_title
                    });
                }
            })
        }, 100)
    });
}