var namePattern = /^[A-Za-z\s'-]+$/;
var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var PhoneNumberPattern = /^(\+92|92|0)?[1-9]\d{9}$/;


function validateValues() {

    var form = document.getElementById("frm");
    const name = document.getElementById("name").value;
    const fname = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const no = document.getElementById("no").value;
    const DOB = document.getElementById("DOB").value;
    const curDate = new Date(DOB);
    const date1 = new Date().getFullYear();
    console.log(date1);
    
    if(namePattern.test(name)){
        console.log("success")
    }else {
        window.alert("Please Enter Valid Name")
    }

    if(namePattern.test(fname)){
        console.log("fname success")
    }else {
        window.alert("Please Enter Valid Father Name")
    }

    if(emailPattern.test(email)){
        console.log("email success")
    }else{
        window.alert("Please Enter Valid Email Address")
    }

    if(PhoneNumberPattern.test(no)){
        console.log("number success")
    }else{
        window.alert("Please Enter Valid Phone Number")
    }

    if(date1 > curDate.getFullYear()){

        console.log("date okay")
        
    }else{
        window.alert("Please Enter Valid Date of Birth")
    }
    
        
    if(namePattern.test(name) && namePattern.test(fname) && emailPattern.test(email) && PhoneNumberPattern.test(no) && date1 > curDate.getFullYear()){
        window.alert("name" + name + "\nfather name" + fname + "\nemail" + email + "\nphone number" + no + "\nDate of Birth" + DOB);
        form.submit();
    }
    else{
        window.alert("fail!")
    }
}