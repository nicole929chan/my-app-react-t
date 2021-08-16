import { useEffect, useReducer, useState } from 'react';
import DetailForm from './components/DetailForm';
import DetailList from './components/DetailList';
import MasterButton from './components/MasterButton';
import MasterForm from './components/MasterForm';

const initialMasterStatus = '';
const masterReducer = (state, action) => {
    switch (action) {
        case 'new':
            return 'New';
        case 'save':
            return 'Save';
        case 'reset':
            return 'Reset';
        default:
            return state;
    }
};

function App() {
    const [masterStatus, dispatch] = useReducer(masterReducer, initialMasterStatus);
    const [master, setMaster] = useState({
        VH_DATE: new Date(),
        VH_DC: '1',
    });

    useEffect(() => {
        if (masterStatus === 'Save') {
            // 測試
            setMaster({ ...master, VH_DC: '3' });
        }
    }, [masterStatus]);

    return (
        <div className='App'>
            <MasterButton dispatch={dispatch} masterStatus={masterStatus} />
            <MasterForm />
            <DetailForm />
            <DetailList />
        </div>
    );
}

export default App;
