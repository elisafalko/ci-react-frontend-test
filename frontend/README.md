# Frontend Test Task — CodeIgniter + React

This project demonstrates a simple full-stack setup using **CodeIgniter 4** as a backend and **React (Vite)** as a frontend, following clean architecture principles and best practices.

The goal of the task is to show:
- basic routing in CodeIgniter
- usage of a JSON file as a simulated data source
- clean separation between backend and frontend
- organized project structure

---

## Tech Stack

### Backend
- PHP 8.2
- CodeIgniter 4
- JSON files as a simulated data source
- Apache (Docker)

### Frontend
- React (Vite)
- SCSS Modules
- Bootstrap (layout utilities)
- Custom React hooks for data fetching

### Infrastructure
- Docker
- Docker Compose

---

## Project Structure

```
ci-react-frontend-test/
├── ci/                         # CodeIgniter application
│   ├── app/
│   │   ├── Controllers/
│   │   │   ├── Home.php
│   │   │   └── Api.php
│   │   ├── Data/               # Simulated data source (JSON)
│   │   │   ├── items.json
│   │   │   └── early_access.json
│   │   └── Config/
│   │       └── Routes.php
│   └── public/
│       └── assets/
│           └── frontend/       # React production build
│
├── frontend/                   # React application (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── styles/
│   │   └── App.jsx
│   └── vite.config.js
│
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## Backend Overview

### Routing

Basic routing is implemented in `app/Config/Routes.php`:

```php
$routes->get('/', 'Home::index');
$routes->get('/api/items', 'Api::items');
$routes->get('/api/early-access', 'Api::earlyAccess');
```

### Controllers

- **HomeController**
  - Serves the React SPA by returning the compiled `index.html`.

- **ApiController**
  - Provides JSON endpoints that read data from files in `app/Data`.

Example:

```php
public function earlyAccess()
{
    $path = APPPATH . 'Data/early_access.json';
    $data = json_decode(file_get_contents($path), true);

    return $this->respond($data);
}
```

---

## Data Source

The application uses static JSON files to simulate backend data:

- `app/Data/items.json`
- `app/Data/early_access.json`

These files represent dynamic content such as lists and blocks and are intentionally separated from views and assets.

---

## Frontend Overview

- React components are responsible for presentation only.
- Dynamic data is fetched from the backend API.
- Each section that requires data fetches it independently using a **custom hook**.

### Custom Data Fetching Hook

```js
export function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
```

This approach keeps components clean and avoids duplicating fetch logic.

---

## Styling

- SCSS Modules are used for component-level styling.
- Shared variables are stored in `src/styles/_variables.scss`.
- Bootstrap is used selectively for layout and utility classes.

---

## How to Run the Project

### Prerequisites

Make sure you have installed:
- Docker
- Docker Compose

---

### 1. Clone the repository

```bash
git clone <repository-url>
cd ci-react-frontend-test
```

---

### 2. Build and start all services

```bash
docker compose up -d --build
```

This command will:
- build the PHP/Apache container with CodeIgniter
- install frontend dependencies
- build the React application
- serve the React production build through CodeIgniter

---

### 3. Access the application

Open in your browser:

```
http://localhost:8080
```

---

### 4. Rebuilding frontend only (optional)

If frontend code changes:

```bash
docker compose run --rm frontend npm run build
```

The updated build will be placed into:

```
ci/public/assets/frontend
```

---

### 5. Stop containers

```bash
docker compose down
```

---

## Notes

- React is served as a production build through CodeIgniter.
- JSON files are not publicly accessible and can only be read through API endpoints.
- The project intentionally avoids overengineering and focuses on clarity and separation of concerns.

---

## Author

Frontend test task implementation.

