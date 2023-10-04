import type { Schema, Attribute } from '@strapi/strapi';

export interface RestaurantInfoOpeningHours extends Schema.Component {
  collectionName: 'components_restaurant_info_opening_hours';
  info: {
    displayName: 'Opening Hours';
    icon: 'alien';
  };
  attributes: {
    Hours: Attribute.String;
    Days: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'restaurant-info.opening-hours': RestaurantInfoOpeningHours;
    }
  }
}
