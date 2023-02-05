import CApp from './CApp';
import FApp from './FApp';
import Home from './Home';

function App()
{
    return(
        <>
            <h1><CApp firstname = 'Devasya' lastname ='Rajguru'>This is Student 1</CApp></h1>
            <h1><FApp firstname = 'Dev' lastname ='Barot'>This is Student 2</FApp></h1><br></br>
            <h1><Home marks1 = '20' marks2 = '40'>Sum of 2 numbers</Home></h1>
        </>
    );
}

export default App;