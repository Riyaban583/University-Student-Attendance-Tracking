🎓 Blockchain-Based Student Attendance & University Management System
A decentralized university management website with a blockchain-based student attendance tracking system built using React.js, Solidity, Ethereum, and MetaMask.
The project ensures secure, transparent, and tamper-proof attendance records while providing a complete university management platform.

📌 Project Overview
This project is a full-stack decentralized application (DApp) designed to manage university operations such as admissions, courses, faculty, students, and attendance.
The attendance module is implemented using Ethereum blockchain, ensuring that records once stored cannot be modified or deleted.

🚀 Features

🔐 Blockchain-based attendance system
🦊 MetaMask wallet integration
📄 Smart contracts using Solidity
👨‍🎓 Student dashboard
👩‍🏫 Faculty management
📚 Courses, library, and transport modules
🏫 Complete university management website
🌐 Decentralized & secure data storage


🧱 Technology Stack
Frontend

React.js
JavaScript
CSS

Blockchain

Ethereum
Solidity
MetaMask Wallet
Hardhat


📁 Project Structure
bashPROJECT-ROOT
│
├── artifacts/                 # Compiled smart contract files
├── cache/                     # Hardhat cache
├── contracts/
│   └── Attendance.sol         # Solidity smart contract
│
├── edu-ums/
│   ├── node_modules/
│   ├── public/
│   │   └── pages/             # Static assets
│   │
│   └── src/
│       ├── assets/            # Images and assets
│       ├── blockchain/        # Blockchain integration
│       │   ├── config.js
│       │   ├── contractABI.json
│       │   └── useBlockchain.js
│       │
│       ├── components/        # Reusable components
│       │   ├── Navbar.jsx
│       │   └── Footer.jsx
│       │
│       ├── pages/             # Application pages
│       │   ├── Home.jsx
│       │   ├── About.jsx
│       │   ├── AdmissionPortal.jsx
│       │   ├── Attendance.jsx
│       │   ├── StudentLogin.jsx
│       │   ├── StudentDashboard.jsx
│       │   ├── Faculty.jsx
│       │   ├── Courses.jsx
│       │   ├── Library.jsx
│       │   ├── Transport.jsx
│       │   ├── Contact.jsx
│       │   ├── Register.jsx
│       │   └── Registration.jsx
│       │
│       ├── styles/
│       │   ├── App.css
│       │   └── index.css
│       │
│       ├── App.jsx
│       └── main.jsx
│
└── README.md

🔐 How Blockchain Attendance Works

User connects their MetaMask wallet
Wallet address acts as a unique identity
Attendance data is sent as a transaction
Data is stored on the Ethereum blockchain
Records become immutable and verifiable


⚙️ Installation & Setup
1️⃣ Clone the Repository
bashgit clone https://github.com/your-username/your-repo-name.git
cd project-root
2️⃣ Install Frontend Dependencies
bashcd edu-ums
npm install
3️⃣ Start the React Application
bashnpm run dev
4️⃣ Blockchain Setup

Install MetaMask browser extension
Create or import a wallet
Connect to:

Localhost (Hardhat) OR
Ethereum test network (e.g., Sepolia)



5️⃣ Deploy Smart Contract (Optional)
bashnpx hardhat compile
npx hardhat run scripts/deploy.js --network localhost
Update the contract address in:
bashsrc/blockchain/config.js

🧪 Testing

Ensure MetaMask is connected
Mark attendance from the Attendance page
Verify transaction on the blockchain network


🎯 Use Cases

Prevent proxy attendance
Secure student records
Transparent academic tracking
Decentralized university management


🔮 Future Enhancements

Role-based authentication (Admin / Faculty / Student)
IPFS for document storage
Multi-university support
Attendance analytics dashboard
Mobile responsiveness
