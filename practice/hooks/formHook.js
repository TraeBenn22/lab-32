import {useState} from 'react';

const Form = (e) => {
    const [values, setValues] = useState({});


    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value});
    };
};
