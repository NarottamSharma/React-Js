import { useEffect, useState } from 'react'

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  images: string[];
  thumbnail: string;
}
const MyUseEffect = () => {
  const [data,setData] = useState<null|Product>(null)
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await fetch('https://dummyjson.com/products/1')
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.log('Error Fetching Data',error);
        
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>MyUseEffect</h1>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <img src={data.thumbnail} alt={data.title} />
          <p>{data.description}</p>
          <p>Price: ${data.price}</p>
          <p>Category: {data.category}</p>
          <p>Brand: {data.brand}</p>
          <p>Rating: {data.rating}</p>
          <p>Stock: {data.stock}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default MyUseEffect