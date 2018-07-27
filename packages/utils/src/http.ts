import autobind from 'autobind-decorator';


@autobind
export class Http {

	async request(type: string, data: any = null) {
		return { type, data };
	}
}