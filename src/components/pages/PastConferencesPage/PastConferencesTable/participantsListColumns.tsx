import { VirtualTableColumn } from '../../../common/VirtualTable/types';
import { User } from '../../../../types/types';

export const participantsListColumns: VirtualTableColumn<User>[] = [
    {
        getCellText: ({ name }) => name,
        width: '100%',
    }
];
