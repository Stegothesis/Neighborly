# Neighborly
> A neighborhood recommendation app that connects users with communities across the U.S. with a customizable review and rating system. Geared towards individuals moving to new neighborhoods, Neighborly immerses the user in local communities by providing raw statistics and data as well as subjective user reviews of neighborhoods large and small, famous and obscure to help the user find a home that best fits their lifestyle.

## Team
  - __Product Owner__: Renata Maraj
  - __Scrum Master__: Michael Chiang
  - __Development Team Members__: Bruce Graham, Brian Hassett

## User Experience

> Type in a city and state to view the list of neighborhoods pertaining to the area
> Click on a neighborhood to view
> View the selected neighborhood with map, photos, user reviews, and objective data
> Leave reviews with customizable categories
> Enforce the Neighborly reputation system with the upvote and downvote options

Search for any city across the U.S. to view a detailed list of neighborhoods. Once a neighborhood is selected, the user is immersed in the local community and is provided with a map riddled with pinned attractions and amenetities in a thousand mile radius, recent photos of the neighborhood, and raw data such as average household income, average home price, average age, and commute times. Have an opinion? A customizable and intricate user review and rating system is set in place so people can give their input on every and any aspect of a neighborhood's quality and nature.


## Requirements
  - React v15.4.2
  - Redux v3.6.0
  - Node v6.9.4
  - Express v4.14.0
  - Postgres v6.1.2
  - Sequelize v3.27.0
  - Webpack v2.2.1

## Development

Our goals
 - To make the user feel immersed by informing with real data and observe other individual perspectives on neighborhoods
 - To provide an abundance of API data to ensure that the user is informed
 - To establish a system that keeps the app 'neighborly' and keeps users accountable for their behavior

Neighborly was built with React/Redux, Node/Expres, and Postgres. Our team paired React with Redux in order to establish clean state management and modular front-end containers and components. On the back-end, Node, Express, Axios, and Request handled quick asynchronous parallel API calls to provide a high quality user experience. We used Postgres for the app's potential capacity for a high volume environment

### Installing Dependencies

From within the root directory:

```
npm install
webpack --w
```

### API Data
  - Google Maps, Google Photos, Google Places APIs were used for the map, photos of selected neighborhoods, attractions, and ameneties
  - Zillow API was used for home values and demographic statistics
  - Walk Score API was used for walkability and commute scores

### API Keys
```
const zillowApiKey = 'YOUR ZILLOW API KEY';
const walkScoreApiKey = 'YOUR WALK SCORE API KEY';
const googleMapsApiKey = 'YOUR GOOGLE MAPS API KEY';
const googlePhotoApiKey = 'YOUR GOOGLE PHOTOS API KEY';
```

### Road map


## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines


## Etc
