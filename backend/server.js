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
        console.log(seq)
        let params = schemas.ColumnRequest.decode(buffer);
        let column_id = params.columnid;
        console.log(column_id)
        
        let column = columnData.filter((item) => {
            return item.id === column_id
        })

        let commentList = commentData;
        // console.log(column)

        // const resultBuffer = schemas.ColumnResponse.encode({
        //     column: column[0],
        //     commentList: commentList
        // })
        const resultBuffer = schemas.Column.encode(column[0])

        const body = schemas.Column.encode(column[0])

        const head = Buffer.alloc(8);
        head.writeUInt32BE(seq);
        head.writeUInt32BE(body.length, 4);

        // return Buffer.concat([head, body]);

        // console.log(resultBuffer)

        // console.log(schemas.Column.decode(resultBuffer))

        socket.write(Buffer.concat([head, body]))
    })
})

server.listen(4000);