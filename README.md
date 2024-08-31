# WeatherApp - React Native

WeatherApp is a React Native application that provides real-time weather updates and detailed forecasts for cities around the world. The app is designed with a clean and intuitive user interface, offering users a seamless experience when checking weather conditions.

## Features

- **Real-Time Weather Data:** Provides current weather conditions and forecasts for the next 7 days.
- **Location Search:** Dynamic search bar with debounced input for efficient city search.
- **Custom Weather Icons:** Displays relevant weather icons based on the current weather conditions.
- **Persistent Data:** Saves the last searched city locally, allowing users to see their weather information immediately upon reopening the app.
- **Responsive UI:** Adjusts seamlessly across different screen sizes.

## Technologies Used

- **React Native:** The framework for building the app.
- **Axios:** For making HTTP requests to the WeatherAPI.
- **WeatherAPI:** The service used to fetch weather data.
- **Lodash:** For optimized search functionality using debounce.
- **Async Storage:** To persist user data locally.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: Download and install from [Node.js](https://nodejs.org/)
- **npm or yarn**: npm is included with Node.js. You can also install yarn from [Yarn](https://yarnpkg.com/)
- **Expo CLI**: Follow the Expo setup instructions [here](https://docs.expo.dev/more/expo-cli/).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/weatherapp.git
   cd weatherapp
   ```

2. **Install dependencies:**

   ```bash
   npm expo install
   ```

   or if you're using yarn

   ```bash
   yarn expo install
   ```

3. **Obtain a WeatherAPI Key:**

- Go to WeatherAPI.
- Sign up for a free account.
- Once registered, navigate to the API keys section.
- Copy your API key.

4. **Configure the API Key:**

- In your project, locate the index.js file inside the Assets folder.

- Replace the placeholder API key with your actual WeatherAPI key:

```javascript
const apiKey = ""; //Include your API key here
```

5. **Run the application:**
   start the Metro server separately by running:
   ```bash
   npx expo start
   ```

### Usage

- Launch the app and search for any city using the search icon.
- View real-time weather data and a 7-day forecast.
- The background and icons will adjust based on the current weather conditions.

## Screenshots
You can access the screenshots by locating the Screenshots folder under Assests
