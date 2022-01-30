import './App.css';
import Button from './components/button';
import StyledCardList from '@bit/nsebhastian.post-card-components.styled-card-list';


function App() {

  const postList = [
    {
      id: 1,
      image: "https://picsum.photos/id/134/300/200",
      title : "My First Post",
      date : "06/26/2020",
      description : "This is my first post. Hello World!",
      buttonTitle : "Read this post",
      buttonClick : () => alert("This should take you to the post link")
    },
    {
      id: 2,
      image: "https://picsum.photos/id/5/300/200",
      title : "My Second Post",
      date : "06/27/2020",
      description : "This is my second post. Keep up the rythm!",
      buttonTitle : "Read this post",
      buttonClick : () => alert("This should take you to the post link")
    }
  ]
  
  return (
    <div className="App">
      {/* In this app i exported button component to bit and imported Styled card list from bit  */}
      <h3>Exported Button Component</h3>
      <Button/>
      <br/>
      <h3>Imported Card Component</h3>
      <StyledCardList postList={postList} />
    </div>
  );
}

export default App;
