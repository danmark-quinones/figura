const openMenuButton = document.querySelector("#open-menu")
const closeMenuButton = document.querySelector("#close-menu")
const menuContainer = document.querySelector("#mobile-menu")

openMenuButton.addEventListener("click" , function(){
    menuContainer.classList.add("show")
    menuContainer.classList.remove("hide")
})

closeMenuButton.addEventListener("click" , function(){
    menuContainer.classList.add("hide")
    menuContainer.classList.remove("show")
})

let inventoryHash = document.querySelectorAll('[inventorymanagment]'); 

Array.from(inventoryHash).forEach( 
    (Selectedvariant)=>{ 

      if(Selectedvariant.dataset.id == variant.id){ 

        if(Selectedvariant.dataset.inventory > 0) 
        { 
          $("#variant-inventory").html("We have "+ Selectedvariant.dataset.inventory +" in stock"); 

        } 
        else{ 
          $("#variant-inventory").html("Sold out!"); 

        } 
      } 
    } 
  );
  
  function instantBuy(){
    var $ = jQuery;
    var formParams = $('form.cart').serialize();
    $.ajax({
     url: "/cart/add",
     type: "post",
     data: formParams,
     success: function(){
      window.location.href = "/checkout";
     },
     error: function(){
     }
    })
   }

   function addToCart(){
    $('form.cart').submit();
   }
