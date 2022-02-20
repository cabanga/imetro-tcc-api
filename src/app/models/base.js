import { firebase } from '#config/firebase'

export class BaseModel {


	firebase = firebase

	reposponse(success, message, data) {
		return {
			success: success,
			message: message,
			data: data
		}
	}



}