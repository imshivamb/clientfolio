# Clientfolio

Clientfolio is a React-based customer management application that displays customer information along with a dynamic photo gallery for each customer.

## Features

- Display a list of customers
- View detailed information for each customer
- Dynamic photo gallery for each customer, powered by Unsplash API
- Responsive design using Tailwind CSS
- Efficient rendering of large customer lists

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite (for build tooling)
- Unsplash API

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/customer-vue.git
   cd customer-vue
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or if you're using yarn:
   ```
   yarn
   ```

3. Create a `.env` file in the root directory and add your Unsplash API key:
   ```
   VITE_UNSPLASH_ACCESS_KEY=your_unsplash_api_key_here
   ```

4. Start the development server:
   ```
   npm run dev
   ```
   or with yarn:
   ```
   yarn dev
   ```

5. Open `http://localhost:5173` in your browser to view the app.

## Project Structure

```
src/
├── components/
│   ├── CustomerList.tsx
│   ├── CustomerCard.tsx
│   ├── CustomerDetails.tsx
│   └── PhotoGrid.tsx
├── hooks/
│   ├── useCustomers.ts
│   └── usePhotoFetcher.ts
├── types/
│   └── index.ts
├── App.tsx
└── main.tsx
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

