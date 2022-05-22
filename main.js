document.addEventListener("DOMContentLoaded", () => {

    const newForm = document.querySelector('form')
   

   return fetch("https://ghibliapi.herokuapp.com/films")
    .then(response=>response.json())
    .then(data=>{


        let foundMovie;


        newForm.addEventListener('submit',(event)=>
        {
            event.preventDefault()
            
           const target = event.target.textBox.value
           
           
           for(const element of data){
               
               if(target.toLowerCase().replace(/\s/g, '') === element.title.toLowerCase().replace(/\s/g, ''))
               {

               foundMovie = element
               
               }
           }
           if (foundMovie !== null) {
            const p = document.createElement('p')
            const p2 = document.createElement('p')
            p2.textContent = foundMovie?.title
            p.textContent = foundMovie?.description
            document.body.appendChild(p2)
            document.body.appendChild(p)
            }
        
           foundMovie = null
        
        })

      
    })
  
})






















