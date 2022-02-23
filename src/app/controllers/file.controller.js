import FileRepo from '#repo/FileRepo'
import multer from 'multer'


export const upload_document = async (req, res) => {
    try {
        let data = req.files
        const response = await FileRepo.upload(data.document)

        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send({ errors: error })
    }
}