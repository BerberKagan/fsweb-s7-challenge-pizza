import React from "react";
import { Link } from "react-router-dom";

import "./css/ApprovalPage.css";

const ApprovalPage = () => {

        return (
            <div className="Approval">
                <div className="ApprovalHeader">
                    <h1><Link style={{ textDecoration: "none", color: "white" }} to="/">Teknolojik Yemekler</Link></h1>
                </div>

                <div className="ApprovalText">
                    <p>lezzetin yolda!</p>
                    <h1>SİPARİŞ ALINDI</h1>
                    <hr />
                </div>
            </div>
        );
    };

export default ApprovalPage;
