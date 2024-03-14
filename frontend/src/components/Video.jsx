import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDyteClient, DyteProvider } from '@dytesdk/react-web-core';
import { DyteMeeting } from '@dytesdk/react-ui-kit';

const Video = () => {

  //const navigate = useNavigate();
  const [meeting, initClient] = useDyteClient();

  useEffect(() => {
    initClient({
      authToken: '',
      default: {
        video: false,
        audio: false,
      },
    });
  }, []);

  return (
    <>
      <DyteProvider value={meeting}>
        <div className='container column-centered'>
          <DyteMeeting meeting={meeting} mode="fill" showSetupScreen={false} />
        </div>
        <div className='control-buttons'>
          <button 
            type='button' 
            //onClick={() => navigate()}
          >
            Previous
          </button>
          <button type='button'>Finish</button>
        </div>
      </DyteProvider>
    </>
  )
}

export default Video