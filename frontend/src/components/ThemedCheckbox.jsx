import { withStyles } from '@material-ui/core/styles';
import { Checkbox } from '@material-ui/core';

// theme override for checkbox
const checkBoxStyles = theme => ({
    root: {
        '&$checked': {
            color: 'white',
        },
        color: 'white'
    },
    checked: {},
});

export const ThemedCheckbox = withStyles(checkBoxStyles)(Checkbox);
