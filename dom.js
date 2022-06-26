let i=1 //for variable id names
let delbuton=document.querySelector(".notes");  //selecting the entire notes div
    delbuton.addEventListener('click',deleteNote) 

let addbtn=document.getElementById("addNote") //selecting the Add Note button
    addbtn.addEventListener('click',framesa)

let icon=document.querySelector(".icons")
icon.addEventListener('click',clickedOnIcon)
function clickedOnIcon(e){
console.log(e.target)
if(e.target.classList.contains('refreshbtn')){
    window.location.reload();
}
else if(e.target.classList.contains('viewbtn')){
    if(e.target.innerText=='view_stream'){ //change to grid view
      e.target.innerText='grid_view'
      let notes=document.querySelector('.notes')
      notes.style.gridTemplateColumns='1fr 1fr 1fr' ;

    }
    else{
    e.target.innerText='view_stream'
    let notes=document.querySelector('.notes')
    notes.style.gridTemplateColumns='1fr';

}

}
}

function deleteNote(e){
   if( e.target.classList.contains('deleteNote'))
        if(confirm("Are you sure you want to delete this item?"))
            e.target.parentNode.remove()
}

function framesa(event) {
    event.preventDefault() //to prevent default action when clicking on submit button
    //saving the entered values
     let title=document.getElementById('title').value;
    let content=document.getElementById('content').value

    //erasing the entered value
    document.getElementById('title').value=''
    document.getElementById('content').value=''
    
    let notesection=document.getElementById("individualnote1")  //selecting a already made note to clone it
    let newNote=notesection.cloneNode('true')

    newNote.querySelector('h2').innerText=title
    newNote.querySelector('p').innerText=content

    newNote.id=`indiviualnote${++i}`
    newNote.querySelector('.deleteNote').id=`deleteNote${i}`
    newNote.style.display=''
    console.log(newNote)
    document.querySelector('.notes').prepend(newNote)

};