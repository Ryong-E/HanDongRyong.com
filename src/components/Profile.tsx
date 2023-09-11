import { Box, Center, Flex, Text, Tooltip } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ReactNode } from 'react';

const linkList = [
  {
    link: 'https://github.com/Ryong-E',
    tooltip: 'Github',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        fill='currentColor'
        viewBox='-4 -4 72 72'
      >
        <path d='M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z'></path>
      </svg>
    ),
  },
  {
    link: 'https://www.instagram.com/ryong_11/',
    tooltip: 'Instagram',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        viewBox='-8 -8 64 64'
        fill='currentColor'
      >
        <path d='M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z'></path>
      </svg>
    ),
  },
  {
    link: 'https://www.linkedin.com/in/%EB%8F%99%EB%A3%A1-%ED%95%9C-9567a9228/',
    tooltip: 'LinkedIn',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        fill='currentColor'
        viewBox='-8 -8 42 42'
      >
        <path d='M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z'></path>
      </svg>
    ),
  },
  {
    link: 'mailto:think8867@gmail.com',
    tooltip: 'think8867@gmail.com',
    svg: (
      <svg
        width='100%'
        height='100%'
        viewBox='-4 -4 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    ),
  },
];
const IconBox = ({ children }: { children: ReactNode }) => {
  return (
    <Center
      width='32px'
      height='32px'
      transition='all 0.2s'
      borderRadius='50%'
      _hover={{ backgroundColor: 'gray.200', color: 'blue.500', stroke: 'blue.500' }}
    >
      {children}
    </Center>
  );
};

export const Profile = () => {
  const data = useStaticQuery(graphql`
    query profileQuery {
      imageSharp(fluid: { originalName: { eq: "profile.png" } }) {
        gatsbyImageData
      }
    }
  `);
  return (
    <Center marginTop='200px' display='flex' flexDirection='column' alignItems='center'>
      <Flex
        justifyContent='center'
        alignItems='end'
        width='120px'
        height='120px'
        position='relative'
        overflow='hidden'
        backgroundColor='blue.200'
        objectFit='cover'
        borderRadius='50%'
        boxShadow='0 0 0 5px #00346d'
        _dark={{
          backgroundColor: 'blue.200',
          boxShadow: '0 0 0 5px #ffffff',
        }}
      >
        <Box borderRadius='50%' transform={'translate(5px,30px)'} w='100px'>
          <GatsbyImage image={data.imageSharp.gatsbyImageData} alt='profile' />
        </Box>
      </Flex>
      <Box marginTop='20px'>
        <Text fontWeight='700' fontSize={'14px'}>
          한동룡
        </Text>
      </Box>

      <Flex gap='10px' marginTop='20px'>
        {linkList.map((link, index) => (
          <Tooltip key={index} label={link.tooltip} aria-label={link.tooltip} borderRadius='10px'>
            <a href={link.link} target='_blank'>
              <IconBox>{link.svg}</IconBox>
            </a>
          </Tooltip>
        ))}
      </Flex>
    </Center>
  );
};
