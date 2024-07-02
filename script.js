async function consultarRepositorio() {
  const nomeUsuario = document.getElementById("inputNomeUsuario").value;

  const listaRepositorios = document.getElementById("listaRepositorios");
  listaRepositorios.innerText = "";

  const status = document.getElementById("status");

  if (!nomeUsuario) {
    alert("Informar o nome do usuário!");
    return;
  }

  const url = `https://api.github.com/users/${nomeUsuario}/repos`;

  await new Promise((resolve) => setTimeout(resolve, 500));
  status.style.display = "inline";

  try {
    const resposta = await fetch(url);
    status.style.display = "none";

    if (!resposta.ok) {
      status.style.display = "none";
      alert("Erro ao realizar a consulta!");
      return;
    }

    const repositorios = await resposta.json();

    repositorios.forEach((element) => {
      const itemLista = document.createElement("li");
      itemLista.textContent = element.name;
      listaRepositorios.appendChild(itemLista);
    });
    status.style.display = "none";
  } catch (error) {}
}
