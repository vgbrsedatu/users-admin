/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `AvatarImage` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

// » IMPORT THIRD PARTIES MODULES
import Avatar from 'react-avatar-image-cropper';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const icon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" fill="#464646" r="4" />
    <path
      d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z"
      fill="#464646"
    />
  </svg>
);

const actions = [
  <button type="button" title="cancelar" key={0}>
    <i className="material-icons">close</i>
  </button>,
  <button type="button" title="salvar" key={1}>
    <i className="material-icons">save</i>
  </button>,
];

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Image` component.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.image - The `src` source to img html Element.
 * @param {() => void} props.toogle - A `function` to toogle view on `AvatarImage` component.
 * @returns {JSX.Element} The `MinimizeButton` components.
 */
const Image = ({ image, toogle }) => (
  <React.Fragment key="profile">
    <img alt="user profile" src={image} />
    <button
      type="button"
      className="btn btn--primary"
      onClick={() => {
        toogle();
      }}
    >
      Actualizar Foto
    </button>
  </React.Fragment>
);

Image.propTypes = {
  image: PropTypes.string.isRequired,
  toogle: PropTypes.func.isRequired,
};

/**
 * The `AvatarImage` component.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.image - The `src` source to img html Element.
 * @param {string} props.onSave - A `function` to save the image to Firebase storage.
 * @returns {JSX.Element} The `MinimizeButton` components.
 */
const AvatarImage = props => {
  const { image, onSave } = props;
  const [onCropper, setOnCropper] = useState(false);
  const style = { width: '250px', height: '250px', margin: 'auto' };

  const apply = file => {
    // handle the blob file you want
    // such as get the image src
    const url = URL.createObjectURL(file);
    onSave(url);
    setOnCropper(false);
  };

  const toogle = () => {
    setOnCropper(true);
  };

  const cancel = () => {
    setOnCropper(false);
  };

  return (
    <React.Fragment key="profile">
      {!onCropper ? (
        <Image image={image} toogle={toogle} />
      ) : (
        <Avatar
          apply={apply}
          icon={icon}
          actions={actions}
          cancel={cancel}
          className="profile__crooper"
          rootStyle={style}
        />
      )}
    </React.Fragment>
  );
};

AvatarImage.propTypes = {
  image: PropTypes.string,
  onSave: PropTypes.func.isRequired,
};

AvatarImage.defaultProps = {
  image: '/assets/images/svg/default.svg',
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default AvatarImage;