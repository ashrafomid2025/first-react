function Hello({ name, message, emoji }) {
  // console.log(props);
  console.log(name);
  // const { name, message } = props;
  return (
    <div>
      <h1>
        {message}
        {emoji}
        {name}
      </h1>
    </div>
  );
}
export default Hello;
