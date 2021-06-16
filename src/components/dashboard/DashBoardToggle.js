import React, { useCallback } from 'react';
import { Button, Icon, Drawer, Alert } from 'rsuite';
import { isOfflineForDatabase } from '../../context/profile.context';
import { useMediaQuery, useModelState } from '../../misc/custom-hooks';
import { auth, database } from '../../misc/firebase';
import DashBoard from './Index';

const DashBoardToggle = () => {
  const { isOpen, open, close } = useModelState();
  const isMobile = useMediaQuery(`(max-width:992px)`);

  const onSignOut = useCallback(() => {
    database
      .ref(`/status/${auth.currentUser.uid}`)
      .set(isOfflineForDatabase)
      .then(() => {
        auth.signOut();

        Alert.info('Signed Out', 4000);

        close();
      })
      .catch(err => {
        Alert.error(err.message);
      });
  }, [close]);

  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> DashBoard
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
        <DashBoard onSignOut={onSignOut} />
      </Drawer>
    </>
  );
};

export default DashBoardToggle;
