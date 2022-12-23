import React, { useState } from "react";
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setPeople] = useState ([
        {
            name: "steve jobs",
            url: "https://www.shutterstock.com/image-photo/istanbul-turkey-december-19-2017-wax-778315861"
        },
        {
            name: "mark zuckerberg",
            url: "https://www.qwant.com/?client=ext-chrome-sb&t=images&q=mark+zuckerberg&o=0%3A323F5E552BA1C1B54594BFF307D8CEF0D41CE71D"
        }
    ])
    return (
        <div>
            <h1>Tinder Cards</h1>
            {people.map(person => (
                <TinderCard>
                    <div 
                    style={{ backgroundImage: 'url(${person.url})'}}
                    className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCards;