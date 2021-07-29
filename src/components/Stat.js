import React from 'react';
import Card from 'react-bootstrap/Card'

function Stat() {
    return (
        <div id="stat-box">
            <div id="stat-text-box">
                <h2>Advanced Statistics</h2>
                <p className="text">Track how your links are performing across the web with our
                    advanced statistics dashboard.</p>
            </div>
            <div id="cardCollection">
                <Card className="stat-card">
                    <div className="stat-card-icon-container">
                        <img className="stat-card-icon" src="images/icon-brand-recognition.svg" alt="brand recognition" />
                    </div>
                    <Card.Body>
                        <Card.Title className="card-title">Brand Recognition</Card.Title>
                        <Card.Text className="text">
                            Boost your brand recognition with each click. Generic links don’t
                            mean a thing. Branded links help instil confidence in your content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="stat-card">
                    <div className="stat-card-icon-container">
                        <img className="stat-card-icon" src="images/icon-detailed-records.svg" alt="detailed records" />
                    </div>
                    <div className="transition-bar"></div>
                    <Card.Body>
                        <Card.Title className="card-title">Detailed Records</Card.Title>
                        <Card.Text className="text">
                            Gain insights into who is clicking your links. Knowing when and where
                            people engage with your content helps inform better decisions.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="stat-card">
                    <div className="stat-card-icon-container">
                        <img className="stat-card-icon" src="images/icon-fully-customizable.svg" alt="Fully Customizable" />
                    </div>
                    <div className="transition-bar"></div>
                    <Card.Body>
                        <Card.Title className="card-title"> Fully Customizable</Card.Title>
                        <Card.Text className="text">
                            Improve brand awareness and content discoverability through customizable
                            links, supercharging audience engagement.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div >
    )
}
export default Stat;