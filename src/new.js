<div className="d-flex flex-column justify-content-center align-items-center h-100">
  {/* Ticket remaining display */}
  <div className="py-1">Tickets remaining: {tickets}</div>
  <p>Status = {status}</p>
  {/* Action Buttons */}
  {tickets > 0 ? (
    <button className="btn btn-primary btn-lg" onClick={onVotingStart}>
      {/* TODO 7.b - Call onBuyTicket on click */}
      {/* TODO 7.c - Show "loading..." when buying operation is pending */}
      {loading ? "Loading..." : "Start Voting"}
    </button>
  ) : (
    <button className="btn btn-success btn-lg">
      {/* TODO 11.b - Call onEndGame on click */}
      {/* TODO 11.c - Show "loading..." when buying operation is pending */}
      End Game
    </button>
  )}
  {/* List of Players */}
  <div className="mt-2">
    {players.map((player, index) => (
      <div key={index}>
        <b>Ticket {index + 1}:</b> {player}
      </div>
    ))}
  </div>
</div>;
