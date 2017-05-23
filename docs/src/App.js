import { version } from 'inferno';
import Component from 'inferno-component';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import Logo from './logo';
import BasicExample from './BasicExample';
import BasicExampleText from '!raw-loader!./BasicExample.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hello this is a generic Inferno component</h2>
        </div>
        <div>
          Documentation incoming!
        </div>

        <div>
          Basic Example:

          <SyntaxHighlighter language="javascript" style={docco}>
            {BasicExampleText}
          </SyntaxHighlighter>
          <BasicExample />
        </div>
      </div>
    );
  }
}

export default App;
