import React from 'react'
import { Container, Divider, SimpleGrid } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Product from "./Product";
import Reciept from "./Receipt";


function Table( { products }) {
    const items = useSelector(products.items);
    const budget = useSelector(products.budget);
    const basket = useSelector(products.basket);
    const editBudget = Number(budget).toLocaleString();

    console.log({budget});
  return (
    <div style={{ margin: 5 }}>
        <Container
        maxW="container.x1"
        bg="blue.600"
        color="white"
        borderRadius={10}
        position="-webkit-sticky"
        pos="sticky"
        top="0"
        zIndex={1}
        >
            <Divider />
            <h1 style={{ fontSize: 45 }}>
                <strong>
                    {
                        editBudget === "0"
                        ? "Congrats! You have done it."
                        : `${editBudget}`
                    }
                </strong>
            </h1>
        </Container>
        <Container>
            <SimpleGrid
            spacing={10}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
                {items.map((item) => (
                    <Product item={item} key={item.id}/>
                ))}
            </SimpleGrid>
            <Reciept />
        </Container>

    </div>
  )
}

export default Table