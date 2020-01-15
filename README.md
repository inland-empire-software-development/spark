# ✨   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                     **Welcome to   Spark** &nbsp;&nbsp;&nbsp;👋&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✨
<p align="center">
  <img
    alt="Spark Logo"
    src="https://raw.githubusercontent.com/inland-empire-software-development/spark/staging/public/images/spark.png"
    width="100px" >
</p>
<h1 align="center">
  Spark (LMS) App
</h1>
<p align="center">
  <a href="https://www.facebook.com/groups/IESoftwareDevelopment/">
    <img
      alt="Facebook logo"
      src="https://en.facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png"
      width="35px">
  </a>
  <a href="https://ie-sd.slack.com">
    <img
      alt="Slack logo"
      src="https://cdn-images-1.medium.com/max/1600/1*rncLjp_nxRi08Y8AKZCJVA.png"
      width="40px">
  </a>
</p>

<p align="center">
  Welcome to the web app repo for the Spark non-profit organization.
</p>
## 🙋 **We Welcome Contributions**
Spark is a nonprofit dedicated to growing the tech community in the Inland Empire. Our work involves helping community members gain the skills and tools necessary to find employment in the local tech industry.This is accomplished by utilizing a Learning management system. A learning management system (LMS) is a software application for the administration, documentation, tracking, reporting, and delivery of educational courses, training programs, or learning and development programs. The learning management system concept emerged directly from e-Learning. In pursuit of our mission, we strive to foster a climate of purposeful inclusion where members can feel safe, valued and given an opportunity to form meaningful connections with each other. To improve communities through free technical training and opportunities to gain experience through collaboration, networking and knowledge sharing.

## 👨‍💻 **Getting Started**

To get started, make sure to fill out the `.env` file with the appropriate information. Make sure that all prerequisites are met or application won't operate correctly.

This authentication system has a couple of features that might be useful to build on top of. This system is not meant to be used as-is aesthetically, it's meant to be used as a base for your project. You get a headstart with your authentication system, not the UI.

![auth screenshot](https://raw.githubusercontent.com/lloan/next-authenticate/master/public/images/authentication-screenshot.png)
## ⛑ **Getting Help**

If you have any questions, please ask on our [Slack](https://ie-sd.slack.com). We welcome everyone to our Slack, so don't be afraid to join! Have fun coding!

**<a href="https://bit.ly/2C0umfQ">Join link</a>**

## ⟲ **Prerequisites**

The minimum requirements to run this include:

- Redis
- MySQL
- Mail SMTP provider

## 🌐 **Installing**

A step by step series of examples that tell you how to get a development env running.

1. Update your `.env` file with the required information. Make sure the mysql and redis information is correct. The mail information is used for the mail system, make sure that is correct or you won't receive account creation verification email or password reset emails. You also need to create a JWT key and an API secret key.

.env example input
```
JWTKEY=Ds~4lq~}.?*f~Ql$42J%aR7%SoKxaN
SECRET=SklZvh3a0PwQev901A1zT23vlG
```

2. Install required packages

```
yarn install
```

3. Start local development environment.
```
yarn dev
```

## 💡 **Features**
- Pages for authentication (login, logout, reset), dashboard, welcome, reset password, confirmation, home and logged-out. HTTPOnly token (JWT) used.
- Protected pages which can be turned on and off by page.
- Redirection system based on user authentication state.
- Email system with very simple template system.
- SASS 7-1 Pattern based.
- Typescript based, makes development a breeze.
- UIKit notification system.
- Models directory and option for initial DB setup.
- ESLint and Stylelint for development.
- React Context handles state at the parent level.

## 🔨 **Built With**
* Next.js 9.0+ - A React framework
* MySQL
* Redis
* Typescript
* SASS
* UIKit - A clean CSS library
* Nodemailer
* Bcrypt
* Bluebird

For development:

* ESLint
* Stylelint
* Jest

## 🤝 **Contributing**

- If you want to contribute, please open up an issue.
- If you start working on a feature, branch off of the `master` branch as it should be the most up-to-date.

## 📓 **Authors**

* **👤 Lloan Alas** - *Initial work* - [IESD](https://github.com/inland-empire-software-development)
* **👤 Jacob Goodwin** - *IESD*
* **👤 Tony Nguyeni** - *IESD*
* **👤 Andy Mendez** - *IESD*
* **👤 David Huang** - *IESD*
* **👤 Katherine Orho** - *IESD*
* **👤 Katherine Orho** - *IESD*
* **👤 Greg** - *IESD*
* **👤 Raul Jauregui** - *IESD*
See also the list of [contributors](https://github.com/lloan/next-authenticate/graphs/contributors) who participated in this project.

## 🗒 **License**

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
