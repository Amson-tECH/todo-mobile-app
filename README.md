# 📝 Todo Mobile App

A beautiful, modern todo application built with React Native, Expo, and Convex. Features a stunning gradient UI, dark/light theme support, and real-time synchronization.

## ✨ Features

- ✅ Create, read, update, and delete todos
- 🎨 Beautiful gradient UI with smooth animations
- 🌓 Dark and light theme support
- ⚡ Real-time data synchronization with Convex
- 📱 Cross-platform (iOS, Android, Web)
- 🎯 Interactive checkbox animations
- ✏️ Inline editing with save/cancel options
- 🗑️ Confirmation dialogs for deletions
- 📊 Empty state handling
- 🔄 Loading states and error handling

## 🛠️ Tech Stack

- **Framework:** React Native 
- **Navigation:** Expo Router
- **Backend:** Convex (Real-time Database)
- **UI Components:**
  - Expo Linear Gradient
  - React Native Reanimated
  - Expo Vector Icons (Ionicons)
- **State Management:** Convex React hooks
- **Storage:** AsyncStorage
- **Development:** TypeScript, ESLint

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) app on your mobile device (for testing)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Amson-tECH/todo-mobile-app.git
cd todo-mobile-app
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up Convex

1. Create a [Convex account](https://www.convex.dev/)
2. Install Convex CLI:
   ```bash
   npm install -g convex
   ```
3. Initialize Convex in your project:
   ```bash
   npx convex dev
   ```
4. Follow the prompts to link your project

### 4. Configure environment variables

Create a `.env.local` file in the root directory:

```env
CONVEX_DEPLOYMENT=your_convex_deployment_url
```

### 5. Start the development server

```bash
npm start
# or
yarn start
```

### 6. Run on your preferred platform

- **iOS Simulator:** Press `i` in the terminal or run `npm run ios`
- **Android Emulator:** Press `a` in the terminal or run `npm run android`
- **Web Browser:** Press `w` in the terminal or run `npm run web`
- **Physical Device:** Scan the QR code with Expo Go app

## 📱 Project Structure

```
todo-mobile-app/
├── app/                      # Expo Router pages
│   ├── (tabs)/              # Tab navigation screens
│   │   ├── index.tsx        # Main todo screen
│   │   └── settings.tsx     # Settings screen
│   └── _layout.tsx          # Root layout
├── assets/                  # Images and static files
│   ├── images/             # App icons and images
│   └── styles/             # Style definitions
├── components/             # Reusable components
│   ├── DangerZone.tsx     # Settings danger zone
│   ├── EmptyState.tsx     # Empty state component
│   ├── Header.tsx         # App header
│   ├── LoadingSpinner.tsx # Loading indicator
│   ├── Preferences.tsx    # User preferences
│   ├── ProgressState.tsx  # Progress display
│   └── TodoInput.tsx      # Todo input field
├── convex/                # Convex backend
│   ├── _generated/        # Auto-generated types
│   ├── todos.ts          # Todo CRUD operations
│   └── tsconfig.json     # Convex TypeScript config
├── hooks/                 # Custom React hooks
│   └── useTheme.ts       # Theme management hook
└── package.json          # Project dependencies
```

## 🎨 Key Components

### TodoInput
Handles the creation of new todos with a beautiful gradient button and input field.

### EmptyState
Displays a friendly message when there are no todos.

### LoadingSpinner
Shows a loading animation while data is being fetched.

### Preferences
Manages app settings like theme selection.

### Header
Displays the app title and progress statistics.

## 🗄️ Convex Backend

The app uses Convex for real-time backend functionality:

- **getTodos:** Fetches all todos
- **addTodo:** Creates a new todo
- **toggleTodo:** Marks todo as complete/incomplete
- **updateTodo:** Updates todo text
- **deleteTodo:** Removes a todo

## 🎨 Theming

The app supports both light and dark themes with smooth gradient transitions. Theme preference is persisted using AsyncStorage.

## 📦 Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator/device
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint for code quality
- `npm run reset-project` - Reset the project to initial state

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Amson-tECH**
- GitHub: [@Amson-tECH](https://github.com/Amson-tECH)

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [Convex](https://www.convex.dev/) for the real-time backend
- [React Native](https://reactnative.dev/) community

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

⭐ Star this repository if you find it helpful!