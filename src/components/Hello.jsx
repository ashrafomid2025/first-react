function Hello(props) {
  return (
    <>
      <h1>
        {props.person.name} {props.person.emoji}: {props.person.message}- your
        seatnumbers goes like this {props.person.seatNumbers}
      </h1>
    </>
  );
}
export default Hello;
