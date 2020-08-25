import React from 'react';
import { Header, Message,Image} from "semantic-ui-react";


export const PageOne = () => {
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> Welcome </Header>
                <p>Bella Italia</p>
                <Image className= "welcome-img"src="https://res.cloudinary.com/cantando/image/upload/c_fill,e_improve,h_650,w_1400/v1598336515/hand-painted-walls-a_pjd7k0.jpg" size='xlarge' wrapped />
            </Message>
        </>
    )
}

export default PageOne;
