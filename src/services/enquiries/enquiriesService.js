import { getRequest } from '../axios';
/**
 * Api call
 */
class enquiriesService {

    getList = async (payload) =>{
       return await getRequest('users');
        }

}




const instance = new enquiriesService();

export default instance;

