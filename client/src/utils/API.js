import axios from "axios";

export default {
  //  /*************/********//*****///***////* //**////////*/////////////* 
  //  GATE KEEPER SCHTUFF
  //  /*************/********//*****///***/// *///**////////*/////////////* 
  login: userData => {
    let userName = userData.username;
    // console.log("api userData: ", userData);
    return axios.post("/api/users/" + userName, userData);
  },
  checkLogin: () => {
    console.log("checking loggin");
    return axios.get("/api/users/auth");
  },
  logout: () => {
    return axios.get("/api/users/logout");
  },  
  forgotPassword: email => {
    // console.log("api forgot email: ", email);
    //route can be diff but it need to call the forgot method inside of resetPasswordCtrl aka: resetPasswordCtrl.forgot()
    return axios.post(`/api/reset/forgot/${email}`)
  },
  checkResetToken: token => {
    // console.log("api checkreset token: ", token);
    //route can be diff but it need to call the checkToken method inside of resetPasswordCtrl aka: resetPasswordCtrl.checkToken()
    return axios.get(`/api/reset/checkResetToken/${token}`)
  },
  resetPassword: emailAndPass => {
    // console.log("api resetPassword emailAndPass: ", emailAndPass);
    //route can be diff but it need to call the resetPassword method inside of resetPasswordCtrl aka: resetPasswordCtrl.resetPassword()
    return axios.put(`/api/reset/resetPassword`, emailAndPass)
  },
  //  /*************/********//*****///***////* //**////////*/////////////* 
  //  END GATE KEEPER SCHTUFF
  //  /*************/********//*****///***/// *///**////////*/////////////* 

  // Gets all users
  getUsers: () => {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: id => {
    // console.log("api get user: ", id);
    return axios.get("/api/users/" + id);
  },
  //codes this need to have /items on it?
  getUserandItems: id => {
    return axios.get("/api/users/" + id);
  },
  getFriendsandItems: id => {
    return axios.get("/api/users/friends/" + id);
  },
  getFriendsandItemsTwo: () => {
    return axios.get("/api/users/shopping/:id");
  },
  // getUserAndSharedItems: id => {
  //   return axios.get("api/users/shopping/" + id);
  // },
  // Deletes the user with the given id
  deleteUser: id => {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: userData => {
    // console.log("API user data: ", userData);
    return axios.post("/api/users", userData);
  },
  //updates user profile with given id
  updateUser: userData => {
    // debugger;
    return axios.put("/api/share/" + userData.uuid, userData)
  },
  getItems: (id) => {
    console.log("THIS IS ID FROM API", id)
    return axios.get("/api/items/" + id);
    
    // return axios.get("/api/items" + id);
  },
  getItem: id => {
    console.log("THIS IS ID FROM API", id)
    return axios.get("/api/items/" + id);
  },
  // Deletes the item with the given id
  deleteItem: id => {
    console.log("api deleteItem id: ", id);
    return axios.delete("/api/items/" + id);
  },
  updateItem: (itemId, updateItemData) => {

    return axios.put(`/api/items/${itemId}`, updateItemData)
  },
  // Saves an item to the database
  saveItem: itemData => {
    // console.log("API user data: ", itemData);
    return axios.post("/api/items", itemData);
  },
  addToShoppingList: (itemId) => {
    return axios.post("/api/items/shoppingList", {itemId});
  },
  removeFromGeneralList: (itemId) => {
    console.log("API remove from gen list itemId: ", itemId);
    return axios.put("/api/items/shoppingLIst", {itemId});
  },
  session: () => {
    return axios.get('/api/users/session')
  },

};