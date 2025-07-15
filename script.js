document.addEventListener('DOMContentLoaded', () => {
  const regForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  if (regForm) {
    regForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const phone = document.getElementById('phone').value;
      const gender = document.querySelector('input[name="gender"]:checked')?.value;
      const dob = document.getElementById('dob').value;
      const address = document.getElementById('address').value;
      const city = document.getElementById('city').value;
      const skills = [...document.querySelectorAll('.skills:checked')].map(el => el.value);
      const terms = document.getElementById('terms').checked;
      const profilePic = document.getElementById('profilePic').files[0];

      if (fullName.length < 3 || /\d/.test(fullName) || /(.)\1\1/.test(fullName)) return alert("Invalid name");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert("Invalid email");
      if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) return alert("Weak password");
      if (password !== confirmPassword) return alert("Passwords do not match");
      if (!/^\d{10}$/.test(phone)) return alert("Invalid phone");
      if (!gender) return alert("Select gender");
      if (!dob || new Date().getFullYear() - new Date(dob).getFullYear() < 18) return alert("Must be 18+");
      if (address.length < 10) return alert("Address too short");
      if (!city) return alert("Select city");
      if (!skills.length) return alert("Select at least one skill");
      if (!terms) return alert("Accept terms");

      const reader = new FileReader();
      reader.onload = function () {
        const user = {
          fullName, email, password, phone, gender, dob, address, city, skills,
          profilePic: reader.result
        };
        localStorage.setItem('user', JSON.stringify(user));
        alert("Registered successfully!");
        window.location.href = "login.html";
      };
      if (profilePic) {
        reader.readAsDataURL(profilePic);
      } else {
        alert("Upload profile picture");
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        sessionStorage.setItem("loggedIn", true);
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid login");
      }
    });
  }

  if (window.location.pathname.includes('dashboard.html')) {
    if (!sessionStorage.getItem("loggedIn")) {
      window.location.href = "login.html";
    }
    const user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('displayName').innerText = user.fullName;
    document.getElementById('displayEmail').innerText = user.email;
    document.getElementById('displayPhone').innerText = user.phone;
    document.getElementById('displayGender').innerText = user.gender;
    document.getElementById('displaySkills').innerText = user.skills.join(', ');
    document.getElementById('displayPic').src = user.profilePic;
  }
});

function logout() {
  sessionStorage.clear();
  window.location.href = "login.html";
}