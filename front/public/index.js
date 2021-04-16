const create = ( )=> {
  event.preventDefault();

  fetch("http://localhost:3000/", {
    method: "post",
    body: JSON.stringify({
      titre: document.getElementById("titre").value,
      description: document.getElementById("description").value,
      adresse: document.getElementById("adresse").value,
      code_postal: document.getElementById("code_postal").value,
      ville: document.getElementById("ville").value,
      prix: document.getElementById("prix").value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      window.location.replace("/");
    })
    .catch((err) => {
      throw err;
    });
}

const deleteAnnonceByID = id => {
  console.log(id);

  fetch(`http://localhost:3000/${id}`, {
    method: "delete",
  })
    .then((response) => {
      console.log(response);
      window.location.replace("/");
      return;
    })
    .catch((err) => {
      throw err;
    });
}

const updateAnnonceByID = id => {
  event.preventDefault()

  fetch(`http://localhost:3000/update/${id}`, {
      method: 'put',
      body: JSON.stringify({
          titre: document.getElementById('titre').value,
          description: document.getElementById('description').value,
          adresse: document.getElementById('adresse').value,
          code_postal: document.getElementById('code_postal').value,
          ville: document.getElementById('ville').value,
          prix: document.getElementById('prix').value,
      }),
      headers: {
          'Content-Type': 'application/json',
      },
  })
      .then(() => {
          window.location.replace(`/show/${id}`)
      })
      .catch(err => {
          throw err
      })
}
