export const loginGuard = () => {
    if(localStorage.getItem('access_token')){
        return true;
    }else{
        console.log('No se puede acceder sin iniciar sesion')
        return false;
    }
}