import React from 'react';
import Box from "@material-ui/core/Box";

const Header = () => {
    return (
        <Box display={'flex'} justifyContent="center" textAlign="center" fontSize={16}  m={1}>
           <Box letterSpacing={6} fontFamily="Monospace" fontSize={33}>Contacts Saver</Box>
        </Box>
    );
};

export default Header;
