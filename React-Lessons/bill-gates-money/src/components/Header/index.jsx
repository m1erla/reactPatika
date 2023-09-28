import React from 'react'
import { Avatar, Container, WrapItem } from '@chakra-ui/react';

function Header() {
  return (
    <>
       <Container maxW ="container.xl"
       bg="blue.600"
       color="white"
       padding = {7}
       borderRadius="15"
       >
        <WrapItem
        style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 15,
        }}
        >
            <Avatar
            size="2x1"
            name="Bill Gates"
            src="https://neal.fun/spend/billgates.jpg"
            />
        </WrapItem>
         <h1 style={{ fontSize: 25 }}>
           <strong>Spend Bill's Money</strong>
         </h1>
       </Container>
       
    

    </>
  )
}

export default Header