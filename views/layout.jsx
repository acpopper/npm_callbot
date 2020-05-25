import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from 'watson-react-components';
import { Navbar, Jumbotron, Button, Container } from 'react-bootstrap';

// eslint-disable-next-line
const DESCRIPTION = 'El clasificador de lenguaje natural aplica tecnicas de aprendizaje profundo para realizar predicciones acerca de las mejores clases predefinidas para frases u oraciones.';
const TERMS_OF_USE_URL = 'https://watson-developer-cloud.github.io/terms?name=Natural%20Language%20Classifier%20Demo';



export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
    }
  }

  componentDidMount() {
    if (window && window.location.search.includes('hide_header')) {
      this.setState({ showHeader: false });
    }
  }

  render() {
    const { showHeader, children } = this.props;

    return (
      <html lang="en">
        <head>
          <title>
            Clasificador de lenguaje natural
          </title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="og:title" content="Natural Language Classifier Demo" />
          <meta name="og:description" content={DESCRIPTION} />
          
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
          <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
          <link rel="stylesheet" href="/css/watson-react-components.min.css" />
          <link rel="stylesheet" href="/css/style.css" />
          
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
        </head>
        <body>
          <Navbar className='color-nav' variant="dark">
            <Navbar.Brand href="">

              <img
                alt=""
                src="images/image.png"
                width="32"
                height="32"
                className="d-inline-block align-top"
              />{' '}
              Clasificador de lenguaje natural
            </Navbar.Brand>
          </Navbar>
            <Jumbotron>
              <Container>
                <h1>Clasificador de lenguaje natural</h1>
                <p>
                  {DESCRIPTION}
                </p>
              </Container>
            </Jumbotron>
          <div id="root">
            {children}
          </div>
          {/*}
          <div>
            <Footer style={{backgroundColor: '#eb6e60'}}/>
          </div>
          */}
          <script type="text/javascript" src="js/bundle.js" />
          <script type="text/javascript" src="https://cdn.rawgit.com/watson-developer-cloud/watson-developer-cloud.github.io/master/analytics.js" />
        </body>
      </html>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
