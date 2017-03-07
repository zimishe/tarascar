/**
 * Created by eugene on 07.03.17.
 */

export function removeFieldError(inputs, parent) {
    
    inputs.forEach((input) => {
        input.onkeyup = (e) => {
            e.target.classList.remove('error');
            
            let errorTip = e.target.nextSibling;
            
            if (errorTip.classList.contains('error__tip')) {
                parent.removeChild(errorTip);
            }
        }
    })
}
