import { VirtualTableColumn } from '../../../common/VirtualTable/types';
import { Participant } from './types';

export const participantsListColumns: VirtualTableColumn<Participant>[] = [
    {
        getCellText: ({ name }) => name,
        width: '100%',
    }
];
