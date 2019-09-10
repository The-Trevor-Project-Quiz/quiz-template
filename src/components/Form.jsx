import React, { Component } from 'react'

class Form extends Component {

      validateFields() {
        const validEmailRegex = 
        RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

          if(validEmailRegex.test(this.props.formData.email) && this.props.formData.zipcode.length > 0) {
            this.props.start[1](this.props.start[0] + 1);
          }
          else {
              console.log('something is missing');
          }
      }

    render() {
    return (
        <>
            <form name={this.props.name} method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value={this.props.name} />
                <fieldset>
                    {this.props.email ?
                        <>
                            <input type="email" name="email" onChange={(e) => this.props.setFormData({ ...this.props.formData, [e.target.name]: e.target.value })} value={this.props.formData.email} />
                            <input type="text" name="zipcode" onChange={(e) => this.props.setFormData({ ...this.props.formData, [e.target.name]: e.target.value })} value={this.props.formData.zipcode} />
                        </>
                    : null 
                    }
                    {this.props.questionList.map((list) => {
                        return (
                            <input name={list.questiontext} type='hidden' />
                        )
                    })}
                </fieldset>
            </form>
            <button onClick={() => this.validateFields()}>{this.props.buttonText}</button>
        </>
    );
    }
}
  export default Form;