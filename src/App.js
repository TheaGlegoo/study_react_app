import logo from './logo.svg';
import './App.css';

// C++やJavaのimportやincludeに相当する書きかた。
import MyTable from './MyTable.js';


function App() {
  
  return (
    <div className="App">
      <MyTable/>
    </div>
    
  );
}

// C++などと違い、importしてもファイルごと読み込まれるわけではない。
// exportの後ろに書いたモノだけがimport時に読み込まれる対象になる。
export default App;
