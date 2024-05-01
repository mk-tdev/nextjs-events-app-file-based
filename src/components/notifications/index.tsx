import { useContext } from "react";
import { NotificationContext } from "../../../store/notifications-context";

const Notifications = (props: any) => {
  const notificationContext = useContext(NotificationContext);

  const { title, message, status } = props;

  return (
    <div
      onClick={notificationContext.hideNotification}
      className="absolute bottom-4 right-4 z-50 space-y-2 rounded-md shadow-lg w-10/12"
    >
      {status === "success" && (
        <div className="p-3 bg-green-500 text-white">
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      )}

      {status === "error" && (
        <div className="p-3 bg-red-500 text-white">
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      )}

      {status === "pending" && (
        <div className="p-3 bg-orange-500 text-white">
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      )}

      {status === "info" && (
        <div className="p-3 bg-gray-600 text-white">
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Notifications;
