import React, { useState, useEffect } from 'react';
import { Box, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MetamaskIcon from "../../../src/Assets/MetamaskIcon.png";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#EEBC1D',
    color: 'black',
    fontWeight: 'bold',
    padding: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#d4a517',
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    width: 48,
  },
}));

export const Connect = ({ handleClose }) => {
  const classes = useStyles();
  const [userAddress, setUserAddress] = useState('');

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setUserAddress(accounts[0]);
          }
        } catch (error) {
          console.error('Error checking for MetaMask accounts', error);
        }
      }
    };

    checkIfWalletIsConnected();
  }, []);

  const handleConnect = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setUserAddress(accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
      }
    } else {
      console.log('MetaMask not found. Please install it.');
    }
  };

  const handleDisconnect = () => {
    setUserAddress(''); // Cüzdan adresini temizle
    // Gerekirse burada daha fazla temizleme işlemi yapabilirsiniz
  };

  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      display="flex" justifyContent="center" alignItems="center"
    >
      {userAddress ? (
        <>
          <p>{userAddress}</p>
          <Button
            variant="contained"
            size="large"
            className={classes.button}
            onClick={handleDisconnect}
          >
            Disconnect
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          size="large"
          className={classes.button}
          onClick={handleConnect}
          startIcon={<img src={MetamaskIcon} alt="Metamask" className={classes.icon} />}
        >
          Connect to Wallet
        </Button>
      )}
    </Box>
  );
};
