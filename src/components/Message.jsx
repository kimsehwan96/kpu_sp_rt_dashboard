import React from 'react';
import { Alert } from '@material-ui/lab';

const Message = ({ type, comment }) => {
    return (
        <Alert security={type}>
            {comment}
        </Alert>
    );
}

export default Message
