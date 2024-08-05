/* Usando apenas o then e o catch, sem o async e o await*/
/*function carregarImagem() {
  var url = "https://dog.ceo/api/breeds/image/random";
  fetch(url, {
    method: "get",
  })
    .then(function (response) {
      response.json().then(function (data) {
        console.log("Resultado da Requisição:" + data.message);
        var imgDog = document.getElementById("img_dog");
        imgDog.src = data.message;
      });
    })
    .catch(function (err) {
      console.error("O seguinte erro ocorreu durante a requisição:" + err);
    });
}*/

/*Usando o async e o await */
/*Usando o async e o await, podemos codar um código assíncrono de forma síncrona, com um bloco de código depois do outro.  */
async function carregarImagem() {
  try {
    var url = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(url, { method: "get" });
    /*vamos transformar a resposta da requisição em um arquivo json */
    const data = await response.json();
    /*Aqui vamos colocar no console.log a resposta da requisição, inserindo o data.massage, que é a mensagem com as informações, com os dados da resposta da requisição.  */
    console.log("Resultado da Requisição:" + data.message);
    /*vamos pegar o id que colocamos no código html e vamos inserir a resposta da requisição nele, no atributo src dele.  */
    var imgDog = document.getElementById("img_dog");
    imgDog.src = data.message;
    /*Aqui vamos tratar o erro se houver, com o catch e colocando uma mensagem de erro junto com o erro que for aparecer.*/
  } catch (err) {
    console.error("O seguinte erro ocorreu durante a requisição:" + err);
  }
}
