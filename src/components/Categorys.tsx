import { Badge, Box, Heading, Text } from '@chakra-ui/react';
import { CATEGORY_TANSLATE } from 'constants/title';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { convertTitle } from 'utils/convertTitle';

const Categorys = ({
  currentCategory,
  postAmount,
}: {
  currentCategory: string;
  postAmount: number;
}) => {
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
      display='flex'
      flexDirection='column'
      alignItems='center'
      gap='40px'
      width={{ sm: '100%', md: '70%' }}
    >
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        gap='10px'
      >
        <Heading fontFamily={'ChosunGu'} fontSize={{ sm: '36px', md: '60px' }} fontWeight={700}>
          {currentCategory === '' ? 'ALL POSTS' : convertTitle(currentCategory)}
        </Heading>
        <Badge fontSize={{ sm: '14px', md: '16px' }}>{postAmount} Posts</Badge>
      </Box>
      <Box
        as='nav'
        width={{ sm: '100%', md: '70%' }}
        display='flex'
        gap={{ sm: '10px', md: '20px' }}
        flexWrap={'wrap'}
        justifyContent='center'
        alignItems='center'
      >
        <UnderLineLink link={''} isSelected={currentCategory === ''} />
        {data.allMdx.group.map((tag: any) => (
          <UnderLineLink link={tag.fieldValue} isSelected={tag.fieldValue === currentCategory} />
        ))}
      </Box>
    </Box>
  );
};

const UnderLineLink = ({ link, isSelected }: { link: string; isSelected: boolean }) => {
  return (
    <Link to={`/${link}`}>
      <Text
        position='relative'
        _after={{
          position: 'absolute',
          content: '""',
          height: '1px',
          bottom: '-1px',
          left: '0',
          width: '100%',
          bg: 'black',
          transition: 'transform 0.2s ease-out',
          transformOrigin: 'bottom right',
          transform: isSelected ? 'scaleX(1)' : 'scaleX(0)',
        }}
        fontSize={{ sm: '14px', md: '16px' }}
        _dark={{
          _after: {
            bg: 'white',
          },
        }}
        _hover={{
          _after: {
            transform: 'scaleX(1)',
            transformOrigin: 'bottom left',
          },
        }}
      >
        {link === '' ? 'All' : CATEGORY_TANSLATE[link]}
      </Text>
    </Link>
  );
};
export default Categorys;
