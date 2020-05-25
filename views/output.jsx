import React from 'react';
import {
  Icon
} from 'watson-react-components';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Navbar, Jumbotron, Button, Container } from 'react-bootstrap';


export default function (prop) {
  return (
    <Container>
      {(prop.data || prop.error) ? 
      <h2>Resultado</h2> : null}
      {prop.data
        ? (
              <p>
                  El clasificador de lenguaje natural esta<b>&nbsp;
                  
                    {Math.floor(prop.data.classes[0].confidence * 100)}
                  %</b>
                  
                  &nbsp;seguro de que se esta hablando de<b>&nbsp;
                  {prop.data.top_class}
                  </b>.
                </p>

        ) : null
      }
      {prop.error
        ? (
          <div className="service-error">
            <Icon type="error" />
            <p className="base--p service-error--message">{prop.error}</p>
          </div>
        ) : (null)
      }
      
    </Container>       
  );
}

