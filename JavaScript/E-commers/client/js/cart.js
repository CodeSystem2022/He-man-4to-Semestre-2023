const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");
const cartBtn = document.getElementById("cart-btn");


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

        modalContainer.append(modalbody);


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

    
        };
        
 /*modal footer*/
 const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0 )
//aca tambien va tu codigo

};

cartBtn.addEventListener("click", displayCart);
const deleteCartProduct =(id) =>{
    const foundid = cart.findIndex((element)=> element.id === id )
    cart.splice(foundid ,1);
    displayCart();
    displayCartCounter();
};
