"use client";
import { CustomChat, FacebookProvider } from 'react-facebook';

const FacebookMsg = () => {
  return (
    <FacebookProvider appId='339311762467931' chatSupport>
        <CustomChat pageId='' minimized={true}/>
        </FacebookProvider>
  );
}

export default FacebookMsg;
