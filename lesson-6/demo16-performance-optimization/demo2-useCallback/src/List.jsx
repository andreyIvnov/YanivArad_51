import { memo } from 'react';
import ListItem from './ListItem';

const List = ({ list, onRemove }) => {
  return (
    <>
      <ul>
        {list.map((item) => {
          console.log('List');
          return <ListItem key={item.id} item={item} onRemove={onRemove} />;
        })}
      </ul>
    </>
  );
};

export default memo(List);
