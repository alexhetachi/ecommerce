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
// import { register } from '../../actions/authActions';
// import { clearErrors } from '../../actions/errorActions';

function RegisterModal(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [msg, setMsg] = useState(null)
    const [modal, setModal] = useState(false)

    const toggle = () => {
        setModal(!modal)
        setMsg(null)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
          name,
          email,
          password,
          password2
        };
        console.log(user)
        toggle()
        // this.props.register(user)
    }

    return(
        <div>
        <NavLink onClick={toggle} href="#">
          <span style={{color:'white'}}>Register</span>
        </NavLink>
  
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Register</ModalHeader>
          <ModalBody>
            {msg ? <Alert color="danger">{msg}</Alert> : null}
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="mb-3"
                  value={name}
                  onChange={setName}
                />
  
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="mb-3"
                  value={email}
                  onChange={setEmail}
                />
  
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="mb-3"
                  value={password}
                  onChange={setPassword}
                />
                <Label for="password">Rewrite Password</Label>
                <Input
                  type="password"
                  name="password2"
                  id="password2"
                  placeholder="Rewrite Password"
                  className="mb-3"
                  value={password2}
                  onChange={setPassword2}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Register
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
}

export default RegisterModal;