// WrapperComponent.jsx
import { sendGTMEvent } from '@next/third-parties/google'
import { ReactNode } from 'react';


interface WrapperComponentProps {
    children: ReactNode;
    eventType: string;
    eventValue: string;
  }

  const WrapperComponent: React.FC<WrapperComponentProps> = ({ children, eventType, eventValue }) => {
    const handleClick = () => {
      sendGTMEvent({ event: eventType, value: eventValue });
    };
  
    return <div onClick={handleClick}>{children}</div>;
  };
  
  export default WrapperComponent;
