import { useEffect, useState } from "react";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}
const Cards = (): JSX.Element => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://192.168.0.104:1114/products/products/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("net response");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setProduct(data);
        } else {
          throw new Error("data format not supported");
        }
      })
      .catch((error) => {
        console.error("hato", error);
      });
  }, []);

  return (
    <div className="w-[290px] h-[360px] border rounded-2xl">
      {product.map((user) => (
        <div className="flex flex-col gap-4" key={user.id}>
          <img src={user?.image} alt="user" />
          <div>
            <h1 className="text-black text-[20px] font-medium font-sans pl-[14px] pr-[14px]">
              {user?.title}
            </h1>
            <h1 className="text-black text-[16px] font-extralight font-sans pl-[14px] pr-[14px]">
              {user?.description}
            </h1>
            <div className="flex justify-between items-center pl-[14px] pr-[14px] pt-4">
              <h1 className="font-bold flex gap-1">{user?.price}</h1>
            </div>
            <button className="border w-[100px] h-10 rounded-2xl bg-[#57307e] text-white hover:bg-[#7e52aa] cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
// 