import './ItemList.scss';

const ItemList = ({ items, title }) => {
  return (
    <ul className="itemList" aria-label={title}>
      {items.map((item, i) => (
        <li className="itemList__item" key={i}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
