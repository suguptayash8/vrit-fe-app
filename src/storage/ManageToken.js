
const ManageToken = (token)=>{
    localStorage.setItem("jwt-token", token);
}

 export default ManageToken;