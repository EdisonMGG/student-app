import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewStudent = () => {
    const [data, changeData] = useState (
        [
            { name: "Vivek", Admno: "1", rollno: "60", image: "https://img.freepik.com/premium-vector/boy-student-graduate-cap-icon-sign-logo-color-isolated-image-circle-isolated-vector-illustration_619989-1110.jpg?w=740" },
            { name: "Edison", Admno: "2", rollno: "49", image: "https://letsenhance.io/static/ae8632b7d4630ece11540c7172f9eea1/0455d/PrintingBefore.avif"},
            { name: "Lenex", Admno: "3", rollno: "16", image: "https://letsenhance.io/static/ae8632b7d4630ece11540c7172f9eea1/0455d/PrintingBefore.avif" }
        ]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {       
                                data.map(
                                    (value, index) => {
                                        return  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                                <div class="card">
                                                    <img src={value.image} class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h5 class="card-title">{value.name}</h5>
                                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <a href="" class="btn btn-primary">Go somewhere</a>
                                                    </div>
                                                </div>
                                            </div>
                                    }
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewStudent
