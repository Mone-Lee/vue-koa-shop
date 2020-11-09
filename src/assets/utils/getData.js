const mockdata = require('../../../server/mockdata');

export function getData(id) {
    return new Promise((resolve, reject) => {   // 模拟异步获取数据
        setTimeout(()=> {
            let detailId = -1;
            mockdata.forEach((item) => {
                if(item.id === id) {
                    detailId = item.id
                    resolve({
                        msg: item.column_title
                    });
                }
            })
            if(detailId === -1) {
                reject({
                    msg: '找不到该课程信息'
                });
            }
        }, 100)
    });
}