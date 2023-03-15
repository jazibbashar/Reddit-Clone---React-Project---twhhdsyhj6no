import React from 'react'
import { useState , useEffect} from 'react';
import '../styles/App.css';
import { PostDetail } from './PostDetail';
import LoginForm from './SignUp';

const App = ({detail}) => {
  const [post, setPost] = useState(false);
  const [logindata,setLogindata] = useState(false)
  const [mydata,setMydata] = useState();

  useEffect(() => {
    const getData = localStorage.getItem("postdetail");
    if (getData) {
      setMydata(JSON.parse(getData));
    }
  }, []);
  
    function upvote(key) {
          const user = JSON.parse(sessionStorage.getItem("user"));
          if (user == null) {
            return alert("Login to Upvote");
          }
          const data = localStorage.getItem("postdetail");
          const data1 = JSON.parse(data);
          if (data1) {
            data1[key].upvote = data1[key].upvote + 1;
            console.log(data1);
            localStorage.setItem("postdetail", JSON.stringify(data1));
            setMydata(data1);
          }
        }
        
        function downvote(key) {
          const user = JSON.parse(sessionStorage.getItem("user"));
          if (user == null) {
            return alert("Login to Downvote");
          }
          const data = localStorage.getItem("postdetail");
          const data1 = JSON.parse(data);
          if (data1) {
            data1[key].downvote = data1[key].downvote + 1;
            console.log(data1);
            localStorage.setItem("postdetail", JSON.stringify(data1));
            setMydata(data1);
          }
        }
        function deletePost(index) {
          const newData = [...mydata];
          newData.splice(index, 1);
          localStorage.setItem('postdetail', JSON.stringify(newData));
          setMydata(newData);
        }
        
    return (
    <div id="main" className='main'>
    
    <nav className='nav-bar'>
    <button type='button' className='btn' onClick={() => {setLogindata(true)}}>Login</button>
    <button type='button' className='btn' onClick={() => {
      const data = JSON.parse(sessionStorage.getItem("user"));
      if (data == null) {
        return alert("Login to add post");
      }
      setPost(true);
    }}>Add new post</button>
    <span>
    <img className='image' src='https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png'/>
    <h2   style={{display:'flex', textAlign: 'center',justifyContent:'center', fontFamily: 'Helvetica Neue', 
    fontWeight: 'bold', fontSize: '30px', 
    marginBottom: '1px',marginTop:'-40px' }}>Welcome to Reddit</h2>
        <div className="parent"></div>
    </span>
  </nav>
   <main>
        <div className='parent'>
          {post && <PostDetail onClick={() => setPost(false)} />}
          {logindata && <LoginForm onClick={() => setLogindata(false)} />}
          {
            mydata && mydata.map((ele, index) => {
              return <>
              
                <div className='child' key={index}>

                  <div className='btn-child'>
                    <div className='shadow'>
                    
                      <button type='button' onClick={() => upvote(index)} className='upBtn'> ⬆</button>
                      <div className='inr-der'>{ele.upvote}</div>
                    </div>
                    <div className='shadow'>
                      <button type='button' className='downbtn' onClick={() => downvote(index)} >⬇</button>
                      <div className='inr-der'>{ele.downvote}</div>
                    </div>
                  </div>
                  <div className='description'>
                    <h3 className='title'>{ele.title}</h3>
                    <p className='my-post'>{ele.description}</p>
                    <h3 onClick={deletePost} id= "delete">Delete Post</h3>
                  </div>
                </div>
              </>
            })
          }
        </div>
      </main>
    </div>
  )
}


export default App;

// https://glistening-tiramisu-a8ed1b.netlify.app