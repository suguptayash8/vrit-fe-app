import ManageToken from "../storage/ManageToken";

const LoginUser = async (body) => {

  console.log("req body is " + body);
    try {
      const resp = await fetch('http://localhost:8080/authenticate', {
    method: 'POST',
    body: JSON.stringify({
       username: body.username,
       password: body.password
    }),
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
    },
    });
    
    const data = await resp.json();
    ManageToken(data.token);

    return 'Logged In';
    }
    catch(err){
      console.error('Error ', err);
      throw err;
    }
   
    };

    export default LoginUser;