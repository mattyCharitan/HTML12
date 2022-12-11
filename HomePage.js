import { useParams } from 'react-router-dom';
import { useRef } from 'react';

function HomePage() {
    const {name} = useParams();
    return (
        <div>
            <h1>hello {name}</h1>
        </div>
        
    );
}
export default HomePage;