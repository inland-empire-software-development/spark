function Message(props: any): JSX.Element {
  const getPriority = () => props.priority ? ['primary', 'blue', 'green', 'yellow', 'red'][props.priority] : 'secondary';

  return (
    <section id="global-message" className={`bg-${getPriority()} ${!props.hidden ? "uk-hidden" : ""}`}>
      <p>{props.message}</p>
    </section>
  );
}

export default Message;
