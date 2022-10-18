import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  const body = document.getElementById("root");

  return ReactDOM.createPortal(children, body);
};

export default Portal;
