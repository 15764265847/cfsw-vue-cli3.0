import axios from '@src/api/index';

export class BlogApi {
	public getArtic(params: Loader.RequestParams): Promise<Loader.Response> {
		return axios.get(`/api/user/chatroom`, params);
	}
	public saveView(
		params: ChatRoom.View.RequestParams
	): Promise<ChatRoom.View.Response> {
		return axios.post(`/api/user/view`, params);
	}
	public getDetail(
		params: Detail.ArticDetail.RequestParams
	): Promise<Detail.ArticDetail.Response> {
		return axios.post('/api/user/detail', params);
	}
	public getUserComment(params: any) {
		return axios.get('/api/user/artic/comments', params);
	}
	public userComment(
		params: Detail.UserComment.RequestParams
	): Promise<Detail.UserComment.Response> {
		return axios.post('/api/user/comment', params);
	}
	public agreeAuthor(
		params: Detail.AgreeAuthor.RequestParams
	): Promise<Detail.AgreeAuthor.Response> {
		return axios.post('/api/user/agree/artic', params);
	}
	public agreeComment(
		params: Detail.AgreeComment.RequestParams
	): Promise<Detail.AgreeComment.Response> {
		return axios.post('/api/user/agree/comment', params);
	}
}

export default new BlogApi();