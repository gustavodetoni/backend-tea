### Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get JWT token
- `GET /api/usuario/:id` - Get user by ID
- `POST /api/cronograma` - Add a new schedule
- `PUT /api/cronograma` - Edit an existing schedule
- `GET /api/cronograma/:id` - Get schedules by user ID
- `GET /api/pacientes` - Get all patients
- `GET /api/pacientes/:id` - Get pending friend requests
- `POST /api/pacientes` - Accept a friend request
- `POST /api/request` - Ask for a new friendship
- `DELETE /api/request/:id` - Decline a friendship request
- `POST /api/contato` - Send a contact email
