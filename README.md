# Registration Login Dashboard (Week 1 Task – MERN Stack Internship)

This is a mini web application built using only **HTML**, **CSS**, and **JavaScript** with no backend or frameworks. The goal is to practice front-end form handling, validation, and data storage using **localStorage**.

## 🔥 Features

- ✅ Registration Form with:
  - Full Name validation (no numbers, no triple same letters)
  - Email validation using Regex
  - Password rules (min 8 chars, upper, lower, number)
  - Confirm Password match
  - 10-digit Phone number
  - Gender radio selection
  - Date of Birth check (18+ only)
  - Address textarea
  - City dropdown
  - Skill selection (checkboxes)
  - Profile picture upload (base64 stored)
  - Accept terms checkbox

- ✅ Login Page:
  - Validates user from localStorage
  - Redirects to Dashboard if credentials match
  - Shows errors if invalid

- ✅ Dashboard:
  - Displays all user details
  - Profile picture
  - Logout button that clears session

## 🧪 Validations Added

- Full name must be at least 3 characters, no numbers, and no repeating 3 same characters.
- Email must be in valid format.
- Password must include lowercase, uppercase, number, and be 8+ characters long.
- DOB must verify that the user is 18 years or older.
- At least one skill must be selected.
- Profile picture is required and stored in base64.
- Terms and conditions must be accepted before registering.

## 📦 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- localStorage / sessionStorage for persistence


## 🌐 Live Hosted Link

👉 https://hr-shukla.github.io/arcoirisLogicsTask1/



