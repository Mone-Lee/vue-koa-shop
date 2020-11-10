const mockdata = require('../../../server/mockdata/column');

export default {
    get(url, data={}) {   
        return new Promise((resolve, reject) => {   // 模拟异步获取数据
            setTimeout(()=> {
                if (url === '/detail/get') {
                    let id = data.column_id;
                    let detailId = -1;
                    let dataLen = mockdata.length;
                    mockdata.forEach((item, index) => {
                        if(item.id === id) {
                            detailId = item.id;
                            let recommendInfoArr = [];
                            if(index == dataLen - 1) {
                                recommendInfoArr = mockdata.slice(0, 2);
                            } else if(index == dataLen - 2) {
                                recommendInfoArr = [mockdata[dataLen - 1], mockdata[0]];
                            } else {
                                recommendInfoArr = [mockdata[index + 1], mockdata[index + 2]];
                            }
                            resolve({
                                detailInfo: item,
                                recommendInfo: recommendInfoArr
                            });
                        }
                    })
                    if(detailId === -1) {
                        reject({
                            detailInfo: {},
                            recommendInfo: []
                        });
                    }
                }
            }, 100)
        });
    }
}