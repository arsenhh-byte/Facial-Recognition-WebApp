import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VideoFeed } from './components/VideoFeed';
// import {FaceRecognition} from './components/FaceRecognition';

function App() {
  

  return (
<div className ="container" >
      {/* Screen */}

<VideoFeed />
{/* <FaceRecognition /> */}



  <div className='button-wrapper'>
    <Button variant="outline-primary">Start </Button>{' '}
    <Button variant="outline-danger">Stop </Button>{' '}
  </div>
  <div className='text-box'>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, porro! Totam facilis rerum porro necessitatibus, eveniet accusantium recusandae voluptates fuga fugit dolor sit dolore pariatur repellendus ut architecto, delectus debitis?

  </div>
  <Button variant="outline-dark">Upload </Button>{' '}
</div>

  )
}

export default App
