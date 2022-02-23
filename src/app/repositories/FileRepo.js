import moment from 'moment'

export default {

    async upload(file) {

        let data = {
            file_name: file.name,
            registed_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
            doc_hash: file.md5,
            status: 'Pendente'
        }

        return data
    },



}