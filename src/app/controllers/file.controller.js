import FileRepo from '#repo/FileRepo'

export const upload_document = async (req, res) => {
    try {
        let doc = req.files.document

        let user = {
            uiid: req.body.uid,
            email: req.body.email
        }

        const response = await FileRepo.validate_document( doc, user )
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send({ errors: error })
    }
}