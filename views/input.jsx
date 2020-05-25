import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, InputGroup, FormControl, Form, FormGroup, Label, FormText, Row, Col } from 'react-bootstrap';
import axios, {post} from 'axios';

export class Input extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      file_: null
    };
    this.onSampleQuestionClick = this.onSampleQuestionClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
  }

  /**
   * When pressing the Ask button
   */
  onSubmit() {
    this.props.onClassify(this.state.text);
  }

  onChange(e) {
    this.setState({ text: this.state.text, file_: e.target.files[0] });
  }

  onSubmit2() {
    let formData = new FormData();
    formData.append('file', this.state.file_);
    this.props.onClassifyCSV(formData);
    this.props.show_spinner();

    //var file = new File(this.state.file_)
    //
  }

  /**
   * On sample question click
   */
  onSampleQuestionClick(e) {
    this.setState({ text: e.target.text, file_: this.state.file_ });
    this.props.onClassify(e.target.text);
  }

  /**
   * During changes to the text input
   */
  handleInputChange(e) {
    this.setState({ text: e.target.value,
                    file_: this.state.file_ });
  }

  /**
   * On Input text key press
   */
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onClassify(this.state.text);
    }
  }

  render() {
    return (
      <Container>
          <h2>
            Ingresa una excusa sobre atraso de pagos
          </h2>
          <Container>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Ingresa una excusa *"
                aria-label="Ingresa una excusa *"
                aria-describedby="basic-addon2"
                autoFocus
                id="question"
                value={this.state.text}
                onChange={this.handleInputChange}
                onKeyPress={this.handleKeyPress}
                required
              />
              <Button variant="outline-primary"
                disabled={this.state.text.trim().length === 0}
                onClick={this.onSubmit}>
                  Analizar
              </Button>
            </InputGroup>
          </Container>
          <Container>
            
            <Form>
              <p>
              <input type="file" name='file' onChange={(e) => this.onChange(e)} />
              </p>
              <p>
              <Button variant="outline-primary"
                  onClick={this.onSubmit2}>
                    Procesar batch
              </Button>
              </p>
            </Form>
          </Container>
       </Container>
      
    );
  }
}

Input.propTypes = {
  data: PropTypes.object, // eslint-disable-line
  onClassify: PropTypes.func.isRequired,
};

export default Input;
