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
          <div className="seat">2</div>
          <div className="seat">3</div>
          <div className="seat">4</div>
        </div>
        <div className="seat-row d-flex flex-column justify-content-center align-items-center">
          <div className="seat">5</div>
          <div className="seat">6</div>
          <div className="seat">7</div>
          <div className="seat">8</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AvilTime;