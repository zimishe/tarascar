/**
 * Created by eugene on 24.02.17.
 */

export function loadJS(src) {
    let ref = window.document.getElementsByTagName("script")[0],
        script = window.document.createElement("script");
    
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}