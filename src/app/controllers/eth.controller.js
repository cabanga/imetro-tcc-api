import EthRepo from '#repo/EthRepo'

export const create_transation = async (req, res) => {
    try {
        let body = req.body
        const response = await EthRepo.create_transation(body)
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send({ errors: error })
    }
}

export const info_transation = async (req, res) => {
    try {
        let data = req.body
        const response = await EthRepo.info_transation(data)
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send({ errors: error })
    }
}