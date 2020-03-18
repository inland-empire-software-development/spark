import React from "react";

import ManageStudents from "./ManageStudents";
import {action} from "@storybook/addon-actions";

export default {
  title: 'ManageStudents',
};

export const coursesData = [
  {
    id: "1",
    code: "WEB101",
    name: "Intro to Web Developmment",
    students: [

    ],
  },
  {
    id: "2",
    code: "WEB102",
    name: "Intermediate Web Developmment",
    students: [

    ],
  },
  {
    id: "3",
    code: "CS101",
    name: "CS Fundamentals in Python",
    students: [

    ],
  },
  {
    id: "4",
    code: "GD101",
    name: "Graphic Design Fundamentals",
    students: [

    ],
  },
];

const actionsData = {
  onManageUser: (id: string) => action(`onManageUser(id: ${id})`),
  onViewUser: (id: string) => action(`onViewUser(id: ${id})`),
  onDeleteUser: (id: string) => action(`onDeleteUser(id: ${id})`),
};

export const DefaultManageStudents = () => (
  <ManageStudents
    courses={coursesData}
    {...actionsData}
  />
);
