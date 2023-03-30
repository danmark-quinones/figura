const notif = document.querySelector("cart-notification")
const openNotif = document.querySelector(".open-notif")

export function setData(data){
    const dataObject = {
        // title:data.getAttribute("title"),
        // price:data.getAttribute("price"),
        title:data.title,
        price:data.price,
        image:data.featured_image
    }

    // console.log(dataObject)
    notif.open({data:dataObject})
}

// openNotif.addEventListener('click', (e)=>setData(e))
