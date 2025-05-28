import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiUser, FiLock, FiArrowRight } from 'react-icons/fi';

const Signin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post(
                "https://elvis15.pythonanywhere.com/api/signin",
                {
                    email: formData.email,
                    password: formData.password
                }
            );

            if (response.data.user) {
                localStorage.setItem("user", JSON.stringify(response.data.user));
                navigate('/');
            }
        } catch (error) {
            setError(error.response?.data?.message || "Invalid credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="signin-container">
            <div className="uiverse-card">
                <div className="card-header">
                    <h2 className="card-title">Welcome Back</h2>
                    <p className="card-subtitle">Sign in to continue</p>
                </div>

                <form onSubmit={handleSubmit} className="card-body">
                    {error && <div className="error-message">{error}</div>}

                    <div className="input-group">
                        <FiUser className="input-icon" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <FiLock className="input-icon" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? (
                            <span className="spinner"></span>
                        ) : (
                            <>
                                Continue
                                <FiArrowRight className="arrow-icon" />
                            </>
                        )}
                    </button>

                    <div className="card-footer">
                        <span className="footer-text">
                            Don't have an account?{' '}
                            <a href="/signup" className="footer-link">
                                Create account
                            </a>
                        </span>
                    </div>
                </form>
                </div>
            
        </div>
    );
};

export default Signin;