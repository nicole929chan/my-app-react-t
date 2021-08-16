import React, { useState } from 'react';

const DetailForm = () => {
    const [detail, setDetail] = useState({
        DC_CD: 'D',
        ACNO: '',
        VH_AMT: 0,
    });

    const changeHandler = (e) => {};

    return (
        <div>
            <h3>Master Form</h3>
            <form>
                <div>
                    <label>借貸方</label>
                    <select>
                        <option value='D'>借方(D)</option>
                        <option value='C'>貸方(C)</option>
                    </select>
                </div>
                <div>
                    <label>會計科目</label>
                    <input type='text' value={detail.ACNO} onChange={changeHandler} />
                </div>
                <div>
                    <label>傳票金額</label>
                    <input type='text' />
                </div>
                <button>新增</button>
            </form>
        </div>
    );
};

export default DetailForm;
