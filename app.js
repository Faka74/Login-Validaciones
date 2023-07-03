let bordeInput = document.querySelector(".inputEstilo")
let bordeInputDos = document.getElementById("inputDos")
let infoOculta = document.querySelector(".informacionOculta")
let inputEmailOculto = document.getElementById("inputEmailOculto")
let botonCancelar = document.getElementById("clickParrafoOculto")
let containerFormulario = document.getElementById("containerForm")
let olvidasteConstraseña = document.getElementById("clickParrafo")
let crearCuenta = document.getElementById("crearCuenta")
let contenedorRegistrar = document.querySelector(".containerRegistrar")
let crearCuentaContainer = document.getElementById("crearCuentaContainer")
let crearCuentaVolver = document.getElementById("crearCuentaVolver")
let btnCrearCuenta = document.getElementById("btnCrearCuentaDos")
let bordeFocus1 = document.getElementById("bordeFocus1")
let bordeFocus2 = document.getElementById("bordeFocus2")
let bordeFocus3 = document.getElementById("bordeFocus3")
let bordeFocus4 = document.getElementById("bordeFocus4")

bordeFocus1.addEventListener("focus", () => {
    event.target.style.border = "2px solid black"
})

bordeFocus1.addEventListener("blur", () => {
    event.target.style.border = "none"
})

bordeFocus2.addEventListener("focus", () => {
    event.target.style.border = "2px solid black"
})

bordeFocus2.addEventListener("blur", () => {
    event.target.style.border = "none"
})

bordeFocus3.addEventListener("focus", () => {
    event.target.style.border = "2px solid black"
})

bordeFocus3.addEventListener("blur", () => {
    event.target.style.border = "none"
})

bordeFocus4.addEventListener("focus", () => {
    event.target.style.border = "2px solid black"
})

bordeFocus4.addEventListener("blur", () => {
    event.target.style.border = "none"
})

bordeInput.addEventListener("focus", () => {
    event.target.style.border = "2px solid black"
})

bordeInput.addEventListener("blur", () => {
    event.target.style.border = "none"
})

bordeInputDos.addEventListener("focus", () => {
    event.target.style.border = "2px solid black"
})

bordeInputDos.addEventListener("blur", () => {
    event.target.style.border = "none"
})

inputEmailOculto.addEventListener("focus", () => {
    event.target.style.border = "2px solid black"
})
inputEmailOculto.addEventListener("blur", () => {
    event.target.style.border = "none"
})

olvidasteConstraseña.addEventListener("click", () => {
    infoOculta.style.display = "block"
    containerFormulario.style.display = "none"
    crearCuentaContainer.style.display = "none"
})

botonCancelar.addEventListener("click", () => {
    infoOculta.style.display = "none"
    containerFormulario.style.display = "block"
    crearCuentaContainer.style.display = "block"
})
const enviarCodigo = document.getElementById("clickParrafoOcultoDos")
enviarCodigo.addEventListener("click", () => {
    const enviarCodigo = document.getElementById("clickParrafoOcultoDos").value
    const inputEmailOculto = document.getElementById("inputEmailOculto").value

    if (inputEmailOculto == "") {
        swal({
            icon: "error",
            text: "Completa el campo con tu correo electronico asi te enviaremos un codigo."
        });
    }
    else if (inputEmailOculto != "") {
        swal({
            icon: "success",
            text: "El codigo ha sido enviado correctamente."
        });
    }
})

crearCuenta.addEventListener("click", () => {
    contenedorRegistrar.style.display = "flex"
    containerFormulario.style.display = "none"
    crearCuenta.style.display = "none"
    crearCuentaVolver.style.display = "block"
})




// -------------Validaciones-------------

const botonSubmit = document.getElementById("btnIniciarSesion")
botonSubmit.addEventListener("click", () => {
    const bordeInput = document.querySelector(".inputEstilo").value
    const bordeInputDos = document.getElementById("inputDos").value
    localStorage.setItem("Email", bordeInput)
    localStorage.setItem("Contraseña", bordeInputDos)
    
    if (bordeInput == "" && bordeInputDos == "") {
        swal({
            icon: "error",
            text: "Debes rellenar los campos obligatoriamente."
        });
    }
    else if (bordeInput == "" && bordeInputDos != "") {
        swal({
            icon: "error",
            text: "Debes rellenar el campo faltante con tu correo electronico"
        });
    }
    else if (bordeInput != "" && bordeInputDos == "") {
        swal({
            icon: "error",
            text: "Debes rellenar el campo faltante con tu contraseña."
        });
    }
    else if(bordeInput != "" && bordeInputDos != ""){
        botonSubmit.innerHTML = `<a class = "textDecoration" href="./PaginaPrincipal/main.html">Iniciar sesion</a>`
    }
}
)


btnCrearCuenta.addEventListener("click", () => {
    const bordeFocus1 = document.getElementById("bordeFocus1").value
    const bordeFocus2 = document.getElementById("bordeFocus2").value
    const bordeFocus3 = document.getElementById("bordeFocus3").value
    const bordeFocus4 = document.getElementById("bordeFocus4").value

  if(bordeFocus1 == "" || bordeFocus2 == "" || bordeFocus3 == "" || bordeFocus4 == ""){
    swal({
        icon: "error",
        text: "Faltan rellenar campos obligatorios."
    });
  }
  else if (bordeFocus1 != "" && bordeFocus2 != "" && bordeFocus3 != "" && bordeFocus4 != ""){
    swal({
        icon: "success",
        text: "Cuenta creada exitosamente."
    });
  }
})

