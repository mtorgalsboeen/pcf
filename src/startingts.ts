import Cryptr from 'cryptr';
export async function foo(){
    const c = new Cryptr("foo");
    return Xrm.WebApi.retrieveRecord("account","123");
}