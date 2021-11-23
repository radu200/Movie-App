import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface IProps {
  id: string,
  children: React.ReactNode;
}

const Portal = ({ id, children }: IProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return ReactDOM.createPortal(
    children,
    document.getElementById(`${id}`)!
  );
};

export default Portal;