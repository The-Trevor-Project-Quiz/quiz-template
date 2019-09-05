import React, { Component } from 'react'

class Form extends Component {

    render() {
    return (
        <>
            <form name={this.props.name} method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value={this.props.name} />
                <fieldset>
                    {this.props.email ?
                        <>
                            <input type="email" name="email" required />
                            <input type="text" name="zipcode" required />
                        </>
                    : null 
                    }
                </fieldset>
                <button type="submit">Send</button>
            </form>
        </>
    );
    }
  }
  export default Form;