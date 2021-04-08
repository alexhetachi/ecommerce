import React, { useState } from 'react';
// import { connect } from 'react-redux';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
  } from 'reactstrap';
// import { login } from '../../actions/authActions';
// import { clearErrors } from '../../actions/errorActions';

function LoginModal(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState(null)
    const [modal, setModal] = useState(false)

    const toggle = () => {
        setModal(!modal)
        setMsg(null)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
          email,
          password
        };
        console.log(user)
        toggle()
        // this.props.login(user)
    }

    return(
        <div>
        <NavLink onClick={toggle} href="#">
          <span style={{color:'white'}}>Login</span>
        </NavLink>
  
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Login</ModalHeader>
          <ModalBody>
            {msg ? <Alert color="danger">{msg}</Alert> : null}
            <Form onSubmit={onSubmit}>
              <FormGroup>  
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="mb-3"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
  
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="mb-3"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Login
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
}

export default LoginModal;