let main =document.querySelector('.main')
let url = 'https://www.alibimenstyle.uz/api/products'

async function getAPI() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    htmlga(data);
  }
  getAPI();
  
  function htmlga(data) {
    let html = '';
    data.data.map((el) => {
      html += `
          <div class="card">
          <img src=${el.image} alt="" />
          <h3>${el.name}</h3>
          </div>
          `;
      main.innerHTML = html;
    });
  }