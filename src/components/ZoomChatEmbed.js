import { useEffect } from 'react';

const ZoomChatEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('data-apikey', 'TU_API_KEY');
    script.src = 'https://us01ccistatic.zoom.us/us01cci/web-sdk/chat-client.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ZoomChatEmbed;