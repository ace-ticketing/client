const LandingPage = ({ currentUser, tickets }) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <th>{ticket.title}</th>
        <th>{ticket.price}</th>
      </tr>
    );
  });
  return (
    <div>
      <h1>Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  console.log("hello");
  const { data } = await client.get("/api/tickets");
  return { tickets: data };
};

export default LandingPage;
