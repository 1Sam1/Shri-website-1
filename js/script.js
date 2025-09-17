const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const menuBtn = document.getElementById("menu-btn");

menuBtn.onclick = function() {
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        content.style.marginLeft = "0";
    } else {
        sidebar.style.width = "250px";
        content.style.marginLeft = "250px";
    }
}
