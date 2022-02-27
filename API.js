const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data =>  displayData(data))
}
const displayData = (photos) =>{
    const main = document.getElementById('main')
    const first10 = photos.slice(0,11)
    for(const photo of first10){
       const div = document.createElement('div')
       console.log(photo);
       div.classList.add('col-lg-4')
       div.innerHTML = `
       <div  class="card" style="width: 18rem;">
        <img src=" ${photo.thumbnailUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${photo.title}</h5>
          <p class="card-text">id : ${photo.id}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
       `
       main.appendChild(div)
        
        
    }
}

