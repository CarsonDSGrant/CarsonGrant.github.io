document.addEventListener("DOMContentLoaded", function() {
    let personalTab = document.querySelector(".personal-tab");
    let favoritesTab = document.querySelector(".favorites-tab");
    let personalTabLink = document.querySelector('a[href="#personal-tab"]');
    let favoritesTabLink = document.querySelector('a[href="#favorites-tab"]');

    
    personalTab.style.display = "none";
    favoritesTab.style.display = "none";

   
    personalTabLink.addEventListener("click", function(event) {
        event.preventDefault(); 

        
        if (personalTab.style.display === "none") {
            personalTab.style.display = "block";
        } else {
            personalTab.style.display = "none";
        }
    });

   
    favoritesTabLink.addEventListener("click", function(event) {
        event.preventDefault(); 

        
        if (favoritesTab.style.display === "none") {
            favoritesTab.style.display = "block";
        } else {
            favoritesTab.style.display = "none";
        }
    });
});

