# Sidebar

## Storybook

Make sure to use the storybook "knobs" to toggle the sidebar. Also see actions to view the paths emitted when clicking on the menu items.

## Usage

This React component displays an [Off-canvas](https://getuikit.com/docs/offcanvas) component containing [Nav](https://getuikit.com/docs/nav) UIkit component.

The component accepts the following properties to modify its content and behavior.

### Accepted Props
An explantion of the props are provided here. All props are typed and examples of provided props are included in Sidebar.stories.tsx.

#### menuItems

Accepts an array of navigation items. Each menu item contains the following properties.
  * icon: string - The full name of the [font-awesome icon](https://fontawesome.com/icons?from=io) to be used including the icon set.
  * label: string - The label displayed in the sidebar.
  * path: string - The path emitted in onNavigate if this item is clicked. If this item has subItems (see below), navigation is disabled for this item and enabled only for subItems.
  * subItems: A list of items which can be expanded under this main menu item. If included, the main item will expand and close to toggle the display of these items. These subItems include the following properties:
    * label: string - The label for this submenu item
    * path: string - The path emitted in onNavigate when this item is clicked. 

#### accountMenuItems

This accepts the same properties as menu items. However, the these items will be included in an accounts section beneath the main menu items.

#### isOpen

A boolean value used to toggle the [Off-canvas](https://getuikit.com/docs/offcanvas) visibility. This allows the menu visibility to be controlled (for example on mobile)

#### closeButtonScreenSize

Accepts one of four string values: "s" | "m" | "l" | "xl". This setting selects the minimum screen size for displaying a close button at the top right of the Sidebar which will emit onMenuClose (see below) when clicked. The sizes correspond to UIkit breakpoints.

#### onNavigate

A function that will receive the navigation path of an item clicked. It an item contains subItems, clicking it will toggle subItems instead of calling onNavigate. Clicking the subItems will call onNavigate.

#### onMenuClosed

Called when the menu close button is clicked (see cloceButtonScreenSize)


