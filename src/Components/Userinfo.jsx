



export default function Userinfo({handleClick , userInfo}){

    const {name , email } = userInfo ;


    const handl = handleClick ; 

    return(

        <div>

            <h2>USER-NAME : {name}</h2>
            <h3>Email Address : {email}</h3>

            <button onClick={()=>handl()}>Click-Me</button>
        </div>
    )
}