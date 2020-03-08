import React from 'react';
import Phone from './Phone';
import Box from './Box';

export default function Container() {
  return (
    <div className='container'>
      <div className='wrapper side'>
        <div className='name-app-wrapper'>
          <div className='name-app-label'>Features</div>
        </div>
        <div className='feature-wrapper'>
          <Box name="Article" />
          <Box name="Videos" />
          <Box name="Banner" />
          <Box name="Article" />
          <Box name="Videos" />
          <Box name="Banner" />
          <Box name="Article" />
          <Box name="Videos" />
          <Box name="Banner" />
          <Box name="Article" />
          <Box name="Videos" />
          <Box name="Banner" />
        </div>
      </div>
      <div className='wrapper'>
        <div className='name-app-wrapper'>
          <div className='name-app-label'>Application's Name</div>
          <input className='name-app' placeholder="Your Application's Name, e.g SuperApp" />
        </div>
        <div className='phone-wrapper'>
          <Phone/>
        </div>
        {/* <div className='button-wrapper'>
          <center>
            <div className="button">
              Build
            </div>
          </center>
        </div> */}
      </div>
      <div className='wrapper'>

      </div>
    </div>
  );
}
