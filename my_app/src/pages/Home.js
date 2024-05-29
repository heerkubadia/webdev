import { useState } from "react";

const Home = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCapClick = () => {
    let newText = text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setText(newText);
  };

  const handleSpaceClick = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  const handleClearClick = () => {
    setText('');
  };

  return (
    <div className="container mt-5">
      {/* heading */}
      <h1> Welcome to TextUtils!</h1>
      <br />

      {/* textarea */}
      <div className="mb-3">
        <label htmlFor="textArea" className="form-label">Enter the text you would like to analyze!</label>
        <textarea
          className="form-control"
          placeholder="Start typing"
          value={text}
          onChange={handleChange}
          id="textArea"
          rows="8"
        ></textarea>
      </div>

      {/* buttons */}
      <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>
        Change to Uppercase
      </button>

      <button type="button" className="btn btn-primary mx-1" onClick={handleLowClick}>
        Change to Lowercase
      </button>

      <button type="button" className="btn btn-primary mx-1" onClick={handleCapClick}>
        Capitalize
      </button>

      <button type="button" className="btn btn-primary mx-1" onClick={handleSpaceClick}>
        Remove extra spaces
      </button>

      <button type="button" className="btn btn-primary mx-1" onClick={handleCopyClick}>
        Copy Text
      </button>

      <button type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
      </button>


      {/* Extra features */}
      <br /><br />
      <h6>Word count: {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</h6>
      <h6>Characters: {text.length}</h6>
      <br />
      <h5>Preview your text</h5>
      <br />
      {text.length ? text : "Nothing to preview here"}
    </div>
  );
};

export default Home;
