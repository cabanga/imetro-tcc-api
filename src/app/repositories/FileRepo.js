import moment from 'moment'
import { sha1FileSync } from 'sha1-file'

const default_path = './public'



export default {

    async upload(file) {
        //await this.save_file(file)

        let file_path = `${default_path}/certificado-tcc-Imetro.pdf`
        let hash = await sha1FileSync(file_path)

        let data = {
            file_name: file.name,
            registed_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
            doc_hash: hash,
            status: 'Pendente'
        }

        return data
    }

}