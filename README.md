
<p align="center">
<a href="https://github.com/Parki-Zone/server-side/">
    <img alt="build" src="https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge">
  </a>
   <a href="https://github.com/Parki-Zone/client-side/">
    <img alt="build" src="https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge">
  </a>
  
  <a href="#Contributing">
    <img alt="contributiond" src="https://img.shields.io/badge/constributions-welcome-orange?style=for-the-badge">
  </a>
  <a href="https://github.com/Parki-Zone/client-side/blob/main/LICENSE">
    <img alt="License" src="https://img.shields.io/badge/Licence-MIT-blue?style=for-the-badge">
  </a>
</p>

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Parki-Zone/client-side">
    <img src="logo.png" alt="Logo" width="150" height="150">
  </a>

  <h1 align="center" >ParkiZone</h1>

  <p align="center">
    Search for parking  ? Reserve your spot
    <br />
  </p>
  <p align="center">
  <a href="">
    <img alt="Download on the App Store" title="App Store" src="http://i.imgur.com/0n2zqHD.png" width="140">
  </a>

  <a href="">
    <img alt="Get it on Google Play" title="Google Play" src="http://i.imgur.com/mtGRPuM.png" width="140">
  </a>
</p>
<p align="center">
    <br />
    <a href="#REST-API">REST API</a>
    ·
    <a href="https://github.com/Parki-Zone/server-side/issues">Report Bug</a>
    ·
    <a href="https://github.com/Parki-Zone/client-side/issues">Request Feature</a>
  </p>
</p>




<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#Features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#REST-API">REST API</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
PARKIZONE is Mobile Application for Drivers Community , Users can search , reserve and delete their reservation In spots 
<br>
Home Screen Here


### Features
 A few of the things you can do with PARKIZONE:
 
  * Searching for parkings
  * Reserve your spot from the nearest parking with time and day
  * Delete or modify your reservation 😄

### Built With

* [React Native](https://reactnative.dev)
* [Node JS](https://nodejs.org)
* [Express JS](https://expressjs.com)
* [Sequelize](https://www.sequelize.com)
* 


## Getting Started

### Prerequisites

PARKIZONE Uses Npm For Client Side Application and Server Side .
* [npm](https://nodejs.org/en/)
  ```sh
  npm install npm@latest -g
  ```
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Parki-Zone/server-side.git
   git clone https://github.com/Parki-Zone/client-side.git
   ```
2. Run server Side
    ```sh
     npm run start
     ```

3. Run PARKIZONE Application
    ```sh
      cd client
    ```

    ```sh
      npm install
    ```

    ```sh
      npm run expo
    ```



## Usage
Pictures For Applications Here





## Roadmap
Future Features Here




## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/PARKIZONEFeature`)
3. Commit your Changes (`git commit -m 'Add some PARKIZONEFeature'`)
4. Push to the Branch (`git push origin feature/PARKIZONEFeature`)
5. Open a Pull Request

## REST API
Documentation for REST calls: [REST API](./REST.md)

## Contact

CodeBusters Team  - gastonloukil@gmail.com

Project Link: [https://github.com/Parki-Zone/client-side](https://github.com/Parki-Zone/client-side)


## License

PARKIZONE is made available under the <a href="https://github.com/Parki-Zone/client-side/blob/main/LICENSE">MIT</a>

## Atelier API
The different data services for this api are
1. Client
2. Orders
3. Parkings

### Use of Parameters :
In an HTTP POST, GET, DELETE or PUT request, the parameters are not sent along with the URI, but in the request body. Parameters noted for each route below follow this standard. 

## Client API
### Create a user  
Add a new user to the database.
 ```sh
 POST '/user/create'
 ```
 Query Parameters
  <table>
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
    <tr>
            <td>UserId</td>
            <td>INTEGER</td>
            <td><code>Automatically associate an ID for the user that's being added</code></td>
        </tr>
        <tr>
            <td>Username</td>
            <td>STRING</td>
            <td><code>Username for the user that's being added</code></td>
        </tr>
        <tr>
            <td>Email</td>
            <td>STRING</td>
            <td><code>Email for the user that's being added</code></td>
        </tr>
         <tr>
            <td>Password</td>
            <td>STRING</td>
            <td><code>Password for the user that's being added</code></td>
        </tr>
    </tbody>
  </table>

### Login a user
User can access his account using his Email and Password
 ```sh
 POST '/login'
 ```
 Query Parameters
  <table>
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <tr>
            <td>Email</td>
            <td>STRING</td>
            <td><code>Email of the user that's going to be compared to the one saved on the db </code></td>
        </tr>
         <tr>
            <td>Password</td>
            <td>STRING</td>
            <td><code>Password of the user that's going to be compared to the hashed one on db </code></td>
        </tr>
    </tbody>
  </table>

  ### Delete a user
  The admin can delete the user
 ```sh
 DELETE '/delete/:id'
 ```
<table>
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <tr>
            <td>UserId</td>
            <td>INTEGER</td>
            <td><code>Required UserId of the user that's going to be deleted</code></td>
        </tr>
    </tbody>
  </table>

  ### Update a user
  User will be able to update his profile. 
 ```sh
 PUT '/Profile/:id'
 ```
<table>
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <tr>
            <td>UserId</td>
            <td>INTEGER</td>
            <td><code>Required UserId of the user that's going to be deleted</code></td>
        </tr>
        <tr>
        <tr>
            <td>Username</td>
            <td>STRING</td>
            <td><code>Required UserId of the user that's going to be deleted</code></td>
        </tr>
    </tbody>
  </table>

## Order API

### Create an Order  
Add a new Order to the database.
 ```sh
 POST '/order/create'
 ```
 Query Parameters
  <table>
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
    <tr>
            <td>OrderId</td>
            <td>INTEGER</td>
            <td><code>ID of the order</code></td>
        </tr>
          <tr>
            <td>UserId</td>
            <td>INTEGER</td>
            <td><code>ID of the user that passed the order</code></td>
        </tr>
    <tr>
            <td>Date</td>
            <td>STRING</td>
            <td><code>The data of the passed order</code></td>
        </tr>
        <tr>
            <td>Hours</td>
            <td>STRING</td>
            <td><code>The hour of the passed order</code></td>
        </tr>
    </tbody>
  </table>

  Response
   ```sh
 Status: 200 OK
 ```

### Create an Order  
Add a new Order to the database.
 ```sh
 GET '/orders'
 ```
  Response
   ```sh
 Status: 200 OK
 ```
 Result
   ```sh
 [
    {
        "orderId": 1,
        "user_id": 1,
        "date": "11/12/2021",
        "hour": "17:15pm",
        "createdAt": "2021-05-07T21:52:48.000Z",
        "updatedAt": "2021-05-07T21:52:48.000Z"
    },
    {
        "orderId": 2,
        "user_id": 2,
        "date": "Tomorrow",
        "hour": null,
        "createdAt": "2021-05-08T00:20:41.000Z",
        "updatedAt": "2021-05-08T00:20:41.000Z"
    },
    {
        "orderId": 3,
        "user_id": 1,
        "date": "11/12/2021",
        "hour": "18:15pm",
        "createdAt": "2021-05-08T00:21:46.000Z",
        "updatedAt": "2021-05-08T00:21:46.000Z"
    }
]
 ```