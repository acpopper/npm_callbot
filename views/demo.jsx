import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import { CSVLink, CSVDownload } from "react-csv";
import { Spinner } from 'react-bootstrap';
import { Input } from './input.jsx';
import Output from './output.jsx';


export class Demo extends Component {
  constructor() {
    super();
    this.onClassify = this.onClassify.bind(this);
    this.onClassifyCSV = this.onClassifyCSV.bind(this);
    this.show_spinner = this.show_spinner.bind(this);

    this.state = {
      data: null, // the /classify response
      error: null, // the error from calling /classify
      csv: [['none']],
      spinner: false,
      csv_ready: false
    };
  }

  onClassify(text) {
    $.post('/api/classify', { text })
      .done((data) => this.setState({ data }))
      .fail((error) => {
        let errorMessage = 'Hubo un problema con la solucitud, por favor intentar otra vez';
        if (error.responseJSON && error.responseJSON.error) {
          errorMessage = error.responseJSON.error;
        }
        this.setState({ error: errorMessage });
        console.error(error);
      })
      .always(() => {
        $('html, body').animate({
          scrollTop: $('.output-container').offset().top,
        }, 500);
      });
  }

  show_spinner() {
    this.setState({spinner: true})
  }

  onClassifyCSV(formData) {
    $.ajax({url: '/api/classify_many', type: 'POST', 
            processData: false, contentType: false, 
            data: formData})
            .then((data) => {
              var outs = [];
              JSON.parse(data)[0].forEach(element => {
                outs.push([element["top_class"]]);
                console.log(element["top_class"]);
              });
              this.setState({csv: outs, csv_ready: true, spinner: false});
            });
  }

  render() {
    const { data, error, spinner, csv_ready } = this.state;
    return (
      <section className="_container _container_large">
        <div className="row">
          <Input data={data} onClassify={this.onClassify} onClassifyCSV={this.onClassifyCSV} show_spinner={this.show_spinner}/>
          <Output data={data} error={error} />
          {this.state.spinner && <Spinner animation="border" spinner={spinner}/>}
          {this.state.csv_ready && <CSVLink data={this.state.csv}>Descargar CSV</CSVLink>}
        </div>
      </section>
    );
  }
}

Demo.propTypes = {
};

export default Demo;
