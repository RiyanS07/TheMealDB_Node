#  TheMealDB Explorer

TheMealDB Explorer is a full-stack web application that allows users to explore recipes using **TheMealDB public API**.  
It provides a clean React UI backed by a Node.js REST API with caching for performance.

---

##  Features

### Frontend (React)
-  Search meals by name
- Browse meals by category
- “I’m Feeling Hungry” random meal
-  Meal details page:
  - Ingredients + measurements parsing
  - Cooking instructions
  - Embedded YouTube video
- 📱 Responsive design (mobile & desktop)

### Backend (Node.js + Express)
- REST-compliant API
- Acts as a proxy to TheMealDB
- In-memory caching with:
  - TTL (expiry)
  - Maximum cache size
- Clean, extensible architecture

---

## Tech Stack

**Frontend**
- React (Vite)
- React Router
- Axios
- HTML / CSS

**Backend**
- Node.js
- Express
- Axios
- node-cache (in-memory cache)

---

## Backend API Endpoints

| GET | `/api/meals/search?name=` | Search meals by name |
| GET | `/api/meals/categories` | Get meal categories |
| GET | `/api/meals/category/:name` | Meals by category |
| GET | `/api/meals/random` | Random meal |
| GET | `/api/meals/:id` | Meal details |

---

## Running Locally

### Backend
cd backend
npm install
npm run dev

Server runs at: http://localhost:5000

### Frontend
cd frontend
npm install
npm run dev

App runs at: http://localhost:5173

## Caching Strategy
In-memory cache using node-cache
Cache TTL: 5 minutes
Max cache size: 100 keys
Reduces external API calls and improves performance

## API used
TheMEALDB - https://www.themealdb.com/api/json/v1/1

## Notes
Application runs entirely locally
No authentication or API keys required
Frontend never calls TheMealDB directly.

