import { Box, Tag } from '@chakra-ui/react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const Categorys = ({ currentCategory }: { currentCategory: string }) => {
  const data = useStaticQuery(graphql`
    query lists {
      allMdx {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  return (
    <Box
      as='nav'
      width={{ sm: '100%', md: '70%' }}
      display='flex'
      gap={{ sm: '5px', md: '20px' }}
      flexWrap={'wrap'}
      justifyContent='center'
    >
      <Link to='/'>
        <Tag
          height='30px'
          fontWeight='700'
          fontSize={{ sm: '14px', md: '16px' }}
          transition='0.2s'
          _dark={{
            color: 'white',
            _hover: { backgroundColor: currentCategory !== '' ? 'whiteAlpha.200' : '' },
          }}
          _hover={{
            backgroundColor: currentCategory !== '' ? 'blackAlpha.200' : '',
          }}
          colorScheme={'facebook'}
          variant={currentCategory === '' ? 'solid' : 'outline'}
        >
          All
        </Tag>
      </Link>
      {data.allMdx.group.map((tag: any) => (
        <Link to={`/${tag.fieldValue}`}>
          <Tag
            height='30px'
            transition='0.2s'
            fontSize={{ sm: '14px', md: '16px' }}
            _dark={{
              color: 'white',
              _hover: {
                backgroundColor: currentCategory !== tag.fieldValue ? 'whiteAlpha.200' : '',
              },
            }}
            _hover={{
              backgroundColor: currentCategory !== tag.fieldValue ? 'blackAlpha.200' : '',
            }}
            fontWeight='700'
            colorScheme={'facebook'}
            variant={currentCategory === tag.fieldValue ? 'solid' : 'outline'}
          >
            {tag.fieldValue}
          </Tag>
        </Link>
      ))}
    </Box>
  );
};

export default Categorys;
