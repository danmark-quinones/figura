const template = document.createElement('template')

template.innerHTML=`
    <style>
    .cart-notif-container{
        display:none;
        background:#f2f2f2;
        width:330px;
        height:auto;
        padding:10px;
        margin:10px;
        box-shadow:2px 2px 5px lightgray;
        z-index:15;
    }
    h3{
        color:goldenrod
    }
    .product-img{
        height:100px;
        width:100px;
    }
    .details{
        display:flex;
        align-items:center;
    }
    .img-container{
        margin-right:10px;
    }
    .product-name{
        color:goldenrod;
        font-weight:800;
    }
    </style>
    <div class="cart-notif-container">
        <div id="close-notif">
            <slot name="close-icon"/>
        </div>
        <div class="details">
            <div class="img-container">
                <img class="product-img"/>
            </div>
            <div>
                <p class="product-name"><slot  name="name"/></p>
                <p class="product-price"><slot name="final-computation"/></p>
            </div>
        </div>
        <slot id="view-cart" name="view-cart"/>
        
    </div>
    <div>
        <slot id="show-notif" name="show-notif"/>
    </div>
`
class CartNotification extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    viewCart(){
        console.log("HEY")
    }

    open(product){
        const notifContainer = this.shadowRoot.querySelector('.cart-notif-container')
        this.shadowRoot.querySelector('.product-name').innerText = product.data.title;
        this.shadowRoot.querySelector('.product-price').innerText = `Qty: ${product.data.qty} - Total Price : $ ${product.data.price.toLocaleString()}`;
        this.shadowRoot.querySelector('.product-img').src = product.data.image.url;
        notifContainer.style.display = 'block';
        setTimeout(()=>{
            this.close()
        },[3000])
    }

    close(){
        const notifContainer = this.shadowRoot.querySelector('.cart-notif-container')
        this.shadowRoot.querySelector('.product-name').innerText = '';
        this.shadowRoot.querySelector('.product-price').innerText = '';
        this.shadowRoot.querySelector('.product-img').src = '';
        notifContainer.style.display = 'none';
    }

    connectedCallback(){
        this.shadowRoot.querySelector('#view-cart').addEventListener('click', ()=> this.viewCart())
        this.shadowRoot.querySelector('#show-notif').addEventListener('click', ()=> this.open())
        this.shadowRoot.querySelector('#close-notif').addEventListener('click', ()=> this.close())
    }

    disconnectedCallback(){
        this.shadowRoot.querySelector('#view-cart').removeEventListener()
        this.shadowRoot.querySelector('#show-notif').removeEventListener()
        this.shadowRoot.querySelector('#close-notif').removeEventListener()
    }
}

window.customElements.define('cart-notification' , CartNotification)