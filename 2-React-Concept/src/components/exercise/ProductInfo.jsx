export const ProductInfo = () => {
    const products = [
      {
        id: 1,
        name: "Laptop",
        price: 1200,
        availability: "In Stock",
        category: "Electronics"
      },
      {
        id: 2,
        name: "iPhone",
        price: 1500,
        availability: "Limited Stock",
        category: "Mobile"
      },
      {
        id: 3,
        name: "Coffee Mug",
        price: 15,
        availability: "Out of Stock",
        category: "Kitchen"
      },
      {
        id: 4,
        name: "Gaming Chair",
        price: 300,
        availability: "In Stock",
        category: "Furniture"
      }
    ];

    return (
        <div>
            {products.map(p=>{
              return <div key={p.id}>
                <h1>Name: {p.name}</h1>
                <h1>Price: {p.price}</h1>
              </div>
            })}
        </div>
    );
};

export default ProductInfo