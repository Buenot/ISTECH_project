document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);


document.querySelector("#servico1-sim").addEventListener("change", atualizarPreco)
document.querySelector("#servico2-sim").addEventListener("change", atualizarPreco)
document.querySelector("#servico3-sim").addEventListener("change", atualizarPreco)
document.querySelector("#servico4-sim").addEventListener("change", atualizarPreco)

document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco(){

    const incluiServico1 = document.querySelector("#servico1-sim").checked
    const incluiServico2 = document.querySelector("#servico2-sim").checked
    const incluiServico3 = document.querySelector("#servico3-sim").checked
    const incluiServico4 = document.querySelector("#servico4-sim").checked
    

    const prazo = document.querySelector("#prazo").value
    if (incluiServico1) preco = 400
    if (incluiServico2) preco = 750
    if (incluiServico3) preco = 800
    if (incluiServico4) preco = 1300
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia
   
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}
