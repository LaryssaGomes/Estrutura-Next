import React from 'react';
import Text from "@src/components/Text/Text";
import Box from '@src/components/Box/Box';
import Icon from '@src/components/Icon/Icon';
import Image from "@src/components/Image/Image";
import { useTheme } from '@src/theme/ThemeProvider';
import Button from '@src/components/Button/Button';

interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({ children }) {
  const theme = useTheme();
  return (
    <Box
    styleSheet={{
      backgroundColor: theme.colors.neutral.x000,
      marginTop: '-228px',
      width: '100%',
      maxWidth: '683px',
      borderRadius: '8px',
      paddingVertical: '40px',
      paddingHorizontal: '32px',
    }}
  >
    {children}
  </Box>
  )
}

Feed.Header = () => {
  const theme = useTheme();
  return (
    <Box 
    styleSheet={{
      borderBottom: `1px solid ${theme.colors.neutral.x200}`,
      paddingBottom: '24px',
      marginBottom: '24px',
    }}>
      <Box 
      styleSheet={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '16px',
        marginBottom: '16px'
      }}>
      <Image
          styleSheet={{
            width: { xs: '100px', md: '128px' },
            height: { xs: '100px', md: '128px' },
            borderRadius: '100%',
          }}
          src="https://github.com/laryssagomes.png"
          alt="Imagem de perfil do Laryssa Gomes"
        />
        <Box
          styleSheet={{
            justifyContent: 'space-between',
          }}
        >
          <Box styleSheet={{flex: 1, justifyContent: 'space-between', display: {xs: 'none', md: 'flex'}}}>
            <Button fullWidth colorVariant="primary" size="xl" href="/">Newsletter</Button>
            <Button fullWidth colorVariant="neutral" size="xl"  href="/">Buy me a coffee</Button>
          </Box>
     
        </Box>
      </Box>
      <Text tag="h1" variant='heading4'>
        Laryssa Gomes
      </Text>
    </Box>
  )
}

Feed.Posts = () => {
  return (
    <Box>
      <Text>
        Feed Posts
      </Text>
    </Box>
  )
}