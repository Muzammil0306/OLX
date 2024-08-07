
// let getlog = document.getElementById("signin")
// getlog = document.addEventListener("click", async () => 
  async function signin()
  {
    const { value: formValues } = await Swal.fire({
    showCloseButton: true,
      title: "Login into your OLX account",
      imageUrl: "https://i.pinimg.com/originals/76/a0/55/76a0559e38785778f7204968d466a98b.png",
      imageWidth: 120,
      imageHeight: 70,
      imageAlt: "Custom image",
      html: `
        
        <lable>	&nbsp; email	&nbsp;	&nbsp;	&nbsp;	</lable>
        <input type=" email" id="swal-input1" class="swal2-input">
        <lable>password</lable>
        <input type="password" id="swal-input2" class="swal2-input">
        <br><br>
        <hr>
        <br>
        <button id="google" > <img width="30px" src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png" alt=""> &nbsp; login with google </button>
        <br><br>
        <a id="gotosignup" onclick="signupuser()" href="#" > New to OLX? Create an account </a>
      `,

      focusConfirm: false,
      
    });

    let getemail = document.getElementById("swal-input1")
    let getpassword = document.getElementById("swal-input2")

    if (getemail.value == "admin" && getpassword.value == "admin") {
      location.href = "admin.html";
    } else {
      location.href ="index.html";
    }

  }

    // let signup = document.querySelector("#gotosignup");
    // signup.addEventListener("click", async()=>
  
 async function signupuser()
 {
      
      const { value: formValues } = await Swal.fire({
        showCloseButton: true,
        title: "Create a new OLX account",
        imageUrl: "https://i.pinimg.com/originals/76/a0/55/76a0559e38785778f7204968d466a98b.png",
        imageWidth: 120,
        imageHeight: 70,
        imageAlt: "Custom image",
        html: `
          <lable>user name	</lable>
          <input type="text" id="Singup-input1" class="swal2-input">
          <lable>	&nbsp; email	&nbsp;	&nbsp;	&nbsp;	</lable>
          <input type=" email" id="Singup-input2" class="swal2-input">
          <lable>password</lable>
          <input type="password" id="Singup-input3" class="swal2-input">
          <br><br>
          <hr>
          <br>
          <button id="google" > <img width="30px" src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png" alt=""> &nbsp; Join with google </button>
        
    
        `,
        
        focusConfirm: false,
    
        // preConfirm: () => {
        //   return [
        //     ]
        //   },
          
        
      })

        let username = document.getElementById("Singup-input1").value;
        let email = document.getElementById("Singup-input2").value;
        let password = document.getElementById("Singup-input3").value;
      
    
      if (formValues) {
        
        const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully"
    });
    
    
        // console.log(data)
        localStorage.setItem("username",username),
        localStorage.setItem("email", email),
        localStorage.setItem("password",password)
      }
      
    }
    
    
    // );
    
    
    
    
    
    // )



    let allProducts = [];

// let modalproductBtn = document.getElementById("modalproduct");

// modalproductBtn.addEventListener("click",()=> 
  function addproduct()
  {
  let getproname = document.querySelector("#proname");
  let getproprice = document.querySelector("#proprice");
  let getproImage = document.querySelector("#proimage");
  let obj ={
    name: getproname. value,
    price: getproprice.value,
    img: getproImage.value,
  };
  allProducts.push(obj);
  localStorage.setItem("products",JSON.stringify(allProducts));
}
// );

let pro = document.getElementById("pro");
      let a = localStorage.getItem("products");
      let convert = JSON.parse(a);

      // console.Log(convert);
      if (convert){
        convert.forEach((data) => {
          pro.innerHTML += `<div class="card" style="width: 18rem;">
      <img width="200"src=${data.img} class="card-img-top" alt="..."><center>
      <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text">${data.price} </p>
      <button onclick='addToCart(this)' class='btn btn-success'>Add to cart</button></center>
      </div>
    </div>`;
  
          });
  
          let addToCart = (id) => {
            console. log("id arahi hai", id.parentNode.childNodes[3].textcontent);
            document.getElementById(
              "xyz"
            ).innerHTML +=`<div>${id.parentNode.childNodes[3].textContent}</div>`;
          };
      }

    
let logoutbtn = document.getElementById("logout");

if (logoutbtn){
  logoutbtn.addEventListener("click", ()=> {
    location.href = "index.html";
  });
}


