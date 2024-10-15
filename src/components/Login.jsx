import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Username is required'),
            password: Yup.string()
                .required('Password is required')
                .min(6, 'Password must be at least 6 characters long'),
        }),
        onSubmit: (values) => {
            // Handle login logic here
            console.log('Login values:', values);
        },
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email/Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username" // Set the name to match initialValues
                            className={`w-full p-2 border rounded ${formik.touched.username && formik.errors.username ? 'border-red-500' : 'border-gray-300'}`}
                            onChange={formik.handleChange} // Update Formik state
                            onBlur={formik.handleBlur} // Mark field as touched
                            value={formik.values.username} // Bind input value to Formik state
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className="text-red-500 text-sm">{formik.errors.username}</div>
                        ) : null}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password" // Set the name to match initialValues
                            className={`w-full p-2 border rounded ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'}`}
                            onChange={formik.handleChange} // Update Formik state
                            onBlur={formik.handleBlur} // Mark field as touched
                            value={formik.values.password} // Bind input value to Formik state
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500 text-sm">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <a href="#" className="text-sm text-[#E43C5C] hover:underline">Forgot Password?</a>
                        <a href="/signup" className="text-sm text-[#E43C5C] hover:underline">Sign Up</a>
                    </div>
                    <button type="submit" className="w-full bg-[#E43C5C] text-white p-2 rounded hover:bg-[#E43C5C]">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
