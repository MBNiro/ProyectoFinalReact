import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <>
      <div className="itemClass">
        {products.map((prod) => (
          <Item
            key={prod.id}
            id={prod.id}
            nombre={prod.nombre}
            precio={prod.precio}
            category={prod.category}
            detalle={prod.detalle}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList