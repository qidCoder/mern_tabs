import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';

function App() {


  //these are a list of tabs
  const tab_list = [
    {tab_name: "Tab 1", tab_content: "this is the content for tab 1", callback(){
      console.log(this.tab_name, "was clicked");
    }},
    {tab_name: "Tab 2", tab_content: "this is the content for tab 2", callback(){
      console.log(this.tab_name, "was clicked");
    }},
    {tab_name: "Tab 3", tab_content: "this is the content for tab 3", callback(){
      console.log(this.tab_name, "was clicked");
    }},
  ];

  return (
    <div className="App">
      <Tabs tab_list={tab_list}/>

    </div>
  );
}

export default App;
