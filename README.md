# Student Name: Esra Özdemir  
# Student ID: 220408014  
# Git: https://github.com/esraozdemir6/ProfileCardApp


## ProfileCardApp

**ProfileCardApp** is a mobile application developed using **React Native** and **Expo** as part of the Mobile App Development Lab.  
The app focuses on creating a polished, responsive, and interactive **Profile Card UI** using modern React Native concepts.

The application demonstrates:

- **Custom Font Loading** (Montserrat using expo-font)  
- **Design Tokens & Theming System** (light/dark mode)  
- **Reusable Color, Spacing, Radius, and Font Tokens**  
- **Responsive UI** using `useWindowDimensions`  
- **Cross-Platform Shadows** for iOS & Android  
- **Interactive Components**
  - Theme Toggle Button (Light ↔ Dark)
  - Like Button (with press feedback)
  - Follow Button (Bonus)
- **Expandable Profile Card** (tap to show more details)


## Project Structure
ProfileCardApp/
├── App.js
├── theme.js
├── screens/
│ └── ProfileScreen.js
├── assets/
│ └── fonts/
│ ├── Montserrat-Regular.ttf
│ └── Montserrat-Bold.ttf
├── package.json
└── README.md


## How to Run the App

1. **Clone the Repository**
git clone https://github.com/esraozdemir6/ProfileCardApp.git
cd ProfileCardApp

2. **Install Dependencies**
npm install

3. **Start the Application**
npx expo start --tunnel

