# 🎂Birthday Book
### Birthday Book is a web application that provides detailed information about any birthdate.
### Just select a date and it instantly shows facts like day of the week, age, zodiac signs, birthstone, famous people born on the same day and much more!

# 🚀Live Demo
## 👉Visit the live website:
### https://birthday-book-final.onrender.com/

# ✨Features:

### • 📅Day of the week for the selected date
### • 🎂Exact age and generation
### • ⏳Days, weeks, months, hours & minutes lived
### • ♈Western Zodiac sign and element
### • 🐉Chinese Zodiac animal and traits
### • 💎Birthstone, color, and meaning
### • 👨‍👩‍👧Famous people born on the same day
### • 🚫Prevents selecting future birthdates


# 🛠️Tech Stack:
## Frontend:
```
 • HTML
 • CSS
 • JAVASCRIPT(DOM Manipulation & Fetch API)
```

## Backend:
```
 • Node.js
 • Express.js
 • CORS (Cross-Origin Resource Sharing)
 • node-fetch
```

## 🔧Backend Overview:
## • Express.js
### Used to build a lightweight backend server and create API routes that connect the frontend with external services.
## • CORS
### Enabled to prevent cross-origin issues and allow the frontend to safely communicate with the backend after deployment.
## • node-fetch
### Used to fetch birthday data from an external API on the server side, avoiding browser CORS restrictions and keeping API calls secure.


# 🧠Why a Backend Was Necessary ?

### • Direct API calls from the browser caused CORS issues.
### • Backend acts as a proxy to fetch and process data.
### • Improves reliability and deployment compatibility.
### • Separates frontend and backend responsibilities cleanly.


## Deployment:
### • Render

# 📁Project Structure:

```text
birthday_book/
├── cors-server/        # Express backend
│   ├── index.js
|   ├── package-lock.json
│   ├── package.json
│   ├── public/         # Frontend files
│   │   ├── index.html
│   │   └── style.css
|   └── node_modules/
├── .gitignore
└── .gitattributes
```

# 🖥️Running Locally
## If you want to run this project on your own system:
```
 git clone https://github.com/love25-codes/birthday_book.git
 cd birthday_book/cors-server
 npm install
 node index.js
```
## Then open your browser at:
```
 http://localhost:3000
```

# 🙌Creator:
## Lovepreet Kaur 
### Built with curiosity, learning, and passion💙







