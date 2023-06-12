import './App.css';

function Title({children}) {
    return (
        <h1>{children}</h1>
    );
}

function Text({children}) {
    return (
        <p>{children}</p>
    );
}

function List({children}) {
    return (
        <ul>{children}</ul>
    );
}

function ListItem({children}) {
    return (
        <li>{children}</li>
    );
}

function Link({link, newTab, children}) {
    return (
        <a href={link} target={newTab ? "_blank" : "_self"} rel="noreferrer">{children}</a>
    );
}

function App() {
  return (
    <>
        <Title>
            Necesito partir en componentes todo esto
        </Title>
        <Text>
            Para ello puedo usar React que me permitirá reutilizar todos esos
componentes. Para ello tengo que:
        </Text>
        <List>
            <ListItem>Observar el HTML</ListItem>
            <ListItem>Pensar en cómo puedo extraer cada parte en componentes</ListItem>
            <ListItem>Usarlos, o mejor dicho, reusarlos en React</ListItem>
        </List>
        <Link
            link="https://react.dev/"
            newTab={true}>
                React Docs
        </Link>
    </>
  );
}

export default App;
