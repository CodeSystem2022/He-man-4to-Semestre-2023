const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");


const displayCart = () => {
    //modal Header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("vid");
    modalClose.innerText = "❌"
    modalClose.className = "modal-close";
    modalHeader.append(modalClose)
}