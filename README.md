# Expense Tracker

A responsive full-stack expense tracking application built with **Next.js, TypeScript, Redux Toolkit, MongoDB, and Mongoose**.

The application allows users to add, view, edit, delete, filter, and visualize their expenses. It is designed to work across desktop, tablet, and mobile devices.

## Live Demo

**Live Application:**
[https://expense-tracker-bice-nu-76.vercel.app/](https://expense-tracker-bice-nu-76.vercel.app/)


---

## Features

### Expense Management

* Add new expenses
* Edit existing expenses
* Delete expenses
* View all expenses
* Persistent storage using MongoDB
* Automatic total expense calculation

### Expense Information

Each expense contains:

* Title
* Amount
* Category
* Date

### Categories

The application supports four expense categories:

* Food
* Transport
* Shopping
* Others

### Filtering

Users can filter expenses by:

* Category
* Start date
* End date

A **Clear Filters** button is also provided to reset all filters.

### Expense Visualization

A responsive pie chart displays the distribution of expenses by category.

The chart provides a visual breakdown of:

* Food
* Transport
* Shopping
* Others

### Responsive Design

The application is responsive across:

* Mobile devices
* Tablets
* Desktop screens

The expense form, filters, expense cards, chart, and edit modal have been designed to work on smaller screens.

### Loading State

A loading state is displayed while expenses are being retrieved from the database.

---

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* HeroUI

### State Management

* Redux Toolkit
* React Redux

### Backend

* Next.js API Routes
* Node.js
* Mongoose

### Database

* MongoDB Atlas

### Data Visualization

* Recharts

### Deployment

* Vercel

### Development Tools

* Git
* GitHub
* VS Code
* npm

---

## Project Structure

```text
expense-tracker/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── expenses/
│   │   │       ├── route.ts
│   │   │       └── [id]/
│   │   │           └── route.ts
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── TotalExpense.tsx
│   │   ├── ExpenseForm.tsx
│   │   ├── ExpenseList.tsx
│   │   ├── ExpenseCard.tsx
│   │   ├── ExpenseChart.tsx
│   │   ├── ExpenseFilters.tsx
│   │   ├── EditExpenseModal.tsx
│   │   └── LoadingState.tsx
│   │
│   ├── lib/
│   │   ├── api.ts
│   │   └── mongodb.ts
│   │
│   ├── models/
│   │   └── Expense.ts
│   │
│   ├── providers/
│   │   └── ReduxProvider.tsx
│   │
│   ├── store/
│   │   ├── store.ts
│   │   ├── expenseSlice.ts
│   │   └── hooks.ts
│   │
│   └── types/
│       └── expense.ts
│
├── public/
│
├── .env.local
├── .gitignore
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone [https://github.com/YOUR-GITHUB-USERNAME/YOUR-REPOSITORY-NAME.git](https://github.com/Juadul-Ahmed/Expense-tracker)
```

Move into the project directory:

```bash
cd expense-tracker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure MongoDB

Create a MongoDB Atlas database and obtain your MongoDB connection string.

Create a file named:

```text
.env.local
```

Add:

```env
MONGODB_URI="your_mongodb_connection_string"
```

Do not commit `.env.local` to GitHub.

The MongoDB connection string contains sensitive database credentials and should remain private.

### 4. Start the Development Server

Run:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Environment Variables

The project requires the following environment variable:

| Variable      | Description                     |
| ------------- | ------------------------------- |
| `MONGODB_URI` | MongoDB Atlas connection string |

Example:

```env
MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/expense-tracker"
```


---

## API Endpoints

The application uses Next.js API routes for CRUD operations.

### Get Expenses

```http
GET /api/expenses
```

Returns all stored expenses.

### Create Expense

```http
POST /api/expenses
```

Example request:

```json
{
  "title": "Lunch",
  "amount": 50,
  "category": "Food",
  "date": "2026-10-06"
}
```

### Update Expense

```http
PUT /api/expenses/:id
```

Example request:

```json
{
  "title": "Dinner",
  "amount": 80,
  "category": "Food",
  "date": "2026-10-06"
}
```

### Delete Expense

```http
DELETE /api/expenses/:id
```

Deletes the specified expense from MongoDB.

---

## Redux State Management

Redux Toolkit is used to manage the expense state on the client side.

The Redux store contains an `expenses` slice.

Main actions include:

```text
loadExpenses
addExpense
updateExpense
deleteExpense
```

The application first retrieves expenses from the API and stores them in Redux.

When an expense is created, updated, or deleted, the database is updated through the API and the Redux state is updated accordingly.

---

## Database Model

Each expense is stored in MongoDB using the following structure:

```text
Expense
│
├── title
├── amount
├── category
├── date
├── createdAt
└── updatedAt
```

The category is restricted to:

```text
Food
Transport
Shopping
Others
```

---

## Filtering

The filtering system allows users to combine multiple filters.

For example:

```text
Category: Food
Start Date: 2026-10-01
End Date: 2026-10-06
```

The expense list will display only expenses matching all selected conditions.

The filters can be reset using the **Clear Filters** button.

---

## Expense Chart

The application uses **Recharts** to display a pie chart.

The chart calculates the total amount spent in each category and presents the results visually.

This makes it easier to understand spending patterns.

---

## Responsive Design

The application follows a responsive layout using Tailwind CSS.

### Desktop

The expense form and filters use multi-column layouts where appropriate.

### Tablet

The layout adapts to the available screen width.

### Mobile

The application changes to a single-column layout.

Special attention was given to:

* Expense form fields
* Date inputs
* Category selection
* Filter controls
* Expense cards
* Edit modal
* Buttons
* Chart
* Modal scrolling

---

## Deployment

The application is deployed using Vercel.

### Deploying to Vercel

1. Push the project to GitHub.
2. Open Vercel.
3. Import the GitHub repository.
4. Select the Next.js framework.
5. Add the `MONGODB_URI` environment variable.
6. Deploy the project.

After deployment, Vercel automatically creates a production URL.

### Production Environment Variable

The following variable must be added to the Vercel project:

```env
MONGODB_URI
```

The value should be the same MongoDB Atlas connection string used locally.

---


## Future Improvements

Possible future improvements include:

* User authentication
* Multiple currencies
* Monthly expense reports
* Budget tracking
* Export expenses to CSV
* Dark mode
* Advanced analytics
* Recurring expenses
* Cloud-based user profiles

---

## Author

**Juadul Ahmed Bhuiyan**

Software Engineering Student
Full-Stack / MERN Developer



Portfolio:
[https://juadul-ahmed.vercel.app/
](https://juadul-ahmed.vercel.app/)
---

## License

This project was created for educational purposes.
