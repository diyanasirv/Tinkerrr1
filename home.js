document.addEventListener("DOMContentLoaded", function () {
    
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 10); 

    let links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            let destination = this.href;

            
            if (destination.startsWith(window.location.origin)) {
                event.preventDefault(); 
                document.body.classList.add("fade-out"); 

                setTimeout(() => {
                    window.location.href = destination; 
                }, 500); 
            }
        });
    });
});
