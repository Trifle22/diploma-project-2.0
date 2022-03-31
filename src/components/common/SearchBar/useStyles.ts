import { makeStyles, Theme } from '@material-ui/core/styles';
import { StatelessSearchBarProps } from './StatelessSearchBar';

export const useStyles = makeStyles<Theme, StatelessSearchBarProps<any>>({
    root: {
        width: ({ width }) => width
    }
});
