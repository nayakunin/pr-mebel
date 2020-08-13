import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    opacity: '0',
    transition: 'opacity .5s ease-out',
  },
  root_loaded: {
    opacity: '1',
  },
});

export const LazyImage = ({
  src,
  alt,
  className,
  onLoad,
}) => {
  const classes = useStyles();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOnLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad();
  }, [onLoad]);

  return (
    <img
      src={src}
      alt={alt}
      className={cx(
        classes.root,
        {
          [classes.root_loaded]: isLoaded,
        },
        className,
      )}
      onLoad={handleOnLoad}
    />
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  onLoad: PropTypes.func,
};

LazyImage.defaultProps = {
  className: '',
  onLoad: () => ({}),
};
