const mockdata = require('../../../server/mockdata/column');
const commentList = require('../../../server/mockdata/comment');

export default {
    get(url, data={}) {   
        return new Promise((resolve, reject) => {   // 模拟异步获取数据
            setTimeout(()=> {
                if (url === '/detail/get') {
                    let id = data.columnid;
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
                
                if (url === '/list/get') {
                    let sortType = data.sortType || 0;
                    let filterType = data.filterType || 0;
                    let resultList = mockdata
                        .sort((a, b) => {
                            if (sortType == 1) {
                                return a.id - b.id
        
                            } else if (sortType == 2) {
                                return a.sub_count - b.sub_count
        
                            } else if (sortType == 3) {
                                return a.column_price - b.column_price

                            } else if (sortType == 4) {
                                return b.column_price - a.column_price
                            }
        
                        })
                        .filter((item) => {
                            if (filterType == 0) {
                                return item
        
                            } else {
                                return item.type == filterType
                            }
                        })
                    resolve({
                        list: resultList
                    });
                }

                if (url === '/play/get') {
                    let courseInfo = mockdata
                        .filter((item) => {
                            return item.id == data.columnid
                        })
                    resolve({
                        course: courseInfo[0],
                        commentList: commentList
                    });
                }
            }, 100)
        });
    }
}