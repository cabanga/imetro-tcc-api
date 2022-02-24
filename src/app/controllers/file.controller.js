import FileRepo from '#repo/FileRepo'
import StorageFile from '#repo/StorageFile'


export const upload_document = async (req, res) => {
    try {
        let doc = req.files.document
        const doc_path = await StorageFile.call(doc)
        //setTimeout(function () { console.log("ja passou ") }, 2000)

        const response = await FileRepo.validate_document(doc, doc_path)

        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send({ errors: error })
    }
}