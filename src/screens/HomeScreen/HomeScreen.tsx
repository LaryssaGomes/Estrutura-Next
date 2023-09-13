import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import theme from "@src/theme/theme";

export default function HomeScreen() {
    return (
        <Box tag="main"
        styleSheet={{
          backgroundColor: theme.colors.neutral.x000,
          flex: 1,
          alignItems: 'center',
        }}>
          <Menu/>
            <Background/>
            <Feed>
        <Feed.Header />
      </Feed>
            <Footer/>

        </Box>
    )
}