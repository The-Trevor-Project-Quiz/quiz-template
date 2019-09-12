import React, { useState } from 'react'

import Splash from './Splash';
import Questions from './Questions';
import FianlPage from './FinalPage';


function Layout(props) {
    const [start, setStart] = useState(-1);
    const [formData, setFormData] = useState({});

    props.setStatus(start >= 0 && start < props.question.question.length)

    const handleSubmit = event => {
        event.preventDefault();
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

            : (start >= props.question.question.length) ?

                <FianlPage data={ props.final }
                           formData={formData}
                           title={ props.title } />
            :
                <Questions data={ props.question.question[start] }
                           bimage={ props.question.backgroundImage }
                           start={ [start, setStart] }
                           formData={formData}
                           setFormData={setFormData} />
            }
        </section>
    );
}
  export default Layout;