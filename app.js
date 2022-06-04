const fname = document.getElementById('fname')
console.log(fname)

const sname = document.getElementById('sname')
console.log(sname)

const eMail = document.getElementById('email')
console.log(eMail)


const BtnAdd = document.querySelector('.submit');
console.log(BtnAdd);


BtnAdd.addEventListener("click", AddNew);

    function AddNew() {
     
    console.log("add");
        for(let i=0; i<3;i++){
            let newID = `div-created${i}`
            const newDiv = document.createElement('div');
        
            newDiv.setAttribute("id",newID)
            document.body.appendChild(newDiv);
            
            
        }
        for(let i=0; i<3;i++){
            let newID = `div-created${i}`;
            let newIDP = `p-created${i}`;  
            const newH = document.createElement('p');
            newH.setAttribute("id",newIDP);
            newElement = document.getElementById(newID).appendChild(newH);
            
            if(i==0){
                document.getElementById(newIDP).innerHTML = `Name ${fname.value}`;
                console.log(fname)
            }else if(i==1){
                document.getElementById(newIDP).innerHTML =  `Surname : ${sname.value}`;

            }else{
                document.getElementById(newIDP).innerHTML =  `Email : ${eMail.value}`;;

            }

        }
        BtnAdd.removeEventListener("click", AddNew);
  }

