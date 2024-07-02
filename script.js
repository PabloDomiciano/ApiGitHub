async function consultarRepositorio() {
  const nomeUsuario = document.getElementById("inputNomeUsuario").value;

  const listaRepositorios = document.getElementById("listaRepositorios");
  listaRepositorios.innerText = "";

  const status = document.getElementById("status");

  if (!nomeUsuario) {
    alert("Informar o nome do usuário!");
    return;
  }

  await new Promise((resolve) => setTimeout(resolve, 500));
  status.style.display = "inline";

  const url = `https://api.github.com/users/${nomeUsuario}/repos`;

  try {
    const resposta = await fetch(url);
    console.log("antes a promisse");
    /*resposta.then((res) => {
      console.log(res);
    });*/
    if (!resposta.ok) {
      alert("Erro ao realizar a consulta!");
      status.style.display = "none";
      return;
    }

    const repositorios = await resposta.json();

    repositorios.forEach((element) => {
      const itemLista = document.createElement("li");
      itemLista.textContent = element.name;
      listaRepositorios.appendChild(itemLista);
    });
    status.style.display = "none";

    console.log("após a promisse");
  } catch (error) {
  }
}
