## TaskList-2.0
TaskList-2.0 is a fullstack JavaScript application that helps users manage their tasks efficiently. It features user authentication, task creation, task management, and notifications, all backed by a JSON Server.

## Table of Contents
1. Project Structure
2. Setup Instructions
3. Running the Application
4. Features
5. Components
6. Services
7. Styling
8. Contributing
9. License

## Project Structure

```
src/
├── assets/
├── components/
│   ├── Authentication/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Profile.jsx
│   ├── Task/
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskDetail.jsx
│   ├── Notification.jsx
│   ├── SearchBar.jsx
│   ├── FilterOptions.jsx
│   ├── SortOptions.jsx
│   └── DragAndDrop.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── TaskPage.jsx
│   └── ProfilePage.jsx
├── services/
│   ├── authService.js
│   ├── taskService.js
│   └── notificationService.js
├── utils/
├── hooks/
├── App.css
├── App.jsx
└── index.js

```

## Setup Instructions
1. Clone the repository:
```
git clone https://github.com/yourusername/tasklist-2.0.git
cd tasklist-2.0
```

2. Install dependencies:
```
npm install

```
3. Set up JSON Server:

Create a db.json file in the root directory with the following content:

```
{
  "tasks": [],
  "users": [],
  "notifications": []
}

```

4. Add a script to package.json to start JSON Server:

```

"scripts": {
  "start": "react-scripts start",
  "server": "json-server --watch db.json --port 5000"
}

```

## Running the Application
1. Start the React development server:

```
npm start

```

2. Start the JSON Server in a separate terminal:

```
npm run server

```

## Features
 1. User Authentication:
  - Login and signup functionality
  - Profile management

 2. Task Management:
   - Create, view, and manage tasks
   - Task details and status updates

 3. Notifications:
  - Notification service for task updates
  
 4. Additional Features:
  - Search, filter, and sort tasks
  - Drag and drop tasks for easy management

## Components
1. Authentication
Login.jsx: User login form
Signup.jsx: User signup form
Profile.jsx: User profile display

2. Task
TaskForm.jsx: Form for adding new tasks
TaskList.jsx: List of tasks
TaskItem.jsx: Individual task item
TaskDetail.jsx: Detailed view of a task

3. Miscellaneous
Notification.jsx: Notification display
SearchBar.jsx: Search bar for tasks
FilterOptions.jsx: Task filter options
SortOptions.jsx: Task sorting options
DragAndDrop.jsx: Drag and drop functionality
P
4. Pages
HomePage.jsx: Home page displaying task list and form
TaskPage.jsx: Page for detailed task view
ProfilePage.jsx: User profile page

5. Services

1. authService.js
Handles user authentication, including login and signup:

```
import axios from 'axios';

const API_URL = 'http://localhost:5000/users';

export const login = async (email, password) => {
  const response = await axios.get(API_URL, { params: { email, password } });
  return response.data.length ? response.data[0] : null;
};

export const signup = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};
```

2. taskService.js
Manages tasks, including fetching, adding, and updating tasks:

```
import axios from 'axios';

const API_URL = 'http://localhost:5000/tasks';

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

```

3. notificationService.js
Handles notifications, including fetching notifications:

```
import axios from 'axios';

const API_URL = 'http://localhost:5000/notifications';

export const getNotifications = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

```

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

