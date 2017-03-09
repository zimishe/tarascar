/**
 * Created by eugene on 07.03.17.
 */
import store from './../store/store'
import { login } from './login'
import { removeFieldError } from './../actions/support/removeFieldError'

export function validation(body) {
    let status = body.s;
    
    if (status < 1) {
        let errors = body.errors;
        
        let parent = document.querySelector('#reg_inputs'),
            errorTip = document.querySelectorAll('.error__tip'),
            inputs = document.querySelectorAll('#reg_inputs input');
        
        errorTip.forEach((el) => {
            parent.removeChild(el)
        });
        
        errors.forEach((el, i) => {
            let name = el.param,
                message = el.msg;
            
            let field = document.querySelector('input[name='+name+']');
            
            let par = document.createElement('p');
            
            par.innerHTML = message;
            par.className = 'error__tip';
            
            field.classList.add('error');
            insertAfter(par, field)
        });
        
        removeFieldError(inputs, parent);
        
    }   else {
        
        let data = {
            id: 1,
            name: 'Eugene'
        };
        
        let sessionData = JSON.stringify(data);
        
        sessionStorage.setItem('userData', sessionData);
        
        store.dispatch(login(true));
        
        let regForm = document.querySelector('#registration');
        
        regForm.classList.remove('active');
        
        // need to return username
        console.log('success blyat');
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}