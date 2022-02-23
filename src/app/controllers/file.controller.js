import UserRepo from '#repo/UserRepo'


export const get_hash = async (req, res) => {
    try {
        let data = req.body
        const response = await UserRepo.sign_in(data)
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send({ errors: error })
    }
}