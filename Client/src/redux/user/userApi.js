import { updateUser } from './userSlice';
import { userServices } from '../../service/user.service';

export const updateUsers = async (dispatch, data) => {
    let res = await userServices.updateUser(data);
    dispatch(updateUser(data));
};
