# 🌦 Weather App

A simple and elegant weather application built with Node.js and Express that allows users to get current weather information for any city worldwide.

## ✨ Features

- 🔍 **City Search**: Enter any city name to get current weather data
- 🌡️ **Temperature**: Display temperature in Celsius
- ☁️ **Weather Conditions**: Show current weather conditions with icons
- 💧 **Humidity**: Display humidity percentage
- 🎨 **Clean UI**: Simple and responsive design
- ⚡ **Real-time Data**: Powered by WeatherAPI.com

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- WeatherAPI.com API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/parinitaaa/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your WeatherAPI.com API key:
   ```env
   API=your_weather_api_key_here
   ```

4. **Get your WeatherAPI.com API key**
   - Visit [WeatherAPI.com](https://www.weatherapi.com/)
   - Sign up for a free account
   - Copy your API key and add it to the `.env` file

5. **Run the application**
   ```bash
   node server.js
   ```

6. **Open your browser**
   - Navigate to `http://localhost:3000`
   - Start searching for weather information!

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templating engine, HTML, CSS
- **API**: WeatherAPI.com
- **HTTP Client**: Axios
- **Environment**: dotenv

## 📁 Project Structure

```
weather_app/
├── public/
│   └── style.css          # CSS styles
├── views/
│   └── index.ejs          # Main template
├── .env                   # Environment variables (not tracked)
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies and scripts
├── package-lock.json     # Dependency lock file
├── server.js             # Main server file
└── README.md             # This file
```

## 🔧 API Endpoints

- `GET /` - Renders the main weather app page
- `POST /` - Processes city search and returns weather data

## 🌐 Usage

1. Enter a city name in the search box
2. Click the "Search" button
3. View the current weather information including:
   - City name
   - Temperature (°C)
   - Weather condition
   - Weather icon
   - Humidity percentage

## 🎨 Customization

You can customize the app by:

- Modifying `public/style.css` for styling changes
- Updating `views/index.ejs` for layout changes
- Adding more weather data fields in `server.js`

## 📝 Environment Variables

Create a `.env` file with the following variable:

```env
API=your_weather_api_key_here
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🐛 Troubleshooting

### Common Issues

1. **"City not found!" error**
   - Make sure you're entering a valid city name
   - Check your API key is correct
   - Verify your internet connection

2. **Server won't start**
   - Ensure Node.js is installed
   - Check if port 3000 is available
   - Verify all dependencies are installed (`npm install`)

3. **API errors**
   - Verify your WeatherAPI.com API key is valid
   - Check if you've exceeded API rate limits
   - Ensure the `.env` file is in the root directory

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Happy Weather Checking! 🌤️**
