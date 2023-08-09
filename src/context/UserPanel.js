"use client"

import React, { createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { muteToggle } from '@/redux/features/user-panel';

const UserPanelContext = createContext(); // Use any as initial type

const UserPanelProvider= ({ children }) => {
  const isMuted = useSelector((state) => state.userPanel.isMuted);
  const dispatch = useDispatch();

  const handleMuteToggle = () => {
    dispatch(muteToggle());
  };

  const contextValue = {
    isMuted,
    handleMuteToggle,
  };

  return (
    <UserPanelContext.Provider value={contextValue}>
      {children}
    </UserPanelContext.Provider>
  );
};

export { UserPanelProvider, UserPanelContext };
