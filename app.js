const fname = document.getElementById('fname')

const sname = document.getElementById('sname')

const eMail = document.getElementById('email')

const BtnAdd = document.querySelector('.submit');

BtnAdd.addEventListener("click", AddNew);

    function AddNew() {
        const clientinfo ={
            fname :fname.value,
            sname :sname.value,
            eMail :eMail.value
        }   
        
     
    
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
                document.getElementById(newIDP).innerHTML = `Name : ${clientinfo.fname}`;
                console.log(fname)
            }else if(i==1){
                document.getElementById(newIDP).innerHTML =  `Surname : ${clientinfo.sname}`;

            }else{
                document.getElementById(newIDP).innerHTML =  `Email : ${clientinfo.eMail}}`;;

            }

        }
        BtnAdd.removeEventListener("click", AddNew);
  }

