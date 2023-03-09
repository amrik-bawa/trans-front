import { getRequest } from '../axios';
/**
 * Api call
 */
class enquiriesService {

    getList = async (payload) =>{
       return await getRequest('userks');
        }

}




const instance = new enquiriesService();

export default instance;

