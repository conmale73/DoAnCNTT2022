import { axiosInstance, baseURL } from "~/api/axios.config";

class DesignerService {
    getAllDesigners() {
        return axiosInstance.get(`${baseURL.data}/designers/`);
    }
    postDesigner(designer) {
        return axiosInstance.post(`${baseURL.data}/designers/`, designer);
    }
}
export default new DesignerService();