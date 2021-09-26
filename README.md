<p align="center">
   <br/>
   <a href="https://wwww.simplecode.app" target="_blank"><h1 align="center">SimpleCode</h1></a>
   <h3 align="center">SmartTable.js</h3>
   <p align="center">light weight bootstrap smart table</p>
   <p align="center">
   Open Source.
   </p>
   <p align="center" style="align: center; margin-bottom: 100px;">
      <a href="https://www.npmtrends.com/react-next-table">
        <img src="https://img.shields.io/npm/dm/react-next-table" alt="Downloads" />
      </a>
      <a href="https://github.com/a-simplecode/react-next-table/stargazers">
        <img src="https://img.shields.io/github/stars/a-simplecode/react-next-table" alt="Github Stars" />
      </a>
      <a href="https://www.npmjs.com/package/react-next-table">
        <img src="https://img.shields.io/github/v/release/a-simplecode/react-next-table?label=latest" alt="Github Stable Release" />
      </a>
      <img src="https://img.shields.io/github/v/release/a-simplecode/react-next-table?include_prereleases&label=prerelease&sort=semver" alt="Github Prelease" />
   </p>
</p>

## Visit [simplecode.app](https://www.simplecode.app) for docs, guides, API and more!

## Overview

SmartTable.js is a complete open source solution for [React.js](https://reactjs.org) applications.

## Getting Started

```
npm install --save react-next-table
Or
yarn add react-next-table
```

You also need to install Bootstrap package.


```
npm install --save bootstrap
Or
yarn add bootstrap
```

This component will be upgraded and updated regularly for better use, in the smallest package with a simple smart set of codes.
## Features

### Flexible and easy to use

- Based on Bootstrap for css styling and classes.
- Designed to work with any react project and any react framework like [NextJs](https://nextjs.org)
- Compatible in all browsers like (chrome, safari, firefox, opera...)
- Supports sorting columns.
- Supports Custom columns.
- Supports search.
- Supports pagination if an api url added for better SEO and user experience.
- Supports external data by props data and internal data by adding the api url.

## Example

### Add bootstrap import to app.js

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

### Add React Component

```javascript
import SmartTable from "react-next-table";

const headCells = [
  {
    id: "email",
    numeric: false,
    label: "Email",
    width: 200,
  },
  {
    id: "name",
    numeric: false,
    label: "Name",
    width: 150,
  },
  {
    id: "phone",
    numeric: false,
    label: "Phone",
    width: 100,
  },
  {
    id: "subject",
    numeric: false,
    label: "Subject",
    width: 300,
  },
  {
    id: "message",
    numeric: false,
    label: "Message",
    width: 700,
  },
];

const data = [
  {
    _id: "6144e83a966145976c75cdfe",
    email: "minagerges123@gmail.com",
    name: "Mina",
    phone: "+96170345114",
    subject: "test",
    message: "ahlannn",
    date: "2021-09-17 19:10:50",
  },
  {
    _id: "61439914086a4f4e9f9d87cd",
    email: "amineamine1996@gmail.com",
    name: "amine amine",
    phone: "+96176466341",
    subject: "12121",
    message: "121212121212121",
    date: "2021-09-16 22:20:52",
  },
  {
    _id: "61439887086a4f4e9f9d87cc",
    email: "as@a.com",
    name: "as",
    phone: "+96176466341",
    subject: "as",
    message: "as",
    date: "2021-09-16 22:18:31",
  },
  {
    _id: "6143985d086a4f4e9f9d87cb",
    email: "amineamine19961996@gmail.com",
    name: "amine amine",
    phone: "+96176466341",
    subject: "1234",
    message: "sdsdsd",
    date: "2021-09-16 22:17:49",
  },
  {
    _id: "614397edcbfc69177da008c8",
    email: "amine@amine.com",
    name: "amine",
    phone: "+334343439393993",
    subject: "1234",
    message: "3434",
    date: "2021-09-16 22:15:57",
  },
  {
    _id: "6143b810d713e67dfca4985c",
    email: "dominique.amine@gmail.com",
    name: "Dominique",
    phone: "+96181304686",
    subject: "Dev ",
    message: "Ohmaga",
    date: "2021-09-16 21:33:04",
  },
  {
    _id: "61439b2f0b93c171aa1cf475",
    email: "amineamine19961996@gmail.com",
    name: "Jean Claude Samaha Bartender",
    phone: "+96170492931",
    subject: "cv application",
    message: "hello amine this a test email ",
    date: "2021-09-16 19:29:51",
  },
  {
    _id: "6117aeca1e925fd9dbc2bc6d",
    email: "amineamine19961996@gmail.com",
    name: "amine amine",
    phone: "+96176466341",
    subject: "1234",
    message: "wwww",
    date: "2021-08-14 14:53:46",
  },
  {
    _id: "61141f32cbfa7dbd8dba189f",
    email: "amineamine19961996@gmail.com",
    name: "amine amine",
    phone: "+96176466341",
    subject: "aa",
    message: "23232",
    date: "2021-08-11 22:04:18",
  },
  {
    _id: "61141e57cbfa7dbd8dba189e",
    email: "amineamine19961996@gmail.com",
    name: "amine amine",
    phone: "+96176466341",
    subject: "qw",
    message: "qw",
    date: "2021-08-11 22:00:39",
  },
];

export default function Exemple() {
  return (
    <SmartTable
      title="Emails"
      data={data}
      headCells={headCells}
      // url="/api/admin/emails"
      // searchDebounceTime={800}
      // noPagination
    />
  );
}

```
## License

ISC
