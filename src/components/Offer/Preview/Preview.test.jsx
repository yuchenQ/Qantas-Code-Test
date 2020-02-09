/** @format */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Preview } from './Preview';

describe('Preview', () => {
  const data = {
    imageUrl: 'https://unsplash.it/145/125/?random',
    caption: 'Image of Courtyard by Marriott Sydney-North Ryde',
    tag: 'Exclusive Deal',
  };

  afterEach(cleanup);

  test('should show detail', () => {
    const { getByTestId } = render(
      <Preview
        imageUrl={data.imageUrl}
        caption={data.caption}
        tag={data.tag}
      />,
    );

    const previewImage = getByTestId('preview-image');
    expect(previewImage.alt).toBe(data.caption);
    expect(previewImage.src).toBe(data.imageUrl);

    expect(getByTestId('tag')).toHaveTextContent(data.tag);
  });
});
