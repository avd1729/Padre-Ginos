import { createContext } from "react";

// cart is an array and we pass a function along with it as it is a hook
export const CartContext = createContext([ [], function(){} ]);