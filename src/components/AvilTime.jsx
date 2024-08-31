import React from 'react'

function AvilTime() {
  return (
    <>
        <div id="available-time" className="tab-pane active">
      <h2>Select time</h2>
      <div className="seat-selection d-flex justify-content-center align-items-center">
        {/* Seat selection grid (like a ticket booking system) */}
        <div className="seat-row d-flex flex-column justify-content-center align-items-center">
          <div className="seat">9am</div>
          <div className="seat">10am</div>
          <div className="seat">11am</div>
          <div className="seat">12am</div>
        </div>
        <div className="seat-row d-flex flex-column justify-content-center align-items-center">
          <div className="seat">2am</div>
          <div className="seat">3am</div>
          <div className="seat">4am</div>
          <div className="seat">5am</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AvilTime;