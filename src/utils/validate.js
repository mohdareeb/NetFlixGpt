export const validate=(email,password)=>{
    const isemailvalid =/^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email);
    const ispassvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isemailvalid) return "email is not valid";
    if(!ispassvalid) return "password is not valid";
    return null;
}