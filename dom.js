let i=1 //for variable id names

let delbuton=document.querySelector(".notes");  //selecting the entire notes div
    delbuton.addEventListener('click',deleteNote) 

let addbtn=document.getElementById("addNote") //selecting the Add Note button
    addbtn.addEventListener('click',addbtnEventHandler)

let icon=document.querySelector(".icons")
icon.addEventListener('click',clickedOnIcon)

newEvent('Other features','click on the change theme button to change dark/light mode');
// for(let i=0;i<1000;i++)
newEvent('Welcome','To add a note enter title and content and click the "Add Note" button and to delete a note click on delete button in note ');

function clickedOnIcon(e){
    console.log(e.target)
    if(e.target.classList.contains('changeTheme')){ 
        if(e.target.innerText=='dark_mode'){ 
            e.target.innerText='light_mode'
            toggleDarkMode()
        }
        else{
            e.target.innerText='dark_mode'
            toggleDarkMode()
        }
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
   if( e.target.classList.contains('deleteNote')){
        // e.target.parentNode.parentNode.style.transition="all 1000ms";    // try to scale the note down in a transition while deleting
        // e.target.parentNode.parentNode.style.transform="scale(0.4)";  

        e.target.parentNode.parentNode.remove()   }                      // instead of changing this everytime there is a change in the structure of the notes div how can we make it generic to select the specific parent                      
}

function addbtnEventHandler(e){         // instead of having this function can we have a single funtion to filter b/w js added and user added notes
    e.preventDefault();
    let title=document.getElementById('title').value;
   let content=document.getElementById('content').value;
    newEvent(title,content);
}

function newEvent(title,content) {

if(content!='')    {
    //erasing the entered value
    document.getElementById('title').value=''
    document.getElementById('content').value=''
    
    let notesection=document.getElementById("individualnote1")  //selecting a already made note to clone it
    let newNote=notesection.cloneNode('true')

    newNote.querySelector('.noteTitle').innerText=title
    newNote.querySelector('.noteContent').innerText=content

    newNote.id=`indiviualnote${++i}`
    newNote.querySelector('.deleteNote').id=`deleteNote${i}`
    newNote.style.display=''
    console.log(newNote)
    document.querySelector('.notes').prepend(newNote)}
}

function toggleDarkMode(){
    let arrayOfClasses=['body','navbar','burgerbutton','textlogo','search','icons','form-title','form-content','form-btn','note','deleteNote','theme']
    for(let classItem of arrayOfClasses)
    {
        let items= document.querySelectorAll(`.${classItem}`)
        // .classList.toggle('dark');
        for(let item of items){
            item.classList.toggle('dark')
        }
    }
}