export function FormValidation() {



  const isEmail = () => {
    let mail = document.getElementById("email").value;
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-zA-Z]{2,4}$/;
    if (regex.test(mail)) {
      document.getElementById("email").style.border = "2px solid green";
      return true;
    } else {
      document.getElementById("email").style.border = "2px solid red";
      return false;
    }
  };

  const isName = () => {
    let name = document.getElementById("name").value;
    let regex = /^[a-zA-Z0-9._-]{2,}$/;
    if (regex.test(name)) {
      document.getElementById("name").style.border = "2px solid green";
      return true;
    } else {
      document.getElementById("name").style.border = "2px solid red";
      return false;
    }
  };

  const isMessage = () => {
    let message = document.getElementById("message").value;
    let regex = /^[a-zA-Z0-9._-]{2,}$/;
    if (regex.test(message)) {
      document.getElementById("message").style.border = "2px solid green";
      return true;
    } else {
      document.getElementById("message").style.border = "2px solid red";
      return false;
    }

  };
}
