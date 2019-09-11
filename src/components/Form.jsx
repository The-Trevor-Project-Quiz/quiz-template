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
            <form className='form' name={this.props.name} method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value={this.props.name} />
                <fieldset>
                    {this.props.email ?
                        <div className='inputs'>
                            <input className='inputs__field email' type="email" name="email" placeholder='Email' onChange={(e) => this.props.setFormData({ ...this.props.formData, [e.target.name]: e.target.value })} value={this.props.formData.email} />
                            <input className='inputs__field zip' type="text" name="zipcode" placeholder='Zip' onChange={(e) => this.props.setFormData({ ...this.props.formData, [e.target.name]: e.target.value })} value={this.props.formData.zipcode} />
                        </div>
                    : null 
                    }
                    {this.props.questionList.map((list) => {
                        return (
                            <input name={list.questiontext} type='hidden' />
                        )
                    })}
                </fieldset>
            </form>
            <button className='splash-screen__btn' onClick={() => this.validateFields()}>{this.props.buttonText}</button>
        </>
    );
    }
}
  export default Form;