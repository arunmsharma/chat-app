import React from 'react';
import { Button, Icon, Drawer} from 'rsuite';
import { useMediaQuery, useModelState } from '../../misc/custom-hooks';
import DashBoard from './Index';

const DashBoardToggle = () => {
  const { isOpen, open, close } = useModelState();
  const isMobile = useMediaQuery(`(max-width:992px)`);


  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> DashBoard
      </Button>
      <Drawer full={isMobile}show={isOpen} onHide={close} placement="left">
        <DashBoard />
      </Drawer>
    </>
  );
};

export default DashBoardToggle;
