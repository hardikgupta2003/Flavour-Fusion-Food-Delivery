import { createContext, useEffect, useState } from "react";
import axios, { Axios } from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [food_list,setFood_list] = useState([]);


  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  };
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
    if(token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  };
  const url = "http://localhost:3000";
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const loadCartData = async (token) => {
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setCartItems(response.data.cartData)
    console.log(response)
  }

  useEffect(() => {
    console.log(cartItems);
    console.log(Object.keys(cartItems).length);
  }, [cartItems]);

  const fetchFoodList = async () => {
    
    const list = await axios.get(`${url}/api/food/list`);
    console.log(list.data.data)
    
    setFood_list(list.data.data);
  }
  useEffect(() => {
    async function loadData() {
        await fetchFoodList();
        if (localStorage.getItem("token")) {
          setToken(localStorage.getItem("token"));
          await loadCartData(localStorage.getItem("token"));
        }
    
    }
    loadData();
  },[])
  const contextValue = {
    food_list,
    addToCart,
    removeFromCart,
    cartItems,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
