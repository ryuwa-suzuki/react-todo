import './App.css';
import HeaderSimple from './Layouts/Header';
import { Container } from '@mantine/core';
import { RouterProvider } from "react-router-dom";
import { router } from "./AppRoutes";

const LINKS = [
  {
    "link": "/todo",
    "label": "TODO"
  },
  {
    "link": "/in-progress",
    "label": "IN PROGRESS"
  },
  {
    "link": "/complete",
    "label": "COMPLETE"
  }
];

function App() {
  return (
    <div className="container">
      <HeaderSimple links={LINKS}/>
        <Container>
          <RouterProvider
            router={router}
          />
        </Container>
    </div>
  );
}

export default App;
