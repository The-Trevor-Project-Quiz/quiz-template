import React, { useState } from 'react'
import axios from 'axios';

import Splash from './Splash';
import Questions from './Questions';
import FianlPage from './FinalPage';

import { serialize } from './utility';

function Layout(props) {
    const [start, setStart] = useState(-1);
    const [formData, setFormData] = useState({});
    const questionLength = props.question.question.length;

    if(start >= questionLength) {
        axios.post('/', serialize(formData),
              {headers: {
                  'Content-type': 'application/x-www-form-urlencoded',
                  },
              }).then(console.log('Success'));
    }

    return (
        <section>
            { start < 0 ?
                <Splash splash={ props.splash }
                        title={ props.title }
                        start={ [start, setStart] }
                        questions={ props.question.question }
                        formData={formData}
                        setFormData={setFormData} />

            : (start >= questionLength) ?

                <FianlPage data={ props.final } />
            :
                <Questions data={ props.question.question[start] }
                           start={ [start, setStart] }
                           formData={formData}
                           setFormData={setFormData} />
            }
        </section>
    );
}
  export default Layout;