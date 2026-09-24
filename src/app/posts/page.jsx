import React from 'react';

// const getPosts = async() =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();
// }

// const getPosts3 = async() =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();

//     if(!res.ok){
//         throw new Error ('failed to patch')
//     }
// }

// const getPosts2 = async() =>{
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();
//     } catch(error){
//         throw new Error ("failed to fetch the posts")
//     }
    
// }

const PostPage = async() => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    // const posts = await postsPromise();


    return (
        <div>
            <h2>Hellow Posts: {posts.length}</h2>
        </div>
    );
};

export default PostPage;