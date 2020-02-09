/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR_VENETIAN_RED, COLOR_WHITE } from '../../../styles/variables';

const StyledPreview = styled.section`
  position: relative;
`;

const PreviewImage = styled.img.attrs(({ imageUrl, caption }) => ({
  alt: caption,
  src: imageUrl,
}))`
  --width: 145px;
  --height: 125px;

  width: calc(var(--width) * 1.5);
  height: calc(var(--height) * 1.5);
`;

const Tag = styled.div`
  position: absolute;
  left: 0.25rem;
  top: 0.5rem;
  color: ${COLOR_VENETIAN_RED};
  background: ${COLOR_WHITE};
  padding: 0.5rem 1rem;
  font-weight: bold;
  z-index: 1;
`;

export function Preview({ imageUrl, caption, tag }) {
  return (
    <StyledPreview>
      <PreviewImage
        imageUrl={imageUrl}
        caption={caption}
        data-testid="preview-image"
      />
      <Tag data-testid="tag">{tag}</Tag>
    </StyledPreview>
  );
}

Preview.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
