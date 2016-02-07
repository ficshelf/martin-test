import React from 'react';
import TextField from 'material-ui/lib/text-field';

// define and export our Welcome component
export const Welcome = ({name}) => (
    <div>
        Hello, <TextField defaultValue={name} />
    </div>
);
