import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { VideoFeed } from "./components/VideoFeed"; 

function App() {
    return (
        <div className="container">
            {/* Application Title */}
            <h1 className="text-center my-4">Facial Recognition Webapp</h1>
            {/* Application Heading */}
            <h2 className="text-center">Capture and Analyze Faces in Real-Time</h2>
            {/* Video Feed */}
            <VideoFeed />
            {/* <FaceRecognition /> */}
            {/* <Button variant="outline-dark">Upload </Button>{" "} */}
        </div>
    );
}

export default App;