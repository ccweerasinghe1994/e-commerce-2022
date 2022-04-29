- [let's create a create a new project using vite](#lets-create-a-create-a-new-project-using-vite)
  - [create project](#create-project)
  - [clean up the project](#clean-up-the-project)
  - [job of a react developer](#job-of-a-react-developer)
  - [new folder structure for our app](#new-folder-structure-for-our-app)
    - [current folder structure](#current-folder-structure)

## let's create a create a new project using vite

### create project

```bash
$ npm create vite@latest
```

the default project folder structure is as follows:

![folder structure](./../img/1.png)

to run the application

```bash
$ cd e-commerce
$ npm run dev
```

### clean up the project

clear the `App.css` file

and `App.tsx` file

```tsx
import './App.css';

function App() {
  return <div className="App">Hello</div>;
}

export default App;
```

let's create a `homepage.component.tsx` file

```tsx
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Hats</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">Sneakers</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Jackets</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Women</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Men</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
```

output

![](../img/2.png)

let's add `Sass` to our project
add sass as a dev dependency

```bash
npm add -D sass
```

let's create a `homepage.styles.scss` file

```scss
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
}

.directory-menu {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid black;
}

.menu-item {
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;

    .title {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }
}
```

output

![](../img/3.png)

### job of a react developer

1. decide on components
2. decide the state and where it lives
3. what changes when state changes

### new folder structure for our app

1. create a `pages` folder.
2. create a `components` folder.

#### current folder structure

```
|-- src
    |-- components
        |-- menu-item
            |-- menu-item.component.tsx
            |-- menu-item.styles.scss
        |-- directory
            |-- directory.component.tsx
            |-- directory.styles.scss

    |-- pages
        |--homepage
            homepage.component.tsx
            homepage.styles.scss


```

let's create a `homepage.component.tsx` file

```tsx
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';
const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
```

let's style the `homepage.styles.scss` file

```scss
.homepage{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
}
```


let's create a `directory.component.tsx` file

```tsx
import { useState } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

interface SectionData {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string;
}

const sectionsData: SectionData[] = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: 'shop/hats',
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
    linkUrl: 'shop/jackets',
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: 'shop/sneakers',
  },
  {
    title: 'women',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    id: 4,
    linkUrl: 'shop/women',
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens',
  },
];

const Directory = () => {
  const [sections, setSections] = useState(sectionsData);
  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Directory;
```


let's create a `directory.styles.scss` file

```scss
.directory-menu {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
```

let's create a `menu-item.component.tsx` file

```tsx
import { FC } from 'react';
import './menu-item.styles.scss';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

const MenuItem: FC<MenuItemProps> = ({ title, imageUrl, size }) => {
  return (
    <div
      className={`menu-item ${size}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;

```
let's style the `menu-item.styles.scss` file

```scss
.menu-item {
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    background-position: center;
    background-size: cover;


    &.large{
        height: 380px;
    }
    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    .content {
        height: 90px;
        padding: 0 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;

        .title {
            font-weight: bold;
            margin-bottom: 6px;
            font-size: 22px;
            color: #4a4a4a;
        }

        .subtitle {
            font-weight: lighter;
            font-size: 16px;
        }

    }
}
```

output
![](../img/4.png)