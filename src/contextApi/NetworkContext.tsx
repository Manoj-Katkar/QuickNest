import React, {createContext, useEffect, useContext, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import NoInternetModal from '../customModal/NoInternetModal';

const NetworkContext = createContext<any>({
  isConnected: false,
});

export const NetworkProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type:', state.type);
      console.log('Is connected?', state.isConnected);
      const connectionStatus = state.isConnected ?? false;
      setIsConnected(connectionStatus);

      // Show or hide the modal based on the connection status
      if (!connectionStatus) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NetworkContext.Provider value={{isConnected}}>
      {children}
      <NoInternetModal
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </NetworkContext.Provider>
  );
};

export const useNetwork = (): any => useContext(NetworkContext);
