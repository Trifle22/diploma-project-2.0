import { RootState } from '../../store';
import { UserRole } from '../../types/types';

export const selectUser = (state: RootState) => state.userState;

export const selectHasUserRole = (state: RootState, role: UserRole) => {
    const user = selectUser(state);
    return user?.roles.includes(role) as boolean;
};
