import ManageToken from "../storage/ManageToken";

const RegisterUser = async (body) => {

  console.log("req body is " + body);
    try {
      const resp = await fetch('http://localhost:8080/register/user', {
    method: 'POST',
    body: JSON.stringify({
       emailId: body.emailId,
       password: body.password
    }),
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
    },
    });
    
    const data = await resp.json();

    return 'Successfully Registered';
    }
    catch(err){
      console.error('Error ', err);
      throw err;
    }
   
    };

    export default RegisterUser;