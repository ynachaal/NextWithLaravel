'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from "../../common/header";

const Page = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const Url = 'http://127.0.0.1:8000/api';

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get(Url+"/students", {
                    withCredentials: true, // Include credentials in the request
                }); // Update the URL if needed
                console.log(response);

                setStudents(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching students:', error);
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <section className="container">
            <Header/>
            <div className="container mt-5">
                <div className="mt-5 card rounded-4 shadow border-light p-3">
                    <h3 className="mb-4 text-center text-primary fw-bold">Results</h3>
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 table-hover">
                            <thead className="table-dark">
                            <tr>
                                <th className="col">#</th>
                                <th className="col-3">Name</th>
                                <th className="col-3">Email Address</th>
                            </tr>
                            </thead>
                            <tbody>
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.marks}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>

)
    ;
};

export default Page;
