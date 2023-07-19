function validation(event) {
    var p1 = new Promise((resolve, reject) => {
        var email = document.querySelector("#email").value;
        if (!email.includes('@gmail.com')) {
            reject(document.getElementById("error").innerHTML = "Please Match The Format of (example@gmail.com)")
        }
        else {
            resolve(document.getElementById("error").innerHTML = "");
        }

    })

    //
    var p2 = new Promise((resolve, reject) => {

        var password = document.querySelector("#password").value;

        if (!password.includes('@') && !password.includes('#') && !password.includes('*')) {
            reject(document.getElementById("error1").innerHTML = "Please Includes Special Characters In Password(@,#,*)");
        }

        else if (password.length <= 8) {
            reject(document.getElementById("error1").innerHTML = "Ohh..No Your Password is too short (Atleast 8 char req)");
        }

        else {
            resolve(document.getElementById("error1").innerHTML = "");

        }
    })

    //
    var p3 = new Promise((resolve, reject) => {

        var profile = document.querySelector("#profile").value;
        if (profile !== "") {
            resolve(document.getElementById("error2").innerHTML = "This Will Appear On Your Profile As Profile Name");
            resolve(document.getElementById("error2").style.color = "green")
        }
        else {
            reject(document.getElementById("error2").innerHTML = "Please Enter Profile Name")
        }
    })

    //
    var p4 = new Promise((resolve, reject) => {

        var year = parseInt(document.querySelector("#year").value);
        if (year < '1920' || year > '2022') {
            reject(document.getElementById("error3").innerHTML = "Please Enter Valid Year");
        }
        else {
            resolve(document.getElementById("error3").innerHTML = "");

        }
    })

    /*let Promise_all = Promise.allSettled([p1, p2, p3, p4])

    Promise_all.then((value) => {
        console.log(value);
        
    })

    let Promise_all1=Promise.all([p1,p2,p3,p4])
    Promise_all.then((value) => {
        console.log(value);
        if(Promise_all1==Promise_all){
            document.getElementById("finalremark").innerHTML="All Done"
        }
    })*/

}