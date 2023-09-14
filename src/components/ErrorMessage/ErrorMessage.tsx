import { Alert, AlertTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CSSProperties, FC, useEffect, useState } from 'react';

type ErrorMessageProps = {
  message?: string;
  style?: CSSProperties;
};

const ErrorMessage: FC<ErrorMessageProps> = ({
  message,
  style
}) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(!!message);
  }, [message]);

  if(!showError) {
    return null;
  }

  return (
    <Alert
      severity="error"
      sx={style}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            setShowError(false);
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
    >
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
  );
};

export { ErrorMessage };