import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoClick = this.handleDemoClick.bind(this);
    this.demoLogIn = this.demoLogIn.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.match.path !== newProps.match.path) {
      this.props.clearErrors();
    }
  }

  demoLogIn() {
    this.props.login(this.state).then(() => this.props.history.push('/'));
  }

  handleDemoClick(e) {
    e.preventDefault();
    this.setState({ username: "anthony_rondinone", password: "password"});
    setTimeout(this.demoLogIn, 500);
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/'));
    this.setState({ username: "", password: ""});
  }

  render () {
    let sendPath;
    let showLink;
    let question;
    let agreement;
    let SignUpPitch;
    let buttonName;

    if(this.props.formType === '/signin') {
      sendPath = '/signup';
      showLink = 'Sign up';
      question = "Don't have an account?";
      agreement = '';
      SignUpPitch = '';
      buttonName = 'Log in';
    } else {
      sendPath = '/signin';
      showLink = 'Log in';
      question = 'Have an account?';
      agreement = 'By signing up, you agree to our Terms & Private Policy.';
      SignUpPitch = 'Sign up to find new artists';
      buttonName = 'Sign up';
    }


    let errors = "";
    if (this.props.errors.responseJSON) {
      errors = this.props.errors.responseJSON.join(", ");
    }

    return (
      <div className="sign-up-page" >
        <div className ="welcome" >
          <img className="phones" src={ window.images.signIn } />

          <section className="form">
            <form className="inputSection" onSubmit={this.handleSubmit}>
              <img src={window.images.signInLogo} />
              <h4 className="pitch">{SignUpPitch}</h4>

              <input className="authInput"
                type="text"
                onChange={this.handleUsernameChange}
                value={this.state.username}
                placeholder="Username"
              />

              <input
                className="authInput"
                type="password"
                onChange={this.handlePasswordChange}
                value={this.state.password}
                placeholder="Password"
              />

              <button className="authButton" >{ buttonName }</button>
              <p className="errors" >{ errors }</p>
              <button
                onClick={this.handleDemoClick}
                className="authButton">Demo Log in
              </button>
              <p className="agreement" >{ agreement }</p>
            </form>

            <div className="questionSec" >
              <section className="question">
                <p className="pText" >{question}</p>
                <Link
                  className="logSignLink"
                  to={sendPath}>
                  <span >{showLink}</span>
                </Link>
              </section>

            </div>
          </section>
        </div>

        <div className="icon-div">
          <a
            target="_blank"
            href="https://github.com/AnthonyRondinone/artHouse">
            <i className="foot-icons fa fa-github" aria-hidden="true"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/anthony-rondinone-a1111446">
            <i className="foot-icons fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a
            target="_blank"
            href="http://anthonyrondinone.com"><i
            className="foot-icons fa fa-laptop"
            aria-hidden="true"></i>
          </a>
          <a
            target="_blank"
            href="mailto:a.rondinone@gmail.com"><i
            className="foot-icons fa fa-envelope"
            aria-hidden="true"></i>
          </a>
        </div>

      </div>
    );
  }

}

export default (SessionForm);
