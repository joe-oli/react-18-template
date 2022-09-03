// import logo from './logo.svg';
import './App.css';
import PageWithTable from './pages/PageWithTable';

import Utils from './shared/Utils';

function App() {



  return (
    <div className="App">
      {/* html,body are at 100%; 
      div.App is inside div.root, which is inside `body`; 
      so app should be at 100% - the navbar height (fixed) */}
      <nav className="App-nav">
        <div className="nav_title">App Title</div>
        <ul className="nav_list">
          <li className="nav_item">Services</li>
          <li className="nav_item">About Us</li>
          <li className="nav_item">Blog</li>
        </ul>
      </nav>

      {/* content + footer are siblings, but together should total 100% - (nav-height) */}
      <div className="App-content">
          <p>Lorem ipsum Enim do velit exercitation fugiat cillum labore et dolore ad minim dolor amet tempor nisi sunt Excepteur voluptate laborum et Duis labore cupidatat officia laboris minim cupidatat sit ad incididunt dolor in nulla elit sint do sit aliqua eu ut irure commodo exercitation dolore consequat est laborum Duis in dolore esse est dolore voluptate amet fugiat cupidatat Duis proident consequat nostrud Excepteur ea minim nisi eiusmod sed amet irure id ut officia occaecat nisi elit velit qui aliquip adipisicing consequat adipisicing aute laboris do consectetur sit officia elit in tempor aute eiusmod nulla dolore non sint in fugiat adipisicing amet quis in velit sit sunt Duis culpa deserunt Duis sed elit veniam exercitation Ut pariatur magna et id esse dolor dolore aliquip et in cillum commodo commodo et quis veniam magna irure laborum commodo enim tempor dolore velit ut adipisicing consequat dolore enim sunt eiusmod irure aliquip Duis magna laboris non in aliquip magna dolor dolore nulla nisi proident cupidatat laboris eu commodo adipisicing adipisicing ut aliquip eu aute veniam sint magna mollit nostrud ut sed consectetur et tempor consequat nisi nostrud dolore et officia adipisicing labore id enim nisi reprehenderit sunt fugiat ea Ut dolore sed eu in id velit esse et est labore eiusmod culpa adipisicing quis ea consectetur ea fugiat in culpa magna do laboris.</p>
  
        <details>
          <summary>More info</summary>
          <p>Lorem ipsum Proident irure magna dolore quis laboris deserunt ad aliquip non nostrud laborum sed et commodo ut elit cupidatat amet dolore est Ut aute et nulla dolore officia velit Ut ullamco id qui velit cupidatat dolore sed deserunt sed sed sit mollit labore esse laboris cupidatat Duis quis est ea mollit id nostrud Ut nostrud magna veniam cupidatat officia magna consectetur adipisicing sit exercitation est nisi ut fugiat exercitation non in dolor aute laborum anim incididunt commodo ut Duis cupidatat do in aliquip ea amet elit eiusmod ea nulla sed amet labore Duis incididunt do anim dolor culpa non aute cupidatat enim reprehenderit do eu esse commodo et dolor aliquip magna sint Excepteur deserunt dolore laboris magna occaecat non ea in proident voluptate nulla amet officia consequat Ut laboris irure non incididunt Ut eu id aliquip ea minim dolor nostrud ad labore incididunt ut in veniam sunt eiusmod est eiusmod anim sed ea pariatur id tempor commodo sint qui sit do Excepteur ut.</p>
          <p>Lorem ipsum In ea ullamco dolor magna et eiusmod nisi do commodo aliqua sit id ut sint eiusmod aliquip occaecat irure consectetur amet nisi amet aliquip commodo occaecat incididunt aliqua dolor id officia aliqua irure fugiat ullamco occaecat in Duis occaecat dolor labore ea cillum in commodo in magna et nulla ut incididunt eiusmod deserunt aliquip aute enim officia proident culpa officia minim magna nulla eiusmod mollit minim dolore ullamco adipisicing non anim Duis sint dolor consequat occaecat irure amet non aute proident in Ut Duis deserunt dolore do laborum id nulla minim id anim dolor nulla ad amet tempor sint ut adipisicing aliqua adipisicing in dolor sunt sunt in sint ad cupidatat elit dolor ullamco eiusmod voluptate eu nostrud aliqua exercitation dolor voluptate labore tempor aute velit laborum velit qui incididunt ullamco nisi laborum consectetur qui dolor laboris officia id ut aute consectetur nostrud aliqua dolore enim velit incididunt quis ea pariatur ut labore Excepteur minim reprehenderit velit magna pariatur ad magna dolore irure consectetur fugiat nostrud ut cupidatat aliqua consequat sit consectetur dolor in ut ullamco irure adipisicing est ad quis sit elit pariatur non elit fugiat aute ad minim ullamco sint minim laboris et occaecat laboris aliquip enim deserunt consequat ut ad commodo adipisicing cillum Excepteur eu ex commodo anim aliqua dolor laborum anim consequat nostrud irure cillum cillum voluptate sit anim veniam ut id et non ea aliqua cupidatat officia amet tempor occaecat et sit.</p>
          <p>Lorem ipsum Do dolor proident enim occaecat dolor esse non in sit dolore labore ad dolor deserunt qui ullamco dolor nisi anim non aliquip proident ut sed ad pariatur sit labore minim pariatur est ut incididunt nisi id veniam ut officia minim ex nulla culpa quis elit in id Duis adipisicing magna quis consectetur velit sunt aute ea pariatur reprehenderit dolor officia id deserunt id quis do culpa non minim consequat ad fugiat magna tempor eiusmod Duis anim elit deserunt deserunt id Duis qui tempor ad do aliqua nisi elit in dolor culpa nulla adipisicing dolore tempor sunt eiusmod voluptate eiusmod in dolore irure incididunt incididunt velit Duis sed non exercitation proident nostrud tempor Ut veniam enim aliquip ut eu dolore in mollit dolor ex laboris do amet laborum aute fugiat sed in officia aute ut est nulla Ut elit aliqua esse officia Ut eiusmod nisi officia pariatur elit aliquip labore.</p>
        </details>

        <details>
          <summary>
            Open to see a test Component
          </summary>

          <p>Current date is: {Utils.currDateAsYMDStr()}</p>
          <PageWithTable />
        </details>
      </div>


      <footer className="App-footer">
        <p>&copy; Jolisoft International, 2022-</p>
      </footer>
    </div>
  );
}

export default App;
