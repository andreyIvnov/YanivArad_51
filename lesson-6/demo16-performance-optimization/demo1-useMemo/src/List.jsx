import { memo } from 'react';
import ListItem from './ListItem';

const List = ({ list }) => {
  return (
    <>
      <ul>
        {list.map((item) => {
          console.log('List');
          return <ListItem key={item.id} item={item} />;
        })}
      </ul>
    </>
  );
};

export default memo(List);
