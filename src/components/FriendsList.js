import React, { useState, useEffect } from 'react';
import axios from 'axios';
const FriendsList = () => {

    //STEP 4: MAKE A CALL TO THE API TO RETREIVE or GET ALL FRIENDS!
    const [friends, setFriends] = useState([]);
    

    useEffect(()=> {
        const token = localStorage.getItem('token');

        axios.get('http://localhost:9000/api/friends',
            { headers: {
                authorization: token
            }
            })
            .then(res => {
                console.log(res)
                setFriends(res.data)
                
            })
            .catch(err => {
                console.log(err)
            })
    }, []);



    return (
        <div>
            <h2>FriendList</h2>
            <ul>
                {
                    friends.map(friend=>{
                        return <li>{friend.name}-{friend.age}-{friend.email}</li>
                    } )
                }
            </ul>
        </div>
      
    )
  }
export default FriendsList;