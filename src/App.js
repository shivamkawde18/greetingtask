import logo from './logo.svg';
import './App.css';

function App() {

  let date=new Date();
  let h=date.getHours();
  return (
    <div className="App">
    {
      //using conditional rendring
      h<12?<h2 style={{color:"green"}} >Good Morning from React. You are having coffee with me</h2>
      :h>=12? <h2 style={{color:"red"}} >Good Afternoon from React. Wanna lunch with me</h2>:h>18?<h2 style={{color:"orenge"}} >Good Evening from React. Lets drink together</h2>:""
    }
    </div>
  );
}
export default App;
