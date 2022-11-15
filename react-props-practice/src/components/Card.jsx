function Card(element, key) {
  console.log(element);
  return (
    <div>
      <p key={key}>{element}</p>
      {/* {contacts.map((element) => (
        <p>{element.name}</p>
      ))} */}
    </div>
  );
}

export default Card;
