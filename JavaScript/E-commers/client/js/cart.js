const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");
const cartBtn = document.getElementById("cart-btn");

const cartCounter = document.getElementById("cart-counter");


const displayCart = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";
    //modal Header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("vid");
    modalClose.innerText = "❌"
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    modalClose.addEventListener("click", ()=> {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    })

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "cart";
    modalTitle.className = "modal-title";
    modalHeader.append("modalTitle");

    modalContainer.append(modalHeader);

    //modal body
    if(cart.length > 0){
    
            cart.forEach((product) => {
                const modalbody = document.createElement("div");
                modalbody.className = "modal-body"
                modalbody.innerHTML = `
                <div class="product">
                        <img class="product-img" src="${product.img}" />
                        <div class="product-info">
                            <h4>${product.productName}</h4>
                        </div>
                    <div class="quantity">
                        <span class="quantity-btn-decrese">-</span>
                        <span class="quantity-input">${product.quanty}</span>
                        <span class="quantity-btn-increse>+</span>
                    </div>
                        <div class="price">${product.price * product.quanty} $</div>
                        <div class="delete-product">❌</div>
                



                </div>
                    
                `;

                modalContainer.append(modal)


            });


            //aca va tu codigo...
            
                    const decrese = modalbody.querySelector(".quantity-btn-decrese")
                    decrese.addEventListener("click", ()=>{
                        if(product.quanty !== 1){
                            product.quanty--;
                            displayCart();
                        }
                            displayCartCounter();
                    });

                    //aca va tu codigo 

                    //delete
                    const deleteProduct = modalbody.querySelector(".delete-product");
            
                    deleteProduct.addEventListener("click",()=> {
                        deleteCartProduct(product.id)
                    });
                
        /*modal footer*/
        const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0 );
        const modalFooter = document.createElement("div")
        modalFooter.className="modal-footer"
        modalFooter.innerHTML = `
        <div class="total-price">Total:)</div>
        <div class="total-price">Total: $${total}</div>
        <button class="btn-primary" id="checkout-btn"> go to checkout</button>
        <div id="button-checkout"></div>
        `;
     modalContainer.append(modalFooter);
     // mp;
     const mercadopago = new MercadoPago("public_key",{
         locale:"es-AR", // The most common are: "pt-BR, "es-AR" and "en-US"
     });
        `;

        modalContainer.append(modalFooter);
    }else{
        const modalText = document.createElement("h2");
        modalText.className = "modal-body";
        modalText.innerText = "your cart is empty";
        modalContainer.append(modalText);
    }

 
//aca tambien va tu codigo

};

cartBtn.addEventListener("click", displayCart);
const deleteCartProduct =(id) =>{
    const foundid = cart.findIndex((element)=> element.id === id )
    cart.splice(foundid ,1);
    displayCart();
    displayCartCounter();
};

const displayCartCounter =()=> {
    const cartLength = cart.reduce((acc, el) => acc + el.quanty, 0 )
    if(cartLength>0){
        cartCounter.style.display = "block";
        cartCounter.innerText = cartLength;    
    }else{
        cartCounter.style.display = "none";
    }
    
}