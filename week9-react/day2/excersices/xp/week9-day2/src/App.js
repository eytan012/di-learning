import './App.css';
import CompOne from './components/CompOne'
import BootstrapComp from "./components/BootstrapComp";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "./components/Jumbotron";
import AlertComp from "./components/AlertComp";
import SmartAlertComp from "./components/SmartAlertComp";


function App() {
    return (
        <>
            <CompOne/>
            <BootstrapComp title='McCartney'
                           imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg'
                           buttonLabel='Go to Wikipedia'
                           buttonUrl='https://en.wikipedia.org/wiki/Paul_McCartney'
                           description='Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.'
            />
            <Jumbotron
                title="Welcome to react"
                description="React is the most popular rendering library in the world"
                buttonLabel="Go to the official website"
                buttonURL="https://reactjs.org/"
            />
            {/*<AlertComp text="OMG! Something really bad has happended!" show={true} />*/}

            <SmartAlertComp text="There is a danger" color='alert-primary'/>
        </>
    );
}

export default App;
