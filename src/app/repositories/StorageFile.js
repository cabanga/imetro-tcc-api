import moment from 'moment'
import fs from 'fs'

export default {
    async call(doc) {
        let path_doc = `./public/uploads/${moment(new Date()).format("YYYYMMDDHH:mm:ss")}-${doc.name}`

        let fileStream = fs.createWriteStream(path_doc)
        fileStream.write(doc.data)
        fileStream.end()

        fileStream.on('error', function (err) {
            return Object.assign({
                status: false,
                message: err,
                path: path_doc
            })
        })

        fileStream.on('finish', function (res) {
            return Object.assign({
                status: true,
                message: 'ficheiro salvo com sucesso',
                path: path_doc
            })
        })
        return path_doc
    }
}