import { User } from '#models/User'


export const sign_in = async (req, res) => {

    try {
        let request = req.body
        const user = new User(request)
        let response = await user.sign_in()

        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send({ errors: error })
    }
}



/*

import { Request, Response } from 'express'
import UserRepo from '@repo/UserRepo'


export const sign_in = (req: Request, res: Response)=> {
    let data = req.body
    const response = UserRepo.sign_in(data)

    res.send({
        data: response
    })

}

*/