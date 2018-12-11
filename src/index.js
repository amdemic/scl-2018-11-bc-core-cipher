window.onload = () => {

    const root = document.getElementById("root");


    document.getElementById("button").addEventListener("click", () => {
        let str = document.getElementById("textarea").value;
        let offset = document.getElementById("offset").value;
        const result = window.cipher.encode(str, offset);
        root.innerHTML = result;

    });
    document.getElementById("button1").addEventListener("click", () => {
        let str = document.getElementById("textarea").value;
        let offset = document.getElementById("offset").value;
        const result = window.cipher.decode(str, offset);
        root.innerHTML = result;

    });

    document.getElementById("recargarpagina").addEventListener("click", () => {
        document.getElementById("textarea").value = "";
        document.getElementById("offset").value = "";
        document.getElementById("root").innerHTML = "";


    });


}



