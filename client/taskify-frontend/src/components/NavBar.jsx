import React, { useEffect, useState } from 'react'
import "./NavBar.css"
import { NavLink } from "react-router-dom"
import axios from "axios"

const Headers = () => {
    const [userdata, setUserdata] = useState({});
    console.log("response", userdata)


    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:1000/login/sucess", { withCredentials: true });

            setUserdata(response.data.user)
        } catch (error) {
            console.log("error", error)
        }
    }

    // logoout
    const logout = () => {
        window.open("http://localhost:1000/logout", "_self")
    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <>
            <header>
                <nav>
                    <div className="left">
                        <NavLink to="/todo">
                            <img className='profile' src='../Taskify.jpg' alt='Img not Found' style={{ height: "4em" }}  ></img>
                        </NavLink>

                    </div>
                    <div className="right">
                        <ul>
                            
                            {
                                Object?.keys(userdata)?.length > 0 ? (
                                    <>
                                
                                        
                                        <li>
                                            <NavLink to="/dashboard">
                                                Todo
                                            </NavLink>
                                        </li>
                                        
                                        <li style={{ color: "white", fontWeight: "bold" }}>{userdata?.displayName}</li>
                                        <li>
                                            <img src={userdata?.image} style={{ width: "50px", borderRadius: "50%" }} alt="" />
                                        </li>
                                        <li onClick={logout}>Logout</li>
                                    </>
                                ) : <li>
                                  
                                </li>
                            }



                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Headers