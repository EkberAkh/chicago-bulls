
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";

import { Product } from "../../models";
import { jwtDecode } from "jwt-decode";
import axios from "../../axios";

interface CartContextProps {
  cart: Product[];
  cartCount: number;
  productCount: { [productId: number]: number };
  increment: (productId: number) => void;
  decrement: (productId: number) => void;
  removeAllProducts: () => void;
  removeProduct: (productId: number) => void;
  addToCart: (productId: number, product: Product) => void;
}

interface JwtDecoded {
  email: string;
  userId: string;
  fullName: string;
  exp: number;
  iat: number;
}

export const CartContext = createContext<CartContextProps | null>(null);

export const useCart = () => useContext<CartContextProps | null>(CartContext);

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [productCount, setProductCount] = useState<{
    [productId: number]: number;
  }>({});

  //   const [token, setToken] = useState<JwtDecoded | null>(null);

  const accessToken = localStorage.getItem("acces_token");
  const token = jwtDecode<JwtDecoded>(accessToken!);

  //   useEffect(() => {
  //     if (accessToken) {
  //       setToken(jwtDecode<JwtDecoded>(accessToken));
  //     }
  //   }, []);

  const data: CartContextProps = useMemo(
    () => ({
      cart,
      cartCount,
      productCount,
      increment: async (productId: number) => {
        setCartCount(cartCount + 1);
        const updatedProductCount = { ...productCount };
        updatedProductCount[productId] =
          (updatedProductCount[productId] || 0) + 1;
        setProductCount(updatedProductCount);
        const response = await axios.post("/add-to-cart", {
          data: {
            userId: token?.userId,
            productId: productId,
            count: productCount,
          },
        });
        console.log(response.data);
      },
      decrement: async (productId: number) => {
        setCartCount(cartCount - 1);
        const updatedProductCount = { ...productCount };
        updatedProductCount[productId] -= 1;
        setProductCount(updatedProductCount);
        const response = await axios.delete("cart/remove", {
          data: {
            userId: token?.userId,
            productId,
          },
        });
        console.log(response.data);
      },
      removeAllProducts: () => {
        setCart([]);
        setCartCount(0);
      },
      removeProduct: async (productId: number) => {
        const updatedCart = cart.filter((p) => p.id !== productId);
        setCart(updatedCart);
        setCartCount(cartCount - productCount[productId] || 0);
        const updatedProductCount = { ...productCount };
        delete updatedProductCount[productId];
        setProductCount(updatedProductCount);
        const response = await axios.delete("cart/remove", {
          data: {
            userId: token?.userId,
            productId,
          },
        });
        console.log(response.data);
      },
      addToCart: async (productId: number, product: Product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
          setCartCount(cartCount + 1);
          const newProductCount = { ...productCount };
          newProductCount[productId] = (newProductCount[productId] || 0) + 1;
          setProductCount(newProductCount);
          const response = await axios.post("/add-to-cart", {
            data: {
              userId: token?.userId,
              productId: product.id,
              count: productCount,
            },
          });
          console.log(response.data);
        } else {
          setCart([...cart, product]);
          setCartCount(cartCount + 1);
          const newProductCount = { ...productCount };
          newProductCount[productId] = (newProductCount[productId] || 0) + 1;
          setProductCount(newProductCount);
          const response = await axios.post("/add-to-cart", {
            data: {
              userId: token?.userId,
              productId: product.id,
              count: productCount,
            },
          });
          console.log(response.data);
        }
      },
    }),
    [cart, cartCount, productCount, setCart, setCartCount, setProductCount]
  );

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
