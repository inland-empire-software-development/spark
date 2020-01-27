import {Notification} from '../../../index';

function notify(props: {message: string; status: string; pos: string; timeout: number}): void {
  const {message, status, pos, timeout} = props;

  const notifications = document.querySelectorAll('.uk-notification-message');

  if (document && UIkit && notifications && notifications.length === 0) {
    (UIkit as unknown as Notification).notification({
      message,
      status,
      pos,
      timeout,
    });
  }
}

export default notify;
