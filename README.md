<!-- PROJECT SHIELDS -->
<!--
*** This template uses markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

# Modals for React: Library enabling to easily create modal screen components in React

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url]

<!-- ABOUT THE PROJECT -->

## About The Project

[![Modals for React screenshot][product-screenshot]](#)

This library was realized during my training as a javascript/react developer.
It enables to create modal windows in React applications.

### Built With

- HTML, CSS, Javascript
- React
- Git
- VS Code

<!-- GETTING STARTED -->

## Getting Started

To use this library follow these simple steps.

### Prerequisites

- Git
- Npm
- A react project

### Installation

1. Install the library in your React project

```sh
npm install modals-for-react
```

2. Import the library in the page you want to create a modal

```js
import { Modal } from "modals-for-react";
```

3. Insert a Modal component where you want in your React page

```js
function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} showClose>
          <p>Content you want to display in the modal</p>
        </Modal>
      )}
    </>
  );
}
```

<!-- USAGE EXAMPLES -->

## Usage

Here are the properties of the Modal component. You can change them to modify the behaviour of the modal.

- isOpen (required): A boolean to indicate whether the modal is open or closed.
- onRequestClose (required): A function to execute when the user requests to close the modal.
- closeText: The text for the close button (default: "x").
- closeClass: A custom CSS class for the close button (default: none).
- showClose: A boolean to indicate whether the close button should be displayed (default: true).
- fadeDuration: The duration of the opacity animation in milliseconds (default: 200).
- fadeDelay: The delay before the opacity animation starts, as a proportion of fadeDuration (default: 0.5, which means 50%. 2.0 would mean 200%).

<!-- CONTACT -->

## Contact

Christophe Simon: [personnal website](https://www.csimon.info)

Project Link: [https://github.com/csimon-web/modals-for-react](https://github.com/csimon-web/modals-for-react)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- This readme version is a customized version of this [github repository](https://github.com/NicolasBrondin/basic-readme-template) by NicolasBrondin

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/csimon-web/modals-for-react.svg?style=flat-square
[contributors-url]: https://github.com/csimon-web/modals-for-react/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/csimon-web/modals-for-react.svg?style=flat-square
[forks-url]: https://github.com/csimon-web/modals-for-react/network/members
[stars-shield]: https://img.shields.io/github/stars/csimon-web/modals-for-react.svg?style=flat-square
[stars-url]: https://github.com/csimon-web/modals-for-react/stargazers
[issues-shield]: https://img.shields.io/github/issues/csimon-web/modals-for-react.svg?style=flat-square
[issues-url]: https://github.com/csimon-web/modals-for-react/issues
[product-screenshot]: docs/screenshot.jpg
