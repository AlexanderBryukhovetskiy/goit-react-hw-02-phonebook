import React, { Component }  from "react";
import { Form } from "./Form";

import css from "./App.module.css";


export class App extends Component {

    state = {
      contacts: [],
      name: ''
    }

    render () {
        return (
            <div className={css.container}>
                <Form></Form>
            </div>
            
        )
    };
}


// export default App;