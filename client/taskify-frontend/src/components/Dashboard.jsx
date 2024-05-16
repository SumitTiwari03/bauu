import axios from 'axios';
import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const getUser = useCallback(async () => {
        try {
            const response = await axios.get("http://localhost:1000/login/success", { withCredentials: true });
            console.log("response", response);
        } catch (error) {
            navigate("/todo");
        }
    }, [navigate]);

    useEffect(() => {
        getUser();
    }, [getUser]);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;
 