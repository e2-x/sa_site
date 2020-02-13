import React, { Component } from 'react';
import logo_v2 from '../img/logo_v2.png';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import '../style/App.css';
import Nav from './nav';
import About from './about';
import Work from './work';
import Logo from './logo';

// class App extends Component {

//   state = {
//     response: '',
//     post: '',
//     responseToPost: '',
//   };

//   componentDidMount(){
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }

//   callApi = async () => {
//     const response = await fetch('/api/hello');
//     const body = await response.json();
//     if(response.status !== 200) {
//       process.on('uncaughtException');
//       throw Error(body.message);
//     }

//     return body;
//   };

//   handleSubmit = async e => {
//     e.preventDefault();
//     const response = await fetch('api/world', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ post: this.state.post }),
//     });
//     const body = await response.text();
//     this.setState({ responseToPost: body});
//   };

// render() {
//     return (
//       <div className="App">
//         <p>{this.state.response}</p>
//           <form onSubmit={this.handleSubmit}>
//             <p>
//               <strong>Post to Server:</strong>
//             </p>
//             <input
//               type="text"
//               value={this.state.post}
//               onChange={e => this.setState({ post: e.target.value })}
//             />
//             <button type="submit">Submit</button>
//           </form>
//         <p>{this.state.responseToPost}</p>

//         <header className="App-header">
//           <img src={logo_v2} className="App-logo" alt="logo" />
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// } 
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Logo />
        <Nav />
        <div className="content">
          <Route exact path="/" component={About}/>
          <Route path="/work" component={Work}/>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
