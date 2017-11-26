import React from 'react';

function ListItem(props){
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

export function NumberList(props){
  const numbers = props.numbers;
  //A good rule of thumb is that elements inside the map() call need keys
  const listItems = numbers.map((number) => 
    <ListItem key={number.toString()} value = {number} />
  );
  
  return(
    <ul>
      {listItems}
    </ul>
  );
}

export function Blog(props){
  const sideBar = (
    <ul>
      {props.posts.map((post)=>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  
  return(
    <div>
      {sideBar}
      <hr />
      {content}
    </div>
  );
}


