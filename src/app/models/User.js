import { BaseModel } from "./base.js"

export class User extends BaseModel {
	email
	password

	constructor(data) {
		super()
		this.email = data.email
		this.password = data.password
	}

	sign_in = async () => {
		return await this.firebase
			.auth()
			.signInWithEmailAndPassword(this.email, this.password)
	}

	sign_up = async () => {
		return await this.firebase
			.auth()
			.createUserWithEmailAndPassword(this.email, this.password)
			.catch(error => {
				return error.message
			})
	}

}
