import moment from 'moment'
import { sha1FileSync } from 'sha1-file'


export default {

    async validate_document(file, path) {
        let hash = await sha1FileSync(path)

        let data = {
            file_name: file.name,
            registed_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
            doc_hash: hash,
            status: 'Pendente'
        }

        return data
    }

}