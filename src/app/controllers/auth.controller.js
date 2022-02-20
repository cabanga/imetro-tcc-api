


exports.login = async (req, res) => {

    try {
        res.status(200).send('Login processo')
    } catch (error) {
        console.log(error)
        res.status(500).send({ errors: error })
    }
}


/*

import { Request, Response } from 'express'
import UserRepo from '@repo/UserRepo'

const TEAMS = [
    { id: 1, name: 'Real Madrid', league: 'La Liga' },
    { id: 2, name: 'Barcelona', league: 'La Liga' },
    { id: 3, name: 'Manchester United', league: 'Premier League' },
    { id: 4, name: 'Liverpool', league: 'Premier League' },
    { id: 5, name: 'Arsenal', league: 'Premier League' },
    { id: 6, name: 'Inter', league: 'Serie A' },
    { id: 7, name: 'Milan', league: 'Serie A' },
    { id: 8, name: 'Juventus', league: 'Serie A' },
]

export const test = (req: Request, res: Response) => {
    res.send(TEAMS)
}

export const sign_in = (req: Request, res: Response)=> {
	let data = req.body
	const response = UserRepo.sign_in(data)

	res.send({
		data: response
	})

}

*/