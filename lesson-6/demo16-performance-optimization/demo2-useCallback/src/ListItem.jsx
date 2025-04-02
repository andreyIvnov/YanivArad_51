const ListItem = ({ item, onRemove }) => {
  return (
    <>
      {console.log('ListItem')}
      <li>
        {item.name} &nbsp;&nbsp;
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </li>
    </>
  );
};

export default ListItem;
