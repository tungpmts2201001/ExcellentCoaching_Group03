function validateData() {
    popupTag = document.getElementById('modal')
    popupTag.style.display = "block"

    return false;
}
function hidePopup() {
    popupTag = document.getElementById('modal')
    modal.style.display = "none"
    window.open('admin.html')
}