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


const Phrase = () => {

    const [response, setResponse] = useState('');
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const onChange = e => {
        setResponse(e.target.value)
    }

    const date = new Date().toUTCString()

    const config = {
        'Ocp-Apim-Subscription-Key': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json',
    }

    const getEntity = async (url = '', data = {}) => {
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
        getEntity('text/analytics/v3.1/keyPhrases', {
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
            <Header title="Phrase"/>
            <DateText>Last login: {date}</DateText>
            <User>Uzor's Text Analytics:~ $Key Phrase Extraction</User>
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
                                    {data.keyPhrases.map(phrase => (
                                        <div key={phrase.id}>
                                            <p className="response">
                                                Key Phrase: {phrase}
                                            </p>
                                        </div>

                                    ))}
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

export default Phrase;
