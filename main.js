document.addEventListener("DOMContentLoaded",()=>{

    const newForm = document.getElementById('form')
    newForm.addEventListener('submit',(event)=>
    {
        event.preventDefault();
        printResult(event)
        
    })



    function printResult(element){
        const p = document.createElement("p")
        const chosenFilm = document.createElement('ul')
        p.textContent = `${element.target.text.value}`
        chosenFilm.textCotent = 'List of Chosen Films'
        p.appendChild(chosenFilm)
        document.body.appendChild(p)
    }

    


    
    return fetch("https://ghibliapi.herokuapp.com/films")
    .then(response=>response.json())
    .then(data =>
        {
            const list = document.createElement('li')
            list.innerHTMl = data.list
            document.body.appendChild(list)
        })

        function clearResult(event){
            event.target.parentNode.remove()
        }
















})