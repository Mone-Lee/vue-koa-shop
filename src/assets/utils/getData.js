const mockdata = require('../../../server/mockdata');

export function getData(id) {
    return new Promise((resolve, reject) => {
        mockdata.forEach((item) => {
            if(item.id === id) {
                resolve({
                    msg: item.column_title
                });
            }
        })
    });
}