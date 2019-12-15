import React from 'react';

const CreateServer = () => {

  return(
    <div className='add-server-container'>
      <header className='create-server-title'>
        <p>Create your server</p>
      </header>

      <header className='create-server-blurb'>
        By creating the spot, you run the game.
        Hold it down, keep the spot crackin',
        and put your city on.  
      </header>

      <main className='create-server-input-container'>
        <label className='create-server-label'>
          <p>Server name</p>
          <input
            className='create-server-input'
            type="text"
            placeholder="Enter a server name"/>
        </label>

        <div>
          <button className='create-server-preview'>
            preview
          </button>
        </div>
      </main>

      <div className='create-server-footer-container'>
        <div className='create-server-footer'>
          <div className='create-server-back'>
            Back
          </div>

          <div className='create-server-button'>
            Create
          </div>
        </div>
      </div>

    </div>
  );

};

export default CreateServer;