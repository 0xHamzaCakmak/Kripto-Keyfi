import React from 'react';
import { Box, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MetamaskIcon from "../../../src/Assets/MetamaskIcon.png";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#EEBC1D', // Metamask sarısı
    color: 'black', // Buton metin rengi
    fontWeight: 'bold',
    padding: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#d4a517', // Hover rengi biraz daha koyu
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    width: 48, // İkonunuzun boyutu
  },
  
}));


export const Connect = ({ handleClose }) => {

  const classes = useStyles();

  const handleConnect = () => {};
  
  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      display="flex" justifyContent="center" alignItems="center"
    >
      

      <Button
        variant="contained"
        size="large"
        className={classes.button}
        onClick={handleConnect}
        startIcon={<img src={MetamaskIcon} alt="Metamask" className={classes.icon} />}
      >
        
        Connect to MetaMask
      </Button>
    </Box>
  );
};
//<img src={MetamaskIcon} alt="Metamask" style={{ marginRight: 8 }} />