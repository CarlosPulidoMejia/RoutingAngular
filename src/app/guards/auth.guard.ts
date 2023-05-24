import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  let token = sessionStorage.getItem('token')
  if(token)
    return true;
  else{
    // const ruta: Route [] = [{path: 'login', component: LoginPageComponent}]
    const router = inject(Router)
    return router.navigate(['login']);
  }
};
