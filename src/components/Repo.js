import { useState } from "react";

let saved;
export default function App() {
    const [repo, setRepo] = useState([]);

    let handleClick = () => {
        if (repo.length > 0) {
            setRepo([]);
            return;
        }
        if (saved) {
            setRepo(saved);
            return;
        }

        fetch("https://api.github.com/users/zhanseit/repos")
            .then((res) => res.json())
            .then((repo) => {
                saved = repo;
                setRepo(repo);
            });
    };

    return (
        <div className="App">
            <h1>Data</h1>
            <button onClick={handleClick}> Click me </button>
            {repo.length >= 0 ? (
                <ul>
                    {repo.map((data, index) => (
                        <li key={index}>{data.name}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}
;
