
  
    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault(); 
      const role = document.getElementById("role").value;

      if (role === "boss") {
        window.location.href = "pages/boss.html";
      } else if (role === "employer") {
        window.location.href = "pages/employer.html";
      } else if (role === "customer") {
        window.location.href = "pages/customer.html";
      }
      else {
        alert("Invalid role selected.");
      }
    });
  