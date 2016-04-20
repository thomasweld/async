// Card Template
function card (user) {
  return `
    <div class="card">

      <div class="image" style="background-image: url('${user.picture.large}');  background-size: cover">

      </div>

      <div class="content">
        <div class="name">${user.name.first} ${user.name.last}</div>
        <div class="email">${user.email}</div>
        <div class="address">
          ${user.location.street} <br />
          ${user.location.city}, ${user.location.state} ${user.location.postcode}
        </div>
        <div class="phone">${user.phone}</div>
        <div class="social">${user.id.value}</div>
      </div>

    </div>

  `;
}

export default card;
