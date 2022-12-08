const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      //const input = event.target.children[1].value;

      const input = document.querySelector('input#searchByID');
  
      //console.log(input.value);
  
      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(data => {
        updateDataFromAPI(data);
      });
    });
  }

  function updateDataFromAPI(data) {
    const h3 = document.querySelector("section#movieDetails h4");
    const p = document.querySelector("section#movieDetails p");

    h3.textContent = data.title
    p.textContent = data.summary

  }
  
  document.addEventListener('DOMContentLoaded', init);