const EasySock = require('easy_sock');

const protobuf = require('protocol-buffers')
const fs = require('fs');
const path = require('path');
const schemas = protobuf(fs.readFileSync(path.resolve(__dirname, '../backend/play.proto')));

// 正常开发情况的后端服务器信息，因为只是再本地开发，所以ip地址写了本机地址
const easySock = new EasySock({ 
    ip: '127.0.0.1',
    port: 4000,
    timeout: 500,
    keepAlive: true
})

// 由于设置了keepAlive，即全双工通信，为了确保请求数据和响应的数据对应，需要设置序号seq
easySock.encode = function(data, seq) {
    const body = schemas.ColumnRequest.encode(data);

    const head = Buffer.alloc(8);
    head.writeInt32BE(seq);
    head.writeInt32BE(body.length, 4);

    return Buffer.concat([head, body])
}
easySock.decode = function(buffer) {
    const seq = buffer.readInt32BE();
    const body = schemas.ColumnResponse.decode(buffer.slice(8));
    
    return {
        result: body,
        seq
    }
}
easySock.isReceiveComplete = function(buffer) {
    if (buffer.length < 8) {
        return 0
    }
    const bodyLength = buffer.readInt32BE(4);

    if (buffer.length >= bodyLength + 8) {
        return bodyLength + 8
        
    } else {
        return 0
    }
}

module.exports = easySock;