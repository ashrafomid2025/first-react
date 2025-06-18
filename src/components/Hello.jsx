function Hello(props) {
  return (
    <>
      <h1>
        {props.person.name} {props.person.emoji}: {props.person.message}- your
        here is the seat number stored in array: {props.person.seatNumbers}
      </h1>
      <h2>Hi there</h2>
    </>
  );
}
export default Hello;
