import React from "react";

import ManageStudents from "./ManageStudents";
import {action} from "@storybook/addon-actions";

export default {
  title: 'ManageStudents',
};

// used to populate cource data
const studentData = [
  {
    id: "1",
    imageUri: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg",
    name: "Ana De Armas",
    email: "why@benaffleck.com",
    status: "Active",
  },
  {
    id: "2",
    imageUri: "https://images-na.ssl-images-amazon.com/images/M/MV5BOWViYjUzOWMtMzRkZi00MjNkLTk4M2ItMTVkMDg5MzE2ZDYyXkEyXkFqcGdeQXVyODQwNjM3NDA@._V1_UY256_CR36,0,172,256_AL_.jpg",
    name: "Adam Driver",
    email: "causing@fear.darkside.gov",
    status: "Inactive",
  },
  {
    id: "3",
    imageUri: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_UY256_CR15,0,172,256_AL_.jpg",
    name: "Ryan Gosling",
    email: "ryan@cityofstars.com",
    status: "Inactive",
  },
  {
    id: "4",
    imageUri: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyNzE5OTkzMV5BMl5BanBnXkFtZTgwNzM4ODAzMjE@._V1_UY256_CR1,0,172,256_AL_.jpg",
    name: "Sophie Turner",
    email: "missedthewhole@gotthing.co.uk",
    status: "Dragons or something",
  },
  {
    id: "5",
    imageUri: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1.._UX172_CR0,0,172,256_AL_.jpg",
    name: "Emma Friggin' Stone",
    email: "emmastone@hollywoodelite.com",
    status: "Singing better than gosling",
  },
  {
    id: "6",
    imageUri: "https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_UX172_CR0,0,172,256_AL_.jpg",
    name: "Michael B. Jordan",
    email: "qb1@fridaynightlights.com",
    status: "Tossing TD's",
  },
  {
    id: "7",
    imageUri: "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYyNjg1OTU1M15BMl5BanBnXkFtZTgwNzYyNTkzMDI@._V1_UX172_CR0,0,172,256_AL_.jpg",
    name: "Danai Gurira",
    email: "wakandaforever@hidden.com",
    status: "Hiding in Wakanda",
  },
];

const coursesData = [
  {
    id: "1",
    code: "WEB101",
    name: "Intro to Web Developmment",
    students: studentData.slice(0, 4),
  },
  {
    id: "2",
    code: "WEB102",
    name: "Intermediate Web Developmment",
    students: studentData.slice(2, 5),
  },
  {
    id: "3",
    code: "CS101",
    name: "CS Fundamentals in Python",
    students: [studentData[3], studentData[6]],
  },
  {
    id: "4",
    code: "GD101",
    name: "Graphic Design Fundamentals",
    students: [studentData[5], studentData[0]],
  },
];


const actionsData = {
  onManageUser: action('onManageUser'),
  onViewUser: action('onViewUser'),
  onDeleteUsers: action('onDeleteUsers'),
};

export const DefaultManageStudents = () => (
  <ManageStudents
    courses={coursesData}
    {...actionsData}
  />
);
