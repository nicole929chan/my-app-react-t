import React, { useState } from 'react';

const MasterForm = () => {
    const [master, setMaster] = useState({});
    return (
        <div>
            <h3>Master Form</h3>
            <form>
                <div>
                    <label>傳票日期</label>
                    <input type='date' />
                </div>
                <div>
                    <label>傳票種類</label>
                    <select>
                        <option value='1'>現金收入</option>
                        <option value='2'>現金支出</option>
                        <option value='3'>轉帳傳票</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default MasterForm;
