(function(){
window.download  = (url, filename) => {
                var a = document.createElement('a');
                a.href = url;
                a.download = filename || 'download';
                
                var clickHandler = () => {
                    setTimeout(() => {
                        a.removeEventListener('click', clickHandler);
                    }, 150);
                };
                a.addEventListener('click', clickHandler, false);
                a.click();
                return a;
            }
})()