import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionsVideoSection extends Schema.Component {
  collectionName: 'components_sections_video_sections';
  info: {
    displayName: 'VideoSection';
  };
  attributes: {
    SectionTitle: Attribute.Text;
    SectionDescription: Attribute.Text;
    ButtonText: Attribute.String;
    ButtonUrl: Attribute.String;
    OpenInNewTab: Attribute.Boolean;
    VideoList: Attribute.Component<'content.video-component', true>;
  };
}

export interface SectionsTestimonialSection extends Schema.Component {
  collectionName: 'components_sections_testimonial_sections';
  info: {
    displayName: 'TestimonialSection';
    description: '';
  };
  attributes: {
    SectionTitle: Attribute.Text;
    SectionDescription: Attribute.Text;
    Testimonials: Attribute.Component<'content.tesitmonial', true>;
  };
}

export interface SectionsSpeakUsSection extends Schema.Component {
  collectionName: 'components_sections_speak_us_sections';
  info: {
    displayName: 'SpeakUsSection';
  };
  attributes: {
    SectionTitle: Attribute.Text;
    ButtonText: Attribute.String;
    ButtonLink: Attribute.String;
    OpenInNewTab: Attribute.Boolean;
  };
}

export interface SectionsSocialSection extends Schema.Component {
  collectionName: 'components_sections_social_sections';
  info: {
    displayName: 'SocialSection';
  };
  attributes: {
    SectionTitle: Attribute.Text;
    SectionDescription: Attribute.Text;
    SocialLinks: Attribute.Component<'content.link-tag', true>;
  };
}

export interface SectionsSectionComponent extends Schema.Component {
  collectionName: 'components_content_section_components';
  info: {
    displayName: 'JishiDifferenceSection';
    description: '';
  };
  attributes: {
    SectionTitle: Attribute.Text;
    SectionDescription: Attribute.Text;
    IconList: Attribute.Component<'content.icon-widget', true>;
    SeeJishiIAction: Attribute.Component<'content.link-tag'>;
  };
}

export interface SectionsJishiIndustrySection extends Schema.Component {
  collectionName: 'components_sections_jishi_industry_sections';
  info: {
    displayName: 'JishiIndustrySection';
    description: '';
  };
  attributes: {
    SectionTitle: Attribute.Text;
    TabList: Attribute.Component<'content.icon-widget', true>;
  };
}

export interface SectionsBuildWithJishi extends Schema.Component {
  collectionName: 'components_sections_build_with_jishis';
  info: {
    displayName: 'BuildWithJishi';
    description: '';
  };
  attributes: {
    SectionTitle: Attribute.Text;
    SectionDescription: Attribute.Text;
    ButtonText: Attribute.String;
    ButtonUrl: Attribute.String;
    OpenInNewTab: Attribute.Boolean;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    MobileImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsBannerSection extends Schema.Component {
  collectionName: 'components_sections_banner_sections';
  info: {
    displayName: 'BannerSection';
  };
  attributes: {
    BannerTitle: Attribute.Text;
    BannerSubtitle: Attribute.Text;
    BannerImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    BannerButton: Attribute.Component<'content.link-tag'>;
    GiveJishiShotText: Attribute.String;
  };
}

export interface SectionsArticleSection extends Schema.Component {
  collectionName: 'components_sections_article_sections';
  info: {
    displayName: 'ArticleSection';
  };
  attributes: {
    SectionTitle: Attribute.Text;
    SectionDescription: Attribute.Text;
    ArticleList: Attribute.Component<'content.article', true>;
  };
}

export interface SectionsAboutJishi extends Schema.Component {
  collectionName: 'components_sections_about_jishis';
  info: {
    displayName: 'AboutJishi';
  };
  attributes: {
    SectionTitle: Attribute.Text;
    SectionSubTitle: Attribute.Text;
    SectionDescription: Attribute.Text;
    BottomSectionTitle: Attribute.Text;
    ListItems: Attribute.Component<'content.content-widget', true>;
  };
}

export interface ContentVideoComponent extends Schema.Component {
  collectionName: 'components_content_video_components';
  info: {
    displayName: 'VideoComponent';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    BgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    OpenInNewTab: Attribute.Boolean;
    VideoUrl: Attribute.String;
  };
}

export interface ContentTesitmonial extends Schema.Component {
  collectionName: 'components_content_tesitmonials';
  info: {
    displayName: 'Tesitmonial';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Name: Attribute.String;
    Position: Attribute.String;
  };
}

export interface ContentSeo extends Schema.Component {
  collectionName: 'components_content_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    MetaTitle: Attribute.Text;
    MetaDescription: Attribute.Text;
    MetaImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    KeyWords: Attribute.Text;
    MetaRobots: Attribute.Text;
    CanonicalURL: Attribute.String;
  };
}

export interface ContentLinkTag extends Schema.Component {
  collectionName: 'components_content_link_tags';
  info: {
    displayName: 'LinkTag';
    description: '';
  };
  attributes: {
    LinkText: Attribute.String;
    LinkUrl: Attribute.String;
    OpenInNewTab: Attribute.Boolean;
    LinkIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContentIconWidget extends Schema.Component {
  collectionName: 'components_content_icon_widgets';
  info: {
    displayName: 'icon-widget';
    description: '';
  };
  attributes: {
    Title: Attribute.Text;
    Description: Attribute.Text;
    Icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    WidgetId: Attribute.String;
    ButtonText: Attribute.String;
    ButtonUrl: Attribute.String;
    OpenInNewTab: Attribute.Boolean;
  };
}

export interface ContentContentWidget extends Schema.Component {
  collectionName: 'components_content_content_widgets';
  info: {
    displayName: 'content-widget';
  };
  attributes: {
    Title: Attribute.Text;
    Description: Attribute.Text;
    buttonText: Attribute.String;
    buttonUrl: Attribute.String;
  };
}

export interface ContentArticle extends Schema.Component {
  collectionName: 'components_content_articles';
  info: {
    displayName: 'Article';
    description: '';
  };
  attributes: {
    Date: Attribute.String;
    Title: Attribute.String;
    Description: Attribute.Text;
    ButtonText: Attribute.String;
    ButtonUrl: Attribute.String;
    OpenInNewTab: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sections.video-section': SectionsVideoSection;
      'sections.testimonial-section': SectionsTestimonialSection;
      'sections.speak-us-section': SectionsSpeakUsSection;
      'sections.social-section': SectionsSocialSection;
      'sections.section-component': SectionsSectionComponent;
      'sections.jishi-industry-section': SectionsJishiIndustrySection;
      'sections.build-with-jishi': SectionsBuildWithJishi;
      'sections.banner-section': SectionsBannerSection;
      'sections.article-section': SectionsArticleSection;
      'sections.about-jishi': SectionsAboutJishi;
      'content.video-component': ContentVideoComponent;
      'content.tesitmonial': ContentTesitmonial;
      'content.seo': ContentSeo;
      'content.link-tag': ContentLinkTag;
      'content.icon-widget': ContentIconWidget;
      'content.content-widget': ContentContentWidget;
      'content.article': ContentArticle;
    }
  }
}
