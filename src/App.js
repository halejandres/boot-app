import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import './App.css';

function App() {
  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center w-100">
        <img className="bootstrap-logo" 
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" 
              alt="Bootstrap 5" />
        <h1>Please sign in</h1>
      </Form>
    </Container>
  );
}

export default App;