import React from 'react';
import { Box, Flex, Card, Image, Heading, Text } from 'rebass';

const CharacterList = ({ loading, entries }) =>
  console.log(entries) || (
    <Flex flexWrap="wrap">
      {loading
        ? 'LOADING'
        : entries.map(item => {
            return (
              <Card
                width={1 / 4}
                key={item.id}
                p={1}
                m={2}
                borderRadius={2}
                boxShadow="0 0 16px rgba(0, 0, 0, .25)"
              >
                <Image src={item.image} alt={item.name} />
                <Box px={2}>
                  <Heading as="h3">{item.name}</Heading>
                  <Box>
                    <Text fontSize={0}>{item.species}</Text>
                    <Text fontSize={0}>{item.origin.name}</Text>
                  </Box>
                </Box>
              </Card>
            );
          })}
    </Flex>
  );

export default CharacterList;
