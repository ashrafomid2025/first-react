function Hello(props) {
  console.log(props);
  return (
    <div>
      <h1>
        {props.message} {props.name} {props.emoji}
      </h1>
    </div>
  );
}
export default Hello;
