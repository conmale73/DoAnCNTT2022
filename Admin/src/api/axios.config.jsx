import axios from "axios";

const baseURL = {
	auth: 'https://jwt.conmale73.repl.co',
	data: 'http://localhost:3000'
}

const axiosInstance = axios.create({
	headers: {
		'content-type': 'application/json'
	}
  //withCredentials: true,
});

axiosInstance.interceptors.request.use(
  function (req) {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { axiosInstance, baseURL }
