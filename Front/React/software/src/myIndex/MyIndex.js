import Header from "../Layout/Header";
import Middle from "../Layout/Middle";
import Foot from "../Layout/Foot";
import React from "react";

export default function MyIndex( ) {

    return (
        <div>
            <div className="Head">
                <Header/>
            </div>
            <div className="Middle">
                <Middle/>
            </div>
            <footer className="footer">
                <Foot/>
            </footer>
        </div>
    )

}
