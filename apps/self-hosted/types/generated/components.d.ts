import type { Schema, Struct } from '@strapi/strapi';

export interface ContentHeadingBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_heading_blocks';
  info: {
    displayName: 'headingBlock';
  };
  attributes: {
    heading: Schema.Attribute.String;
    level: Schema.Attribute.Enumeration<['h2', 'h3', 'h4']>;
  };
}

export interface ContentQuoteBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_quote_blocks';
  info: {
    displayName: 'quoteBlock';
    icon: 'alien';
  };
  attributes: {
    Author: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface ContentTextblock extends Struct.ComponentSchema {
  collectionName: 'components_content_textblocks';
  info: {
    displayName: 'textblock';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface MediaImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_media_image_blocks';
  info: {
    displayName: 'imageBlock';
    icon: 'attachment';
  };
  attributes: {
    alt: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.heading-block': ContentHeadingBlock;
      'content.quote-block': ContentQuoteBlock;
      'content.textblock': ContentTextblock;
      'media.image-block': MediaImageBlock;
    }
  }
}
