import React, {useState} from 'react';
import styled from "styled-components";


const TextareaContainer = styled.div`
  padding: 0 1rem;
`

const Input = styled.input`
     width: 100%;
     background: var(--primary-dark);
     height: 50px;
     border: none;
     outline: none;
     caret-color: var(--terminal-green);
     color: var(--primary-light);
     font-size: 1rem;
`

const TerminalInput = ({response, onChange}) => {

    return (
        <TextareaContainer>
            <Input autoFocus value={response} onChange={onChange}/>
        </TextareaContainer>
    );
};

export default TerminalInput;
