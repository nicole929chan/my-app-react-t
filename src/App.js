import { useState } from 'react';
import DetailForm from './components/DetailForm';
import DetailList from './components/DetailList';
import MasterButton from './components/MasterButton';
import MasterForm from './components/MasterForm';

function App() {
    const [masterStatus, setMasterStatus] = useState(false);

    return (
        <div className='App'>
            <MasterButton />
            <MasterForm />
            <DetailForm />
            <DetailList />
        </div>
    );
}

export default App;
