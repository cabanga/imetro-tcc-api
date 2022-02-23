import FileRepo from '#repo/FileRepo'
import multer from 'multer'

const upload = multer({ dest: 'public/' }).single("document");



export const upload_document = async (req, res) => {
    try {

        // ===================================================
        // ===================================================

        upload(req, res, (err) => {
            if (err) {
                res.status(400).send("Something went wrong!");
            } else {
                console.log(err)
            }
        })


        // ===================================================
        // ===================================================


        let data = req.files
        const response = await FileRepo.upload(data.document)

        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send({ errors: error })
    }
}