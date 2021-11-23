import React, {Fragment, useState} from 'react';
import Header from "../../components/Header/Header";
import styled from "styled-components";
import TerminalInput from "../../components/UI/Input";


const DateText = styled.p`
  padding: 1rem;
  font-size: .9rem;
`

const User = styled.p`
  padding-left: 1rem;
  margin-bottom: .5rem;
`

const Language = () => {

    const date = new Date().toUTCString()

    const [response, setResponse] = useState('');
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const onChange = e => {
        setResponse(e.target.value)
    }

    const config = {
        'Ocp-Apim-Subscription-Key': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json',
    }

    const getLanguage = async (url = '', data = {}) => {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/${url}`, {
            method: 'POST',
            headers: config,
            cors: 'no-cors',
            body: JSON.stringify(data)
        })
        return response.json()
    }


    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        getLanguage('text/analytics/v3.1/languages', {
            documents: [{id: "1", text: response}]
        }).then(data => {
            setData(data)
            console.log(data)
        }).catch(err => {
            setError(err.message)
        }).finally(() => {
            setLoading(false)
        })
    }

    const clear = () => {
        setResponse('')
        setData('')
    }


    return (
        <div>
            <Header title="Language"/>
            <DateText>Last login: {date}</DateText>
            <User>Uzor's Text Analytics:~ $Language</User>
            <form onSubmit={handleSubmit}>
                <TerminalInput response={response} onChange={onChange}/>
                <button className="button primary">Submit</button>
            </form>
            {loading ? <p className="loading">Loading...</p> :
                <Fragment>
                    {error ? <p className="error">Something went wrong</p> :
                        <Fragment>
                            {data && data?.documents.map(data => (
                                <div key={data.id}>
                                   <pre>{JSON.stringify(data.detectedLanguage)}</pre>
                                </div>
                            ))}
                        </Fragment>
                    }
                </Fragment>
            }

            {response === '' ? null : <button className="button danger" onClick={clear}>Clear</button>
            }
        </div>
    );
};

export default Language;
