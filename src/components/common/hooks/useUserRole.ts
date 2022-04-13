import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { UserRole } from '../../../types/types';
import { selectHasUserRole } from '../../../slices/user/userSelectors';

export const useUserRole = (role: UserRole) => (
    useSelector((state: RootState) => (
        selectHasUserRole(state, role)
    ))
);
