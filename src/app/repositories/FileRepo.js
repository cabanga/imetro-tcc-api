import { DATABASE } from '#config/database'
import moment from 'moment'


export default {

    async validate_document(file, user) {
        let data = {
            uid: user.uid,
            email: user.email,
            name: file.name,
            doc_hash: file.md5,
            registed_at: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        }

        let result = await this.search_document( data )

        if ( Boolean(result) ) {
            return Object.assign({
                status: true,
                message: 'Documento já encontra-se Registado na cadeia de BlockChain',
                data: result
            })
        } else {
            result = await this.store( data )

            return Object.assign({
                status: true,
                message: 'Documento Registado com sucesso',
                data: result
            })
        }
    },

    async search_document( data ){
        let response = await DATABASE
        .select('*')
        .from('files')
        .where(
            'doc_hash',
            data.doc_hash
        ).first()

        return response
    },


    async store( data ){
        let response = await DATABASE
        .from('files')
        .insert(data)

        return response
    }
    
}