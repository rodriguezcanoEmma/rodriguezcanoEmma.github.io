function toggleTabla() {

    var tabla = document.getElementById("miTabla");

    if (tabla.style.display === "none") {
        tabla.style.display = "table";
    } else {
        tabla.style.display = "none";
    }

}