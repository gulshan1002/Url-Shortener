# URL Shortener

A simple and efficient URL Shortener application that allows users to convert long URLs into short, easy-to-share links.

## Features

- Shorten long URLs to compact links
- Redirect short links to original URLs
- Track number of clicks (optional)
- RESTful API endpoints
- User-friendly interface

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Frontend:** React.js (optional)
- **Other:** Docker, JWT Authentication (optional)

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB

### Installation

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
npm install
```

### Configuration

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
JWT_SECRET=your_jwt_secret
```

### Running the App

```bash
npm start
```

The server will run on `http://localhost:5000`.

## API Endpoints

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| POST   | /api/shorten     | Create a short URL         |
| GET    | /:shortCode      | Redirect to original URL   |
| GET    | /api/stats/:code | Get stats for a short URL  |

## Example Usage

**Shorten a URL:**

```http
POST /api/shorten
Content-Type: application/json

{
    "originalUrl": "https://www.example.com/very/long/url"
}
```

**Response:**

```json
{
    "shortUrl": "http://localhost:5000/abc123"
}
```

## License

This project is licensed under the MIT License.

---

**Author:** Gulshan Kumar  
**Repository:** https://github.com/gulshan1002/Url-Shortener
