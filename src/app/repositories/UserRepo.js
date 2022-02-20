import { User } from "#models/User"

export default {

	async sign_in(data) {
		const user = new User(data)

		let response = await user.sign_in()
		return response.user
	}


}