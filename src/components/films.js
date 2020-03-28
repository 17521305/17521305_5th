import React from 'react'

    const Films = ({ films }) => {
      return (
        <div>
          <center><h1>My best films of all time list</h1></center>
          <center><h4><i>Database of this list can be found at my <a href="https://my-json-server.typicode.com/17521305/17521305_5th/films">server</a>.</i></h4></center>
          {films.map((films) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{films.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{films.genre}</h6>
                <p class="card-text">{films.year}</p>
              </div>
            </div>
          ))}
          <center><h4><i>&copy; 2020 Trần Hoàng Long All Rights Reserved</i></h4></center>
        </div>
      )
    };

    export default Films