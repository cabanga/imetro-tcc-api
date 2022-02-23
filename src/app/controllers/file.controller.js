import FileRepo from '#repo/FileRepo'
import multer from 'multer'


export const upload_document = async (req, res) => {
    try {
        let data = req.files
        const response = await FileRepo.upload(data.document)



        const upload = multer({ dest: './src/loadingFile/' }).single("demo_image")

        upload(req, res, (err) => {
            if (err) {
                res.status(400).send("Something went wrong!")
            }
        })



        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send({ errors: error })
    }
}