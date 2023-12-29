# ChatGPT Clone

This project is a ChatGPT clone that utilizes cutting-edge technologies to create a conversational AI experience. The stack includes Next.js for the frontend, Tailwind CSS for styling, OpenAI API for natural language processing, and Prisma for database interactions. The combination of these technologies results in a powerful and modern chatbot application.

## Technologies Used:

- Next.js: The frontend is built with Next.js, a React framework that enables server-side rendering, automatic code splitting, and an optimized development experience. This ensures a fast and efficient user interface.

- Tailwind CSS: Styling is handled by Tailwind CSS, a utility-first CSS framework that allows for rapid development and easy customization. With a plethora of pre-built styles, Tailwind CSS ensures a sleek and responsive design.

- OpenAI API: The backbone of the conversational AI is powered by the OpenAI API, providing state-of-the-art natural language processing capabilities. This enables the chatbot to understand and generate human-like responses.

- Prisma: The application uses Prisma as the database ORM (Object-Relational Mapping) tool. It simplifies database interactions and provides a type-safe and auto-generated query API. Prisma supports various database systems, ensuring flexibility in choosing the right database for your needs.

## Getting Started:

To get started with the ChatGPT Clone, follow these steps:

1. Clone the repository to your local machine:

```
git clone
```

2. Install the dependencies:

```
npm install
```

3. Create a .env.local file in the root directory and add the following environment variables:

```
NEXTAUTH_URL = ''
NEXTAUTH_SECRET = ''

GITHUB_CLIENT_ID = ''
GITHUB_CLIENT_SECRET = ''

DATABASE_URL = ''

OPENAI_API_KEY = ''
```

4. Run the development server:

```
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
