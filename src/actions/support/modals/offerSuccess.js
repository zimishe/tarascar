/**
 * Created by eugene on 24.03.17.
 */

export function offerSuccess() {
    let successModal = document.querySelector('.modal--success');
    
    if (successModal !== null) {
        successModal.classList.toggle('active');
        setTimeout(() => {successModal.classList.toggle('active')}, 2000)
    }
}
