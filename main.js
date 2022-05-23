document.addEventListener("DOMContentLoaded", () => {

    const newForm = document.querySelector('form')
    const notLike = '🤍'
    const doLike = '🧡'
    const button = document.getElementById('likes')
    button.addEventListener('click',likeButton)
   
  




   return fetch("https://ghibliapi.herokuapp.com/films")
    .then(response=>response.json())
    .then(data=>
        {
        let foundMovie = null;

        newForm.addEventListener('submit',(event)=>
        {
            event.preventDefault()
            
           const target = event.target.textBox.value
           const searchHistory = document.getElementById('list1')
           const p = document.createElement("p")
            p.textContent =`${target}`
            searchHistory.appendChild(p)
            

           for(const element of data){
               
               if(target.toLowerCase().replace(/\s/g, '') === element.title.toLowerCase().replace(/\s/g, ''))
               {
                
               foundMovie = element
               
               }
           }
           if (foundMovie !== null) {

            
            


            const originalTitle = document.getElementById('originaltitle')
            const releaseDate = document.getElementById('releasedate')
            const director = document.getElementById('director')
            const descriptions = document.getElementById('descriptions')
            const titles = document.getElementById('card-title')
            const images = document.getElementById('image')
            
            
            releaseDate.textContent = foundMovie?.release_date
            originalTitle.textContent = foundMovie?.original_title;
            director.textContent = foundMovie?.director;
            descriptions.textContent = foundMovie?.description;
            images.src = foundMovie?.image;
            titles.textContent = foundMovie?.title;
          
            

            
           } else {
               window.alert("wrong choice")
           }
        
           foundMovie = null
        
        })
        
    })
    .catch(function(error){
        windows.alert("NO")
    })
   
    

    function likeButton(like)
    {
        let result = like.target
        if(result.textContent === notLike){

            result.textContent = doLike
        } else {result. textContent = notLike}
    }
   
  
})






















