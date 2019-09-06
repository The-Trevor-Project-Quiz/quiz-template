import React, { useState } from 'react'

import Splash from './Splash';
import Questions from './Questions';

function Layout(props) {
    const [start, setStart] = useState(-1);

    return (
        <section>
            { start < 0 ?
                <Splash splash={ props.splash } title={ props.title } start={ [start, setStart] } />

            : (start >= props.question.question.length) ?

                <h2>The End!!!</h2>
            :
                <Questions data={ props.question.question[start] } start={ [start, setStart] }/>
            }
        </section>
    );
}
  export default Layout;