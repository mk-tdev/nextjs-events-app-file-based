import { useContext } from "react";
import MainHeader from "./main-header";
import Notifications from "@/components/notifications";
import { NotificationContext } from "../../../store/notifications-context";

function Layout(props: any) {
  const notificationContext = useContext(NotificationContext);
  const activeNotification = notificationContext.notification;

  return (
    <>
      <MainHeader />
      <main>{props.children}</main>

      {activeNotification && (
        <Notifications
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
}

export default Layout;
