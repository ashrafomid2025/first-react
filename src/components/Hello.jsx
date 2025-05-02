function Hello(props) {
  return (
    <div>
      <h1>
        {props.person.name} {props.person.emoji}- {props.person.message}- your
        seatnumbers goes like this {props.person.seatNumbers}
      </h1>
    </div>
  );
}
export default Hello;
