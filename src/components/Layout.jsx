import React, { useState } from 'react'

import Splash from './Splash';
import Questions from './Questions';
import FianlPage from './FinalPage';


function Layout(props) {
    const [start, setStart] = useState(-1);
    const [formData, setFormData] = useState({});
    const [correct, setCorrect] = useState(0);
    const [totalDonated, setTotalDonated] = useState(0);

    props.setStatus(start >= 0 && start < props.question.question.length)

    return (
        <section>
            { start < 0 ?
                <Splash splash={ props.splash }
                        title={ props.title }
                        start={ [start, setStart] }
                        questions={ props.question.question }
                        questionValue={ props.question.questionvalue }
                        formData={formData}
                        setFormData={setFormData} />

            : (start >= props.question.question.length) ?

                <FianlPage data={ props.final }
                           formData={formData}
                           title={ props.title }
                           correct={ correct }
                           questionNum={ props.question.question.length }
                           path={ props.path }
                           totalDonated={ totalDonated } />
            :
                <Questions data={ props.question.question[start] }
                           bimage={ props.question.backgroundImage }
                           value={ props.question.questionvalue }
                           start={ [start, setStart] }
                           formData={formData}
                           setFormData={setFormData}
                           setCorrect={ setCorrect }
                           totalDonated={ totalDonated }
                           setTotalDonated={ setTotalDonated }
                           questionNum={ props.question.question.length } />
            }
        </section>
    );
}
  export default Layout;