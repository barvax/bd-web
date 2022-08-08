let counter = 0;
let boxObject = {
    id:"placeHolder",

    title:"placeHolder",
    update(){
      
      let z =  document.getElementById("h1Title"+(this.id));
      z.innerHTML=this.title;
      
    }
}

let arr = []
function CreateBox(r){
    let root = document.getElementById(r);
    let box = document.createElement("div");
    box.classList.add("box");
    box.id = "box"+counter;
    box.boxObject = Object.create(boxObject) ;
    box.boxObject.id = counter;
    box.boxObject.posAtArr = arr.length;
    arr.push(box.boxObject);
    root.append(box);
   
    let h1Title = document.createElement("h1");
    h1Title.id = 'h1Title'+counter;

    let nextBox= document.createElement("img");
   
    nextBox.src = "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg";
    nextBox.classList.add('pic');
    box.append(nextBox);
    nextBox.addEventListener("click",()=>{
        EnterBoxAtPos(box.id)
    })
   
    box.append(h1Title);
    h1Title.innerHTML = box.boxObject.id;

h1Title.addEventListener("click", ()=>{
    delete arr[box.boxObject.id];
     document.getElementById(box.id ).remove();
    
     console.log(arr)
}

);
counter++;
}

function EnterBoxAtPos(r){
    let root = document.getElementById(r);
    let box = document.createElement("div");
    box.classList.add("box");
    box.id = "box"+counter;
    box.boxObject = Object.create(boxObject) ;
    box.boxObject.id = counter;
    box.boxObject.posAtArr = arr.length;
    arr.push(box.boxObject);
    root.insertAdjacentElement('afterend',box);
    let h1Title = document.createElement("h1");
    h1Title.id = 'h1Title'+counter;
    let nextBox= document.createElement("img");
    nextBox.src = "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg";
    nextBox.classList.add('pic');
    box.append(nextBox);
    nextBox.addEventListener("click",()=>{
        EnterBoxAtPos(box.id)
    })
    box.append(h1Title);
    h1Title.innerHTML = box.boxObject.id;
   
   
  

h1Title.addEventListener("click", ()=>{
    delete arr[box.boxObject.id];
     document.getElementById(box.id ).remove();
    
     console.log(arr)
}

);
counter++;
}









