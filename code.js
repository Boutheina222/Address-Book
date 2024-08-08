const form = document.getElementById('Address-form');
const download = document.getElementById('Download');

let fname ='';
let lname ='';
let number ='';

form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form) ;
    fname = data.get('first-name');
    lname = data.get('last-name');
    number = data.get('phone-number');
    update_display();
    
    

})

    
function update_display(){
    const contact = document.createElement("div");
    contact.id = 'contact-info';

    const phone_number = document.createElement("h4");
    phone_number.innerText = number; 
    phone_number.id = "phone";
    contact.appendChild(phone_number);

    const first_name = document.createElement("h4");
    first_name.innerText = fname; 
    first_name.id = "fname";
    contact.appendChild(first_name);

    const last_name = document.createElement("h4");
    last_name.innerText = lname; 
    last_name.id ="lname"
    contact.appendChild(last_name)

    document.body.appendChild(contact);
}
download.addEventListener('click',function (){
    const contact_info = ` First Name : ${fname} \n Last Name: ${lname} \n Phone Number: ${number}\n ------------------------------------------------`
    const blob = new Blob([contact_info], { type: 'text/plain' });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact-info.txt';
    a.click();

    // Clean up
    URL.revokeObjectURL(url);});