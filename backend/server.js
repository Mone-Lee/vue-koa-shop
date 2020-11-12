const net = require('net');
const fs = require('fs');
const path = require('path');
const protobuf = require('protocol-buffers');
const schemas = protobuf(fs.readFileSync(`${__dirname}/play.proto`));

const columnData = require('../server/mockdata/column');
const commentData = require('../server/mockdata/comment');

const server = net.createServer((socket) => {
    socket.on('data', (buffer) => {
        const seq = buffer.readUInt32BE();
        let params = schemas.ColumnRequest.decode(buffer);
        let columnid = params.columnid;
        
        let column = columnData.filter((item) => {
            return item.id === columnid
        })

        let commentList = commentData;

        const body = schemas.ColumnResponse.encode({
            column: column[0],
            commentList: commentList
        })

        const head = Buffer.alloc(8);
        head.writeUInt32BE(seq);
        head.writeUInt32BE(body.length, 4);

        socket.write(Buffer.concat([head, body]))
    })
})

server.listen(4000);