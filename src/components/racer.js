import React from "react";

const Racer = ({ racer }) => {
    const fullName =
        racer.fullName.length > 35
            ? `${racer.fullName.slice(0, 34)}...`
            : racer.fullName;

    return (
        <div className="container">
            <img className="avatar" src={racer.avatar} alt="Avatar" />
            <div className="content">
                <p style={{fontWeight: "bold"}}>{fullName}</p>
                <div className="items">
                    <div className="item">
                        Max Speed: <span style={{fontWeight: "bold"}}>{racer.maxSpeed}</span>
                    </div>
                    <div className="item">
                        Race Time: <span style={{fontWeight: "bold"}}>{racer.raceTime}</span>
                    </div>
                    <div className="item">
                        Penalty Time: <span style={{fontWeight: "bold"}}>{racer.penaltyTime}</span>
                    </div>
                    <div className="item">
                        Rating: <span style={{fontWeight: "bold"}}>{racer.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Racer
