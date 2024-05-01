import React, { useEffect, useState } from "react";

interface NotificationContextObj {
  notification: any;
  showNotification: (notificationData: any) => void;
  hideNotification: () => void;
}

interface Notification {
  title: string;
  message: string;
  status: string;
}

const NotificationContext = React.createContext<NotificationContextObj>({
  notification: null,
  showNotification: () => {},
  hideNotification: () => {},
});

const NotificationContextProvider = (props: any) => {
  const [activeNotification, setActiveNotification] =
    useState<Notification | null>();

  const showNotificationHandler = (notificationData: Notification) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };
  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  useEffect(() => {
    if (
      activeNotification?.status === "success" ||
      activeNotification?.status === "error"
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export { NotificationContextProvider, NotificationContext };
