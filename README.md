<p align="center">
  <img
    alt="Spark Logo"
    src="https://raw.githubusercontent.com/inland-empire-software-development/spark/00031-readme-update/public/images/logo/spark-360x360.png"
    width="100px" >
</p>
<h1 align="center">
  <strong>Spark</strong><br>
  Learning Management System
</h1> 

## 👨‍💻 **Getting Started**

To get started, make sure to fill out the `.env` file with the appropriate information. Make sure that all prerequisites are met or application won't operate correctly.

The application has two parts to it - the application itself and storybook.

![auth screenshot](https://raw.githubusercontent.com/lloan/next-authenticate/master/public/images/authentication-screenshot.png)

## ⛑ **Getting Help**

Any questions or for support, please open up an issue and label it appropriately `support`. 

If you have any questions, please ask on our [Slack](https://ie-sd.slack.com). We welcome everyone to our Slack, so don't be afraid to join! Have fun coding!

**<a href="https://join.slack.com/t/ie-sd/shared_invite/enQtNTY1NDU3MTg4NDE5LWZiNjViZmQ0ODhmN2Q0NTg1NWQwZTcyODEyYmM4ZGYxNjZkM2UxYzU5OTZkMDY4YzljYjIwZGY4YmEyNzRlNjA">Join link</a>**

## ⟲ **Prerequisites**

The minimum requirements to run this include:

- Redis 
- MySQL
- Mail SMTP provider
- Yarn

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

4. Start storybook instance 
```
yarn storybook
```

## 💡 **Features**
- Pages for authentication (login, logout, reset), dashboard, welcome, reset password, confirmation, home and logged-out. HTTPOnly token (JWT) used.
- Protected pages which can be turned on and off by page.
- Redirection system based on user authentication state.
- Email system with very simple template system.
- SASS based.
- Typescript based, makes development a breeze.
- UIKit notification system.
- Models directory and option for initial DB setup.
- ESLint and Stylelint for development.
- React Context handles state at the parent level.
- Storybook integration for self documentation and design system generation.

## 🔨 **Built With**
* Next.js 
* MySQL
* Redis
* Typescript
* SASS
* UIKit - A clean CSS library
* Nodemailer
* Storybook

For development:

* ESLint
* Stylelint
* Jest

## 🤝 **Contributing**
Spark is an open source learning management system, designed and built for Spark, a digital skills initiative led by a southern California nonprofit, Inland Empire Software Development, Inc. We promote free and open source software. All contributions are welcome and we invite everyone to open issues for suggestions and/or bugs.

- If you want to contribute, please open up an issue.
- If you start working on a feature, branch off of the `master` branch as it should be the most up-to-date.

## 📓 **Development Team**

* **👤 Lloan Alas**  
* **👤 Jacob Goodwin** 
* **👤 Tony Nguyen** 
* **👤 Andy Mendez** 
* **👤 David Huang** 
* **👤 Katherine Orho**  
* **👤 Greg Rojas** 
* **👤 Raul Jauregui** 

See also the list of [contributors](https://github.com/lloan/next-authenticate/graphs/contributors) who participated in this project.

## 🗒 **License**

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
