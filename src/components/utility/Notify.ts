import {Notification} from '../../../index';

function notify(props: {message: string; status: string; pos: string; timeout: number}): void {
  const {message, status, pos, timeout} = props;

  if (document && UIkit) {
    (UIkit as unknown as Notification).notification({
      message,
      status,
      pos,
      timeout,
    });
  }
}

export default notify;
